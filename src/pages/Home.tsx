import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICE_ITEMS } from '../data/serviceData';

export default function Home() {
  return (
    <div className="bg-[#07111f] text-white">
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(14,165,233,0.18),transparent_34%),radial-gradient(circle_at_25%_25%,rgba(29,78,216,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:pb-28">
          <div>
            <div className="inline-flex items-center rounded-xl border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Software for how small businesses actually run
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
             We build what your business actually needs.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Websites, mobile apps and custom software designed around how your business actually works, not around a generic template.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold hover:bg-blue-500"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/leave-management-software"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold hover:bg-white/10"
              >
                View Our Software <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                ['We ask first', 'Discovery'],
                ['We build for you', 'Custom'],
                ['We stay after', 'Support'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-blue-600/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-blue-950/40">
              <img
                src={SERVICE_ITEMS[0].image}
                alt="NEDD technology workspace"
                className="aspect-[4/3] h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-2 p-5">
                {[
                  [Code2, 'Build'],
                  [Layers3, 'Integrate'],
                  [ShieldCheck, 'Support'],
                ].map(([Icon, label]) => {
                  const Comp = Icon as typeof Code2;
                  return (
                    <div
                      key={label as string}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-3 text-xs font-semibold backdrop-blur"
                    >
                      <Comp className="h-4 w-4 text-sky-400" />
                      {label as string}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#091827] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                Our services
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-5xl">
                Five services. One question we ask first: what's actually broken?
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-400">
              Every project starts with a specific problem, not a menu of features. Open a service to see the exact problem it solves.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_ITEMS.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className={`group overflow-hidden rounded-3xl border border-white/10 bg-slate-950 transition hover:-translate-y-1 hover:border-sky-400/30 ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`${index === 0 ? 'h-80' : 'h-60'} overflow-hidden`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                    {service.eyebrow}
                  </p>

                  <div className="mt-2 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                        {service.short}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-sky-400" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-700 to-sky-600">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                  NEDD Product
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                  We also built our own Leave Management Software
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-blue-50/90">
                  We got tired of chasing leave approvals over WhatsApp too. So we built one system for employees, managers and admin — balances, approvals and records, all in one place.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    'Live Granted / Used / Remaining balances',
                    'Manager approval workflows',
                    'Smart CSV employee import',
                    'Policies, reports and audit logs',
                  ].map((item) => (
                    <div key={item} className="flex gap-2 text-sm text-white">
                      <CheckCircle2 className="h-5 w-5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  to="/leave-management-software"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-blue-700"
                >
                  Explore the Product <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-3xl border border-white/20 bg-slate-950/20 p-4 backdrop-blur">
                <img
                  src={SERVICE_ITEMS[4].image}
                  alt="Business software dashboard workspace"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#091827] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Start with the problem
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-5xl">
            What's slowing your business down right now?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
            Tell us and we'll help you figure out if the answer is a website, an app, or something built from scratch.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold hover:bg-blue-500"
          >
            Discuss a Project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
