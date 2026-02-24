import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
    { number: '6+', label: 'Years Exp' },
    { number: '4+', label: 'Years MuleSoft' },
    { number: '5', label: 'Certifications' },
];

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" ref={ref}>
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">01 — About</span>
                <h2 className="section-title">Who I Am</h2>
            </motion.div>

            <div className="about-grid">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: -40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <p>
                        I'm a <strong>MuleSoft Certified Developer</strong> and Integration Engineer with deep
                        expertise in API-led connectivity, RESTful services, and enterprise integrations. My work
                        spans across Banking (Bank of America), Aviation (JetBlue), Retail (Chalhoub Group), and
                        more.
                    </p>
                    <p>
                        I specialize in designing high-throughput, fault-tolerant integration architectures using
                        MuleSoft Anypoint Platform, Spring Boot microservices, and cloud-native solutions. I'm
                        passionate about building clean, scalable systems and streamlining complex workflows.
                    </p>
                    <p>
                        With a <strong>Master of Science in Data Science</strong> from UMass Dartmouth, I also
                        bring strong analytical skills to the table — enabling data-driven decision-making alongside
                        robust engineering.
                    </p>
                </motion.div>

                {/* <motion.div
                    className="about-stats"
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    {stats.map((s, i) => (
                        <div key={i} className="glass-card stat-card">
                            <div className="stat-number">{s.number}</div>
                            <div className="stat-label">{s.label}</div>
                        </div>
                    ))}
                </motion.div> */}
            </div>
        </section>
    );
}
