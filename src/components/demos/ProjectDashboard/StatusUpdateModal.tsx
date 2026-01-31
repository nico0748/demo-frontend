import React, { useState, useEffect } from 'react';
import { Employee, Project, CatchUpLevel, CatchUpLabels, ProjectCatchUp } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type StatusUpdateModalProps = {
    isOpen: boolean;
    onClose: () => void;
    employee: Employee | null;
    project: Project | null;
    currentStatus?: ProjectCatchUp;
    onSave: (level: CatchUpLevel, comment: string) => void;
};

export const StatusUpdateModal = ({ isOpen, onClose, employee, project, currentStatus, onSave }: StatusUpdateModalProps) => {
    const [selectedLevel, setSelectedLevel] = useState<CatchUpLevel>(1);
    const [comment, setComment] = useState('');

    useEffect(() => {
        if (isOpen && currentStatus) {
            setSelectedLevel(currentStatus.status);
            setComment(currentStatus.comment || '');
        } else if (isOpen) {
            setSelectedLevel(1);
            setComment('');
        }
    }, [isOpen, currentStatus]);

    if (!isOpen || !employee || !project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black z-40"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
                    >
                        <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto mx-4">
                            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                <h3 className="text-lg font-bold text-slate-800">Update Status</h3>
                                <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="p-6">
                                <div className="mb-6">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Target</div>
                                    <div className="flex items-center space-x-2 text-sm text-slate-700 font-medium">
                                        <span className="font-bold text-slate-900">{employee.name}</span>
                                        <span className="text-slate-300">/</span>
                                        <span className="font-bold text-blue-600">{project.name}</span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Catch-up Level</div>
                                    {([1, 2, 3, 4, 5] as CatchUpLevel[]).map((level) => (
                                        <label 
                                            key={level}
                                            className={cn(
                                                "flex items-center p-3 rounded-lg border cursor-pointer transition-all",
                                                selectedLevel === level 
                                                    ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500" 
                                                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                            )}
                                        >
                                            <input 
                                                type="radio" 
                                                name="status" 
                                                value={level} 
                                                checked={selectedLevel === level}
                                                onChange={() => setSelectedLevel(level)}
                                                className="sr-only"
                                            />
                                            <div className={cn(
                                                "w-5 h-5 rounded-full border flex items-center justify-center mr-3",
                                                selectedLevel === level ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300 bg-white"
                                            )}>
                                                {selectedLevel === level && <Check className="w-3 h-3" />}
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-sm font-bold text-slate-800">{CatchUpLabels[level]}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>

                                <div className="mb-6">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Comment (Optional)</div>
                                    <textarea 
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        rows={3}
                                        placeholder="Add any additional context..."
                                    />
                                </div>

                                <div className="flex justify-end space-x-3">
                                    <button 
                                        onClick={onClose}
                                        className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        onClick={() => onSave(selectedLevel, comment)}
                                        className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm font-bold shadow-sm transition-colors"
                                    >
                                        Update Status
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
