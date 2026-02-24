import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-grid">
                {/* Left column — Identity */}
                <motion.div className="hero-left" variants={container} initial="hidden" animate="show">
                    <motion.div className="hero-greeting" variants={item}>
                        Hey there, I'm
                    </motion.div>

                    <motion.h1 className="hero-name" variants={item}>
                        Srikrishna G<span className="hero-name-dot">.</span>
                    </motion.h1>

                    <motion.div className="hero-meta" variants={item}>
                        <div className="hero-meta-item">
                            <Briefcase size={16} />
                            <span>Application Architect @ <strong>Bank of America</strong></span>
                        </div>
                        <div className="hero-meta-item">
                            <MapPin size={16} />
                            <span>New Jersey, USA</span>
                        </div>
                        <div className="hero-meta-item">
                            <GraduationCap size={16} />
                            <span>MS Data Science — UMass Dartmouth</span>
                        </div>
                    </motion.div>

                    <motion.div className="hero-cta-group" variants={item}>
                        <a href="#contact" className="btn btn-primary">
                            <Mail size={16} /> Let's Talk
                        </a>
                        <a
                            href="https://linkedin.com/in/srikrishna-g"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost"
                        >
                            <Linkedin size={16} /> LinkedIn
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right column — Summary */}
                <motion.div
                    className="hero-right"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <div className="hero-card">
                        <p className="hero-card-lead">
                            MuleSoft Certified Developer and Integration Engineer with <em>6+ years</em> of
                            experience designing robust API-led connectivity solutions, microservices, and
                            enterprise integrations.
                        </p>
                        <p>
                            My work spans Banking, Aviation, Retail, and Healthcare building high-throughput,
                            fault-tolerant architectures using MuleSoft Anypoint Platform, Spring Boot, Kafka,
                            and cloud-native solutions.
                        </p>
                        <div className="hero-card-stats">
                            <div className="hero-stat">
                                <span className="hero-stat-num">6+</span>
                                <span className="hero-stat-lbl">Years Experience</span>
                            </div>
                            <div className="hero-stat">
                                <span className="hero-stat-num">4+</span>
                                <span className="hero-stat-lbl">Years MuleSoft</span>
                            </div>
                            <div className="hero-stat">
                                <span className="hero-stat-num">5</span>
                                <span className="hero-stat-lbl">Certifications</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.a
                href="#skills"
                className="hero-scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <ChevronDown size={20} />
            </motion.a>
        </section>
    );
}
