import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
                <span></span><span></span><span></span>
            </button>

            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                {navItems.map((item, i) => (
                    <motion.li
                        key={item.href}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * i + 0.3 }}
                    >
                        <a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
                    </motion.li>
                ))}
                <motion.li
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <a href="https://linkedin.com/in/srikrishna-g" target="_blank" rel="noopener noreferrer" className="nav-resume-btn">
                        Resume
                    </a>
                </motion.li>
            </ul>
        </motion.nav>
    );
}
