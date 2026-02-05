import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Modal from './components/Modal';
import './index.css';
import { portfolioData } from './data/portfolioData';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="portfolio-wrapper">
      <Header />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div style={{
        position: 'fixed',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'var(--accent)',
        filter: 'blur(150px)',
        opacity: 0.05,
        zIndex: -1
      }}></div>

      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer style={{
        padding: '40px',
        textAlign: 'center',
        borderTop: '1px solid #1e293b',
        color: 'var(--text-muted)',
        fontSize: '0.8rem'
      }}>
        Designed & Built by {portfolioData.name} • 2026
      </footer>
    </div>
  );
}

export default App;