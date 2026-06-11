export interface UserData {
    name: string;
    role: string;
    email: string;
    status: 'Active' | 'Inactive';
    lastActive: string;
    securityLevel: string;
}

export interface PricingPlan {
    name: string;
    price: string;
    period: string;
    target: string;
    features: { name: string, description: string }[];
    highlight?: boolean;
}

const FAKE_USER_DATA: UserData = {
    name: 'Alex T.',
    role: 'Lead Developer',
    email: 'alex.t@jetbrains-style.com',
    status: 'Active',
    lastActive: 'Just now',
    securityLevel: 'Admin',
};

const FAKE_PRICING_DATA: PricingPlan[] = [
    {
        name: 'Free',
        price: '$0',
        period: '/forever',
        target: 'Individuals & Hobbyists',
        features: [
            { name: 'Basic Masking', description: 'Access to standard masking functions.' },
            { name: 'Local Connections', description: 'Connect to local source and target databases.' },
            { name: 'Manual Execution', description: 'Execute provisioning jobs manually.' },
            { name: 'Community Support', description: 'Access to community forums.' }
        ]
    },
    {
        name: 'Pro Trial',
        price: '$0',
        period: '/for 14 days',
        target: 'Teams Evaluating OwlTable',
        features: [
            { name: 'All Pro Features', description: 'Full access to evaluate the platform.' },
            { name: '100+ Masking Algorithms', description: 'Comprehensive library of masking functions.' },
            { name: 'Relational Subsetting', description: 'Generate referentially intact subsets.' },
            { name: 'Column Strategy Engine', description: 'Centrally manage classification and masking rules.' },
        ],
        highlight: true
    },
    {
        name: 'Pro',
        price: '$49',
        period: '/user/month',
        target: 'Early Adopters & Small Teams',
        features: [
            { name: 'Everything in Trial', description: 'Continuous access to all premium features.' },
            { name: 'Job Scheduling', description: 'Automate data provisioning jobs to run on your schedule.' },
            { name: 'Cloud Database Support', description: 'Connect to RDS, Azure SQL, and Cloud SQL.' },
            { name: 'Priority Email Support', description: 'Direct access to the founding team.' }
        ]
    }
];

export interface LicenseData {
    owner: string;
    plan: string;
    status: 'Active' | 'Expired';
    expiryDate: string;
    licenseKey: string;
}

const FAKE_LICENSE_DATA: LicenseData = {
    owner: 'Alex T.',
    plan: 'Pro Plan',
    status: 'Active',
    expiryDate: '2025-12-31',
    licenseKey: 'OWL-PRO-2024-XXXX-YYYY-ZZZZ',
};

export const dataService = {
    getUserData: async (): Promise<UserData> => {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        return FAKE_USER_DATA;
    },

    getPricingData: async (): Promise<PricingPlan[]> => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        return FAKE_PRICING_DATA;
    },

    getLicenseData: async (): Promise<LicenseData> => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        return FAKE_LICENSE_DATA;
    },
};
