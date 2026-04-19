import { useReveal } from '../hooks/useReveal';

const projects = [
  {
    title: 'Heart2Help',
    subtitle: 'Caregiving Platform',
    desc: 'Built a responsive caregiving platform with advanced search filters and profile listings, improving usability and mobile experience.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
    gradient: 'from-rose-500 via-pink-500 to-red-500',
    icon: '❤️',
    features: ['Advanced Search', 'Profile Listings', 'Mobile-First UI', 'Performance Optimized'],
    github: 'https://github.com/amansharma073/Heart2Help',
    live: 'https://heart2-help-rust.vercel.app',
  },
  {
    title: 'SkillSphere',
    subtitle: 'Skill Sharing Platform',
    desc: 'Developed a skill-sharing platform with category filtering, user profiles, and search functionality using React, enhancing user interaction.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    icon: '🎯',
    features: ['Category Filters', 'User Profiles', 'Search Feature', 'Responsive Design'],
    github: 'https://github.com/amansharma073',
    live: '#',
  },
  {
    title: 'Farm World',
    subtitle: 'Farmer-to-Customer Platform',
    desc: 'Created a farmer-to-customer platform with a responsive layout and structured UI, improving product browsing and user experience.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    icon: '🌾',
    features: ['Product Showcase', 'Responsive Layout', 'Structured UI', 'Social Section'],
    github: 'https://github.com/amansharma073/farmer-world',
    live: 'https://farmer-world-ten.vercel.app',
  },
];

export default function Projects({ dark }: { dark: boolean }) {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  return (
    <section ref={ref} id="projects" className={`py-20 ${dark ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="w-full px-8 xl:px-20 2xl:px-32">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className={`text-xs font-black uppercase tracking-[0.2em] mb-3 ${dark ? 'text-green-500' : 'text-green-600'}`}>Things I've Built</p>
          <h2 className={`text-4xl xl:text-5xl font-black tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`mt-4 text-base max-w-lg mx-auto ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            Real-world projects built with React and modern web technologies.
          </p>
        </div>

        {/* 3-col responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(p => (
            <div key={p.title}
              className={`group rounded-2xl overflow-hidden border flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                dark
                  ? 'bg-slate-800 border-slate-700 hover:border-slate-500 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/40'
                  : 'bg-white border-slate-200 hover:border-green-300 shadow-lg shadow-slate-200/60 hover:shadow-2xl hover:shadow-green-100/60'
              }`}>

              {/* Banner */}
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient} overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 opacity-15"
                  style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl drop-shadow-xl group-hover:scale-110 transition-transform duration-500">{p.icon}</span>
                </div>
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/30 text-white backdrop-blur-sm">
                    {p.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className={`text-xl font-black mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>{p.title}</h3>
                <p className={`text-sm leading-relaxed mb-4 flex-1 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{p.desc}</p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.features.map(f => (
                    <span key={f} className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg ${
                      dark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'
                    }`}>✓ {f}</span>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map(t => (
                    <span key={t} className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${
                      dark ? 'bg-green-500/8 text-green-400 border-green-500/20'
                           : 'bg-green-50 text-green-700 border-green-200'
                    }`}>{t}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className={`flex-1 text-center py-2.5 rounded-xl text-sm font-bold border-2 transition-all hover:scale-105 ${
                      dark ? 'border-slate-600 text-slate-300 hover:border-green-500/50 hover:text-green-400'
                           : 'border-slate-200 text-slate-600 hover:border-green-400 hover:text-green-600'
                    }`}>GitHub ↗</a>
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className="flex-1 text-center py-2.5 rounded-xl text-sm font-bold bg-green-500 hover:bg-green-400 text-white transition-all hover:scale-105 shadow-lg shadow-green-500/25">
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
