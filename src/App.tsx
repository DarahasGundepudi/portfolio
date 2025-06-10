import React from 'react';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink } from 'lucide-react';
import { ScrollingSkills } from './components/ScrollingSkills';

function App() {
  const projects = [
    {
      title: "Healthcare Data Analysis",
      description: "Led data preparation and analysis using Azure Databricks and Power BI for healthcare insights.",
      technologies: ['Azure', 'Databricks', 'Power BI', 'Python'],
      githubUrl: "https://github.com/yourusername/healthcare-data-analysis",
    },
    {
      title: "Trend Detection System",
      description: "Developed real-time sentiment analysis system for Reddit using Python and MongoDB.",
      technologies: ['Python', 'MongoDB', 'NLTK', 'Streamlit'],
      githubUrl: "https://github.com/yourusername/trend-detection-system",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header/Hero Section */}
      <header className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Srikrishna Darahas Gundepudi
            </h1>
            <h2 className="text-2xl font-semibold text-blue-400 mb-6">Data Scientist & ML Engineer</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate data scientist with expertise in machine learning and big data analytics. 
              Transforming complex datasets into actionable insights that drive business decisions.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all transform hover:scale-105">
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              <a 
                href="https://github.com/DarahasGundepudi?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-lg hover:bg-slate-600 transition-all transform hover:scale-105"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/darahasgundepudi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-lg hover:bg-slate-600 transition-all transform hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a 
                href="mailto:srikrishnadarahas.gundepudi@gmail.com" 
                className="flex items-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-lg hover:bg-slate-600 transition-all transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>
        <div className="relative">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Technical Expertise</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies and frameworks to solve complex data challenges
          </p>
          <ScrollingSkills />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Featured Projects</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Showcasing innovative solutions and impactful results
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-700">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium group"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Professional Experience</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Building expertise through challenging roles and innovative projects
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 relative pl-8 border-l-2 border-blue-400/30">
              <div className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-semibold mb-2 text-white">Application Architect</h3>
              <p className="text-gray-300 mb-2">Bank of America • February 2025 - Present</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Designing scalable architectures for enterprise applications</li>
                <li>Leading cross-functional teams in implementing secure solutions</li>
                <li>Overseeing cloud migrations and integration strategies</li>
              </ul>
            </div>

            <div className="mb-12 relative pl-8 border-l-2 border-blue-400/30">
              <div className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-semibold mb-2 text-white">Senior Mulesoft Developer</h3>
              <p className="text-gray-300 mb-2">Jetblue • September 2023 - January 2025</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Integrated complex systems using MuleSoft APIs</li>
                <li>Collaborated with cross-functional teams to optimize airline operations</li>
                <li>Led data migration and transformation initiatives</li>
              </ul>
            </div>
            <div className="mb-12 relative pl-8 border-l-2 border-blue-400/30">
              <div className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-semibold mb-2 text-white">Associate Software Engineer</h3>
              <p className="text-gray-300 mb-2">COFORGE • May 2021 - July 2022</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed RESTful APIs using MuleSoft Anypoint Studio</li>
                <li>Implemented AWS DynamoDB for scalable data storage</li>
                <li>Created comprehensive API documentation using Swagger</li>
              </ul>
            </div>
            <div className="relative pl-8 border-l-2 border-blue-400/30">
              <div className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-semibold mb-2 text-white">Intern</h3>
              <p className="text-gray-300 mb-2">COFORGE • June 2020 - April 2021</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Designed APIs using RAML and Anypoint API Platform</li>
                <li>Created Mule Flows using End Point Connectors</li>
                <li>Implemented API-led Connectivity and security schemes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Education & Certifications</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-white">University of Massachusetts Dartmouth</h4>
                <p className="text-gray-300">Master of Science in Data Science</p>
                <p className="text-gray-300">GPA: 3.63 • August 2024</p>
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Certifications</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Mulesoft Certified Developer
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Cisco Certified Network Associate
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Microsoft Certified: Azure Data Fundamentals
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Google Advance Data Analytics Certification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
              <p className="text-gray-400">Open to new opportunities and collaborations</p>
            </div>
            <div className="flex gap-6">
              <a href="tel:774-503-3869" className="hover:text-blue-400 flex items-center gap-2 transition-colors">
                <Phone className="w-5 h-5" /> +1-774-503-3869
              </a>
              <a href="mailto:srikrishnadarahas.gundepudi@gmail.com" className="hover:text-blue-400 flex items-center gap-2 transition-colors">
                <Mail className="w-5 h-5" /> Email
              </a>
              <a href="https://www.linkedin.com/in/darahasgundepudi/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 flex items-center gap-2 transition-colors">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-gray-400">© 2024 Srikrishna Darahas Gundepudi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;