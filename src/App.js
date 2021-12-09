import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Service from "./Service";
import {useState} from "react"

function App() {

  const [toSend, setToSend] = useState({
    from_name: "",

    to_name: "",

    message: "",

    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    {
      /* --- METHOD TO SEND THE MAIL --- */
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
