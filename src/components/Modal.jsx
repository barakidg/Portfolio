import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Modal({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-overlay">
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose} />

                    <motion.div
                        className="modal-content"
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}>
                        <button className="modal-close" onClick={onClose}>
                            <X size={24} />
                        </button>

                        <h2 style={{ marginBottom: '20px', color: 'var(--accent)' }}>The Backstory</h2>
                        <div className="modal-body">
                            <p>
                                My name is {portfolioData.name}. Here is a little bit about me.
                            </p>
                            <p style={{ marginTop: '15px' }}>
                                {portfolioData.backstory}
                            </p>
                            <p style={{ marginTop: '15px' }}>
                                My philosophy is simple: <strong>{portfolioData.philosophy}</strong>
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}