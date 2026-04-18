import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';

const certs = [
  {
    icon: '🏆',
    title: 'Code-A-Haunt 2.0 Hackathon',
    org: 'Coding Blocks LPU',
    date: 'Feb 2025',
    desc: 'Advanced to Round 2 among 1000+ participants in the Code-A-Haunt 2.0 hackathon.',
    top: true,
    accent: 'from-yellow-400 to-orange-500',
    glow: 'shadow-yellow-500/20',
  },
  {
    icon: '📜',
    title: 'Object-Oriented Programming using C++',
    org: 'iamneo',
    date: 'Nov 2024',
    desc: 'Completed a comprehensive course on OOP concepts using C++ programming language.',
    top: false,
    accent: 'from-blue-400 to-indigo-500',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: '🎤',
    title: 'Communication Skills Workshop',
    org: 'LPU',
    date: 'Feb 2025',
    desc: 'Participated in a professional communication skills development workshop at LPU.',
    top: false,
    accent: 'from-violet-400 to-purple-500',
    glow: 'shadow-violet-500/20',
  },
];

export default function Certificates({ dark }: { dark: boolean }) {
  const ref = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="certs"
      className={`py-32 relative overflow-hidden ${dark ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[130px] pointer-events-none ${dark ? 'bg-green-500/4' : 'bg-green-100/50'}`} />

      <div className="relative w-full px-8 xl:px-16 2xl:px-24">
        <SectionHeader title="& Achievements" highlight="Certificates" sub="Recognition & learning" dark={dark} pos="start" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
          {certs.map((c) => (
            <div key={c.title}
              className={`relative rounded-3xl overflow-hidden card-hover ${
                dark ? `bg-slate-800 border border-slate-700 shadow-2xl ${c.glow}` : 'bg-white border border-slate-200 shadow-xl shadow-slate-200/80 hover:shadow-2xl'
              } ${c.top ? 'ring-2 ring-yellow-400/40' : ''}`}>

              <div className={`h-1.5 bg-gradient-to-r ${c.accent}`} />

              {c.top && (
                <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none">
                  <div className={`absolute top-6 right-[-30px] bg-gradient-to-r ${c.accent} text-white text-[10px] font-black px-10 py-1.5 rotate-45 shadow-lg tracking-widest uppercase`}>
                    Top ★
                  </div>
                </div>
              )}

              <div className="p-8 xl:p-9">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.accent} flex items-center justify-center text-3xl mb-6 shadow-xl`}>
                  {c.icon}
                </div>
                <h3 className={`text-lg font-black mb-2 leading-snug ${dark ? 'text-white' : 'text-slate-900'}`}>{c.title}</h3>
                <p className={`text-sm font-bold mb-4 bg-gradient-to-r ${c.accent} bg-clip-text text-transparent`}>{c.org}</p>
                <p className={`text-sm leading-[1.8] mb-6 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{c.desc}</p>
                <span className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full ${
                  dark ? 'bg-slate-800 text-slate-400 border border-slate-700' : 'bg-white text-slate-500 border border-slate-200 shadow-sm'
                }`}>📅 {c.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
