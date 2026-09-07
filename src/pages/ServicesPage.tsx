import { ArrowUpRight, Check, ClipboardCheck, UserRound, UsersRound } from 'lucide-react';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import CTA from '../components/CTA';

const SOFTWARE_FEATURES = [
  'Annual, sick and casual leave requests',
  'Automatic working-day calculation',
  'Live leave balances and request history',
  'Manager approval or rejection with remarks',
  'Employee records and leave reporting',
  'Email updates when request status changes',
];

const SOFTWARE_FLOW = [
  {
    icon: UserRound,
    title: 'Employee',
    text: 'Employees submit leave, choose their dates and reason, then track the request and remaining balance from one place.',
  },
  {
    icon: ClipboardCheck,
    title: 'Manager',
    text: 'The request goes to the employee’s assigned manager, who reviews it and makes the final approval or rejection with remarks.',
  },
  {
    icon: UsersRound,
    title: 'Admin',
    text: 'Admin keeps employee records, leave balances, history and reports organized without managing approvals through messages or spreadsheets.',
  },
];

function LeaveManagementSoftware() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50 py-16 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-brand-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent-400/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <div className="inline-flex items-center rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold text-brand-700 shadow-sm">
              NEDD Software
            </div>
            <p className="mt-5 font-display text-sm font-medium uppercase tracking-[0.2em] text-brand-600">
              Leave Management Software
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A simpler way to manage employee leave.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Built for companies that want to move leave requests, approvals, balances and employee records out of spreadsheets and chat messages. Employees know what they have available, managers know what needs a decision, and admin has a clear record of everything.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {SOFTWARE_FEATURES.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://leave-managment-mock-data.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/20"
              >
                View Live Demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-all hover:border-brand-300 hover:bg-brand-50"
              >
                Discuss Your Requirements
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">How it works</p>
                <p className="mt-1 text-sm text-slate-500">One workflow from request to record.</p>
              </div>
              <div className="hidden rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 sm:block">
                Employee → Manager → Admin record
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {SOFTWARE_FLOW.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-brand-600">0{index + 1}</span>
                          <h3 className="font-display text-lg font-semibold text-slate-950">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-brand-100 bg-brand-50 px-5 py-4 text-sm leading-6 text-slate-700">
              Weekends are automatically excluded from leave-day calculations, helping keep balances and approved days consistent.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <div className="pt-28 sm:pt-36">
        <Services />
      </div>
      <LeaveManagementSoftware />
      <WhyUs />
      <CTA />
    </>
  );
}
