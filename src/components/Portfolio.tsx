import { useMemo, useState } from 'react';
import { PORTFOLIO_ITEMS, type PortfolioItem } from '../data';

const FILTERS = ['All', 'Website Design', 'Website Development', 'Logo Design', 'Mobile Application'] as const;
type FilterType = (typeof FILTERS)[number];

export default function Portfolio() {
  const [filter, setFilter] = useState<FilterType>('All');
  const [visible, setVisible] = useState(6);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(
    () => filter === 'All' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((item) => item.category === filter),
    [filter],
  );

  const visibleItems = filteredItems.slice(0, visible);

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-brand-600 sm:tracking-[0.25em]">Selected Work</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-slate-950 sm:text-4xl lg:text-5xl">A look at what we have built</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600 sm:mt-5">
            A selection of website, development, brand and application work completed across different business needs.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => { setFilter(item); setVisible(6); }}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                filter === item
                  ? 'border-brand-600 bg-brand-600 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-left shadow-sm"
            >
              <img src={item.img} alt={item.title} loading="lazy" className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                {item.category}
              </div>
            </button>
          ))}
        </div>

        {filteredItems.length === 0 && <p className="mt-10 text-center text-sm text-slate-500">No portfolio items match this category.</p>}

        {visible < filteredItems.length && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisible((previous) => Math.min(previous + 6, filteredItems.length))}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-300 hover:bg-brand-50"
            >
              Load more
            </button>
          </div>
        )}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
            <button type="button" onClick={() => setSelectedItem(null)} className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 p-2 text-white transition hover:bg-white/10" aria-label="Close preview">×</button>
            <img src={selectedItem.img} alt={selectedItem.title} className="h-[70vh] w-full bg-black object-contain" />
            <div className="space-y-2 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-300">{selectedItem.category}</p>
              <p className="text-sm text-white/60">Click close to return to the gallery.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
