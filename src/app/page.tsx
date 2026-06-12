'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import ProductsAndPricing from '@/components/Pricing';


export default function Home() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <AnnouncementBanner isVisible={isBannerVisible} onClose={() => setIsBannerVisible(false)} />
      <Navbar withMarginTop={isBannerVisible} />
      <Hero />
      <ProductsAndPricing />
      

      <footer className="py-8 bg-black border-t border-zinc-900 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} OwlTable. All rights reserved.</p>
      </footer>
    </main>
  );
}
