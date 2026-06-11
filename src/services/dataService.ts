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
        name: 'Team',
        price: '$999',
        period: '/month',
        target: 'Data Platform & QA Teams',
        features: [
            { name: '100+ Masking Algorithms', description: 'Access to a comprehensive library of masking functions for any data type.' },
            { name: 'Relational Subsetting', description: 'Generate smaller, referentially intact database subsets for testing.' },
            { name: 'Column Strategy Engine', description: 'Centrally manage classification and masking rules per schema.' },
            { name: 'Built-in Validation', description: 'Data Compare and Query tools to verify masked targets.' },
            { name: 'Job Scheduling', description: 'Automate data provisioning jobs to run on your schedule.' },
            { name: 'Export & Import', description: 'Move data seamlessly between environments.' }
        ]
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: 'Contact Sales',
        target: 'Large Organizations',
        features: [
            { name: 'Advanced Synthetic Data', description: 'AI-driven synthetic data generation for complex schemas.' },
            { name: 'Field-level Encryption', description: 'Secure sensitive data at rest and in transit.' },
            { name: 'Advanced RBAC', description: 'Granular access controls for enterprise teams.' },
            { name: 'Compliance Support', description: 'Built-in reporting for GDPR, HIPAA, and PCI-DSS compliance.' },
            { name: 'CI/CD Integration', description: 'API access for seamless integration into your deployment pipelines.' },
            { name: 'Priority Support', description: '24/7 dedicated support team.' }
        ],
        highlight: true
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
