import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#07111f] pt-20 text-white">
      <section className="border-b border-white/10 bg-[#091827] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">Selected work</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-6xl">Design and development work across digital products.</h1>
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {PORTFOLIO_ITEMS.slice(0, 18).map((item) => (
            <article key={item.id} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#091827]">
              <img src={item.img} alt={item.title} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="flex items-start justify-between gap-4 p-5">
                <div><p className="text-xs text-sky-400">{item.category}</p><h2 className="mt-1 text-sm font-semibold capitalize">{item.title}</h2></div>
                <ArrowUpRight className="h-4 w-4 text-sky-400" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
