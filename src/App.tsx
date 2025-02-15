import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, GraduationCap } from 'lucide-react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <section id="hero" className="pt-20 pb-32 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <img
               src="https://github.com/sourabhvamdevan.png"
              alt="Sourabh Vamdevan"
              className="w-48 h-48 rounded-full border-4 border-white shadow-xl mb-8"
            />
            <h1 className="text-5xl font-bold mb-4">Sourabh Vamdevan</h1>
            <p className="text-xl text-gray-300 mb-8">Aspiring Computer Science Engineer</p>
            <div className="flex gap-4">
              <a href="https://github.com/sourabhvamdevan" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/sourabh-vamdevan-0b9801287/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:sourabhvamdevan2005@gmailcom." className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
        
        <About />
        <Projects />
        <Certifications />
        
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 Sourabh Vamdevan. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;