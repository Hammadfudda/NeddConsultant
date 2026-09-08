import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE } from '../data';
import { SERVICE_ITEMS } from '../data/serviceData';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06111f] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex rounded-xl border border-white/10 bg-white px-4 py-3 shadow-lg shadow-slate-950/20">
              <img
                src={SITE.logo}
                alt={SITE.name}
                className="h-20 w-auto object-contain"
              />
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Digital systems, websites and software designed around real business problems.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Services</p>
            <div className="mt-4 space-y-2">
              {SERVICE_ITEMS.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="block text-sm text-slate-400 hover:text-sky-400"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Product</p>
            <Link
              to="/leave-management-software"
              className="mt-4 block text-sm text-sky-400 hover:text-sky-300"
            >
              Leave Management Software
            </Link>
            <Link
              to="/work"
              className="mt-3 block text-sm text-slate-400 hover:text-white"
            >
              Our Work
            </Link>
            <Link
              to="/about"
              className="mt-3 block text-sm text-slate-400 hover:text-white"
            >
              About NEDD
            </Link>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a
                href={`mailto:${SITE.email}`}
                className="flex gap-2 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>

              <a
                href={`tel:${SITE.phone}`}
                className="flex gap-2 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>

              <p className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {SITE.address}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NEDD Consultant. All rights reserved.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-sky-400"
          >
            Start a project <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
