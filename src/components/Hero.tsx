const socials = [
  { href: 'https://github.com/amansharma073',               label: 'GitHub',   icon: 'GH' },
  { href: 'https://www.linkedin.com/in/aman-sharma-coder/', label: 'LinkedIn', icon: 'in' },
];

export default function Hero({ dark }: { dark: boolean }) {
  return (
    <section id="home" className={`relative h-screen flex flex-col justify-center overflow-hidden ${
      dark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-[#0a1f1a]'
           : 'bg-gradient-to-br from-white via-slate-50 to-green-50/60'
    }`}>
      {/* BG blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute -top-20 right-0 w-[700px] h-[700px] rounded-full blur-[160px] opacity-15 ${dark ? 'bg-green-500' : 'bg-green-300'}`} />
        <div className={`absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10 ${dark ? 'bg-emerald-400' : 'bg-emerald-200'}`} />
      </div>

      <div className="relative w-full px-8 xl:px-20 2xl:px-32" style={{ marginTop: '64px' }}>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">

          {/* ── LEFT ── */}
          <div className="flex-1 max-w-2xl space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/8">
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot flex-shrink-0" />
              <span className={`text-sm font-semibold ${dark ? 'text-green-400' : 'text-green-700'}`}>
                Open to work · Frontend Developer
              </span>
            </div>

            {/* Name + title */}
            <div>
              <p className={`text-base font-medium mb-1 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Hi, I'm</p>
              <h1 className={`text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
                Aman <span className="gradient-text">Sharma</span>
              </h1>
              <p className={`text-xl sm:text-2xl font-bold mt-3 ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
                Frontend Developer
              </p>
            </div>

            {/* Subtitle */}
            <p className={`text-base sm:text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
              Frontend Developer specializing in React, responsive design, and performance optimization. Focused on building fast, scalable, and user-friendly web applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-7 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all duration-200 hover:scale-105 shadow-xl shadow-green-500/30 flex items-center gap-2">
                View Projects
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>
              <a href="#"
                className={`px-7 py-3.5 border-2 border-green-500/50 font-bold rounded-xl transition-all duration-200 hover:scale-105 hover:border-green-400 flex items-center gap-2 ${
                  dark ? 'text-green-400 hover:bg-green-500/8' : 'text-green-600 hover:bg-green-50'
                }`}>
                ↓ Download Resume
              </a>
            </div>

            {/* Highlight bar */}
            <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 py-3 px-4 rounded-xl border ${
              dark ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-50 border-slate-200'
            }`}>
              {[
                { icon: '🚀', text: '3+ Projects Built' },
                { icon: '⚛️', text: 'Strong in React & JavaScript' },
                { icon: '💼', text: 'Open to Frontend Roles' },
              ].map((h, i) => (
                <span key={i} className={`flex items-center gap-1.5 text-sm font-semibold ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                  <span>{h.icon}</span> {h.text}
                  {i < 2 && <span className={`hidden sm:block w-px h-4 ${dark ? 'bg-slate-600' : 'bg-slate-300'}`} />}
                </span>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105 border ${
                    dark ? 'bg-slate-800 text-slate-300 border-slate-700 hover:border-green-500/50 hover:text-green-400'
                         : 'bg-white text-slate-600 border-slate-200 hover:border-green-400 hover:text-green-600 shadow-sm'
                  }`}>
                  <span className="font-black text-xs">{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="flex-shrink-0 flex justify-center lg:justify-end">
            <div className={`relative w-72 sm:w-80 xl:w-[340px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl animate-float ${
              dark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'
            }`}>

              {/* Banner */}
              <div className="h-28 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 relative">
                <div className="absolute inset-0 opacity-15"
                  style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                {/* Open to Work badge — top left */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/25 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 pulse-dot" />
                  <span className="text-[11px] font-bold text-white tracking-wide">Open to Work</span>
                </div>
              </div>

              {/* Avatar — overlapping banner */}
              <div className="flex justify-center -mt-11 mb-3 relative z-10">
                <div className={`w-[88px] h-[88px] rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 flex items-center justify-center shadow-xl border-[3px] ${dark ? 'border-slate-800' : 'border-white'}`}>
                  {/* Styled initials avatar with inner ring */}
                  <div className="w-full h-full rounded-full flex items-center justify-center relative">
                    <span className="text-white text-2xl font-black tracking-tight select-none">AS</span>
                    <div className="absolute inset-1 rounded-full border border-white/20" />
                  </div>
                </div>
              </div>

              {/* Name + role + subtitle */}
              <div className="text-center px-6 pb-4">
                <h3 className={`text-lg font-black tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>Aman Sharma</h3>
                <p className="text-green-500 font-bold text-sm mt-0.5">Frontend Developer</p>
                <p className={`text-[11px] font-medium mt-1.5 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                  MCA Student &nbsp;|&nbsp; Frontend Developer &nbsp;|&nbsp; LPU
                </p>
              </div>

              {/* Stats */}
              <div className={`grid grid-cols-3 mx-5 mb-4 rounded-2xl overflow-hidden border ${dark ? 'border-slate-700 bg-slate-700/30' : 'border-slate-100 bg-slate-50'}`}>
                {[
                  { value: '3+',     label: 'Projects' },
                  { value: 'React',  label: 'Stack' },
                  { value: '✓',      label: 'Open to Work' },
                ].map((s, i) => (
                  <div key={s.label} className={`py-3 text-center ${i < 2 ? `border-r ${dark ? 'border-slate-700' : 'border-slate-200'}` : ''}`}>
                    <p className="text-green-500 font-black text-sm leading-none">{s.value}</p>
                    <p className={`text-[10px] font-semibold mt-1 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Skill tags — only 3 key ones */}
              <div className={`flex justify-center gap-2 px-5 pb-5`}>
                {['React', 'JavaScript', 'Tailwind CSS'].map(t => (
                  <span key={t}
                    className={`text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all duration-200 hover:scale-105 cursor-default ${
                      dark
                        ? 'bg-green-500/10 border-green-500/25 text-green-400 hover:bg-green-500/20'
                        : 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100'
                    }`}>{t}</span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className={`text-[10px] font-bold uppercase tracking-widest ${dark ? 'text-slate-500' : 'text-slate-400'}`}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </section>
  );
}
