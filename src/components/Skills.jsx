import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
    return (
        <section id="skills">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}>
                Skills
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}>
                    <p style={{ color: 'var(--accent)', fontWeight: 'bold', marginBottom: '15px' }}>// MASTERED</p>
                    <div className="tags-container">
                        {portfolioData.skills.known.map((s, i) => (
                            <motion.span
                                key={s}
                                className="tag"
                                initial={{ opacity: 0, scale: 0.8, y: 20, x: -10 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: i * 0.08
                                }}
                                viewport={{ once: false }}>
                                {s}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}>
                    <p style={{ color: '#c084fc', fontWeight: 'bold', marginBottom: '15px' }}>// LEARNING</p>
                    <div className="tags-container">
                        {portfolioData.skills.learning.map((s, i) => (
                            <motion.span
                                key={s}
                                className="tag learning"
                                initial={{ opacity: 0, scale: 0.8, y: 20, x: 10 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: i * 0.08
                                }}
                                viewport={{ once: false }}>
                                {s}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}