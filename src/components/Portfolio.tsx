import { useMemo, useState } from 'react';
import { PORTFOLIO_ITEMS, type PortfolioItem } from '../data';

const FILTERS = ['All', 'Website Design', 'Website Development', 'Logo Design', 'Mobile Application'] as const;
type FilterType = (typeof FILTERS)[number];

export default function Portfolio() {
  const [filter, setFilter] = useState<FilterType>('All');
  const [visible, setVisible] = useState(8);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(
    () => filter === 'All' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((item) => item.category === filter),
    [filter],
  );

  const visibleItems = filteredItems.slice(0, visible);

  return (
    <section className="relative py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Portfolio</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-5xl">A look at what we have built</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Filter the portfolio by category, then click any project image to view it in a larger preview.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setFilter(item);
                setVisible(8);
              }}
              className={`rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all ${
                filter === item
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block rounded-lg bg-black/45 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                  {item.category}
                </span>
              </div>
            </button>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="mt-10 text-center text-sm text-slate-500">
            No portfolio items match this category.
          </p>
        )}

        {visible < filteredItems.length && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisible((previous) => Math.min(previous + 8, filteredItems.length))}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:bg-blue-50"
            >
              Load more
            </button>
          </div>
        )}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-black/60 text-2xl leading-none text-white transition hover:bg-white/10"
              aria-label="Close preview"
            >
              ×
            </button>

            <img
              src={selectedItem.img}
              alt={selectedItem.title}
              className="max-h-[78vh] w-full bg-black object-contain"
            />

            <div className="p-5 text-white sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                {selectedItem.category}
              </p>
              {selectedItem.title && (
                <h3 className="mt-2 text-lg font-semibold capitalize">{selectedItem.title}</h3>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
