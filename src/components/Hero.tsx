'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Rocket, Database, Shield, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import DemoButton from './DemoButton';

const MOCK_DATA = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', credit: '4532-XXXX-XXXX-1234', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@test.org', credit: '4929-XXXX-XXXX-9876', status: 'Active' },
  { id: 3, name: 'Bob Jones', email: 'bob.jones@domain.net', credit: '5100-XXXX-XXXX-5555', status: 'Inactive' }
];

const MASKED_DATA = [
  { id: 1, name: 'J*** D**', email: 'j***@example.com', credit: '****-****-****-1234', status: 'Active' },
  { id: 2, name: 'J*** S****', email: 'j***@test.org', credit: '****-****-****-9876', status: 'Active' },
  { id: 3, name: 'B** J****', email: 'b***@domain.net', credit: '****-****-****-5555', status: 'Inactive' }
];

export default function Hero() {
    const [isMasked, setIsMasked] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsMasked(prev => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const displayData = isMasked ? MASKED_DATA : MOCK_DATA;

    return (
        <section id="download" className="pt-32 pb-24 relative overflow-hidden min-h-[90vh] flex items-center">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-500/15 rounded-full blur-[150px] mix-blend-screen opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[120px] mix-blend-screen opacity-60 animate-pulse" style={{ animationDuration: '10s' }} />
            </div>

            <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
                
                {/* Left Column: Copy & CTAs */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-5"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping absolute opacity-75" />
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-400 relative" />
                        <span className="text-sm font-semibold text-blue-200 tracking-wide">OwlTable 1.0 is Live</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                        Provision <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 animate-gradient-x">
                            Realistic Test
                        </span>
                        <br/>
                        Databases
                    </h1>

                    <p className="text-xl text-gray-300/90 mb-10 max-w-lg leading-relaxed font-light">
                        Help teams create safe, realistic test environments from production data. Transform sensitive records into compliant datasets in seconds.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <button className="relative group overflow-hidden rounded-xl bg-blue-600 text-white font-semibold text-lg px-8 py-4 transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center justify-center gap-3">
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient-x" />
                            <Rocket className="relative z-10 w-5 h-5" />
                            <span className="relative z-10">Start Building Free</span>
                        </button>
                        <button className="glass-panel text-gray-300 font-semibold text-lg px-8 py-4 rounded-xl transition-all hover:bg-white/10 hover:text-white flex items-center justify-center gap-3 hover:border-white/20">
                            <Terminal className="w-5 h-5" />
                            <span>Read the Docs</span>
                        </button>
                    </div>
                </motion.div>

                {/* Right Column: Interactive Animated Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="lg:col-span-7 relative"
                >
                    <div className="glass-card p-6 relative overflow-hidden animate-float">
                        {/* Decorative top bar */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="flex items-center gap-3 text-sm font-medium text-gray-400 bg-black/40 px-3 py-1.5 rounded-md border border-white/5">
                                <Database className="w-4 h-4 text-blue-400" />
                                <span>production_db</span>
                                <ArrowRight className="w-4 h-4 text-gray-600" />
                                <Shield className="w-4 h-4 text-purple-400" />
                                <span>safe_test_db</span>
                            </div>
                        </div>

                        {/* Code snippet */}
                        <div className="bg-black/60 rounded-lg p-4 mb-6 border border-white/5 font-mono text-sm shadow-inner">
                            <div className="text-blue-400 mb-1">column_strategy <span className="text-gray-400">=</span> <span className="text-emerald-400">"users_prod"</span></div>
                            <div className="text-purple-400 mb-1">APPLY <span className="text-gray-300">Algorithm.FakeName(), Algorithm.MaskEmail()</span></div>
                            <div className="text-purple-400">TO <span className="text-amber-300">users.name, users.email</span></div>
                        </div>

                        {/* Animated Table */}
                        <div className="bg-[#0f1419]/80 rounded-lg border border-white/10 overflow-hidden backdrop-blur-sm relative">
                            {/* Scanning beam effect */}
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent z-20 pointer-events-none"
                                animate={{ y: ['-100%', '200%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            />
                            
                            <div className="grid grid-cols-4 gap-4 p-3 border-b border-white/10 text-xs font-semibold text-gray-400 uppercase tracking-wider bg-black/40">
                                <div>Name</div>
                                <div>Email</div>
                                <div>Credit Card</div>
                                <div>Status</div>
                            </div>
                            
                            <div className="relative h-[132px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={isMasked ? 'masked' : 'raw'}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0"
                                    >
                                        {displayData.map((row, i) => (
                                            <div key={row.id} className="grid grid-cols-4 gap-4 p-3 text-sm border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                                <div className={`font-medium ${isMasked ? 'text-purple-300' : 'text-gray-200'}`}>{row.name}</div>
                                                <div className={`${isMasked ? 'text-purple-300' : 'text-gray-400'}`}>{row.email}</div>
                                                <div className="text-gray-500 font-mono text-xs mt-0.5">{row.credit}</div>
                                                <div>
                                                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${row.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'}`}>
                                                        {row.status}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                        
                        {/* Status badge */}
                        <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-tl-xl rounded-br-xl shadow-lg flex items-center gap-2 border-t border-l border-white/20">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            {isMasked ? 'DATA MASKED SAFELY' : 'ANALYZING SOURCE'}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
