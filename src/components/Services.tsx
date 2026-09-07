import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data';

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-brand-600 sm:tracking-[0.25em]">Services</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-slate-950 sm:text-4xl lg:text-5xl">Technology that solves a real problem</h2>
          </div>
          <p className="max-w-md text-sm text-slate-600">
            We look at what is slowing the business down, then design the right system around the workflow instead of forcing the workflow into a template.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm sm:rounded-3xl ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? 'h-60 sm:h-96' : 'h-52 sm:h-72'}`}>
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{service.title}</h3>
                    <p className="mt-2 max-w-sm text-xs leading-relaxed text-white/70 sm:text-sm">{service.desc}</p>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-all group-hover:bg-brand-600 sm:h-11 sm:w-11">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
