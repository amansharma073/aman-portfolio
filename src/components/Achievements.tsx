import { useReveal } from '../hooks/useReveal';

const items = [
  {
    icon: '🏆',
    title: 'Code-A-Haunt 2.0 Hackathon',
    org: 'Coding Blocks · LPU',
    date: 'Feb 2025',
    desc: 'Advanced to Round 2 among 1000+ participants — demonstrating strong problem-solving and rapid development skills under pressure.',
    highlight: true,
    accent: 'from-yellow-400 to-orange-500',
  },
  {
    icon: '📜',
    title: 'OOP using C++',
    org: 'iamneo',
    date: 'Nov 2024',
    desc: 'Gained strong understanding of OOP concepts including inheritance, polymorphism, encapsulation, and abstraction using C++.',
    highlight: false,
    accent: 'from-blue-400 to-indigo-500',
  },
  {
    icon: '🎤',
    title: 'Communication Skills Workshop',
    org: 'LPU',
    date: 'Feb 2025',
    desc: 'Developed professional communication, presentation, and interpersonal skills through structured activities and real-world scenarios.',
    highlight: false,
    accent: 'from-violet-400 to-purple-500',
  },
];

export default function Achievements({ dark }: { dark: boolean }) {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  return (
    <section ref={ref} id="achievements" className={`py-20 ${dark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="w-full px-8 xl:px-20 2xl:px-32">

        <div className="text-center mb-14 reveal">
          <p className={`text-xs font-black uppercase tracking-[0.2em] mb-3 ${dark ? 'text-green-500' : 'text-green-600'}`}>Recognition</p>
          <h2 className={`text-4xl xl:text-5xl font-black tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
            Achievements &amp; <span className="gradient-text">Certificates</span>
          </h2>
        </div>

        {/* Full-width 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {items.map(item => (
            <div key={item.title}
              className={`relative rounded-2xl overflow-hidden border transition-all duration-200 hover:-translate-y-1 ${
                dark ? 'bg-slate-900 border-slate-800 hover:border-slate-600 hover:shadow-xl hover:shadow-black/20'
                     : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg'
              } ${item.highlight ? 'ring-2 ring-yellow-400/30' : ''}`}>

              <div className={`h-1 bg-gradient-to-r ${item.accent}`} />

              {item.highlight && (
                <div className="absolute top-0 right-0 overflow-hidden w-24 h-24 pointer-events-none">
                  <div className={`absolute top-4 right-[-24px] bg-gradient-to-r ${item.accent} text-white text-[9px] font-black px-8 py-1 rotate-45 tracking-widest uppercase shadow`}>
                    Top ★
                  </div>
                </div>
              )}

              <div className="p-6 xl:p-7">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className={`text-base font-black mb-1 leading-snug ${dark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                <p className={`text-xs font-bold mb-3 bg-gradient-to-r ${item.accent} bg-clip-text text-transparent`}>{item.org}</p>
                <p className={`text-sm leading-relaxed mb-4 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                  dark ? 'bg-slate-800 text-slate-400 border border-slate-700'
                       : 'bg-white text-slate-500 border border-slate-200'
                }`}>📅 {item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
