import { ArrowUpRight } from 'lucide-react';

const DEMO_URL = 'https://leave-managment-mock-data.vercel.app/';

const FEATURES = [
  'Employee leave requests in one place',
  'Manager approvals with a clear decision trail',
  'Leave balances and policy visibility',
  'Employee, department and manager records',
  'Reporting and day to day administration',
  'Role based access for the right level of control',
];

export default function SaaSProduct() {
  return (
    <section className="relative bg-slate-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-brand-600 sm:tracking-[0.25em]">NEDD Software</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">Leave management without spreadsheets and message chasing</h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              Our Leave Management Software gives employees, managers and administrators one clear place to handle leave. Requests, approvals, balances and records stay together instead of being spread across spreadsheets, messages and manual follow ups.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <div key={feature} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                View Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-300 hover:bg-brand-50"
              >
                Ask About the Software
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/70 sm:p-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
                <div>
                  <p className="text-xs font-semibold text-brand-600">Leave Management</p>
                  <p className="text-sm font-semibold text-slate-950">Company overview</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">Live product</span>
              </div>
              <div className="grid gap-3 p-4 sm:grid-cols-3">
                {[
                  ['Pending requests', '12'],
                  ['Employees', '84'],
                  ['On leave today', '6'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-2 text-2xl font-bold text-slate-950">{value}</p>
                  </div>
                ))}
              </div>
              <div className="px-4 pb-4">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-3 border-b border-slate-100 px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    <span>Employee</span><span>Leave</span><span>Status</span>
                  </div>
                  {[
                    ['Sarah Malik', 'Annual', 'Pending'],
                    ['James Carter', 'Sick', 'Approved'],
                    ['Amina Khan', 'Casual', 'Approved'],
                  ].map(([name, type, status]) => (
                    <div key={name} className="grid grid-cols-[1.4fr_1fr_1fr] gap-3 border-b border-slate-100 px-4 py-3 text-xs last:border-b-0">
                      <span className="font-medium text-slate-800">{name}</span>
                      <span className="text-slate-500">{type}</span>
                      <span className={status === 'Pending' ? 'text-amber-600' : 'text-emerald-600'}>{status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
