import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE } from '../data';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? 'border-slate-200 bg-white/90 py-3 shadow-sm backdrop-blur-xl'
          : 'border-transparent bg-white/70 py-4 backdrop-blur-md sm:py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={SITE.logo} alt={SITE.name} className="h-12 w-auto sm:h-14" />
        </Link>

        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/20 md:inline-flex"
        >
          Discuss a Project
          <ArrowUpRight className="h-4 w-4" />
        </Link>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-slate-200 bg-white p-2 text-slate-900 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div className={`overflow-hidden transition-all duration-300 md:hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="mx-4 mt-3 flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white">
              Discuss a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
