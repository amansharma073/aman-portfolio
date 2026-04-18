import { useReveal } from '../hooks/useReveal';

const edu = [
  {
    degree: 'Master of Computer Applications',
    school: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    period: 'Aug 2024 – Present',
    score: 'CGPA: 7.38',
    icon: '🎓',
    accent: 'from-green-400 to-emerald-600',
    current: true,
  },
  {
    degree: 'Bachelor of Computer Applications',
    school: 'SC Guria Institute of Management & Technology',
    location: 'Kashipur, Uttarakhand',
    period: 'Jul 2021 – Jul 2024',
    score: '65.3%',
    icon: '📚',
    accent: 'from-blue-400 to-indigo-600',
    current: false,
  },
  {
    degree: 'Intermediate (12th)',
    school: 'DAV Public School',
    location: 'Bazpur, Uttarakhand',
    period: 'Apr 2020 – Mar 2021',
    score: '60.8%',
    icon: '🏫',
    accent: 'from-violet-400 to-purple-600',
    current: false,
  },
];

export default function Education({ dark }: { dark: boolean }) {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  return (
    <section ref={ref} id="education" className={`py-20 ${dark ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="w-full px-8 xl:px-20 2xl:px-32">

        <div className="text-center mb-14 reveal">
          <p className={`text-xs font-black uppercase tracking-[0.2em] mb-3 ${dark ? 'text-green-500' : 'text-green-600'}`}>Academic Background</p>
          <h2 className={`text-4xl xl:text-5xl font-black tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="space-y-5">
          {edu.map((e, i) => (
            <div key={i}
              className={`flex gap-5 p-6 xl:p-7 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                dark ? 'bg-slate-800 border-slate-700 hover:border-slate-600 hover:shadow-lg hover:shadow-black/20'
                     : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
              } ${e.current ? 'ring-1 ring-green-500/25' : ''}`}>

              {/* Icon */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${e.accent} flex items-center justify-center text-2xl shadow-lg`}>
                  {e.icon}
                </div>
                {e.current && (
                  <span className="text-[9px] font-black uppercase tracking-widest text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20 whitespace-nowrap">
                    Current
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className={`text-lg font-black leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>{e.degree}</h3>
                    <p className={`text-sm font-bold mt-1 bg-gradient-to-r ${e.accent} bg-clip-text text-transparent`}>{e.school}</p>
                    <p className={`text-xs mt-1 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>📍 {e.location}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                      dark ? 'bg-slate-700 text-slate-400 border border-slate-600'
                           : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}>{e.period}</span>
                    <p className={`text-base font-black mt-2 bg-gradient-to-r ${e.accent} bg-clip-text text-transparent`}>{e.score}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
