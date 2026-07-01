/**
 * FAQ (section 08) — keyboard-accessible accordion island.
 *
 * What: renders the FAQ section (eyebrow, heading, disclosure list, and a
 * "another question?" WhatsApp on-ramp) with one panel open at a time. Why a
 * React island: the accordion needs client state; everything else on the page
 * stays static. It hydrates `client:visible` since it sits below the fold.
 *
 * A11y: each question is a real <button> (native Enter/Space) with
 * `aria-expanded` + `aria-controls`; the answer panel animates open/closed via a
 * `grid-template-rows` 0fr→1fr transition (height is unknown ahead of time) and,
 * while collapsed, is marked `inert` + `aria-hidden` so it leaves the tab order
 * and the a11y tree. Motion is suppressed under `prefers-reduced-motion`
 * (handled globally in `global.css`).
 */
import { useState } from 'react';
import type { FaqItem } from '../../content/types';

interface FaqProps {
  /** Eyebrow + heading copy for the section header. */
  eyebrow: string;
  heading: string;
  /** Question/answer pairs from the content tree. */
  items: FaqItem[];
  /** "Another question?" prompt + CTA label + composed wa.me href. */
  moreLabel: string;
  moreCtaLabel: string;
  moreHref: string;
}

/**
 * Accordion section component.
 * @param props - section copy, items and the closing WhatsApp CTA.
 * @returns the full FAQ section element.
 */
export default function Faq({
  eyebrow,
  heading,
  items,
  moreLabel,
  moreCtaLabel,
  moreHref,
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto flex max-w-3xl flex-col gap-7 px-4 py-9 md:px-6">
        <div className="flex flex-col gap-3">
          <p className="text-caption font-semibold uppercase tracking-widest text-blue">{eyebrow}</p>
          <h2 className="font-display text-h2 text-text-primary">{heading}</h2>
        </div>

        <ul className="flex flex-col gap-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <li
                key={item.question}
                className="overflow-hidden rounded-xl border border-border bg-surface"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-h4 text-text-primary transition-colors hover:bg-background"
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-blue transition-transform duration-base ${isOpen ? 'rotate-45' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-base ease-standard ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`px-5 pb-5 text-body text-text-muted transition-opacity duration-base ease-standard ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col items-start gap-3 rounded-2xl bg-navy-900 p-6 text-text-on-dark">
          <p className="font-display text-h4">{moreLabel}</p>
          <a
            href={moreHref}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-cta="whatsapp"
            data-analytics-source="faq"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-body font-semibold text-white transition-colors hover:bg-blue-700"
          >
            {moreCtaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
