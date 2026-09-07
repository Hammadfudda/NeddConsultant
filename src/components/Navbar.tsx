import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SITE } from '../data';
import { SERVICE_ITEMS } from '../data/serviceData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center rounded-xl border border-white/10 bg-white px-3 py-2 shadow-lg shadow-slate-950/20"
          aria-label="NEDD Consultant home"
        >
          <img
            src={SITE.logo}
            alt={SITE.name}
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <NavLink to="/" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-sky-400' : 'text-slate-300 hover:text-white'}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-sky-400' : 'text-slate-300 hover:text-white'}`}>About</NavLink>

          <div className="group relative">
            <Link to="/services" className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white">
              Services <ChevronDown className="h-4 w-4" />
            </Link>
            <div className="invisible absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950 p-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100">
              {SERVICE_ITEMS.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  {service.title}
                </Link>
              ))}
              <Link to="/leave-management-software" className="mt-1 block rounded-xl bg-blue-600/10 px-4 py-3 text-sm font-semibold text-sky-400 hover:bg-blue-600/20">
                Leave Management Software
              </Link>
            </div>
          </div>

          <NavLink to="/work" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-sky-400' : 'text-slate-300 hover:text-white'}`}>Work</NavLink>
          <NavLink to="/contact" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-sky-400' : 'text-slate-300 hover:text-white'}`}>Contact</NavLink>
        </div>

        <Link to="/contact" className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500 md:inline-flex">
          Discuss a Project <ArrowUpRight className="h-4 w-4" />
        </Link>

        <button onClick={() => setOpen(!open)} className="rounded-xl border border-white/10 p-2.5 text-white md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-4 pb-5 pt-3 md:hidden">
          <div className="space-y-1">
            {[
              ['Home','/'], ['About','/about'], ['Services','/services'], ['Work','/work'], ['Contact','/contact']
            ].map(([label,to]) => (
              <Link key={to} to={to} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/5">
                {label}
              </Link>
            ))}
            <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-sky-400">
              Service pages
            </button>
            {servicesOpen && (
              <div className="ml-3 border-l border-white/10 pl-3">
                {SERVICE_ITEMS.map((service) => (
                  <Link key={service.slug} to={`/services/${service.slug}`} className="block px-3 py-2 text-sm text-slate-400">
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
