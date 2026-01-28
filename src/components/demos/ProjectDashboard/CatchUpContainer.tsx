"use client";

import React, { useState } from 'react';
import { DashboardLayout } from './DashboardLayout';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from './ProjectDetail';
import { CatchUpMatrix } from './CatchUpMatrix';
import { StatusUpdateModal } from './StatusUpdateModal';
import { Project, Employee, ProjectCatchUp, CatchUpLevel } from './types';
import { Search, Filter, Plus, Home, Grid, Table as TableIcon } from 'lucide-react';

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

const MOCK_EMPLOYEES: Employee[] = [
    { id: '101', name: 'Alice Smith', department: 'Engineering' },
    { id: '102', name: 'Bob Jones', department: 'Engineering' },
    { id: '103', name: 'Charlie Day', department: 'Product' },
    { id: '104', name: 'Dave Wilson', department: 'Design' },
    { id: '105', name: 'Eve Miller', department: 'Engineering' },
    { id: '106', name: 'Frank Moore', department: 'Sales' },
];

const INITIAL_CATCHUP_DATA: ProjectCatchUp[] = [
    { userId: '101', projectId: '1', status: 5, updatedAt: '2024-01-01' },
    { userId: '101', projectId: '2', status: 2, updatedAt: '2024-01-02' },
    { userId: '102', projectId: '1', status: 4, updatedAt: '2024-01-03' },
    { userId: '103', projectId: '1', status: 1, updatedAt: '2024-01-01' },
    { userId: '103', projectId: '3', status: 5, updatedAt: '2024-01-01' },
    { userId: '105', projectId: '2', status: 3, updatedAt: '2024-01-01' },
];

export const CatchUpContainer = () => {
    // const [viewMode, setViewMode] = useState<'grid' | 'matrix'>('matrix'); // Default to matrix for this page
    const [catchUpData, setCatchUpData] = useState<ProjectCatchUp[]>(INITIAL_CATCHUP_DATA);
    
    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCell, setEditingCell] = useState<{employee: Employee, project: Project, currentStatus?: ProjectCatchUp} | null>(null);

    const handleCellClick = (employee: Employee, project: Project, currentStatus?: ProjectCatchUp) => {
        setEditingCell({ employee, project, currentStatus });
        setIsModalOpen(true);
    };

    const handleSaveStatus = (level: CatchUpLevel, comment: string) => {
        if (!editingCell) return;

        setCatchUpData(prev => {
            const newData = prev.filter(d => !(d.userId === editingCell.employee.id && d.projectId === editingCell.project.id));
            newData.push({
                userId: editingCell.employee.id,
                projectId: editingCell.project.id,
                status: level,
                comment,
                updatedAt: new Date().toISOString()
            });
            return newData;
        });
        setIsModalOpen(false);
        setEditingCell(null);
    };

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full overflow-hidden bg-slate-50">
                {/* Header Section */}
                <div className="flex-none p-8 bg-white border-b border-slate-200">
                     <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                            <TableIcon className="w-6 h-6 text-blue-600 mr-3" />
                            <div>
                                <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Catch-up Dashboard</h1>
                                <p className="text-slate-500 text-sm">Monitor team engagement across projects.</p>
                            </div>
                        </div>
                     </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-full animate-in fade-in duration-500">
                         <div className="mb-4 flex justify-between items-end">
                             <h2 className="text-lg font-bold text-slate-700">Team Status Overview</h2>
                             <div className="text-xs text-slate-400">
                                 Click a cell to update status
                             </div>
                         </div>
                         <CatchUpMatrix 
                            employees={MOCK_EMPLOYEES} 
                            projects={MOCK_PROJECTS} 
                            catchUpData={catchUpData} 
                            onCellClick={handleCellClick}
                         />
                    </div>
                </div>

                {/* Status Update Modal */}
                <StatusUpdateModal 
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    employee={editingCell?.employee || null}
                    project={editingCell?.project || null}
                    currentStatus={editingCell?.currentStatus}
                    onSave={handleSaveStatus}
                />
            </div>
        </DashboardLayout>
    );
};
