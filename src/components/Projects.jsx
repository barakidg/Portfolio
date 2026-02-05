import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Github } from 'lucide-react';

export default function Projects() {
    return (
        <section id="projects">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}>
                Selected Works
            </motion.h2>
            <div className="project-grid">
                {portfolioData.projects.map((p, i) => {
                    const isInProgress = p.status === 'in-progress';

                    return (
                        <motion.a
                            key={i}
                            href={isInProgress ? undefined : p.link}
                            target={isInProgress ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="project-card-link"
                            style={{
                                cursor: isInProgress ? 'default' : 'pointer',
                                pointerEvents: isInProgress ? 'none' : 'auto'
                            }}
                            onClick={(e) => isInProgress && e.preventDefault()}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}>
                            <div className="card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <small className={`status-label ${isInProgress ? 'status-in-progress' : 'accent'}`}
                                        style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        {p.status}
                                    </small>
                                    {!isInProgress && <Github size={20} className="project-icon" />}
                                </div>
                                <h3 style={{ margin: '20px 0 12px', color: 'var(--text-main)' }}>{p.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                    {p.desc}
                                </p>
                                {!isInProgress && (
                                    <div className="view-project">
                                        View Project →
                                    </div>
                                )}
                            </div>
                        </motion.a>
                    );
                })}
            </div>
        </section>
    );
}