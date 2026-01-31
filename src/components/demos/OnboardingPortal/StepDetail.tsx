import React from 'react';
import { OnboardingStep, OnboardingProgress } from './types';
import { cn } from '@/lib/utils';
import { Check, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { BasicInfoForm } from './BasicInfoForm';

type StepDetailProps = {
    step: OnboardingStep;
    progress: OnboardingProgress;
    onComplete: (stepId: number) => void;
    onNext?: () => void;
    onPrev?: () => void;
};

export const StepDetail = ({ step, progress, onComplete, onNext, onPrev }: StepDetailProps) => {
    const isCompleted = progress?.status === 'Completed';

    return (
        <motion.div 
            key={step.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="h-full flex flex-col max-w-3xl mx-auto"
        >
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-bold uppercase rounded tracking-wider">
                        {step.category}
                    </span>
                    <span className="text-slate-400 text-xs font-medium">
                        Estimated: {step.estimatedTime}
                    </span>
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    {step.description}
                </p>
            </div>

            {/* Content Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm mb-8">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                    Actions Required
                </h3>
                
                <div className="space-y-4">
                    {step.notionUrl && (
                        <a 
                            href={step.notionUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-lg transition-all group"
                        >
                            <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                                <span className="text-xl">N</span>
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Open Instruction Guide</div>
                                <div className="text-xs text-slate-500">View detailed steps in Notion</div>
                            </div>
                            <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-600" />
                        </a>
                    )}

                    {step.externalUrl && (
                        <a 
                            href={step.externalUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-lg transition-all group"
                        >
                             <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                                <ExternalLink className="w-5 h-5 text-slate-400" />
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Access External Service</div>
                                <div className="text-xs text-slate-500">Go to external implementation page</div>
                            </div>
                        </a>
                    )}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100">
                    {step.id === 0 && !isCompleted ? (
                        <BasicInfoForm onComplete={() => onComplete(step.id)} />
                    ) : (
                        <label className={cn(
                            "flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all",
                            isCompleted 
                                ? "border-emerald-500 bg-emerald-50" 
                                : "border-slate-200 hover:border-slate-300 bg-white"
                        )}>
                            <input 
                                type="checkbox" 
                                checked={isCompleted} 
                                onChange={() => onComplete(step.id)}
                                className="sr-only"
                            />
                            <div className={cn(
                                "w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-colors",
                                isCompleted ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300 bg-white"
                            )}>
                                {isCompleted && <Check className="w-4 h-4" />}
                            </div>
                            <div>
                                <div className={cn("font-bold", isCompleted ? "text-emerald-700" : "text-slate-700")}>
                                    {isCompleted ? "Step Completed!" : "Mark as Completed"}
                                </div>
                                <div className="text-xs text-slate-500 mt-0.5">
                                    {isCompleted ? "Great job! You can proceed to the next step." : "Check this box once you have finished all tasks above."}
                                </div>
                            </div>
                        </label>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-auto pt-4">
                <button 
                    onClick={onPrev}
                    disabled={!onPrev}
                    className="flex items-center px-4 py-2 text-slate-500 hover:text-slate-800 disabled:opacity-30 disabled:hover:text-slate-500 transition-colors font-medium"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                </button>
                <button 
                    onClick={onNext}
                    disabled={!onNext}
                    className="flex items-center px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:hover:bg-slate-900 transition-all font-bold shadow-lg shadow-slate-200"
                >
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                </button>
            </div>
        </motion.div>
    );
};
