import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#07111f] pt-20 text-white">
      <section className="border-b border-white/10 bg-[#091827] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">About NEDD Consultant</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            We start with the workflow, not the technology.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            NEDD Consultant helps businesses improve the way they present, operate and deliver work through practical digital solutions.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-[#091827] p-8">
            <h2 className="text-3xl font-bold">What we focus on</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              A good solution should remove friction, make information easier to understand and give the business more control.
            </p>
          </div>
          <div className="space-y-3">
            {[
              'Understand the real business problem before proposing a build',
              'Keep interfaces clear and easy for the people using them',
              'Build systems that can be maintained and expanded',
              'Communicate what is being built and why it matters',
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-300">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-400" />{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#091827] py-16 text-center">
        <h2 className="text-3xl font-bold">Have a process that needs improving?</h2>
        <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold">
          Talk to NEDD <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
