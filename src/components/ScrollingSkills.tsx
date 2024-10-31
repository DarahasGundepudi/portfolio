import React from 'react';
import {
  Database, // SQL
  Cloud, // AWS
  Cpu, // ML
  BarChart, // Data Analysis
  BrainCircuit, // Neural Networks
  GitBranch, // Version Control
  Server, // Azure
  Workflow, // MuleSoft
  MonitorDot, // Monitoring
  PieChart, // Visualization
  Binary, // Python
  Network // Deep Learning
} from 'lucide-react';

const skills = [
  {
    icon: Binary,
    label: "Python",
  },
  {
    icon: Database,
    label: "MySQL",
  },
  {
    icon: Workflow,
    label: "MuleSoft",
  },
  {
    icon: Cloud,
    label: "AWS",
  },
  {
    icon: Server,
    label: "Azure",
  },
  {
    icon: BrainCircuit,
    label: "Neural Networks",
  },
  {
    icon: Cpu,
    label: "Machine Learning",
  },
  {
    icon: BarChart,
    label: "Data Analysis",
  },
  {
    icon: PieChart,
    label: "Data Visualization",
  },
  {
    icon: Network,
    label: "Deep Learning",
  },
  {
    icon: GitBranch,
    label: "Version Control",
  },
  {
    icon: MonitorDot,
    label: "Monitoring",
  }
];

export function ScrollingSkills() {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="p-4 rounded-full bg-blue-900/30 group-hover:bg-blue-800/40 transition-colors">
              <skill.icon className="w-8 h-8 text-blue-400" />
            </div>
            <span className="mt-2 text-sm text-gray-300 text-center">{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}