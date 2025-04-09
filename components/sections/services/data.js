"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// Components
import { ServiceCard } from "../sections/services/ServiceCard";
import { TestimonialCard } from "../sections/services/TestimonialCard";
import { BackgroundElements } from "../sections/services/BackgroundElements";
import { StatsCard } from "../sections/services/StatsCard";
import { AnimatedUnderline } from "../sections/services/AnimatedUnderline";

// Icons
import { 
  Code, Search, PaintBucket, Smartphone, 
  BrainCircuit, Globe 
} from "lucide-react";

// Data
const services = [
    {
      id: 1,
      title: "Immersive Web Development",
      description:
        "We craft high-performance, responsive websites with cutting-edge technologies that deliver exceptional user experiences across all devices and platforms.",
      features: ["Custom-built solutions", "Responsive design", "Performance optimization"],
      icon: Code,
      color: "#6366F1",
      gradient: "from-indigo-500 to-blue-600",
      shadowColor: "rgba(99, 102, 241, 0.4)",
      accentColor: "bg-indigo-100/80",
      iconColor: "text-indigo-600",
      hoverColor: "hover:shadow-indigo-400/30",
      highlightColor: "bg-indigo-200/30",
    },
    {
      id: 2,
      title: "SEO & Growth Marketing",
      description:
        "Transform your digital presence with our data-driven SEO and marketing strategies designed to increase visibility, drive qualified traffic, and boost conversion rates.",
      features: ["Search engine optimization", "Content strategy", "Analytics & reporting"],
      icon: Search,
      color: "#EC4899",
      gradient: "from-pink-500 to-rose-500",
      shadowColor: "rgba(236, 72, 153, 0.4)",
      accentColor: "bg-pink-100/80",
      iconColor: "text-pink-600",
      hoverColor: "hover:shadow-pink-400/30",
      highlightColor: "bg-pink-200/30",
    },
    {
      id: 3,
      title: "UI/UX Design Excellence",
      description:
        "Elevate your brand with stunning, intuitive designs that captivate users, enhance engagement, and transform visitors into loyal customers.",
      features: ["User-centered design", "Brand identity", "Wireframing & prototyping"],
      icon: PaintBucket,
      color: "#10B981",
      gradient: "from-emerald-500 to-teal-500",
      shadowColor: "rgba(16, 185, 129, 0.4)",
      accentColor: "bg-emerald-100/80",
      iconColor: "text-emerald-600",
      hoverColor: "hover:shadow-emerald-400/30",
      highlightColor: "bg-emerald-200/30",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "Bring your ideas to life with our custom mobile application development services, creating seamless experiences that users love on iOS and Android platforms.",
      features: ["Native development", "Cross-platform solutions", "App store optimization"],
      icon: Smartphone,
      color: "#F59E0B",
      gradient: "from-amber-500 to-orange-500",
      shadowColor: "rgba(245, 158, 11, 0.4)",
      accentColor: "bg-amber-100/80",
      iconColor: "text-amber-600",
      hoverColor: "hover:shadow-amber-400/30",
      highlightColor: "bg-amber-200/30",
    },
    {
      id: 5,
      title: "AI & Automation Solutions",
      description:
        "Leverage the power of artificial intelligence and automation to streamline operations, extract insights from data, and create intelligent systems that drive business growth.",
      features: ["Machine learning", "Process automation", "Data analysis"],
      icon: BrainCircuit,
      color: "#8B5CF6",
      gradient: "from-violet-500 to-purple-600",
      shadowColor: "rgba(139, 92, 246, 0.4)",
      accentColor: "bg-violet-100/80",
      iconColor: "text-violet-600",
      hoverColor: "hover:shadow-violet-400/30",
      highlightColor: "bg-violet-200/30",
    },
  ];
  
  const testimonials = [
    {
      id: 1,
      content: "The team delivered an outstanding website that perfectly captures our brand's essence. Our conversion rates have increased by 35% since launch!",
      author: "Marketing Director at TechVision",
      company: "TechVision Inc.",
      service: "Web Development & SEO",
    },
    {
      id: 2,
      content: "Their UI/UX expertise transformed our app into something our users absolutely love. User engagement has doubled since the redesign.",
      author: "Product Lead at HealthPlus",
      company: "HealthPlus",
      service: "UI/UX Design",
    },
    {
      id: 3,
      content: "The AI solution they built for our customer service has reduced response times by 60% while maintaining exceptional quality. A true game-changer.",
      author: "CTO at Global Services",
      company: "Global Services Group",
      service: "AI & Automation",
    },
  ];

const stats = [
  { value: "98%", label: "Client Satisfaction", icon: Globe },
  { value: "350+", label: "Projects Completed", icon: Code },
  { value: "12+", label: "Industry Expertise", icon: BrainCircuit },
];

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OurServices() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const headerRef = useRef(null);
  const servicesSectionRef = useRef(null);

  // Scroll optimization with throttled parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  
  // Optimize animations with GSAP
  useEffect(() => {
    if (!titleRef.current || !textRef.current || !headerRef.current || !servicesSectionRef.current) return;

    // Create one timeline for better performance
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      }
    });

    masterTl.fromTo(
      headerRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1 }
    );

    // Batch animations for service cards
    const serviceCards = gsap.utils.toArray(".service-highlight");
    if (serviceCards.length) {
      gsap.set(serviceCards, { opacity: 0, scale: 0.9 });
      
      ScrollTrigger.create({
        trigger: ".services-grid",
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(serviceCards, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            clearProps: "all" // Clear props after animation to free memory
          });
        }
      });
    }

    // Clean up all ScrollTriggers and timelines on unmount
    return () => {
      masterTl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  // Memoize the services grid to prevent unnecessary re-renders
  const servicesGrid = useMemo(() => (
    <div ref={servicesSectionRef} className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

  return (
    <section 
      ref={containerRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #f8fafc, #f1f5f9)" }}
    >
      <BackgroundElements />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={headerRef} className="mb-20 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center mb-4"
          >
            <span className="inline-block py-2 px-4 bg-indigo-50 rounded-full text-indigo-700 text-sm font-medium tracking-wide">
              WHAT WE OFFER
            </span>
          </motion.div>
          
          <h2 
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 relative inline-block"
          >
            <span className="relative z-10">Exceptional Digital</span>
            <span className="relative inline-block ml-3 z-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Services</span>
              <AnimatedUnderline />
            </span>
          </h2>
          
          <p 
            ref={textRef}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We combine cutting-edge technology with creative expertise to deliver solutions that drive growth, enhance user experience, and elevate your brand in the digital landscape.
          </p>
        </div>

        {/* Services grid - memoized */}
        {servicesGrid}

        {/* Testimonials section with optimized visibility checking */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-24"
        >
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
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="p-4">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Stats section - memoized */}
        {statsSection}
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

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