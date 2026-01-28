export type OnboardingCategory = 'General' | 'IT' | 'Security' | 'Contracts' | 'Finance';

export type OnboardingStep = {
    id: number;
    title: string;
    description: string;
    category: OnboardingCategory;
    notionUrl?: string;
    externalUrl?: string; // e.g. Slack invite link, etc.
    estimatedTime?: string; // e.g. "5 min"
};

export type StepStatus = 'Not Started' | 'In Progress' | 'Completed';

export type OnboardingProgress = {
    stepId: number;
    status: StepStatus;
    completedAt?: string;
};
