import { useReveal } from '../hooks/useReveal';

const info = [
  { icon: '✉️', label: 'Email',    value: 'amansharma07323@gmail.com', href: 'mailto:amansharma07323@gmail.com', accent: 'from-green-400 to-emerald-500' },
  { icon: '📱', label: 'Phone',    value: '+91 7252058165',             href: 'tel:+917252058165',               accent: 'from-blue-400 to-cyan-500' },
  { icon: '📍', label: 'Location', value: 'Punjab, India',              href: '#',                               accent: 'from-orange-400 to-red-500' },
];

export default function Contact({ dark }: { dark: boolean }) {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  return (
    <section ref={ref} id="contact" className={`py-20 ${dark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="w-full px-8 xl:px-20 2xl:px-32">

        <div className="text-center mb-14 reveal">
          <p className={`text-xs font-black uppercase tracking-[0.2em] mb-3 ${dark ? 'text-green-500' : 'text-green-600'}`}>Let's Work Together</p>
          <h2 className={`text-4xl xl:text-5xl font-black tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-start">

          {/* Left */}
          <div className="reveal space-y-6">
            <p className={`text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
              I'm currently open to frontend developer roles. Whether you have a project, an opportunity, or just want to connect — feel free to reach out!
            </p>

            {/* Response badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold ${
              dark ? 'bg-green-500/8 border-green-500/20 text-green-400'
                   : 'bg-green-50 border-green-200 text-green-700'
            }`}>
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
              Response within 24 hours
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="mailto:amansharma07323@gmail.com"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-green-500 hover:bg-green-400 text-white font-black rounded-xl transition-all hover:scale-105 shadow-xl shadow-green-500/30">
                Hire Me
                <span className="transition-transform group-hover:translate-x-1">🚀</span>
              </a>
              <a href="https://www.linkedin.com/in/aman-sharma-coder/" target="_blank" rel="noreferrer"
                className={`inline-flex items-center gap-2 px-8 py-3.5 border-2 border-green-500/40 font-bold rounded-xl transition-all hover:scale-105 hover:border-green-400 ${
                  dark ? 'text-green-400 hover:bg-green-500/8' : 'text-green-600 hover:bg-green-50'
                }`}>
                Connect on LinkedIn →
              </a>
            </div>

            {/* Info cards */}
            <div className="space-y-3 pt-2">
              {info.map(c => (
                <a key={c.label} href={c.href}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                    dark ? 'bg-slate-900 border-slate-800 hover:border-slate-600 hover:shadow-md'
                         : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                  }`}>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.accent} flex items-center justify-center text-lg flex-shrink-0 shadow-md`}>
                    {c.icon}
                  </div>
                  <div>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{c.label}</p>
                    <p className={`text-sm font-semibold ${dark ? 'text-slate-200' : 'text-slate-700'}`}>{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — message form */}
          <div className="reveal delay-2">
            <div className={`p-8 rounded-2xl border ${
              dark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-xl font-black mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>Send a Message</h3>
              <div className="space-y-4">
                {['Your Name', 'Your Email'].map(ph => (
                  <input key={ph} type="text" placeholder={ph}
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500/20 ${
                      dark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500'
                           : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                    }`} />
                ))}
                <textarea placeholder="Your Message" rows={4}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500/20 resize-none ${
                    dark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500'
                         : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                  }`} />
                <button className="w-full py-3.5 bg-green-500 hover:bg-green-400 text-white font-black rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-green-500/25">
                  Send Message →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
