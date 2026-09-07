import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICE_ITEMS } from '../data/serviceData';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#07111f] pt-20 text-white">
      <section className="border-b border-white/10 bg-[#091827] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">Services</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Choose the problem you need to solve.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Every service page explains the business problem, our approach, what you receive and the outcome we are trying to create.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {SERVICE_ITEMS.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#091827]">
              <img src={service.image} alt={service.title} className="aspect-[16/9] w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">{service.eyebrow}</p>
                <div className="mt-3 flex items-start justify-between gap-5">
                  <div>
                    <h2 className="text-2xl font-bold sm:text-3xl">{service.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{service.short}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-sky-400" />
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-rose-400/10 bg-rose-400/5 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-300">Problem</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{service.problem}</p>
                  </div>
                  <div className="rounded-2xl border border-sky-400/10 bg-sky-400/5 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300">Solution</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{service.solution}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <Link to="/leave-management-software" className="group overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-700 to-sky-600 lg:col-span-2">
            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">Our software product</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Leave Management Software</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85">
                  A complete leave workflow for employee requests, manager approvals, policies, live balances, HR administration and reporting.
                </p>
              </div>
              <div className="flex justify-end">
                <span className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700">
                  View Product <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
