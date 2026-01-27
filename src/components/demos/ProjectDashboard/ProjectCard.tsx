import React from 'react';
import { User, MoreHorizontal, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Project } from './types';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  project: Project;
  onClick: (project: Project) => void;
  isSelected: boolean;
};

export const ProjectCard = ({ project, onClick, isSelected }: ProjectCardProps) => {
  return (
    <motion.div 
      layoutId={`project-${project.id}`}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={() => onClick(project)}
      className={cn(
        "cursor-pointer group relative flex flex-col items-center justify-center p-8 bg-white rounded-2xl border transition-all duration-300 min-h-[220px]",
        isSelected 
          ? "border-blue-500 shadow-[0_0_0_2px_rgba(59,130,246,1)]" 
          : "border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
      )}
    >
      <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center tracking-tight leading-tight">
        {project.name}
      </h3>

      <div className="flex items-center -space-x-4">
          {project.members.map((member, i) => (
             <div key={i} className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full ring-4 ring-white bg-slate-800 flex items-center justify-center text-white shadow-md z-10">
                    <User className="w-6 h-6" />
                 </div>
                 {/* Optional: if you want to show silhouettes vividly, simple Icon is good. */}
             </div>
          ))}
          {project.memberCount > project.members.length && (
              <div className="w-12 h-12 rounded-full ring-4 ring-white bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500 z-0">
                  +{project.memberCount - project.members.length}
              </div>
          )}
      </div>
    </motion.div>
  );
};

