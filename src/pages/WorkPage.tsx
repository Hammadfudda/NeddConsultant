import Portfolio from '../components/Portfolio';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#07111f] pt-20 text-white">
      <section className="border-b border-white/10 bg-[#091827] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Selected Work
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Real design and development work from our portfolio.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Browse website design, website development, logo design and mobile application work. Use the filters below and open any project for a larger preview.
          </p>
        </div>
      </section>

      <div className="bg-white text-slate-950">
        <Portfolio />
      </div>
    </div>
  );
}
