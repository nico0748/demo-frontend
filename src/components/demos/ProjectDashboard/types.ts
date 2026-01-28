
export type CatchUpLevel = 1 | 2 | 3 | 4 | 5;

export const CatchUpLabels: Record<CatchUpLevel, string> = {
    1: '未着手',
    2: '資料読了',
    3: '環境構築済',
    4: '軽作業可能',
    5: '実務対応可能',
};

export const CatchUpColors: Record<CatchUpLevel, string> = {
    1: 'bg-slate-100 text-slate-400',
    2: 'bg-blue-100 text-blue-700',
    3: 'bg-cyan-100 text-cyan-700',
    4: 'bg-emerald-100 text-emerald-700',
    5: 'bg-amber-100 text-amber-700',
};

export type Employee = {
    id: string;
    name: string;
    department: string;
    avatar?: string;
};

export type ProjectCatchUp = {
    userId: string;
    projectId: string;
    status: CatchUpLevel;
    comment?: string;
    updatedAt: string;
};

export type Project = {
    id: string;
    name: string;
    description: string;
    status: 'Active' | 'Planning' | 'Completed';
    members: string[]; // Names or IDs (Legacy, kept for compatibility if needed)
    memberCount: number;
    dueDate: string;
    progress: number;
    tags: string[];
    // New fields
    notionUrl?: string;
    slackChannel?: string;
};

