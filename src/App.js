import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Freelance from './components/Freelance';
import CounterSection from './components/CounterSection';
import RecentWorks from './components/RecentWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme ? 'dark' : 'light'}>
          <Hero />
          <Skills />
          <Freelance />
          <CounterSection />
          <RecentWorks />
          <Contact />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
