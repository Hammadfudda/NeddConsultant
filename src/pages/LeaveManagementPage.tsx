import { ArrowRight, Bell, CalendarDays, CheckCircle2, ClipboardCheck, FileSpreadsheet, History, ShieldCheck, SlidersHorizontal, UserRound, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import softwareImage from '../assets/images/services/custom-software.png';

const features = [
  ['Employee Management','Create, update, remove and restore employee records with divisions, departments, grades and designations.'],
  ['Smart CSV','Bulk employee import with validation, pending-detail handling and quota conflict checks.'],
  ['Leave Policies','Configure leave types, quotas, policy scope, approval rules and organisation leave-year settings.'],
  ['Live Balances','See Granted, Used and Remaining leave balances with pro-rated allocation for mid-year joiners.'],
  ['Working Days','Automatically calculate working leave days using department weekend settings.'],
  ['Approvals','Route requests through controlled approval workflows with approve, reject and admin actions.'],
  ['Attachments','Employees can submit supporting documents with leave requests when needed.'],
  ['Notifications','In-app and email updates keep the right people informed when request status changes.'],
  ['Reports & History','Yearly reporting, leave history, calendar visibility and exportable records.'],
  ['Audit Logs','Admin has a traceable record of important system and leave-management actions.'],
];

export default function LeaveManagementPage() {
  return (
    <div className="min-h-screen bg-[#07111f] pt-20 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(14,165,233,0.22),transparent_30%),radial-gradient(circle_at_15%_20%,rgba(29,78,216,0.18),transparent_25%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">NEDD software product</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">Leave Management Software</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Replace leave spreadsheets, chat approvals and manual balance tracking with one structured system for employees, managers and admin.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://leave-managment-mock-data.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold hover:bg-blue-500">
                View Live Demo <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold hover:bg-white/10">
                Discuss Your Requirements
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-3 shadow-2xl shadow-blue-950/50">
            <img src={softwareImage} alt="Leave management software workspace" className="aspect-[4/3] w-full rounded-[1.4rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            [UserRound,'Employee','Apply leave, see balances, track status, view history and manage leave changes from one portal.'],
            [ClipboardCheck,'Manager','Review the requests that need your action, approve or reject with context and see team availability.'],
            [UsersRound,'Admin','Manage people, master data, policies, reports, audit history and company-wide leave administration.'],
          ].map(([Icon,label,text]) => {
            const Comp = Icon as typeof UserRound;
            return (
              <div key={label as string} className="rounded-3xl border border-white/10 bg-[#091827] p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-600"><Comp className="h-5 w-5" /></div>
                <h2 className="mt-5 text-2xl font-bold">{label as string}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">{text as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#091827] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">Core features</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">Everything needed to manage leave from one system.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {features.map(([title,text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-slate-950 p-5">
                <CheckCircle2 className="h-5 w-5 text-sky-400" />
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">How it works</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">From setup to decision without manual tracking.</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {[
              ['01','Configure','Admin sets employees, divisions, departments, grades and leave policies.'],
              ['02','Apply','Employee selects a leave type, dates, reason and supporting document if required.'],
              ['03','Review','The request reaches the correct manager or approval route for a decision.'],
              ['04','Update','Status, balances, notifications, reports and history stay synchronized.'],
            ].map(([n,title,text]) => (
              <div key={n} className="rounded-2xl border border-white/10 bg-[#091827] p-6">
                <span className="text-sm font-bold text-sky-400">{n}</span>
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-blue-600 py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm text-blue-100">See it working before you decide.</p>
            <h2 className="mt-2 text-3xl font-bold">Explore the live Leave Management demo.</h2>
          </div>
          <a href="https://leave-managment-mock-data.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-blue-700">
            Open Live Demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
