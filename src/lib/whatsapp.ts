/**
 * WhatsApp deep-link helpers.
 *
 * Why: the entire landing funnels to one action — start a prefilled WhatsApp
 * chat — so link composition lives in one place, used by both static Astro
 * (buttons) and the React islands (the quote form). The number comes from
 * `site.config.ts` (single source); copy/templates come from the content tree.
 *
 * Format per spec: `https://wa.me/<E164>?text=<urlencoded>` — E.164 without
 * `+`/spaces. The raw number is never rendered as scrapable text, only inside
 * the href.
 */

/**
 * Builds a `wa.me` deep-link with a URL-encoded prefilled message.
 * @param number - WhatsApp contact in E.164 without `+`/spaces.
 * @param text - human-readable message body (encoded here).
 * @returns the full `https://wa.me/...` URL.
 */
export function waLink(number: string, text: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Replaces `{token}` placeholders in a template with provided values.
 * Unknown tokens are left as-is; missing values render empty. Used for the
 * quote-form prefill (`{name}`, `{businessType}`, `{need}`).
 * @param template - string containing `{token}` placeholders.
 * @param values - map of token name → replacement.
 * @returns the interpolated string, trimmed of doubled whitespace.
 */
export function fillTemplate(template: string, values: Record<string, string>): string {
  return template
    .replace(/\{(\w+)\}/g, (_match, key: string) =>
      Object.prototype.hasOwnProperty.call(values, key) ? values[key] : `{${key}}`,
    )
    .replace(/\s{2,}/g, ' ')
    .trim();
}
