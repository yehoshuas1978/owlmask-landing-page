'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield, Activity, RefreshCw, CheckCircle2 } from 'lucide-react';
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
        <section className="py-24 relative overflow-hidden bg-transparent">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>
            
            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Built-in Validation & <br /> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Insights</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                            OwlTable provides a comprehensive view of your provisioning workflows.
                            Compare source to target, run data validation queries, and inspect schemas safely.
                        </p>

                        <div className="space-y-8">
                            {[
                                { title: 'Preflight Readiness', desc: 'Assess blockers and warnings before jobs run.' },
                                { title: 'Data Compare', desc: 'Verify masked targets against source schemas.' },
                                { title: 'Audit Logs', desc: 'Complete history of all provisioning executions.' }
                            ].map((item, i) => (
                                <motion.div 
                                    key={item.title} 
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.15 }}
                                    className="flex gap-5 group"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg text-white font-semibold mb-1 group-hover:text-blue-200 transition-colors">{item.title}</h3>
                                        <p className="text-gray-400 text-base">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card p-8 relative overflow-hidden"
                    >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] animate-[shimmer_3s_infinite]" />

                        <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                                <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">Job Readiness</h3>
                            </div>
                            <button
                                onClick={loadData}
                                disabled={loading}
                                className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-2 rounded-md transition-colors disabled:opacity-50 border border-transparent hover:border-blue-500/20"
                            >
                                <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
                            </button>
                        </div>

                        {loading ? (
                            <div className="space-y-5 animate-pulse relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-white/10 rounded-xl" />
                                    <div className="space-y-3 flex-1">
                                        <div className="h-5 bg-white/10 rounded w-1/3" />
                                        <div className="h-4 bg-white/10 rounded w-1/4" />
                                    </div>
                                </div>
                                <div className="h-16 bg-white/5 rounded-lg border border-white/5 w-full" />
                                <div className="h-16 bg-white/5 rounded-lg border border-white/5 w-full" />
                                <div className="h-16 bg-white/5 rounded-lg border border-white/5 w-full" />
                            </div>
                        ) : userData ? (
                            <div className="space-y-6 relative z-10">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg border border-white/10">
                                        {userData.name.charAt(0)}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-2xl font-bold text-white tracking-tight mb-1">{userData.name}</h4>
                                        <p className="text-blue-300 font-medium">{userData.role}</p>
                                    </div>
                                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-full border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                                        {userData.status}
                                    </span>
                                </div>

                                <div className="grid gap-4">
                                    {[
                                        { icon: Mail, label: 'Source', value: userData.email },
                                        { icon: Shield, label: 'Strategy', value: userData.securityLevel },
                                        { icon: Activity, label: 'Last Executed', value: userData.lastActive }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-4 bg-black/40 rounded-lg border border-white/5 flex items-center gap-4 hover:bg-black/60 transition-colors group">
                                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors border border-white/5">
                                                <stat.icon size={18} />
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">{stat.label}</div>
                                                <div className="text-sm font-medium text-gray-200">{stat.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
