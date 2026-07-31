/**
 * Rasterizes the Open Graph share cards (`public/og/og-share{,-en}.png`) from
 * the read-only brand SVG.
 *
 * Why a script and not a committed binary edit: the card prints the live domain
 * and a localized headline, both of which drift. The brand kit under
 * `nexora-brand/` is the read-only source of truth, so the domain swap and the
 * EN translation happen here at raster time instead of forking the SVG. Rerun
 * with `npm run og` whenever `PRIMARY_DOMAIN` or the card copy changes.
 *
 * The domain is never written literally in this file — it comes from
 * `src/config/domain.mjs`, the same module `astro.config.mjs` reads, so the card
 * footer and the canonical URLs can never disagree.
 *
 * Note on typography: Space Grotesk / Inter are webfonts and are not installed
 * system-wide, so librsvg falls back to a monospace face. That fallback is what
 * the previously shipped cards used, so output stays visually consistent.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';
import { PRIMARY_DOMAIN } from '../src/config/domain.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE_SVG = path.join(ROOT, 'nexora-brand/social/og-share-card.svg');
const OUT_DIR = path.join(ROOT, 'public/og');

/** Domain string baked into the source brand SVG, replaced per render. */
const SVG_PLACEHOLDER_DOMAIN = 'nexora.studio';

/**
 * Per-locale card copy. `headTop` / `headLead` / `headAccent` reproduce the
 * two-line headline where only the last words carry the accent color; `sub` is
 * the service strip. Keys mirror the site's locales.
 */
const LOCALES = {
  es: {
    file: 'og-share.png',
    headTop: 'Software que tu',
    headLead: 'negocio ',
    headAccent: 'necesita',
    sub: 'Sitios · sistemas · apps a medida — Guayaquil, Ecuador',
  },
  en: {
    file: 'og-share-en.png',
    headTop: 'Software your',
    headLead: 'business ',
    headAccent: 'needs',
    sub: 'Websites · systems · custom apps — Guayaquil, Ecuador',
  },
};

/**
 * Escapes the five XML-significant characters so copy containing `&` or quotes
 * cannot break the SVG document it is injected into.
 * @param {string} value - Raw copy string.
 * @returns {string} XML-safe text.
 */
function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Applies one locale's copy and the live domain to the brand SVG markup.
 *
 * Targets the three text nodes by their exact source content rather than by
 * index, so a future edit that reorders the SVG fails loudly (see the assertion
 * in `render`) instead of silently producing a card with stale copy.
 *
 * @param {string} svg - Raw brand SVG markup.
 * @param {typeof LOCALES.es} locale - Copy set for the target locale.
 * @returns {string} Localized SVG markup ready to rasterize.
 */
function localizeSvg(svg, locale) {
  return svg
    .replace('>Software que tu<', `>${escapeXml(locale.headTop)}<`)
    .replace(
      '>negocio <tspan fill="#2563EB">necesita</tspan>.<',
      `>${escapeXml(locale.headLead)}<tspan fill="#2563EB">${escapeXml(locale.headAccent)}</tspan>.<`,
    )
    .replace(
      '>Sitios · sistemas · apps a medida — Guayaquil, Ecuador<',
      `>${escapeXml(locale.sub)}<`,
    )
    .replace(`>${SVG_PLACEHOLDER_DOMAIN}<`, `>${escapeXml(PRIMARY_DOMAIN)}<`);
}

/**
 * Renders both locale cards to `public/og/` at the 1200×630 Open Graph size.
 *
 * @returns {Promise<void>} Resolves once both PNGs are written.
 * @throws {Error} If a text node expected by `localizeSvg` is missing from the
 *   brand SVG, which would otherwise ship a card with the wrong copy or domain.
 */
async function render() {
  const svg = await readFile(SOURCE_SVG, 'utf8');

  for (const [lang, locale] of Object.entries(LOCALES)) {
    const localized = localizeSvg(svg, locale);

    if (localized.includes(SVG_PLACEHOLDER_DOMAIN) || !localized.includes(PRIMARY_DOMAIN)) {
      throw new Error(
        `[og] domain swap failed for "${lang}" — the brand SVG no longer contains ` +
          `">${SVG_PLACEHOLDER_DOMAIN}<". Update SVG_PLACEHOLDER_DOMAIN in this script.`,
      );
    }
    if (!localized.includes(escapeXml(locale.sub))) {
      throw new Error(`[og] headline/sub swap failed for "${lang}" — brand SVG copy changed.`);
    }

    const out = path.join(OUT_DIR, locale.file);
    await writeFile(out, await sharp(Buffer.from(localized)).resize(1200, 630).png().toBuffer());
    process.stdout.write(`[og] ${locale.file} → ${PRIMARY_DOMAIN}\n`);
  }
}

await render();
