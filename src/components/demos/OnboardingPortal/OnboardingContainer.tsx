"use client";

import React, { useState } from 'react';
import { DashboardLayout } from '../ProjectDashboard/DashboardLayout';
import { STEPS } from './data';
import { OnboardingProgress } from './types';
import { StepList } from './StepList';
import { StepDetail } from './StepDetail';
import { ProgressBar } from './ProgressBar';
import { CheckCircle2, Rocket } from 'lucide-react';

export const OnboardingContainer = () => {
    const [activeStepId, setActiveStepId] = useState(0);
    const [progress, setProgress] = useState<Record<number, OnboardingProgress>>({});

    const completedCount = Object.values(progress).filter(p => p.status === 'Completed').length;
    const totalCount = STEPS.length;

    const handleComplete = (stepId: number) => {
        setProgress(prev => {
            const currentObj = prev[stepId];
            const isNowCompleted = currentObj?.status !== 'Completed';
            
            return {
                ...prev,
                [stepId]: {
                    stepId,
                    status: isNowCompleted ? 'Completed' : 'Not Started',
                    completedAt: isNowCompleted ? new Date().toISOString() : undefined
                }
            };
        });
    };

    const activeStep = STEPS.find(s => s.id === activeStepId) || STEPS[0];

    return (
        <DashboardLayout>
            <div className="flex h-full bg-white divide-x divide-slate-100">
                {/* Left Sidebar - Step List */}
                <div className="w-[400px] flex flex-col bg-slate-50/50">
                    <div className="p-6 border-b border-slate-100 bg-white">
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                                <Rocket className="w-6 h-6" />
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-slate-900">Onboarding</h1>
                                <div className="text-xs text-slate-500">Welcome to the team!</div>
                            </div>
                        </div>
                        <ProgressBar total={totalCount} completed={completedCount} />
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                         <StepList 
                            steps={STEPS} 
                            progress={progress} 
                            activeStepId={activeStepId}
                            onStepClick={setActiveStepId}
                        />
                    </div>
                </div>

                {/* Main Content - Detail */}
                <div className="flex-1 overflow-y-auto bg-white p-12">
                    <StepDetail 
                        step={activeStep}
                        progress={progress[activeStep.id] || { stepId: activeStep.id, status: 'Not Started' }}
                        onComplete={handleComplete}
                        onNext={activeStepId < totalCount - 1 ? () => setActiveStepId(activeStepId + 1) : undefined}
                        onPrev={activeStepId > 0 ? () => setActiveStepId(activeStepId - 1) : undefined}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
};
