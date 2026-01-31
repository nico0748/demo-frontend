import React from 'react';
import { OnboardingStep, OnboardingProgress } from './types';
import { cn } from '@/lib/utils';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

type StepListProps = {
    steps: OnboardingStep[];
    progress: Record<number, OnboardingProgress>;
    activeStepId: number;
    onStepClick: (stepId: number) => void;
};

export const StepList = ({ steps, progress, activeStepId, onStepClick }: StepListProps) => {
    return (
        <div className="space-y-1">
            {steps.map((step) => {
                const isCompleted = progress[step.id]?.status === 'Completed';
                const isActive = activeStepId === step.id;

                return (
                    <button
                        key={step.id}
                        onClick={() => onStepClick(step.id)}
                        className={cn(
                            "w-full flex items-center p-3 text-left rounded-lg transition-all border",
                            isActive 
                                ? "bg-blue-50 border-blue-200 shadow-sm"
                                : "bg-white border-transparent hover:bg-slate-50"
                        )}
                    >
                        <div className={cn(
                            "flex-shrink-0 mr-3",
                            isCompleted ? "text-emerald-500" : isActive ? "text-blue-500" : "text-slate-300"
                        )}>
                            {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className={cn(
                                "text-sm font-medium truncate",
                                isCompleted ? "text-slate-500 line-through" : isActive ? "text-blue-800" : "text-slate-700"
                            )}>
                                {step.title}
                            </div>
                            <div className="flex items-center text-[10px] text-slate-400 mt-0.5 space-x-2">
                                <span className="uppercase tracking-wider font-bold">{step.category}</span>
                                {step.estimatedTime && (
                                    <span className="flex items-center">
                                        <Clock className="w-3 h-3 mr-1" />
                                        {step.estimatedTime}
                                    </span>
                                )}
                            </div>
                        </div>
                    </button>
                );
            })}
        </div>
    );
};
