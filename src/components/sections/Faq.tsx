/**
 * FAQ (section 08) — keyboard-accessible accordion island.
 *
 * What: renders the FAQ section (eyebrow, heading, a link to the contact section
 * for any other enquiry, and the disclosure list) with one panel open at a
 * time. Why a React island: the accordion needs client state; everything else on
 * the page stays static. It hydrates `client:visible` since it sits below the fold.
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
  /** Label + in-page href of the "another enquiry" link under the heading. */
  moreLabel: string;
  moreHref: string;
}

/**
 * Accordion section component.
 * @param props - section copy, items and the closing contact link.
 * @returns the full FAQ section element.
 */
export default function Faq({ eyebrow, heading, items, moreLabel, moreHref }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:px-6 lg:grid-cols-[minmax(0,25rem)_minmax(0,1fr)] lg:gap-9 lg:py-9">
        <div className="flex flex-col items-start gap-3">
          <p className="text-small font-semibold text-blue-800">{eyebrow}</p>
          <h2 className="font-display text-h2 text-text-primary md:text-h2-lg">{heading}</h2>
          <a
            href={moreHref}
            className="inline-flex min-h-[2.75rem] items-center text-small font-semibold text-blue-700 transition-colors duration-base ease-standard hover:text-blue-800"
          >
            {moreLabel}
          </a>
        </div>

        <ul className="flex flex-col self-start overflow-hidden rounded-lg border border-border bg-surface">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <li key={item.question} className="border-b border-border last:border-b-0">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex min-h-[4rem] w-full items-center justify-between gap-4 px-5 py-3 text-left font-display text-h4 text-text-primary transition-colors duration-base ease-standard hover:bg-background"
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-blue-700 transition-transform duration-base ${isOpen ? 'rotate-45' : ''}`}
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
      </div>
    </section>
  );
}
