import { useReveal } from '../hooks/useReveal';

const highlights = [
  { icon: '🎓', title: 'MCA Student', text: 'Pursuing Master of Computer Applications at Lovely Professional University.' },
  { icon: '⚛️', title: 'React Focused', text: 'Skilled in React, JavaScript, HTML, CSS & Tailwind CSS.' },
  { icon: '📱', title: 'Responsive Design', text: 'Focused on mobile-first design and performance optimization.' },
  { icon: '🚀', title: 'Job Ready', text: 'Actively preparing and applying for frontend developer roles.' },
];

export default function About({ dark }: { dark: boolean }) {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  return (
    <section ref={ref} id="about" className={`py-20 ${dark ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="w-full px-8 xl:px-20 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-center">

          {/* Left */}
          <div className="reveal space-y-6">
            <div>
              <p className={`text-xs font-black uppercase tracking-[0.2em] mb-3 ${dark ? 'text-green-500' : 'text-green-600'}`}>About Me</p>
              <h2 className={`text-4xl xl:text-5xl font-black tracking-tight leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
                Passionate about<br />
                <span className="gradient-text">Frontend Development</span>
              </h2>
            </div>
            <p className={`text-base leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
              I'm a frontend developer and MCA student who loves turning ideas into clean, fast, and accessible web experiences. I focus on writing maintainable code and building UIs that users actually enjoy.
            </p>
            <p className={`text-base leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
              Currently deepening my expertise in the React ecosystem, performance optimization, and modern CSS — while actively looking for opportunities to contribute to real-world products.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="mailto:amansharma07323@gmail.com"
                className="px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-500/25 text-sm">
                Get In Touch
              </a>
              <a href="#"
                className={`px-6 py-3 border-2 border-green-500/40 font-bold rounded-xl transition-all hover:scale-105 text-sm ${dark ? 'text-green-400 hover:bg-green-500/8' : 'text-green-600 hover:bg-green-50'}`}>
                Download CV
              </a>
            </div>
          </div>

          {/* Right — 2×2 highlight cards */}
          <div className="reveal delay-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className={`p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                dark ? 'bg-slate-800 border-slate-700 hover:border-green-500/30 hover:shadow-green-500/5'
                     : 'bg-white border-slate-200 hover:border-green-300 shadow-sm hover:shadow-green-100'
              }`}>
                <span className="text-2xl mb-3 block">{h.icon}</span>
                <p className={`text-sm font-black mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>{h.title}</p>
                <p className={`text-xs leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{h.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
