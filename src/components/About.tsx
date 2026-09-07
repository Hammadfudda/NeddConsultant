import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/images/services/Group-1410104200-7.png';

const POINTS = [
  'Understand the business problem first',
  'Build around existing workflows',
  'Keep systems simple for the people using them',
  'Support the product after launch',
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 sm:rounded-3xl">
              <img src={aboutImage} alt="NEDD Consultant team" loading="lazy" className="w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur-md sm:-right-6 sm:rounded-2xl sm:p-5">
              <p className="font-display text-xl font-bold text-brand-600 sm:text-2xl">Business focused</p>
              <p className="mt-1 text-xs text-slate-500">Technology chosen for the job</p>
            </div>
            <div className="absolute -left-3 -top-3 hidden rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-lg backdrop-blur-md sm:block">
              <p className="font-display text-xl font-bold text-accent-600">Built to fit</p>
              <p className="mt-1 text-xs text-slate-500">Not forced into a template</p>
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-brand-600 sm:tracking-[0.25em]">Who We Are</p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A technology partner for businesses that need things to work better
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:mt-6 sm:text-base">
              NEDD Consultant works with businesses that have a clear operational problem but do not always know what the right technical solution should look like. We help define the problem, plan the system and build the software around the people who will actually use it.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              That can mean replacing a spreadsheet process, building an internal portal, connecting separate tools, creating a customer facing application or developing a focused SaaS product. The goal is not more technology. The goal is a better way to work.
            </p>

            <ul className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-2">
              {POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-700 sm:mt-9"
            >
              Talk About Your Requirements
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
