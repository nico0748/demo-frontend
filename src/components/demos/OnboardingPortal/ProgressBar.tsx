import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type ProgressBarProps = {
    total: number;
    completed: number;
};

export const ProgressBar = ({ total, completed }: ProgressBarProps) => {
    const percentage = Math.round((completed / total) * 100);

    return (
        <div className="w-full">
            <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-bold text-slate-700">
                    Your Progress
                </span>
                <span className="text-xs font-medium text-slate-500">
                    {completed}/{total} Steps ({percentage}%)
                </span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
            </div>
        </div>
    );
};
