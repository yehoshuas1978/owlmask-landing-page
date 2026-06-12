'use client';

import React from 'react';
import { Shield, Code, Zap, GitBranch, Database } from 'lucide-react';

const ProductsAndPricing = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
            The OwlMask Ecosystem
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Brutally honest, transparent enterprise pricing. Find the exact package you need, request a trial, and test it on your own hardware before paying a dime.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* Bundle 1: Core SDK */}
          <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-zinc-800 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-purple-400 w-8 h-8" />
                <h3 className="text-3xl font-semibold text-white">OwlMask Core SDK</h3>
              </div>
              <p className="text-gray-300 text-lg mb-4">
                <strong className="text-white">What it does:</strong> A lightweight Java/Next.js SDK to embed 100+ deterministic masking algorithms directly into your existing data pipelines.
              </p>
              <p className="text-gray-400">
                <strong className="text-purple-400">The Advantage:</strong> Legacy competitors (like Delphix) require deploying heavy, expensive VMs. Our SDK runs instantly inside your CI/CD runners with zero infrastructure overhead.
              </p>
            </div>
            <div className="md:w-72 bg-black/50 p-6 rounded-xl border border-white/5 text-center flex-shrink-0">
              <p className="text-4xl font-extrabold text-white">$1,000</p>
              <p className="text-gray-500 font-medium mb-6">/ year (Pro)</p>
              <a href="mailto:founder@owlmask.com?subject=Core%20SDK%20Trial" className="block w-full bg-zinc-800 border border-transparent rounded-md py-3 px-4 text-white font-medium hover:bg-zinc-700 transition-colors">
                Request 30-Day Trial
              </a>
            </div>
          </div>

          {/* Bundle 2: AI SDK Suite */}
          <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-amber-500/30 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-4 py-1 rounded-bl-lg">POPULAR FOR AI TEAMS</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-amber-400 w-8 h-8" />
                <h3 className="text-3xl font-semibold text-white">OwlMask AI SDK Suite</h3>
              </div>
              <p className="text-gray-300 text-lg mb-4">
                <strong className="text-white">What it does:</strong> The Core SDK bundled with our fine-tuned, local generative LLMs for intelligently masking unstructured free-text columns.
              </p>
              <p className="text-gray-400">
                <strong className="text-amber-400">The Advantage:</strong> Competing AI masking tools send your sensitive data to OpenAI. Our LLM runs 100% locally on your hardware. Your PII never leaves your VPC.
              </p>
            </div>
            <div className="md:w-72 bg-black/50 p-6 rounded-xl border border-white/5 text-center flex-shrink-0">
              <p className="text-4xl font-extrabold text-white">$2,500</p>
              <p className="text-gray-500 font-medium mb-6">/ year (Pro)</p>
              <a href="mailto:founder@owlmask.com?subject=AI%20SDK%20Suite%20Trial" className="block w-full bg-amber-600/20 text-amber-400 border border-amber-500/50 rounded-md py-3 px-4 font-medium hover:bg-amber-600/30 transition-colors">
                Request 30-Day Trial
              </a>
            </div>
          </div>

          {/* Bundle 3: Autonomous SDK */}
          <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-emerald-500/30 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="text-emerald-400 w-8 h-8" />
                <h3 className="text-3xl font-semibold text-white">Autonomous Coding Agent</h3>
              </div>
              <p className="text-gray-300 text-lg mb-4">
                <strong className="text-white">What it does:</strong> An AI agent that automatically scans your database schemas, detects sensitive columns, and writes the YAML masking configurations for you.
              </p>
              <p className="text-gray-400">
                <strong className="text-emerald-400">The Advantage:</strong> Eliminates the hundreds of hours DBAs spend manually mapping columns. It does the mapping in minutes, completely autonomously.
              </p>
            </div>
            <div className="md:w-72 bg-black/50 p-6 rounded-xl border border-white/5 text-center flex-shrink-0">
              <p className="text-4xl font-extrabold text-white">$5,000</p>
              <p className="text-gray-500 font-medium mb-6">/ year (Pro)</p>
              <a href="mailto:founder@owlmask.com?subject=Autonomous%20Agent%20Trial" className="block w-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/50 rounded-md py-3 px-4 font-medium hover:bg-emerald-600/30 transition-colors">
                Request 30-Day Trial
              </a>
            </div>
          </div>

          {/* Bundle 4: Provisioning Suite */}
          <div className="bg-gradient-to-r from-blue-900/40 to-zinc-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-500/50 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-blue-400 w-8 h-8" />
                <h3 className="text-3xl font-semibold text-white">OwlTable Provisioning Suite</h3>
              </div>
              <p className="text-gray-300 text-lg mb-4">
                <strong className="text-white">What it does:</strong> A beautiful, enterprise-grade web UI allowing DBAs to safely clone, subset, and mask databases without writing a single line of code. (Includes Core SDK engine).
              </p>
              <p className="text-gray-400">
                <strong className="text-blue-400">The Advantage:</strong> Combines advanced relational subsetting with masking in a single, easy-to-use platform that costs 80% less than legacy enterprise tools.
              </p>
            </div>
            <div className="md:w-72 bg-black/50 p-6 rounded-xl border border-white/5 text-center flex-shrink-0">
              <p className="text-4xl font-extrabold text-white">$5,000</p>
              <p className="text-gray-500 font-medium mb-2">/ year (Pro)</p>
              <p className="text-gray-600 text-sm mb-4">or $10k/yr Enterprise</p>
              <a href="mailto:founder@owlmask.com?subject=Provisioning%20Suite%20Trial" className="block w-full bg-blue-600 hover:bg-blue-700 text-white border border-transparent rounded-md py-3 px-4 font-medium transition-colors">
                Request 30-Day Trial
              </a>
            </div>
          </div>

          {/* Bundle 5: Ultimate Suite */}
          <div className="bg-gradient-to-r from-purple-900/40 via-blue-900/20 to-zinc-900/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-4 py-1 rounded-bl-lg">THE COMPLETE ECOSYSTEM</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-white w-8 h-8" />
                <h3 className="text-3xl font-semibold text-white">OwlMask Ultimate Suite</h3>
              </div>
              <p className="text-gray-300 text-lg mb-4">
                <strong className="text-white">What it does:</strong> The entire ecosystem. You get the OwlTable Platform UI, the headless SDKs, the local LLMs, and the Autonomous Agent.
              </p>
              <p className="text-gray-400">
                <strong className="text-white">The Advantage:</strong> Gives Data Platform teams a beautiful UI, while simultaneously giving Engineering teams the headless APIs they demand. One platform, total alignment.
              </p>
            </div>
            <div className="md:w-72 bg-black/50 p-6 rounded-xl border border-white/5 text-center flex-shrink-0">
              <p className="text-4xl font-extrabold text-white">$10,000</p>
              <p className="text-gray-500 font-medium mb-2">/ year (Pro)</p>
              <p className="text-gray-600 text-sm mb-4">or $20k/yr Enterprise</p>
              <a href="mailto:founder@owlmask.com?subject=Ultimate%20Suite%20Trial" className="block w-full bg-white hover:bg-gray-200 text-black border border-transparent rounded-md py-3 px-4 font-bold transition-colors shadow-lg shadow-white/10">
                Request 30-Day Trial
              </a>
            </div>
          </div>

        </div>

        {/* How It Works Footer */}
        <div className="mt-24 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
            <h3 className="text-2xl font-bold text-white mb-8">How Buying Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xl mx-auto mb-4 border border-blue-500/30">1</div>
                    <h4 className="text-lg font-semibold text-white mb-2">Request Trial</h4>
                    <p className="text-gray-400 text-sm">Click request on any package. We manually generate and email you a secure 30-Day API Key.</p>
                </div>
                <div>
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xl mx-auto mb-4 border border-purple-500/30">2</div>
                    <h4 className="text-lg font-semibold text-white mb-2">Validate Locally</h4>
                    <p className="text-gray-400 text-sm">Install the software on your own servers. Validate it securely against your real production data.</p>
                </div>
                <div>
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl mx-auto mb-4 border border-emerald-500/30">3</div>
                    <h4 className="text-lg font-semibold text-white mb-2">Purchase</h4>
                    <p className="text-gray-400 text-sm">If you love it, we issue a standard USD invoice payable via Wire Transfer. No auto-renewals.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ProductsAndPricing;
