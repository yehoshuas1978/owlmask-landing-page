'use client';

import { motion } from 'framer-motion';
import { Download, Terminal, Check } from 'lucide-react';
import DemoButton from './DemoButton'; // Import the new DemoButton component

export default function Hero() {
    return (
        <section id="download" className="pt-40 pb-32 bg-[#080809] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-medium text-gray-300 tracking-wide">OwlTable V1 Available Now</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            Provision Safe, Realistic Test Databases
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-light">
                        Help teams create safe, realistic test environments from production data, 
                        then validate and operate those workflows with built-in tools.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4 mt-8">
                            <Terminal size={20} />
                            Release Notes
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative perspective-1000"
                >
                    {/* Abstract Visual Placeholder - Polished */}
                    <div className="aspect-video bg-[#1e1e20] rounded-xl border border-white/10 shadow-2xl overflow-hidden relative group transform transition-transform hover:scale-[1.02] duration-500">
                        {/* Window Controls */}
                        <div className="absolute top-0 left-0 right-0 h-10 bg-[#2b2d30] border-b border-black/20 flex items-center px-4 gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                            </div>
                            <div className="ml-4 text-xs text-gray-500 font-medium">OwlTable - users_prod</div>
                        </div>

                        {/* Editor Content */}
                        <div className="absolute top-10 inset-0 bg-[#1e1e20] p-1 font-mono text-sm">
                            <div className="flex h-full">
                                {/* Sidebar */}
                                <div className="w-12 border-r border-white/5 flex flex-col items-center py-4 gap-4 text-gray-500">
                                    <div className="w-6 h-6 rounded bg-white/10" />
                                    <div className="w-6 h-6 rounded bg-white/5" />
                                    <div className="w-6 h-6 rounded bg-white/5" />
                                </div>

                                {/* Main Area */}
                                <div className="flex-1 p-4">
                                    <div className="flex gap-6 border-b border-white/5 pb-2 mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                                        <span className="text-blue-400 border-b-2 border-blue-400 pb-2 -mb-2.5">Job Config</span>
                                        <span>Data Preview</span>
                                        <span>Schema Compare</span>
                                    </div>

                                    <div className="space-y-1 font-mono text-sm">
                                        <div className="text-blue-400">masking_strategy <span className="text-white">=</span> <span className="text-green-400">"users_prod"</span></div>
                                        <div className="text-purple-400">APPLY <span className="text-white">Algorithm.FakeName()</span></div>
                                        <div className="text-purple-400">TO <span className="text-yellow-300">users.first_name, users.last_name</span></div>
                                        <div className="text-purple-400">WHERE <span className="text-white">role != </span><span className="text-green-400">'admin'</span></div>
                                    </div>

                                    <div className="mt-8 border border-white/5 rounded bg-[#141416]">
                                        <div className="grid grid-cols-4 gap-4 p-3 border-b border-white/5 text-xs text-gray-500 font-medium bg-white/5">
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
                                            <div key={row.id} className="grid grid-cols-4 gap-4 p-3 text-xs text-gray-400 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                                <div className="font-mono text-gray-600">{row.id}</div>
                                                <div className="text-white">{row.name}</div>
                                                <div>{row.email}</div>
                                                <div className="text-green-500">Active</div>
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
