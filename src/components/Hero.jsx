import { motion } from 'framer-motion';
import profilePic from '../assets/cl.png';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenModal }) {
    const firstName = portfolioData.name.split(' ')[0];
    const charCount = firstName.length;

    return (
        <section className="hero-container">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}>
                <div style={{ minHeight: '80px', display: 'flex', alignItems: 'center' }}>
                    <h1 style={{ fontSize: '3.5rem', margin: 0, display: 'flex', alignItems: 'center' }}>
                        <span style={{ whiteSpace: 'pre' }}>Hi, I'm </span>
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: `${charCount}ch` }}
                            transition={{
                                duration: 2,
                                ease: "steps(" + charCount + ")",
                                repeat: Infinity,
                                repeatType: "reverse",
                                repeatDelay: 0.5
                            }}
                            className="accent"
                            style={{
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                borderRight: '3px solid var(--accent)',
                                display: 'inline-block',
                                fontFamily: 'monospace',
                                paddingRight: '2px'
                            }}>
                            {firstName}
                        </motion.span>
                    </h1>
                </div>
                <p className="hero-role" style={{ fontSize: '1.5rem', color: 'var(--text-dim)', marginTop: '10px' }}>
                    {portfolioData.role}
                </p>
                <p className="hero-bio" style={{ maxWidth: '500px', marginTop: '20px', color: 'var(--text-muted)' }}>
                    {portfolioData.bio}
                    <button className="more-btn" onClick={onOpenModal}>More about me →</button>
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="hero-image">
                <img src={profilePic} alt="Profile" />
            </motion.div>
        </section>
    );
}