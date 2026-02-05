import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Header() {
    const { scrollY } = useScroll();
    const { contact, name } = portfolioData;

    const opacity = useTransform(scrollY, [100, 200], [0, 1]);
    const y = useTransform(scrollY, [100, 200], [-50, 0]);
    const scale = useTransform(scrollY, [100, 200], [0.8, 1]);

    return (
        <motion.header
            style={{ opacity, y, scale }}
            className="fixed-header-container"
        >
            <div className="header-glass-pill">
                <span className="nav-name">
                    {name.split(' ')[0]}<span className="accent">.</span>
                </span>

                <nav className="nav-icons">
                    <a href={`mailto:${contact.email}`} className="nav-link" title="Email">
                        <Mail size={20} />
                        <span className="link-dot"></span>
                    </a>
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="nav-link" title="LinkedIn">
                        <Linkedin size={20} />
                        <span className="link-dot"></span>
                    </a>
                    <a href={contact.github} target="_blank" rel="noopener noreferrer" className="nav-link" title="GitHub">
                        <Github size={20} />
                        <span className="link-dot"></span>
                    </a>
                </nav>
            </div>
        </motion.header>
    );
}