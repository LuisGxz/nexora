/**
 * QuoteForm — the contact quote-request island.
 *
 * What: three fields (name / business type / need) that, on submit, compose a
 * prefilled WhatsApp message from `prefillTemplate` and open the `wa.me` chat.
 * Why an island with NO backend: the spec forbids servers/storage — the form
 * never POSTs; it only builds a deep-link from the typed values and hands the
 * lead off to WhatsApp already qualified. Hydrates `client:visible`.
 *
 * A11y: native <form> submit (Enter works), every input has a bound <label>,
 * required fields use the constraint API so empty submits are blocked natively.
 */
import { useState } from 'react';
import type { ContactForm } from '../content/types';
import { waLink, fillTemplate } from '../lib/whatsapp';
import { trackWhatsappCta } from '../lib/analytics';

interface QuoteFormProps {
  /** Field labels, placeholders and submit text from the content tree. */
  labels: ContactForm;
  /** Message template with `{name}`/`{businessType}`/`{need}` tokens. */
  template: string;
  /** WhatsApp E.164 number (no `+`/spaces). */
  number: string;
}

/**
 * Controlled quote form that opens a prefilled WhatsApp chat on submit.
 * @param props - labels, prefill template and target number.
 * @returns the form element.
 */
export default function QuoteForm({ labels, template, number }: QuoteFormProps) {
  const [name, setName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [need, setNeed] = useState('');


  const fieldClass =
    'rounded-lg border border-border bg-surface px-4 py-3 text-body text-text-primary placeholder:text-text-muted focus-visible:border-blue';

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const text = fillTemplate(template, { name, businessType, need });
        const lang = document.documentElement.lang === 'en' ? 'en' : 'es';
        trackWhatsappCta('quote_form', lang);
        window.open(waLink(number, text), '_blank', 'noopener,noreferrer');
      }}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="qf-name" className="text-small font-semibold text-text-on-dark">
          {labels.nameLabel}
        </label>
        <input
          id="qf-name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={labels.namePlaceholder}
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="qf-business" className="text-small font-semibold text-text-on-dark">
          {labels.businessTypeLabel}
        </label>
        <input
          id="qf-business"
          name="businessType"
          type="text"
          value={businessType}
          onChange={(event) => setBusinessType(event.target.value)}
          placeholder={labels.businessTypePlaceholder}
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="qf-need" className="text-small font-semibold text-text-on-dark">
          {labels.needLabel}
        </label>
        <textarea
          id="qf-need"
          name="need"
          required
          rows={3}
          value={need}
          onChange={(event) => setNeed(event.target.value)}
          placeholder={labels.needPlaceholder}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-body font-semibold text-navy-900 transition-colors hover:brightness-95"
      >
        {labels.submitLabel}
      </button>
    </form>
  );
}
