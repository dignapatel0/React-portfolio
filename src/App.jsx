import React from 'react'; // Importing React library
import Navbar from './components/Navbar'; // Importing the Navbar component for the header
import Footer from './components/Footer'; // Importing the Footer component for the footer

// Importing the individual page components
import About from './pages/About'; 
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const App = () => {
  return (
    <div className="app-container">
      {/* Navbar component to be rendered at the top */}
      <Navbar />
      
      {/* Main content of the app, where each page component is included */}
      <main>
        {/* Page sections */}
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      
      {/* Footer component to be rendered at the bottom */}
      <Footer />
    </div>
  );
};

export default App;
