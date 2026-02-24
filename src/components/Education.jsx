import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, GraduationCap } from 'lucide-react';

const certifications = [
    { name: 'MuleSoft Certified Developer', date: 'Aug 2021' },
    { name: 'CCNA', date: 'Apr 2021' },
    { name: 'Microsoft Azure Data Fundamentals', date: 'Jun 2024' },
    { name: 'Google Advanced Data Analytics', date: 'Aug 2024' },
    { name: 'AWS Solutions Architect', date: '2025' },
];

export default function Education() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="education" ref={ref}>
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">04 — Education</span>
                <h2 className="section-title">Education & Certifications</h2>
            </motion.div>

            {/* Education */}
            <motion.div
                className="glass-card edu-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <GraduationCap size={40} style={{ color: 'var(--accent-secondary)', marginBottom: 16 }} />
                <h3>University of Massachusetts Dartmouth</h3>
                <p className="edu-degree">Master of Science in Data Science</p>
                <p className="edu-year">2024 · North Dartmouth, MA</p>
            </motion.div>

            {/* Certifications */}
            <div style={{ marginTop: 48 }}>
                <div className="cert-grid">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.name}
                            className="glass-card cert-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * i + 0.4 }}
                        >
                            <div className="cert-icon">
                                <Award size={22} />
                            </div>
                            <div className="cert-info">
                                <h4>{cert.name}</h4>
                                <p>{cert.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
