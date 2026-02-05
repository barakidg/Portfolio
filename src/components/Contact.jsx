import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
    const { contact } = portfolioData;

    return (
        <section id="contact" style={{ textAlign: 'center', alignItems: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2>Get In Touch</h2>
                <p style={{ color: 'var(--text-dim)', maxWidth: '500px', marginBottom: '40px' }}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                </p>

                <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
                    <a href={`mailto:${contact.email}`} className="contact-link" title="Email Me">
                        <Mail size={32} />
                    </a>
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link" title="LinkedIn">
                        <Linkedin size={32} />
                    </a>
                    <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link" title="GitHub">
                        <Github size={32} />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}