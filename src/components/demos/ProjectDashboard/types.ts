export type Project = {
    id: string;
    name: string;
    description: string;
    status: 'Active' | 'Planning' | 'Completed';
    members: string[]; // Names or IDs
    memberCount: number;
    dueDate: string;
    progress: number; // 0-100 (kept internal, not shown on card as per request, but good for detail)
    tags: string[];
};
