import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-sky-50 p-8 text-center shadow-sm sm:rounded-3xl sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-brand-400/10 blur-[100px]" />
          </div>
          <h2 className="font-display text-2xl font-bold text-slate-950 sm:text-4xl lg:text-5xl">Still deciding if this is worth a conversation?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-base">
            You don't need a technical brief or a fixed idea of the solution. Describe the problem as you see it — we'll tell you honestly if it's something we can help with.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/20"
          >
            Discuss Your Requirements
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
