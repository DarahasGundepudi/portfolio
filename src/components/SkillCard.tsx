import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function SkillCard({ Icon, title, description }: SkillCardProps) {
  return (
    <div className="flex-shrink-0 w-80 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition bg-white">
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}