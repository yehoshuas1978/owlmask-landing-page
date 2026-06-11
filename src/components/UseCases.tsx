'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, Lock, Workflow } from 'lucide-react';

const useCases = [
    {
        icon: Users,
        title: 'Data Platform Teams',
        description: 'Provide self-serve, safe data environments to development teams. Enforce security standards across all environments with centrally managed masking rules.',
        benefits: ['Centralized strategy', 'RBAC enforcement', 'Compliance']
    },
    {
        icon: Workflow,
        title: 'QA & Testing',
        description: 'Generate reliable, production-like datasets for end-to-end testing. Use relational subsetting to capture all edge cases without bloated database sizes.',
        benefits: ['Synthetic generation', 'Relational subsetting', 'Data validation']
    },
    {
        icon: Lock,
        title: 'Security & Compliance',
        description: 'Ensure sensitive PII/PHI is completely anonymized before it ever leaves production. Automate masking strategies across entire schemas.',
        benefits: ['Field-level encryption', '100+ algorithms', 'Readiness checks']
    },
    {
        icon: TrendingUp,
        title: 'Developers',
        description: 'Quickly spin up isolated target databases filled with the exact subset of data needed for debugging. Execute queries and compare datasets effortlessly.',
        benefits: ['Fast provisioning', 'Query tools', 'Data compare']
    }
];

export default function UseCases() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
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
                        Built for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Every Team
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Whether you&apos;re building data platforms, testing applications, or securing infrastructure, OwlTable adapts to your workflow.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="card h-full flex flex-col group-hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                                        <useCase.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                            {useCase.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {useCase.description}
                                </p>

                                <div className="space-y-2 mt-auto">
                                    {useCase.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
