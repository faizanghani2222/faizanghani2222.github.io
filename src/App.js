import About from './Container/About';
import Contact from './Container/Contact';
import Footer from './Container/Footer';
import Home from './Container/Home';
import Navbar from './Container/Navbar';
import Projects from './Container/Projects';
import Skills from './Container/Skills';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
