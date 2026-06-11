'use client';

import { motion } from 'framer-motion';
import { Download, Terminal, Check, Rocket } from 'lucide-react';
import DemoButton from './DemoButton'; 

export default function Hero() {
    return (
        <section id="download" className="pt-40 pb-32 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm shadow-glow">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-xs font-medium text-blue-200 tracking-wide">OwlTable Available Now</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Provision Safe, Realistic Test Databases
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed font-light">
                        Help teams create safe, realistic test environments from production data, 
                        then validate and operate those workflows with built-in tools.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4">
                            <Rocket size={20} />
                            Start Building for Free
                        </button>
                        <button className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4">
                            <Terminal size={20} />
                            Read the Docs
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="relative perspective-1000"
                >
                    {/* Abstract Visual Placeholder - Polished */}
                    <div className="aspect-video bg-[#1a1f2e] rounded-xl border border-[#2a3142] shadow-xl overflow-hidden relative group transform transition-transform hover:scale-[1.02] duration-500">
                        {/* Window Controls */}
                        <div className="absolute top-0 left-0 right-0 h-10 bg-[#232938] border-b border-[#2a3142] flex items-center px-4 gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                            </div>
                            <div className="ml-4 text-xs text-gray-400 font-medium">OwlTable - Masking Strategy</div>
                        </div>

                        {/* Editor Content */}
                        <div className="absolute top-10 inset-0 bg-[#1a1f2e] p-1 font-mono text-sm">
                            <div className="flex h-full">
                                {/* Sidebar */}
                                <div className="w-12 border-r border-[#2a3142] flex flex-col items-center py-4 gap-4 text-gray-500">
                                    <div className="w-6 h-6 rounded bg-[#3b82f6]/20 text-[#3b82f6] flex items-center justify-center text-xs">O</div>
                                    <div className="w-6 h-6 rounded bg-white/5" />
                                    <div className="w-6 h-6 rounded bg-white/5" />
                                </div>

                                {/* Main Area */}
                                <div className="flex-1 p-4">
                                    <div className="flex gap-6 border-b border-[#2a3142] pb-2 mb-4 text-xs font-medium uppercase tracking-wider text-gray-400">
                                        <span className="text-blue-400 border-b-2 border-blue-400 pb-2 -mb-2.5">Job Config</span>
                                        <span className="hover:text-gray-200 transition-colors cursor-pointer">Data Compare</span>
                                        <span className="hover:text-gray-200 transition-colors cursor-pointer">Query</span>
                                    </div>

                                    <div className="space-y-1 font-mono text-sm">
                                        <div className="text-blue-400">column_strategy <span className="text-gray-300">=</span> <span className="text-emerald-400">"users_prod"</span></div>
                                        <div className="text-purple-400">APPLY <span className="text-gray-300">Algorithm.FakeName()</span></div>
                                        <div className="text-purple-400">TO <span className="text-amber-300">users.first_name, users.last_name</span></div>
                                        <div className="text-purple-400">WHERE <span className="text-gray-300">role != </span><span className="text-emerald-400">'admin'</span></div>
                                    </div>

                                    <div className="mt-8 border border-[#2a3142] rounded bg-[#0f1419] overflow-hidden">
                                        <div className="grid grid-cols-4 gap-4 p-3 border-b border-[#2a3142] text-xs text-gray-400 font-medium bg-[#232938]">
                                            <div>ID</div>
                                            <div>NAME (MASKED)</div>
                                            <div>EMAIL (MASKED)</div>
                                            <div>STATUS</div>
                                        </div>
                                        {[
                                            { id: 1, name: 'John Doe', email: 'j***@example.com' },
                                            { id: 2, name: 'Jane Smith', email: 'j***@test.org' },
                                            { id: 3, name: 'Bob Jones', email: 'b***@domain.net' }
                                        ].map((row) => (
                                            <div key={row.id} className="grid grid-cols-4 gap-4 p-3 text-xs text-gray-300 border-b border-[#2a3142] last:border-0 hover:bg-[#2a3142]/50 transition-colors">
                                                <div className="font-mono text-gray-500">{row.id}</div>
                                                <div className="text-gray-100">{row.name}</div>
                                                <div>{row.email}</div>
                                                <div className="text-emerald-400 font-medium flex items-center gap-1"><Check size={12}/> Active</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
