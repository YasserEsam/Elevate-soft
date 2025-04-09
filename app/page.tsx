import Hero from '@/components/sections/Hero';
import LogoCloud from '@/components/sections/LogoCloud';
import Solutions from '@/components/sections/Solutions';
import Analytics from '@/components/sections/Analytics';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import Newsletter from '@/components/sections/Newsletter';
import OurServices from '@/components/sections/OurServices'; 
import Footer from '@/components/Footer';
import { BackgroundElements } from '@/components/BackgroundElements';


export default function Home() {
  return (
    <main className="min-h-screen">
      <BackgroundElements />
      <Hero />
      <LogoCloud />
      <OurServices />
      <Solutions />
      <Analytics />
      <Testimonials />
      <Pricing />
      <Newsletter />
      <Footer />
    </main>
  );
}