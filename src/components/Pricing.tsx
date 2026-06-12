'use client';

import React, { useState } from 'react';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'developer' | 'platform'>('developer');

  return (
    <section className="py-24 bg-black" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Modular Enterprise Pricing.
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Start with a 30-day Free Trial. Upgrade when you see the value.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-zinc-900 p-1 rounded-full flex border border-zinc-800">
            <button
              onClick={() => setActiveTab('developer')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-colors ${
                activeTab === 'developer'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Developer Track (SDKs)
            </button>
            <button
              onClick={() => setActiveTab('platform')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-colors ${
                activeTab === 'platform'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Platform Track (UI)
            </button>
          </div>
        </div>

        {/* Developer Track Pricing */}
        {activeTab === 'developer' && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Core SDK */}
            <div className="bg-zinc-900 rounded-2xl shadow-xl p-8 border border-zinc-800 flex flex-col">
              <h3 className="text-2xl font-semibold text-white">OwlMask Core SDK</h3>
              <p className="mt-4 text-gray-400">Integrate the core masking engine into your own code.</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-white">$1,000</span>
                <span className="text-base font-medium text-gray-400">/year</span>
              </p>
              <a href="mailto:founder@owlmask.com?subject=Core%20SDK%20Trial" className="mt-8 block w-full bg-zinc-800 border border-transparent rounded-md py-3 px-4 text-center text-white font-medium hover:bg-zinc-700">
                Request 30-Day Trial
              </a>
              <div className="mt-8">
                <h4 className="text-sm font-medium text-white tracking-wide uppercase">What's included</h4>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start"><span className="text-purple-400 mr-2">✓</span> <span className="text-gray-300">OwlMask SDK</span></li>
                  <li className="flex items-start"><span className="text-purple-400 mr-2">✓</span> <span className="text-gray-300">Bring your own LLM</span></li>
                </ul>
              </div>
            </div>

            {/* AI SDK Suite */}
            <div className="bg-gradient-to-b from-zinc-900 to-black rounded-2xl shadow-xl p-8 border border-purple-500/50 flex flex-col relative transform lg:-translate-y-4 z-10">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                <span className="inline-flex rounded-full bg-purple-600 px-4 py-1 text-sm font-semibold text-white tracking-wider uppercase shadow-lg">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white">AI SDK Suite</h3>
              <p className="mt-4 text-gray-400">SDK bundled with our fine-tuned local generative LLMs.</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-white">$2,500</span>
                <span className="text-base font-medium text-gray-400">/year</span>
              </p>
              <a href="mailto:founder@owlmask.com?subject=AI%20SDK%20Suite%20Trial" className="mt-8 block w-full bg-purple-600 border border-transparent rounded-md py-3 px-4 text-center text-white font-medium hover:bg-purple-700">
                Request 30-Day Trial
              </a>
              <div className="mt-8">
                <h4 className="text-sm font-medium text-white tracking-wide uppercase">Everything in Core SDK, plus</h4>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start"><span className="text-purple-400 mr-2">✓</span> <span className="text-gray-300">OwlMask LLM Models</span></li>
                  <li className="flex items-start"><span className="text-purple-400 mr-2">✓</span> <span className="text-gray-300">Local inference capability</span></li>
                </ul>
              </div>
            </div>

            {/* Autonomous SDK */}
            <div className="bg-zinc-900 rounded-2xl shadow-xl p-8 border border-zinc-800 flex flex-col">
              <h3 className="text-2xl font-semibold text-white">Autonomous SDK</h3>
              <p className="mt-4 text-gray-400">Advanced AI engineering teams automating their logic.</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-white">$5,000</span>
                <span className="text-base font-medium text-gray-400">/year</span>
              </p>
              <a href="mailto:founder@owlmask.com?subject=Autonomous%20SDK%20Trial" className="mt-8 block w-full bg-zinc-800 border border-transparent rounded-md py-3 px-4 text-center text-white font-medium hover:bg-zinc-700">
                Request 30-Day Trial
              </a>
              <div className="mt-8">
                <h4 className="text-sm font-medium text-white tracking-wide uppercase">Everything in AI SDK, plus</h4>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start"><span className="text-purple-400 mr-2">✓</span> <span className="text-gray-300">OwlMask Coding Agent</span></li>
                  <li className="flex items-start"><span className="text-purple-400 mr-2">✓</span> <span className="text-gray-300">Autonomous logic updates</span></li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Platform Track Pricing */}
        {activeTab === 'platform' && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            {/* Provisioning Suite */}
            <div className="bg-zinc-900 rounded-2xl shadow-xl p-8 border border-blue-500/30 flex flex-col relative">
              <h3 className="text-2xl font-semibold text-white">Provisioning Suite</h3>
              <p className="mt-4 text-gray-400">For DBA teams needing a UI to clone and mask databases.</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-white">$5,000</span>
                <span className="text-base font-medium text-gray-400">/year (Pro)</span>
              </p>
              <p className="mt-2 text-sm text-gray-500">or $10,000/year (Enterprise with SLA)</p>
              <a href="mailto:founder@owlmask.com?subject=Provisioning%20Suite%20Trial" className="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-3 px-4 text-center text-white font-medium hover:bg-blue-700">
                Request 30-Day Trial
              </a>
              <div className="mt-8">
                <h4 className="text-sm font-medium text-white tracking-wide uppercase">What's included</h4>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> <span className="text-gray-300">OwlTable Core UI</span></li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> <span className="text-gray-300">OwlMask SDK (Text Masking)</span></li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> <span className="text-gray-300">RBAC & Unlimited Users</span></li>
                </ul>
              </div>
            </div>

            {/* Ultimate Suite */}
            <div className="bg-gradient-to-b from-zinc-900 to-black rounded-2xl shadow-xl p-8 border border-blue-500/50 flex flex-col relative transform lg:-translate-y-4 z-10">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                <span className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white tracking-wider uppercase shadow-lg">
                  The Complete Stack
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white">Ultimate Suite</h3>
              <p className="mt-4 text-gray-400">Unifying QA provisioning with full developer autonomy.</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-white">$10,000</span>
                <span className="text-base font-medium text-gray-400">/year (Pro)</span>
              </p>
              <p className="mt-2 text-sm text-gray-500">or $20,000+/year (Enterprise with SLA)</p>
              <a href="mailto:founder@owlmask.com?subject=Ultimate%20Suite%20Trial" className="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-3 px-4 text-center text-white font-medium hover:bg-blue-700">
                Request 30-Day Trial
              </a>
              <div className="mt-8">
                <h4 className="text-sm font-medium text-white tracking-wide uppercase">Everything in Provisioning, plus</h4>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start"><span className="text-blue-400 mr-2">✓</span> <span className="text-gray-300">OwlMask LLM Models</span></li>
                  <li className="flex items-start"><span className="text-blue-400 mr-2">✓</span> <span className="text-gray-300">OwlMask Coding Agent</span></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
