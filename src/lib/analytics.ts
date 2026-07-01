/**
 * Analytics — the single `cta_whatsapp` conversion event, GA-gated.
 *
 * Why: the landing's one KPI is "started a WhatsApp conversation", so every
 * WhatsApp on-ramp reports a `cta_whatsapp` event carrying `source` (which CTA)
 * and `lang` (which market). Everything is a NO-OP unless a GA id is present
 * (`PUBLIC_GA_ID`), so dev builds and id-less deploys ship zero analytics JS and
 * never touch the network — protecting the performance budget. No secrets live
 * in the repo; the id comes from the environment at build.
 */
import type { Locale } from '../content/types';

/** Minimal shape of the global `gtag` we rely on (avoids a global.d.ts). */
type Gtag = (command: 'event', action: string, params: Record<string, unknown>) => void;

/**
 * Fires the `cta_whatsapp` event for a CTA. Safe to call anywhere: it is a
 * no-op during SSR and whenever GA isn't loaded (no id configured).
 * @param source - which CTA fired it (e.g. 'header', 'contact', 'quote_form').
 * @param lang - active locale, so events split by market.
 */
export function trackWhatsappCta(source: string, lang: Locale): void {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== 'function') return;
  gtag('event', 'cta_whatsapp', { source, lang });
}

/**
 * Builds the inline GA bootstrap: the standard gtag stub + config, plus a single
 * delegated click listener that fires `cta_whatsapp` for any element marked
 * `data-analytics-cta="whatsapp"` (reading `data-analytics-source` and the
 * document's `lang`). One listener covers every static anchor, so CTAs stay
 * plain server-rendered links with no per-component JS.
 *
 * Only emitted when an id exists (see `BaseLayout`), so it never runs id-less.
 * @param id - the GA measurement id (`G-XXXXXXX`).
 * @returns JS source to embed via `<script is:inline set:html={...}>`.
 */
export function gaBootstrapScript(id: string): string {
  const safeId = JSON.stringify(id);
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${safeId});document.addEventListener('click',function(e){var t=e.target.closest&&e.target.closest('[data-analytics-cta="whatsapp"]');if(!t)return;gtag('event','cta_whatsapp',{source:t.getAttribute('data-analytics-source')||'unknown',lang:document.documentElement.lang||'es'});});`;
}
