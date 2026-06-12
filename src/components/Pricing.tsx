'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Code, Zap, GitBranch, Database, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PRICING_DATA = [
  {
    id: 'sdk',
    name: 'Core SDK',
    icon: Code,
    price: '$49',
    period: '/ month',
    note: 'Per Installation',
    colorClass: 'text-purple-400',
    borderClass: 'border-purple-500/30',
    bgClass: 'bg-purple-500/10',
    popular: false,
    whatItDoes: 'The core data masking engine, available as an embeddable SDK or via its built-in standalone UI. It includes 100+ deterministic masking algorithms.',
    advantage: 'Legacy competitors (like Delphix) require deploying heavy, expensive VMs. Our SDK runs instantly inside your environment with zero infrastructure overhead.'
  },
  {
    id: 'ai',
    name: 'AI SDK Suite',
    icon: Zap,
    price: '$99',
    period: '/ month',
    note: 'Per Installation',
    colorClass: 'text-amber-400',
    borderClass: 'border-amber-500/30',
    bgClass: 'bg-amber-500/10',
    popular: true,
    whatItDoes: 'The Core SDK bundled with our fine-tuned, local generative LLMs for intelligently masking unstructured free-text columns.',
    advantage: 'Competing AI masking tools send your sensitive data to OpenAI. Our LLM runs 100% locally on your hardware. Your PII never leaves your VPC.'
  },
  {
    id: 'agent',
    name: 'Coding Agent',
    icon: GitBranch,
    price: '$149',
    period: '/ month',
    note: 'Per Installation',
    colorClass: 'text-emerald-400',
    borderClass: 'border-emerald-500/30',
    bgClass: 'bg-emerald-500/10',
    popular: false,
    whatItDoes: 'An AI agent that automatically scans your database schemas, detects sensitive columns, and writes the YAML masking configurations for you.',
    advantage: 'Eliminates the hundreds of hours DBAs spend manually mapping columns. It does the mapping in minutes, completely autonomously.'
  },
  {
    id: 'provisioning',
    name: 'Provisioning UI',
    icon: Database,
    price: '$299',
    period: '/ month',
    note: 'Per Installation',
    colorClass: 'text-blue-400',
    borderClass: 'border-blue-500/30',
    bgClass: 'bg-blue-500/10',
    popular: false,
    whatItDoes: 'A beautiful, enterprise-grade web UI allowing DBAs to safely clone, subset, and mask databases without writing a single line of code. (Includes Core SDK engine).',
    advantage: 'Combines advanced relational subsetting with masking in a single, easy-to-use platform that costs 80% less than legacy enterprise tools.'
  },
  {
    id: 'ultimate',
    name: 'Ultimate Suite',
    icon: Shield,
    price: '$499',
    period: '/ month',
    note: 'Per Installation',
    colorClass: 'text-white',
    borderClass: 'border-white/30',
    bgClass: 'bg-white/10',
    popular: false,
    whatItDoes: 'The entire ecosystem. You get the OwlTable Platform UI, the headless SDKs, the local LLMs, and the Autonomous Agent.',
    advantage: 'Gives Data Platform teams a powerful provisioning UI, while simultaneously giving Engineering teams the SDKs and autonomous agents they need. One platform, total alignment.'
  }
];

const ProductsAndPricing = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof PRICING_DATA[0] | null>(null);

  // Sync modal state with browser history (Back button support)
  useEffect(() => {
    const handlePopState = () => {
      setSelectedProduct(null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenDetails = (product: typeof PRICING_DATA[0]) => {
    window.history.pushState({ modalOpen: true }, '');
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
    setSelectedProduct(null);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
            The OwlMask Ecosystem
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Brutally honest, transparent startup pricing. Find the exact package you need, request a trial, and test it on your own hardware before paying a dime.
          </p>
        </div>

        {/* Top Grid: Developer Track (3 columns) */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {PRICING_DATA.slice(0, 3).map((product) => (
            <PricingCard key={product.id} product={product} onViewDetails={() => handleOpenDetails(product)} />
          ))}
        </div>

        {/* Bottom Grid: Platform Track (2 columns centered) */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PRICING_DATA.slice(3, 5).map((product) => (
            <PricingCard key={product.id} product={product} onViewDetails={() => handleOpenDetails(product)} />
          ))}
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
                    <p className="text-gray-400 text-sm">If you love it, we issue a standard invoice via Stripe. No auto-renewals.</p>
                </div>
            </div>
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={handleCloseDetails}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-8 z-10"
            >
              <button 
                onClick={handleCloseDetails}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className={`flex items-center gap-4 mb-6 ${selectedProduct.colorClass}`}>
                <selectedProduct.icon className="w-10 h-10" />
                <h3 className="text-3xl font-bold text-white">{selectedProduct.name}</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">What it does</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">{selectedProduct.whatItDoes}</p>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-2 ${selectedProduct.colorClass}`}>The Advantage</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">{selectedProduct.advantage}</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="text-3xl font-extrabold text-white">{selectedProduct.price}</span>
                  <span className="text-gray-500 font-medium ml-2">{selectedProduct.period}</span>
                </div>
                <a 
                  href={`mailto:founder@owlmask.com?subject=${encodeURIComponent(selectedProduct.name)}%20Trial`} 
                  className={`px-6 py-3 rounded-lg font-bold transition-colors ${selectedProduct.bgClass} ${selectedProduct.colorClass} border ${selectedProduct.borderClass} hover:bg-white hover:text-black`}
                >
                  Request 30-Day Trial
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const PricingCard = ({ product, onViewDetails }: { product: typeof PRICING_DATA[0], onViewDetails: () => void }) => {
  return (
    <div className={`bg-zinc-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border ${product.borderClass} flex flex-col relative overflow-hidden transition-transform hover:-translate-y-1`}>
      {product.popular && (
        <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
      )}
      <div className="flex items-center gap-3 mb-6">
        <product.icon className={`w-8 h-8 ${product.colorClass}`} />
        <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
      </div>
      
      <div className="mb-6 flex-grow">
        <p className="text-gray-400 line-clamp-3 mb-4">{product.whatItDoes}</p>
        <button 
          onClick={onViewDetails}
          className={`text-sm font-semibold hover:underline ${product.colorClass}`}
        >
          View full details &rarr;
        </button>
      </div>

      <div className="mt-auto pt-6 border-t border-zinc-800/50">
        <div className="mb-4">
          <span className="text-4xl font-extrabold text-white">{product.price}</span>
          <span className="text-gray-500 font-medium text-sm ml-1">{product.period}</span>
          <div className="text-gray-600 text-xs mt-1">{product.note}</div>
        </div>
        <a 
          href={`mailto:founder@owlmask.com?subject=${encodeURIComponent(product.name)}%20Trial`} 
          className="block w-full text-center bg-zinc-800 border border-transparent rounded-lg py-3 px-4 text-white font-medium hover:bg-zinc-700 transition-colors"
        >
          Request Trial
        </a>
      </div>
    </div>
  );
};

export default ProductsAndPricing;
