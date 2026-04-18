const links = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Education', 'Contact'];

export default function Footer({ dark }: { dark: boolean }) {
  const go = (l: string) => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  return (
    <footer className={`py-14 border-t ${dark ? 'bg-slate-950 border-white/5' : 'bg-white border-slate-100'}`}>
      <div className="w-full px-8 xl:px-20 2xl:px-32">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className={`text-2xl font-black mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Aman<span className="text-green-500">.</span>
            </p>
            <p className={`text-sm font-medium mb-3 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              Frontend Developer · MCA Student
            </p>
            <p className={`text-sm leading-relaxed max-w-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
              Building clean, responsive web experiences with React and Tailwind CSS.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className={`text-xs font-black uppercase tracking-widest mb-5 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>Quick Links</p>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {links.map(l => (
                <button key={l} onClick={() => go(l)}
                  className={`text-left text-sm font-medium transition-colors hover:text-green-500 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className={`text-xs font-black uppercase tracking-widest mb-5 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>Contact</p>
            <div className="space-y-2.5">
              {[
                { label: 'amansharma07323@gmail.com', href: 'mailto:amansharma07323@gmail.com' },
                { label: '+91 7252058165',             href: 'tel:+917252058165' },
                { label: 'Punjab, India',              href: '#' },
              ].map(c => (
                <a key={c.label} href={c.href}
                  className={`block text-sm font-medium transition-colors hover:text-green-500 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {c.label}
                </a>
              ))}
            </div>
            <div className="flex gap-3 mt-5">
              {[
                { href: 'https://github.com/amansharma073',               label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/aman-sharma-coder/', label: 'LinkedIn' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all hover:scale-105 hover:bg-green-500 hover:text-white hover:border-green-500 ${
                    dark ? 'bg-slate-800 text-slate-400 border-slate-700' : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${dark ? 'border-slate-800' : 'border-slate-100'}`}>
          <p className={`text-xs ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
            © {new Date().getFullYear()} Aman Sharma. All rights reserved.
          </p>
          <p className={`text-xs ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
