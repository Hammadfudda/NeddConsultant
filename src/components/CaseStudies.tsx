import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data';

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const next = () => setActive((i) => (i + 1) % CASE_STUDIES.length);
  const prev = () => setActive((i) => (i - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);

  return (
    <section id="work" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <p className="font-display text-sm font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-brand-400">Case Studies</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-all hover:border-brand-400 hover:bg-brand-500 hover:text-ink-900 sm:h-11 sm:w-11"
              aria-label="Previous"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-all hover:border-brand-400 hover:bg-brand-500 hover:text-ink-900 sm:h-11 sm:w-11"
              aria-label="Next"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 sm:rounded-3xl">
            <img
              src={CASE_STUDIES[active].img}
              alt={CASE_STUDIES[active].title}
              className="h-80 w-full object-cover transition-opacity duration-500 sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <div className="flex flex-wrap gap-2">
                {CASE_STUDIES[active].tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="mt-3 font-display text-xl font-bold sm:mt-4 sm:text-3xl">{CASE_STUDIES[active].title}</h3>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {CASE_STUDIES.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`group flex items-center justify-between rounded-xl border p-3 text-left transition-all sm:rounded-2xl sm:p-4 ${
                  i === active
                    ? 'border-brand-400/40 bg-brand-500/10'
                    : 'border-white/10 bg-ink-800 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <img src={c.img} alt="" className="h-12 w-16 rounded-lg object-cover sm:h-14 sm:w-20" />
                  <div>
                    <h4 className="font-display text-sm font-semibold">{c.title}</h4>
                    <p className="text-xs text-white/50">{c.tags.join(' · ')}</p>
                  </div>
                </div>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all sm:h-9 sm:w-9 ${
                    i === active ? 'bg-brand-500 text-ink-900' : 'border border-white/15 text-white/70'
                  }`}
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
