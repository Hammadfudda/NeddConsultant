import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { getService } from '../data/serviceData';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#07111f] px-4 pb-24 pt-40 text-center text-white">
        <h1 className="text-4xl font-bold">Service not found</h1>
        <Link to="/services" className="mt-6 inline-flex text-sky-400">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07111f] pt-20 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.15),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-sky-400"><ArrowLeft className="h-4 w-4" />All Services</Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">{service.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-6xl">{service.title}</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">{service.short}</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold hover:bg-blue-500">
              Discuss This Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
            <img src={service.image} alt={service.title} className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-rose-400/10 bg-rose-400/5 p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300">The problem</p>
            <h2 className="mt-3 text-2xl font-bold">What is getting in the way?</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{service.problem}</p>
          </div>
          <div className="rounded-3xl border border-sky-400/10 bg-sky-400/5 p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Our solution</p>
            <h2 className="mt-3 text-2xl font-bold">What we build instead</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{service.solution}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#091827] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">What you get</p>
            <h2 className="mt-3 text-3xl font-bold">Practical deliverables, not vague consulting.</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((item) => (
                <div key={item} className="flex gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-400" />{item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">Business outcomes</p>
            <h2 className="mt-3 text-3xl font-bold">What the work should improve.</h2>
            <div className="mt-7 space-y-3">
              {service.outcomes.map((item) => (
                <div key={item} className="flex gap-3 border-b border-white/10 pb-4 text-sm text-slate-300">
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-sky-400" />{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">How it works</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">A clear process from problem to launch.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-white/10 bg-[#091827] p-6">
                <span className="text-sm font-bold text-sky-400">0{i+1}</span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#091827] py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm text-sky-400">Need this kind of solution?</p>
            <h2 className="mt-2 text-3xl font-bold">Show us the current problem.</h2>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold hover:bg-blue-500">
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
