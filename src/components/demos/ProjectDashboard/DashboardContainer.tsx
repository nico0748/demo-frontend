"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardLayout } from './DashboardLayout';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from './ProjectDetail';
import { Project } from './types';
import { Search, Filter, Plus, Home } from 'lucide-react';

const MOCK_PROJECTS: Project[] = [
    {
        id: '1',
        name: 'Project A',
        description: 'Core infrastructure overhaul.',
        status: 'Active',
        members: ['Alice', 'Bob'],
        memberCount: 5,
        dueDate: '2024-12-01',
        progress: 0,
        tags: ['Infra'],
        notionUrl: 'https://notion.so/project-a',
        slackChannel: '#proj-a-core'
    },
    {
        id: '2',
        name: 'Project B',
        description: 'New mobile app development.',
        status: 'Active',
        members: ['Eve'],
        memberCount: 2,
        dueDate: '2025-01-15',
        progress: 0,
        tags: ['Mobile'],
        notionUrl: 'https://notion.so/project-b',
        slackChannel: '#proj-b-app'
    },
    {
        id: '3',
        name: 'Project C',
        description: 'Marketing campaign Q4.',
        status: 'Planning',
        members: ['Grace', 'Ivan'],
        memberCount: 3,
        dueDate: '2024-11-20',
        progress: 0,
        tags: ['Marketing'],
        notionUrl: 'https://notion.so/project-c',
        slackChannel: '#proj-c-marketing'
    },
    {
        id: '4',
        name: 'Project D',
        description: 'Internal security audit.',
        status: 'Active',
        members: ['Judy'],
        memberCount: 1,
        dueDate: '2024-10-30',
        progress: 0,
        tags: ['Security'],
        notionUrl: 'https://notion.so/project-d',
        slackChannel: '#proj-d-audit'
    },
    {
        id: '5',
        name: 'Project E',
        description: 'Backend migration.',
        status: 'Active',
        members: ['Kyle', 'Leo'],
        memberCount: 8,
        dueDate: '2025-03-01',
        progress: 0,
        tags: ['Backend'],
        notionUrl: 'https://notion.so/project-e',
        slackChannel: '#proj-e-backend'
    },
    {
        id: '6',
        name: 'Project F',
        description: 'Data analysis pipeline.',
        status: 'Completed',
        members: ['Oscar'],
        memberCount: 4,
        dueDate: '2024-09-01',
        progress: 0,
        tags: ['Data'],
        notionUrl: 'https://notion.so/project-f',
        slackChannel: '#proj-f-data'
    }
];

export const DashboardContainer = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <DashboardLayout>
            <div 
                className="relative flex flex-col h-full overflow-hidden bg-slate-50"
                onClick={() => setSelectedProject(null)}
            >
                {/* Header Section */}
                <div className="flex-none p-8 bg-white border-b border-slate-200">
                     <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                            <Home className="w-6 h-6 text-blue-600 mr-3" />
                            <div>
                                <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Project Dashboard</h1>
                                <p className="text-slate-500 text-sm">Manage and track your ongoing initiatives.</p>
                            </div>
                        </div>
                     </div>
                </div>

                {/* Main Content - Grid View */}
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 max-w-6xl mx-auto animate-in fade-in duration-500">
                        {MOCK_PROJECTS.map((project) => (
                            <ProjectCard 
                                key={project.id} 
                                project={project} 
                                onClick={(p) => setSelectedProject(p === selectedProject ? null : p)}
                                isSelected={selectedProject?.id === project.id}
                            />
                        ))}
                    </div>
                </div>

                {/* Details Panel - Slide In */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute bottom-0 left-0 right-0 h-[350px] border-t border-slate-200 bg-white overflow-hidden shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] z-20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ProjectDetail project={selectedProject} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </DashboardLayout>
    );
};
