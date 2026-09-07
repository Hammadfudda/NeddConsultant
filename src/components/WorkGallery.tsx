import { useMemo, useState } from 'react';
import workPlaceholder from '../assets/images/work/placeholder.svg';
import { WORK, type WorkCategory } from '../data';

const FILTERS: WorkCategory[] = ['All', 'Logo', 'Website', 'Mobile Application'];

export default function WorkGallery() {
  const [filter, setFilter] = useState<WorkCategory>('All');

  const items = useMemo(
    () => (filter === 'All' ? WORK : WORK.filter((w) => w.category === filter)),
    [filter],
  );

  const count = (cat: WorkCategory) =>
    cat === 'All' ? WORK.length : WORK.filter((w) => w.category === cat).length;

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-display text-sm font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-brand-400">
            Our Work
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-4xl lg:text-5xl">
            Explore the Portfolio
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/55 sm:mt-5">
            Filter by type to see logos, full website builds, or mobile app designs we&apos;ve crafted.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                filter === f
                  ? 'border-brand-400 bg-brand-500 text-ink-900'
                  : 'border-white/15 bg-ink-800 text-white/70 hover:border-brand-400/50 hover:text-white'
              }`}
            >
              {f}
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                  filter === f ? 'bg-ink-900/20 text-ink-900' : 'bg-white/10 text-white/60'
                }`}
              >
                {count(f)}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 sm:rounded-3xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = workPlaceholder;
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="inline-block rounded-full border border-brand-400/40 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-400">
                  {item.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold sm:text-xl">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {items.length === 0 && (
          <p className="mt-12 text-center text-sm text-white/50">
            No work in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
