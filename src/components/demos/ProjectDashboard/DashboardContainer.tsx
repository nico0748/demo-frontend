"use client";

import React, { useState } from 'react';
import { DashboardLayout } from './DashboardLayout';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from './ProjectDetail';
import { Project } from './types';
import { Search, Filter, Plus, Home } from 'lucide-react';

const MOCK_PROJECTS: Project[] = [
    {
        id: '1',
        name: 'Project A', // Updated names to match request
        description: '...',
        status: 'Active',
        members: ['Alice', 'Bob', 'Charlie', 'Dave'],
        memberCount: 5,
        dueDate: '',
        progress: 0,
        tags: ['Web']
    },
    {
        id: '2',
        name: 'Project B',
        description: '...',
        status: 'Active',
        members: ['Eve', 'Frank'],
        memberCount: 2,
        dueDate: '',
        progress: 0,
        tags: ['Mobile']
    },
    {
        id: '3',
        name: 'Project C',
        description: '...',
        status: 'Planning',
        members: ['Grace', 'Heidi', 'Ivan'],
        memberCount: 3,
        dueDate: '',
        progress: 0,
        tags: ['Marketing']
    },
    {
        id: '4',
        name: 'Project D',
        description: '...',
        status: 'Active',
        members: ['Judy'],
        memberCount: 1,
        dueDate: '',
        progress: 0,
        tags: ['Internal']
    },
    {
        id: '5',
        name: 'Project E',
        description: '...',
        status: 'Active',
        members: ['Kyle', 'Leo', 'Mia', 'Nina'],
        memberCount: 8,
        dueDate: '',
        progress: 0,
        tags: ['Backend']
    },
    {
        id: '6',
        name: 'Project F',
        description: '...',
        status: 'Completed',
        members: ['Oscar', 'Paul'],
        memberCount: 4,
        dueDate: '',
        progress: 0,
        tags: ['Analytic']
    }
];

export const DashboardContainer = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full overflow-hidden bg-slate-50">
                {/* Top Section: Project Grid */}
                <div className="flex-1 overflow-y-auto p-12 bg-white">
                    {/* Header - Simple Title */}
                    <div className="flex items-center mb-10 pb-4 border-b border-slate-100">
                        <Home className="w-5 h-5 text-slate-400 mr-2" />
                        <h1 className="text-xl font-bold text-slate-800 tracking-tight">Project Management Dashboard</h1>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 max-w-6xl mx-auto">
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

                {/* Bottom Section: Details Panel */}
                <div className="h-[350px] border-t border-slate-200 bg-white overflow-hidden shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] z-10 relative">
                    {selectedProject ? (
                        <ProjectDetail project={selectedProject} />
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-slate-300">
                            <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center mb-4">
                                <Search className="w-8 h-8 text-slate-300" />
                            </div>
                            <p className="font-medium">Select a project to view properties</p>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};
