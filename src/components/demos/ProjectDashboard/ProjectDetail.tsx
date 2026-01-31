import React, { useState } from 'react';
import { Project } from './types';
import { cn } from '@/lib/utils';
import { Calendar, CheckCircle2, Clock, FileText, MessageSquare, SlidersHorizontal, Settings2, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ProjectDetailProps = {
    project: Project;
};

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'actions' | 'interactions'>('overview');

    const TabButton = ({ id, label, icon: Icon, count }: { id: typeof activeTab, label: string, icon: any, count?: number }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={cn(
                "flex items-center h-full px-4 text-xs font-semibold transition-colors border-b-2 relative",
                activeTab === id
                    ? "border-blue-500 text-blue-600 bg-blue-50/50"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            )}
        >
            {label}
            {count && (
                <span className="ml-2 bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded-full text-[10px]">
                    {count}
                </span>
            )}
        </button>
    );

    const PropertyRow = ({ name, value, type = "text" }: { name: string, value: string, type?: "boolean" | "text" }) => (
        <div className="flex items-center py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50/80 px-4 -mx-4 transition-colors">
             <div className="w-1/3 text-xs font-medium text-slate-500">{name}</div>
             <div className="w-2/3 text-sm text-slate-700 font-mono">
                 {type === 'boolean' ? (
                     <span className={cn(
                         "px-2 py-0.5 rounded text-[10px] uppercase font-bold",
                         value === 'True' ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-600"
                     )}>
                         {value}
                     </span>
                 ) : (
                     value
                 )}
             </div>
        </div>
    );

    return (
        <div className="h-full flex flex-col bg-white">
            {/* Toolbar / Tabs */}
            <div className="flex items-center justify-between px-0 border-b border-slate-200 bg-white h-10 shrink-0">
                 <div className="flex items-center space-x-0 h-full border-r border-slate-200">
                    <TabButton id="overview" label="Controls" count={4} icon={SlidersHorizontal} />
                    <TabButton id="actions" label="Actions" count={9} icon={CheckCircle2} />
                    <TabButton id="interactions" label="Interactions" icon={MessageSquare} />
                 </div>
                 
                 <div className="flex items-center px-4 space-x-2">
                     <button className="text-slate-400 hover:text-slate-600"><Info className="w-4 h-4" /></button>
                     <button className="text-slate-400 hover:text-slate-600"><Settings2 className="w-4 h-4" /></button>
                 </div>
            </div>

            {/* Content Area */}
            <div className="p-0 overflow-y-auto flex-1 bg-white">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                    <motion.div 
                        key="overview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-8 py-6"
                    >
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                            Project Properties
                        </h4>
                        
                        <div className="max-w-3xl">
                             <PropertyRow name="Name" value={project.name} />
                             <PropertyRow name="Status" value={project.status} />
                             <PropertyRow name="Lead" value={project.members[0]} />
                             <PropertyRow name="Framework" value={project.tags[0] || "React"} />
                             
                             {project.notionUrl && <PropertyRow name="Notion" value={project.notionUrl} />}
                             {project.slackChannel && <PropertyRow name="Slack" value={project.slackChannel} />}
                             
                             <PropertyRow name="Repository" value={`github.com/demo/${project.id}`} />
                             <PropertyRow name="Is Public" value="False" type="boolean" />
                             <PropertyRow name="Auto-Deploy" value="True" type="boolean" />
                        </div>
                    </motion.div>
                )}
                 {/* Empty states for other tabs */}
                 {activeTab !== 'overview' && (
                     <div className="p-8 text-center text-slate-400 text-sm italic">
                         No controls available for this selection.
                     </div>
                 )}
              </AnimatePresence>
            </div>
        </div>
    );
};
