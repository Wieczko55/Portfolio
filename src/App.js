import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import TimeLine from './components/TimeLine';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cv from './components/Cv';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Cv />
      <Portfolio />
      <Services />
      <TimeLine />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
