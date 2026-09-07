import { useEffect, useState } from 'react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((value) => (value + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[100px] sm:h-80 sm:w-80 sm:blur-[120px]" />
      </div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-brand-600 sm:tracking-[0.25em]">Client Feedback</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-slate-950 sm:text-4xl lg:text-5xl">What working with us feels like</h2>
        </div>

        <div className="relative mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:mt-12 sm:p-10">
          <div className="min-h-[220px] sm:min-h-[180px]">
            {TESTIMONIALS.map((testimonial, testimonialIndex) => (
              <blockquote
                key={testimonial.name}
                className={`absolute inset-x-6 top-6 transition-all duration-500 sm:inset-x-10 sm:top-10 ${
                  testimonialIndex === index ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
                }`}
              >
                <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-slate-700 sm:text-xl">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-5 text-center sm:mt-6">
                  <p className="font-display font-semibold text-brand-700">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2 sm:mt-10">
          {TESTIMONIALS.map((testimonial, testimonialIndex) => (
            <button
              key={testimonial.name}
              onClick={() => setIndex(testimonialIndex)}
              className={`h-2 rounded-full transition-all ${testimonialIndex === index ? 'w-8 bg-brand-600' : 'w-2 bg-slate-300'}`}
              aria-label={`Testimonial ${testimonialIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
