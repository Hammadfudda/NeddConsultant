import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SITE } from '../data';

const QUICK = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', to: '/contact' },
];

const SERVICES_LIST = [
  'Custom Business Software',
  'Web Applications & Portals',
  'Process Automation',
  'IT Consulting & Integration',
  'Mobile Applications',
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white pt-16 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-flex rounded-2xl border border-slate-100 bg-white p-2 shadow-sm">
              <img src={SITE.logo} alt={SITE.name} className="h-14 w-auto" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              IT consulting and software development focused on solving practical business problems.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-600">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {QUICK.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-slate-600 transition-colors hover:text-brand-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-600">Services</h4>
            <ul className="mt-4 space-y-3">
              {SERVICES_LIST.map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-slate-600 transition-colors hover:text-brand-600">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-600">Contact Info</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>{SITE.email}</li>
              <li>{SITE.phone}</li>
              <li>{SITE.address}</li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-brand-700"
            >
              Discuss a Project <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-200 py-7">
          <p className="text-xs text-slate-500">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
