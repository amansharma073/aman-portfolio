import { useState, useEffect, useCallback } from 'react';

const links = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Education', 'Contact'];

export default function Navbar({ dark, toggleDark }: { dark: boolean; toggleDark: () => void }) {
  const [active, setActive]     = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = useCallback((l: string) => {
    setActive(l); setOpen(false);
    document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 backdrop-blur-xl ${
      scrolled
        ? dark ? 'bg-slate-950/90 border-b border-white/5 shadow-xl shadow-black/20'
                : 'bg-white/90 border-b border-slate-100 shadow-lg shadow-slate-200/50'
        : 'bg-transparent'
    }`}>
      <div className="w-full px-8 xl:px-20 2xl:px-32 flex items-center justify-between h-16">
        <button onClick={() => go('Home')}
          className={`text-xl font-black tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
          Aman<span className="text-green-500">.</span>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map(l => (
            <button key={l} onClick={() => go(l)}
              className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                active === l ? 'text-white' : dark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}>
              {active === l && <span className="absolute inset-0 rounded-lg bg-green-500 -z-10 shadow-lg shadow-green-500/30" />}
              {l}
            </button>
          ))}
          <a href="#"
            className="ml-3 px-4 py-2 rounded-lg text-sm font-bold border-2 border-green-500/60 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-200 hover:scale-105">
            Resume ↓
          </a>
          <button onClick={toggleDark}
            className={`ml-2 w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${dark ? 'bg-slate-800 text-yellow-300 border border-slate-700' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
            {dark ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-2">
          <button onClick={toggleDark}
            className={`w-9 h-9 rounded-lg flex items-center justify-center ${dark ? 'bg-slate-800 text-yellow-300' : 'bg-slate-100 text-slate-600'}`}>
            {dark ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setOpen(o => !o)}
            className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold ${dark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-800'}`}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className={`px-8 pb-4 pt-1 space-y-1 ${dark ? 'bg-slate-950/95' : 'bg-white/95'}`}>
          {links.map(l => (
            <button key={l} onClick={() => go(l)}
              className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                active === l ? 'bg-green-500 text-white' : dark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-50'
              }`}>{l}</button>
          ))}
          <a href="#" className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-bold border-2 border-green-500/60 text-green-500 mt-2">
            Resume ↓
          </a>
        </div>
      </div>
    </nav>
  );
}
