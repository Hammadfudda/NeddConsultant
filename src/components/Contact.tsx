import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Check, AlertCircle, Loader2 } from 'lucide-react';
import { SITE, EMAILJS } from '../data';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const templateParams = {
      name: (formData.get('name') as string) || '',
      phone_number: (formData.get('phone_number') as string) || '',
      phone: (formData.get('phone_number') as string) || '',
      email: (formData.get('email') as string) || '',
      business_name: (formData.get('business_name') as string) || '',
      message: (formData.get('message') as string) || '',
    };

    setStatus('sending');
    setErrorMsg('');

    emailjs
      .send(EMAILJS.serviceId, EMAILJS.templateId, templateParams, EMAILJS.publicKey)
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        setStatus('error');
        setErrorMsg(error?.text || error?.message || 'Something went wrong. Please try again.');
      });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-brand-600 sm:tracking-[0.25em]">Contact Us</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-slate-950 sm:text-4xl lg:text-5xl">Tell us what you need to improve</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600">
              You can come to us with a finished brief or simply explain the process that is causing problems. We will help turn that into a practical technical plan.
            </p>

            <div className="mt-8 space-y-4 sm:mt-10">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 text-sm text-slate-700 transition-colors hover:text-brand-600">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-slate-50 text-brand-600 sm:h-11 sm:w-11"><Mail className="h-5 w-5" /></span>
                <span className="break-all">{SITE.email}</span>
              </a>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-4 text-sm text-slate-700 transition-colors hover:text-brand-600">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-slate-50 text-brand-600 sm:h-11 sm:w-11"><Phone className="h-5 w-5" /></span>
                {SITE.phone}
              </a>
              <div className="flex items-center gap-4 text-sm text-slate-700">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-slate-50 text-brand-600 sm:h-11 sm:w-11"><MapPin className="h-5 w-5" /></span>
                {SITE.address}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/40 sm:rounded-3xl sm:p-8">
            <h3 className="font-display text-lg font-semibold text-slate-950 sm:text-xl">Discuss Your Project</h3>
            <p className="mt-2 text-sm text-slate-500">Tell us what is happening today and what you would like to work better.</p>

            <form ref={formRef} className="mt-5 space-y-4 sm:mt-6" onSubmit={submit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Jane Doe" />
                <Field label="Phone number" name="phone_number" type="tel" placeholder="+1 555 000 0000" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
                <Field label="Business name" name="business_name" placeholder="Company name" />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-medium text-slate-600">What would you like to solve?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about the process, system or problem you want to improve."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-all disabled:opacity-60 ${
                  status === 'success' ? 'bg-emerald-600' : 'bg-brand-600 hover:bg-brand-700'
                }`}
              >
                {status === 'sending' && <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>}
                {status === 'success' && <><Check className="h-4 w-4" /> Message sent</>}
                {(status === 'idle' || status === 'error') && <><Send className="h-4 w-4" /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium text-slate-600">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
