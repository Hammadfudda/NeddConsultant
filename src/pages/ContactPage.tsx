import Contact from '../components/Contact';
import { SITE } from '../data';

export default function ContactPage() {
  return (
    <>
      <div className="pt-28 sm:pt-36"><Contact /></div>
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center sm:rounded-3xl sm:p-10">
          <h2 className="font-display text-xl font-bold text-slate-950 sm:text-2xl">Prefer email?</h2>
          <p className="mt-3 text-sm text-slate-600">Reach us directly at{' '}
            <a href={`mailto:${SITE.email}`} className="font-medium text-brand-600 hover:text-brand-700">{SITE.email}</a>
          </p>
        </div>
      </div>
    </>
  );
}
