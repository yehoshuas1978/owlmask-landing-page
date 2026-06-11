'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield, Activity, RefreshCw } from 'lucide-react';
import { dataService, UserData } from '@/services/dataService';

export default function UserInfoDemo() {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        try {
            const data = await dataService.getUserData();
            setUserData(data);
        } catch (error) {
            console.error("Failed to load user data", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="features" className="py-24 bg-[#19191c]">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Built-in Validation & <br /> Insights
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            OwlTable provides a comprehensive view of your provisioning workflows.
                            Compare source to target, run data validation queries, and inspect schemas safely.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: 'Preflight Readiness', desc: 'Assess blockers and warnings before jobs run.' },
                                { title: 'Data Compare', desc: 'Verify masked targets against source schemas.' },
                                { title: 'Audit Logs', desc: 'Complete history of all provisioning executions.' }
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4">
                                    <div className="w-1 h-full min-h-[2rem] bg-blue-500/20 rounded-full relative">
                                        <div className="absolute top-0 left-0 w-full h-8 bg-blue-500 rounded-full" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">{item.title}</h3>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#2b2d30] rounded border border-[#393b40] p-8 shadow-xl relative"
                    >
                        <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#393b40]">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Job Readiness</h3>
                            <button
                                onClick={loadData}
                                disabled={loading}
                                className="text-blue-400 hover:text-blue-300 transition-colors disabled:opacity-50"
                            >
                                <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
                            </button>
                        </div>

                        {loading ? (
                            <div className="space-y-4 animate-pulse">
                                <div className="h-12 bg-[#393b40] rounded w-1/3" />
                                <div className="h-4 bg-[#393b40] rounded w-2/3" />
                                <div className="h-4 bg-[#393b40] rounded w-1/2" />
                            </div>
                        ) : userData ? (
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-blue-600 rounded flex items-center justify-center text-xl font-bold text-white">
                                        {userData.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white">{userData.name}</h4>
                                        <p className="text-gray-400">{userData.role}</p>
                                    </div>
                                    <span className="ml-auto px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/20">
                                        {userData.status}
                                    </span>
                                </div>

                                <div className="grid gap-4">
                                    <div className="p-4 bg-[#19191c] rounded border border-[#393b40] flex items-center gap-4">
                                        <Mail className="text-gray-500" size={18} />
                                        <div>
                                            <div className="text-xs text-gray-500">Source</div>
                                            <div className="text-sm text-gray-300">{userData.email}</div>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-[#19191c] rounded border border-[#393b40] flex items-center gap-4">
                                        <Shield className="text-gray-500" size={18} />
                                        <div>
                                            <div className="text-xs text-gray-500">Strategy</div>
                                            <div className="text-sm text-gray-300">{userData.securityLevel}</div>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-[#19191c] rounded border border-[#393b40] flex items-center gap-4">
                                        <Activity className="text-gray-500" size={18} />
                                        <div>
                                            <div className="text-xs text-gray-500">Last Executed</div>
                                            <div className="text-sm text-gray-300">{userData.lastActive}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
