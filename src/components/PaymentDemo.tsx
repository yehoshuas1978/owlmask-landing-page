import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { dataService, PricingPlan } from '@/services/dataService';
import Tooltip from './Tooltip';

export default function PaymentDemo() {
    const [plans, setPlans] = useState<PricingPlan[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dataService.getPricingData().then((data) => {
            setPlans(data);
            setLoading(false);
        });
    }, []);

    return (
        <section id="pricing" className="py-24 bg-transparent border-t border-[#2a3142] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Transparent Pricing</h2>
                    <p className="text-gray-400">Choose the plan that fits your team size and needs.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {loading ? (
                        // Loading Skeletons
                        [1, 2, 3].map((i) => (
                            <div key={i} className="card animate-pulse">
                                <div className="h-8 bg-[#2a3142] rounded w-1/3 mb-4" />
                                <div className="h-12 bg-[#2a3142] rounded w-1/2 mb-8" />
                                <div className="space-y-4">
                                    <div className="h-4 bg-[#2a3142] rounded w-full" />
                                    <div className="h-4 bg-[#2a3142] rounded w-full" />
                                    <div className="h-4 bg-[#2a3142] rounded w-2/3" />
                                </div>
                            </div>
                        ))
                    ) : (
                        plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative card flex flex-col ${plan.highlight
                                    ? 'border-blue-500 shadow-glow scale-105 z-10'
                                    : ''
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-sm text-gray-400 h-10">{plan.target}</p>
                                </div>

                                <div className="flex items-baseline mb-8">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    <span className="text-gray-400 ml-2 text-sm">{plan.period}</span>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-gray-300 text-sm">
                                            <Check className={`w-4 h-4 mr-3 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-blue-400' : 'text-purple-400'}`} />
                                            <Tooltip text={feature.description}>
                                                {feature.name}
                                            </Tooltip>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full ${plan.highlight
                                        ? 'btn-primary'
                                        : 'btn-secondary'
                                        }`}
                                >
                                    Get Started
                                </button>
                            </motion.div>
                        ))
                    )}
                </div>

                <div className="mt-12 text-center text-sm text-gray-500">
                    <p>OwlTable can be deployed on-premise or in your private cloud.</p>
                </div>
            </div>
        </section>
    );
}
