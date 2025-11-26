import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Leadership from './components/Leadership';
import Subsidiaries from './components/Subsidiaries';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Leadership />
        <Subsidiaries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
