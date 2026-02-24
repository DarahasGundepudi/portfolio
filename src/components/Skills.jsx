import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    Layers, Globe, Code2, Database, GitBranch, Cloud, Activity, Bot,
} from 'lucide-react';

const categories = [
    {
        title: 'MuleSoft',
        icon: <Layers size={18} />,
        tags: ['Anypoint Platform', 'Anypoint Studio', 'Mule ESB 4.x', 'CloudHub', 'DataWeave', 'RAML'],
    },
    {
        title: 'Integration & APIs',
        icon: <Globe size={18} />,
        tags: ['REST', 'SOAP', 'JSON', 'XML', 'SFTP/HTTP/DB Connectors', 'OAuth2', 'JWT'],
    },
    {
        title: 'Languages & Frameworks',
        icon: <Code2 size={18} />,
        tags: ['Java', 'Python', 'Spring Boot', 'Hibernate', 'Microservices'],
    },
    {
        title: 'Databases',
        icon: <Database size={18} />,
        tags: ['Oracle', 'MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'DynamoDB'],
    },
    {
        title: 'DevOps & Tools',
        icon: <GitBranch size={18} />,
        tags: ['Git', 'SVN', 'Bitbucket', 'Jenkins', 'Maven', 'MUnit', 'Postman', 'Swagger'],
    },
    {
        title: 'Cloud & Reporting',
        icon: <Cloud size={18} />,
        tags: ['AWS', 'Docker', 'Kubernetes', 'Tableau', 'Power BI', 'Confluence'],
    },
    {
        title: 'Monitoring',
        icon: <Activity size={18} />,
        tags: ['Splunk', 'Anypoint Monitoring', 'Log Correlation', 'Alerting', 'RCA'],
    },
    {
        title: 'AI Tools',
        icon: <Bot size={18} />,
        tags: ['Cursor AI Editor', 'AI-assisted Code Gen/Testing', 'MCP'],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" ref={ref}>
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">02 — Skills</span>
                <h2 className="section-title">Technical Arsenal</h2>
                <p className="section-subtitle">
                    Technologies and tools I leverage to build enterprise-grade solutions
                </p>
            </motion.div>

            <div className="skills-container">
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.title}
                        className="glass-card skill-category"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.08 * i }}
                    >
                        <div className="skill-category-title">
                            {cat.icon} {cat.title}
                        </div>
                        <div className="skill-tags">
                            {cat.tags.map((tag) => (
                                <span key={tag} className="skill-tag">{tag}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

