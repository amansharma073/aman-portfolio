import { useReveal } from '../hooks/useReveal';

const categories = [
  {
    title: 'Languages',
    icon: '💻',
    color: 'from-violet-500 to-purple-600',
    tagCls: (dark: boolean) => dark
      ? 'bg-violet-500/10 border-violet-500/25 text-violet-300 hover:bg-violet-500/20 hover:border-violet-400'
      : 'bg-violet-50 border-violet-200 text-violet-700 hover:bg-violet-100 hover:border-violet-400',
    skills: ['Java', 'Python', 'C++'],
  },
  {
    title: 'Web Technologies',
    icon: '🌐',
    color: 'from-cyan-500 to-blue-600',
    tagCls: (dark: boolean) => dark
      ? 'bg-cyan-500/10 border-cyan-500/25 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400'
      : 'bg-cyan-50 border-cyan-200 text-cyan-700 hover:bg-cyan-100 hover:border-cyan-400',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    color: 'from-green-500 to-emerald-600',
    tagCls: (dark: boolean) => dark
      ? 'bg-green-500/10 border-green-500/25 text-green-300 hover:bg-green-500/20 hover:border-green-400'
      : 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:border-green-400',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Soft Skills',
    icon: '🤝',
    color: 'from-orange-500 to-amber-600',
    tagCls: (dark: boolean) => dark
      ? 'bg-orange-500/10 border-orange-500/25 text-orange-300 hover:bg-orange-500/20 hover:border-orange-400'
      : 'bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100 hover:border-orange-400',
    skills: ['Problem Solving', 'Adaptability', 'Communication', 'Team Work'],
  },
];

export default function Skills({ dark }: { dark: boolean }) {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  return (
    <section ref={ref} id="skills" className={`py-20 ${dark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="w-full px-8 xl:px-20 2xl:px-32">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className={`text-xs font-black uppercase tracking-[0.2em] mb-3 ${dark ? 'text-green-500' : 'text-green-600'}`}>What I Know</p>
          <h2 className={`text-4xl xl:text-5xl font-black tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className={`mt-4 text-base max-w-lg mx-auto ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            Technologies and tools I use to build modern, responsive web applications.
          </p>
        </div>

        {/* 4-col grid on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(cat => (
            <div key={cat.title}
              className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                dark ? 'bg-slate-900 border-slate-800 hover:border-slate-600 hover:shadow-xl hover:shadow-black/20'
                     : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg'
              }`}>
              {/* Accent bar */}
              <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${cat.color} mb-5`} />

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-xl mb-4 shadow-lg`}>
                {cat.icon}
              </div>

              <h3 className={`text-base font-black mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>{cat.title}</h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map(s => (
                  <span key={s}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg border cursor-default transition-all duration-200 hover:scale-105 ${cat.tagCls(dark)}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
