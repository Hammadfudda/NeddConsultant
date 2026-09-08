import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ITEMS = [
  {
    q: 'What makes NEDD Consultant different?',
    a: 'We ask about the process before we talk about technology. Who touches it, where time actually gets lost, what gets typed twice into two different tools. The build comes after we understand that.',
  },
  {
    q: 'Can you work with our existing tools and processes?',
    a: "Usually, yes. We don't assume everything needs replacing. Sometimes the fix is connecting two tools that already work fine on their own, or rebuilding the one piece that's actually causing the problem.",
  },
  {
    q: 'Do you only build websites?',
    a: "No. Websites, web apps, internal tools, customer portals, mobile apps, workflow automation and small SaaS products. Which one makes sense depends entirely on what you're trying to fix.",
  },
  {
    q: 'What happens after the software is launched?',
    a: "Launch isn't the finish line. We stay on to fix what breaks, adjust what changes, and keep the system useful as your business grows past the version we first built.",
  },
];

export default function WhyUs() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative bg-slate-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-brand-600 sm:tracking-[0.25em]">
            Why NEDD
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-slate-950 sm:text-4xl lg:text-5xl">
            Questions people usually ask before they hire us
          </h2>
        </div>

        <div className="mt-10 space-y-3 sm:mt-12">
          {ITEMS.map((item, index) => (
            <div
              key={item.q}
              className={`overflow-hidden rounded-xl border bg-white transition-colors sm:rounded-2xl ${
                open === index ? 'border-brand-300 shadow-sm' : 'border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
              >
                <span className="font-display text-base font-semibold text-slate-950 sm:text-lg">
                  {item.q}
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 text-brand-600">
                  {open === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 text-sm leading-relaxed text-slate-600 sm:px-5 sm:pb-5">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
