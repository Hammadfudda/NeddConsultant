import { Mail, MapPin, Phone } from 'lucide-react';
import { SITE } from '../data';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#07111f] pt-20 text-white">
      <section className="border-b border-white/10 bg-[#091827] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">Contact</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">Tell us what is not working.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Share the workflow, website or software problem you want to improve. We can start from the business problem and work toward the right solution.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="space-y-4">
            <a href={`mailto:${SITE.email}`} className="flex gap-4 rounded-2xl border border-white/10 bg-[#091827] p-5">
              <Mail className="h-5 w-5 text-sky-400" /><div><p className="text-xs text-slate-500">Email</p><p className="mt-1 text-sm">{SITE.email}</p></div>
            </a>
            <a href={`tel:${SITE.phone}`} className="flex gap-4 rounded-2xl border border-white/10 bg-[#091827] p-5">
              <Phone className="h-5 w-5 text-sky-400" /><div><p className="text-xs text-slate-500">Phone</p><p className="mt-1 text-sm">{SITE.phone}</p></div>
            </a>
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-[#091827] p-5">
              <MapPin className="h-5 w-5 text-sky-400" /><div><p className="text-xs text-slate-500">Location</p><p className="mt-1 text-sm leading-6">{SITE.address}</p></div>
            </div>
          </div>

          <form className="rounded-3xl border border-white/10 bg-[#091827] p-6 sm:p-8" action={`mailto:${SITE.email}`} method="post" encType="text/plain">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ['Name','name','Your name'],
                ['Email','email','you@company.com'],
                ['Company','company','Company name'],
                ['Phone','phone','Contact number'],
              ].map(([label,name,placeholder]) => (
                <label key={name} className="text-sm text-slate-300">
                  {label}
                  <input name={name} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-sky-400/50" />
                </label>
              ))}
            </div>
            <label className="mt-5 block text-sm text-slate-300">
              What problem are you trying to solve?
              <textarea name="message" rows={6} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-sky-400/50" placeholder="Tell us what is slowing the business down..." />
            </label>
            <button className="mt-6 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold hover:bg-blue-500">Send Project Details</button>
          </form>
        </div>
      </section>
    </div>
  );
}
