import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Service from "./Pages/Service";
import Skills from "./Pages/Skills"


function App () {
  return (
    <div className="App">

      <Home/>
      <About/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>
      <Skills/>
      
    </div>
  );
}

export default App;
