import { MARQUEE_IMAGES } from '../data';

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];
  return (
    <div className="flex overflow-hidden">
      <div className={`flex shrink-0 gap-4 sm:gap-5 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {items.map((src, index) => (
          <div
            key={index}
            className="relative h-36 w-52 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm sm:h-56 sm:w-80"
          >
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative space-y-4 overflow-hidden py-8 sm:space-y-5 sm:py-10">
      <Row />
      <Row reverse />
    </section>
  );
}
