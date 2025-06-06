import Hero from '@/components/sections/Hero';
import LogoCloud from '@/components/sections/LogoCloud';
import Solutions from '@/components/sections/Solutions';
import Analytics from '@/components/sections/Analytics';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import Newsletter from '@/components/sections/Newsletter';
import OurServices from '@/components/sections/OurServices'; 
import Projects from '@/components/sections/Projects';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LogoCloud />
      <OurServices />
      <Projects />
      <Solutions />
      <Analytics />
      <Testimonials />
      <Pricing />
      <Newsletter />
      <Footer />
    </main>
  );
}