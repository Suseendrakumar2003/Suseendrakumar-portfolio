import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Resume from "./components/Resume/Resume";
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonials/Testimonial';
import Blog from './components/Blogs/Blog';
import Contact from './components/Contact/Contact';


  


function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        
          <Home />
          <About />
          <Services />
          <Resume />
          <Portfolio />
          <Testimonial />
          <Blog />
          <Contact />
        
      </main>
      
    </>
  );
}

export default App