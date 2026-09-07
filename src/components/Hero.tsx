import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import heroVisual from '../assets/hero.png';

const BUSINESS_NEEDS = [
  'Custom Software',
  'Web Applications',
  'Process Automation',
  'System Integration',
  'IT Consulting',
];

const SOLUTIONS = [
  'Customer Portals',
  'Internal Systems',
  'Business Websites',
  'Mobile Apps',
  'SaaS Products',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl" />
        <div className="absolute right-[-120px] top-10 h-[420px] w-[420px] rounded-full bg-blue-200/35 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="animate-fade-up inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700">
              IT consulting built around real business needs
            </div>

            <p
              className="animate-fade-up mt-6 font-display text-xs font-medium uppercase tracking-[0.2em] text-brand-600 sm:text-sm sm:tracking-[0.3em]"
              style={{ animationDelay: '0.05s' }}
            >
              Practical technology. Clear business outcomes.
            </p>

            <h1
              className="animate-fade-up mt-4 font-display text-3xl font-bold leading-[1.08] text-slate-950 sm:text-5xl sm:leading-[1.05] lg:text-6xl xl:text-7xl"
              style={{ animationDelay: '0.1s' }}
            >
              Software built around the way your{' '}
              <span className="bg-gradient-to-r from-brand-700 via-brand-500 to-accent-500 bg-clip-text text-transparent">
                business actually works.
              </span>
            </h1>

            <p
              className="animate-fade-up mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:mt-7 sm:text-lg lg:mx-0"
              style={{ animationDelay: '0.15s' }}
            >
              NEDD Consultant helps businesses replace manual work, disconnected tools and inefficient processes with software that is easier to use, easier to manage and built for the job it needs to do.
            </p>

            <div
              className="animate-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start"
              style={{ animationDelay: '0.2s' }}
            >
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/20 sm:w-auto"
              >
                Discuss Your Project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-all hover:border-brand-300 hover:bg-brand-50 sm:w-auto"
              >
                See How We Can Help
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute inset-0 -z-10 scale-95 rounded-[3rem] bg-gradient-to-br from-blue-100/80 via-white to-brand-100/70 blur-2xl" />
            <img
              src={heroVisual}
              alt="Business software analytics dashboard illustration"
              className="relative z-10 mx-auto w-full max-w-[620px] object-contain drop-shadow-[0_30px_55px_rgba(37,99,235,0.18)]"
            />
          </div>
        </div>

        <div
          className="animate-fade-up mx-auto mt-14 max-w-5xl rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-xl shadow-slate-200/40 backdrop-blur-md sm:mt-16 sm:rounded-3xl sm:p-8"
          style={{ animationDelay: '0.25s' }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Common business needs</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {BUSINESS_NEEDS.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">What we build</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {SOLUTIONS.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:gap-0">
            <p className="text-xs text-slate-500">Start with the problem. Choose the technology after.</p>
            <Link to="/services" className="text-xs font-semibold text-brand-600 hover:text-brand-700">
              Explore our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
