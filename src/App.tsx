import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className={`min-h-screen ${dark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      <Navbar dark={dark} toggleDark={() => setDark(d => !d)} />
      <Hero dark={dark} />
      <About dark={dark} />
      <Skills dark={dark} />
      <Projects dark={dark} />
      <Achievements dark={dark} />
      <Education dark={dark} />
      <Contact dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}
