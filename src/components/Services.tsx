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
              <div className={`relative overflow-hidden ${index === 0 ? 'h-48 sm:h-64' : 'h-40 sm:h-52'}`}>
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-display text-xl font-semibold text-white sm:text-2xl">
                  {service.title}
                </h3>
              </div>

              <div className="space-y-3 p-5 sm:p-6">
                <div className="flex gap-2.5">
                  <span className="mt-0.5 shrink-0 rounded-full bg-red-500/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-red-300">
                    Problem
                  </span>
                  <p className="text-xs leading-relaxed text-white/70 sm:text-sm">{service.problem}</p>
                </div>
                <div className="flex gap-2.5">
                  <span className="mt-0.5 shrink-0 rounded-full bg-brand-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-300">
                    Solution
                  </span>
                  <p className="text-xs leading-relaxed text-white/90 sm:text-sm">{service.solution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}