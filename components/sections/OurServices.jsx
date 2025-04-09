"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// Components
import { ServiceCard } from "../sections/services/ServiceCard";
import { TestimonialCard } from "../sections/services/TestimonialCard";
import { StatsCard } from "../sections/services/StatsCard";
import { AnimatedUnderline } from "../sections/services/AnimatedUnderline";

// data 
import { services, testimonials } from "../sections/services/data";

// Icons
import { 
  Code, Search, PaintBucket, Smartphone, 
  BrainCircuit, Globe 
} from "lucide-react";

// Data - memoized to prevent unnecessary re-creation
const stats = [
  { value: "98%", label: "Client Satisfaction", icon: Globe },
  { value: "350+", label: "Projects Completed", icon: Code },
  { value: "12+", label: "Industry Expertise", icon: BrainCircuit },
];

export default function OurServices() {
  // Memoize the services grid to prevent unnecessary re-renders
  const servicesGrid = useMemo(() => (
    <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={service.id} className="service-highlight">
          <ServiceCard service={service} index={index} />
        </div>
      ))}
    </div>
  ), []);

  // Memoize the stats section
  const statsSection = useMemo(() => (
    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <StatsCard key={index} stat={stat} index={index} />
      ))}
    </div>
  ), []);

  // Memoize testimonials section to prevent re-renders
  const testimonialsSection = useMemo(() => (
    <div className="mt-24">
      <div className="text-center mb-12">
        <span className="inline-block py-2 px-4 bg-indigo-50 rounded-full text-indigo-700 text-sm font-medium tracking-wide mb-4">
          SUCCESS STORIES
        </span>
        <h3 className="text-3xl font-bold text-gray-900">What Our Clients Say</h3>
      </div>
      
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination]}
        className="max-w-xl mx-auto"
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        updateOnWindowResize={false}
        observer={true}
        observeParents={true}
        lazyPreloadPrevNext={true}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="p-4">
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ), []);

  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #f8fafc, #f1f5f9)" }}
    >
      <div className="absolute top-0 left-10 w-96 h-96 rounded-full bg-blue-700/40 filter blur-[80px]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center relative">
          <div className="flex items-center justify-center mb-4">
            <span className="inline-block py-2 px-4 bg-indigo-50 rounded-full text-indigo-700 text-sm font-medium tracking-wide">
              WHAT WE OFFER
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 relative inline-block">
            <span className="relative z-10">Exceptional Digital</span>
            <span className="relative inline-block ml-3 z-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Services</span>
              <AnimatedUnderline />
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with creative expertise to deliver solutions that drive growth, enhance user experience, and elevate your brand in the digital landscape.
          </p>
        </div>

        {/* Services grid - memoized */}
        {servicesGrid}

        {/* Testimonials section - memoized */}
        {testimonialsSection}

        {/* Stats section - memoized */}
        {statsSection}
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #8B5CF6;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}