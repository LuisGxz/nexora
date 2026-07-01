/**
 * LanguageToggle — the persistent ES|EN switch island.
 *
 * What: a two-segment control showing the active locale; choosing the other
 * persists the choice (`storageKey` in localStorage) and navigates to that
 * locale's route. Why persistence matters: writing the choice is exactly what
 * the first-visit redirect script checks, so once a visitor picks a language
 * they are NEVER auto-redirected again. Hydrates `client:idle` (above the fold,
 * but not blocking first paint).
 *
 * Route-based by design: ES lives at `/`, EN at `/en/` (Phase 1), so switching
 * is a real navigation, not in-place copy swapping.
 */
import type { Locale } from '../content/types';

interface LanguageToggleProps {
  /** Currently rendered locale (drives the active segment). */
  locale: Locale;
  /** Root path for each locale (`/` and `/en/`). */
  esPath: string;
  enPath: string;
  /** localStorage key the first-visit script reads (`nexora_lang`). */
  storageKey: string;
  /** Accessible label for the control group. */
  label: string;
}

/**
 * Renders the ES|EN switch and handles persist-then-navigate.
 * @param props - active locale, per-locale paths, storage key and a11y label.
 * @returns the toggle element.
 */
export default function LanguageToggle({
  locale,
  esPath,
  enPath,
  storageKey,
  label,
}: LanguageToggleProps) {
  /** Persists the chosen locale, then navigates to its route. */
  const choose = (target: Locale, path: string) => {
    if (target === locale) return;
    try {
      localStorage.setItem(storageKey, target);
    } catch {
      /* storage unavailable (private mode) — navigation still applies the choice */
    }
    window.location.href = path;
  };

  const base = 'px-3 py-1 text-small font-semibold transition-colors rounded-full';
  const active = 'bg-blue-600 text-white';
  const idle = 'text-text-muted hover:text-text-primary';

  return (
    <div className="flex items-center rounded-full bg-background p-0.5" role="group" aria-label={label}>
      <button
        type="button"
        onClick={() => choose('es', esPath)}
        aria-current={locale === 'es' ? 'true' : undefined}
        className={`${base} ${locale === 'es' ? active : idle}`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => choose('en', enPath)}
        aria-current={locale === 'en' ? 'true' : undefined}
        className={`${base} ${locale === 'en' ? active : idle}`}
      >
        EN
      </button>
    </div>
  );
}
