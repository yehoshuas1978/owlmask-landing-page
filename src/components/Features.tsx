'use client';

import { motion } from 'framer-motion';
import { Database, Zap, Shield, Code, GitBranch, BarChart3 } from 'lucide-react';

const features = [
    {
        icon: Database,
        title: 'Job-Based Provisioning',
        description: 'Seamlessly provision safe, realistic test environments from source databases to target destinations.',
        keywords: ['data provisioning', 'environment management', 'test databases']
    },
    {
        icon: GitBranch,
        title: 'Column Strategy Engine',
        description: 'Drive masking, subsetting, and synthetic generation from a single, shared classification layer configured once per schema.',
        keywords: ['data classification', 'column strategy', 'schema management']
    },
    {
        icon: Zap,
        title: 'Data Masking & Subsetting',
        description: 'Over 100+ masking algorithms and relational subsetting capabilities to generate realistic test data safely.',
        keywords: ['data masking', 'data subsetting', 'synthetic data']
    },
    {
        icon: Code,
        title: 'Built-In Validation',
        description: 'Validate outcomes with built-in Data Compare, Query, and Schema inspection tools without leaving the platform.',
        keywords: ['data validation', 'schema compare', 'query tools']
    },
    {
        icon: BarChart3,
        title: 'Integrated Utilities',
        description: 'Export/Import capabilities, advanced task scheduling, and real-time monitoring built into your everyday workflows.',
        keywords: ['task scheduling', 'monitoring', 'export import']
    },
    {
        icon: Shield,
        title: 'Enterprise Security',
        description: 'Field-level encryption, role-based access control (RBAC), and compliance support for GDPR, HIPAA, and PCI-DSS.',
        keywords: ['RBAC', 'data security', 'compliance']
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-[#0a0a0b] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Powerful Features for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            Data Provisioning
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Everything you need to deliver high-quality, privacy-compliant test environments. 
                        Built for data platform teams and developers.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="h-full p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
