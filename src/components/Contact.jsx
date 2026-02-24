import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="contact" ref={ref}>
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">05 — Contact</span>
                <h2 className="section-title">Let's Connect</h2>
            </motion.div>

            <motion.div
                className="contact-content"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <p>
                    I'm always open to discussing new opportunities, integration architecture challenges,
                    or just having a tech conversation. Feel free to reach out!
                </p>

                <div className="contact-links">
                    <a href="mailto:srikrishnad0209@gmail.com" className="glass-card contact-link">
                        <Mail size={20} /> srikrishnad0209@gmail.com
                    </a>
                    <a href="tel:+17745033869" className="glass-card contact-link">
                        <Phone size={20} /> +1-774-503-3869
                    </a>
                    <a
                        href="https://linkedin.com/in/srikrishna-g"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card contact-link"
                    >
                        <Linkedin size={20} /> LinkedIn
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
