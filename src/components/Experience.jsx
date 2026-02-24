import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const jobs = [
    {
        company: 'Bank of America',
        role: 'Application Architect',
        date: 'Feb 2025 – Present',
        location: 'New Jersey, USA',
        bullets: [
            'Led architectural enhancements for an internal audit technology platform, improving integration reliability and traceability.',
            'Enhanced a Spring Boot, MuleSoft, and Oracle ecosystem by strengthening service design and stabilizing production workflows.',
            'Designed API-first workflows for audit case intake, validations, routing, approvals, and end-to-end status tracking.',
            'Tuned Oracle SQL for high-volume datasets to improve performance and stability for audit processing.',
            'Implemented anomaly and fraud detection logic (rule-based + pattern detection) to flag exceptions earlier in the audit cycle.',
            'Strengthened MuleSoft API-led connectivity (System / Process / Experience APIs) for better orchestration and governance.',
            'Implemented event-driven integration using Kafka for near real-time alerts and workflow automation.',
            'Automated deployments using CI/CD pipelines and Ansible for repeatable releases.',
        ],
    },
    {
        company: 'JetBlue',
        role: 'Senior MuleSoft Developer',
        date: 'Sep 2023 – Jan 2025',
        location: 'New Jersey, USA',
        bullets: [
            'Engineered robust API solutions using MuleSoft Anypoint Studio with a focus on high availability and fault tolerance.',
            'Orchestrated complex integration flows using Mule ESB across retail and healthcare domains.',
            'Built and optimized backend components using Java and Spring Boot for better performance and scalability.',
            'Secured APIs using OAuth2 and JWT policies via API Manager.',
            'Integrated MuleSoft with Azure Service Bus and Blob Storage for async workflows.',
            'Implemented monitoring with Splunk and Anypoint Monitoring for improved incident triage.',
        ],
    },
    {
        company: 'Chalhoub Group',
        role: 'Senior MuleSoft Developer',
        date: 'May 2021 – Jul 2022',
        location: 'Hyderabad, India',
        bullets: [
            'Developed RESTful APIs using MuleSoft with DataWeave, adhering to RAML standards.',
            'Integrated APIs with AWS SFTP for secure data transfers with integrity validations.',
            'Built standardized error handling frameworks to improve maintainability.',
            'Mentored junior developers via code reviews and troubleshooting support.',
        ],
    },
    {
        company: 'TMF Group',
        role: 'MuleSoft Developer',
        date: 'Mar 2020 – Apr 2021',
        location: 'Hyderabad, India',
        bullets: [
            'Built high-performance APIs and integrated with Oracle SQL Developer and AWS DynamoDB.',
            'Authored RAML contracts to define API interfaces across stakeholders.',
            'Configured Mule flows to interact with AWS S3 and DynamoDB for file/data management.',
            'Enforced OAuth and API Key policies to secure APIs.',
        ],
    },
    {
        company: 'E-Commerce Platform',
        role: 'Lead Java Developer',
        date: 'Jun 2019 – Feb 2020',
        location: 'India',
        bullets: [
            'Architected a microservices-based banking solution, improving transaction processing speed by 30%.',
            'Implemented CI/CD pipelines using Jenkins and containerized services with Docker.',
            'Improved performance using Redis caching and strengthened code quality via JUnit/Mockito.',
        ],
    },
    {
        company: 'Mindtree',
        role: 'Associate Software Engineer',
        date: 'Apr 2018 – Jun 2019',
        location: 'India',
        bullets: [
            'Built a scalable e-commerce platform using Spring Boot microservices.',
            'Configured Apache Kafka for real-time messaging and analytics.',
            'Enforced security controls using Spring Security.',
        ],
    },
];

export default function Experience() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="experience" ref={ref}>
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">03 — Experience</span>
                <h2 className="section-title">Where I've Worked</h2>
            </motion.div>

            <div className="timeline">
                {jobs.map((job, i) => (
                    <motion.div
                        key={i}
                        className="glass-card timeline-item"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.12 * i }}
                    >
                        <div className="timeline-header">
                            <div>
                                <div className="timeline-company">{job.company}</div>
                                <div className="timeline-role">{job.role}</div>
                            </div>
                            <div className="timeline-meta">
                                <span className="timeline-date">{job.date}</span>
                                <div className="timeline-location">{job.location}</div>
                            </div>
                        </div>
                        <ul className="timeline-bullets">
                            {job.bullets.map((b, j) => (
                                <li key={j}>{b}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
