import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Routes>
        <Route path='/netflixrect-master' element={1} />
        <Route path='/' element={2} />
        <Route path='/' element={3} />
      </Routes>
      <Contact />
    </>
  );
}

export default App;
