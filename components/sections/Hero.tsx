'use client';

import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const clouds = [
    {
        src: '/cloud.png',
        alt: 'Cloud',
        width: 96,
        height: 64,
        className:
            'top-4 left-4 sm:top-10 sm:left-10 w-20 h-12 sm:w-24 sm:h-16',
        animation: { y: [0, -15, 0, -5, 0], x: [0, 10, 0, -5, 0] },
        delay: 0,
    },
    {
        src: '/small-cloud.png',
        alt: 'Small Cloud',
        width: 64,
        height: 40,
        className: 'top-6 right-4 sm:top-20 sm:right-5 w-16 h-10',
        animation: { y: [0, -12, 0, -3, 0], x: [0, 8, 0, 4, 0] },
        delay: 1,
    },
    {
        src: '/cloud.png',
        alt: 'Cloud',
        width: 80,
        height: 48,
        className: 'bottom-6 right-4 sm:bottom-10 sm:right-10 w-20 h-12',
        animation: { y: [0, -15, 0, -5, 0], x: [0, -12, 0, 8, 0] },
        delay: 0.5,
    },
    {
        src: '/small-cloud.png',
        alt: 'Small Cloud',
        width: 72,
        height: 56,
        className: 'bottom-4 left-4 sm:bottom-10 sm:left-10 w-16 h-10',
        animation: { y: [0, -8, 0, -3, 0], x: [0, 15, 0, -10, 0] },
        delay: 0.3,
    },
];

const Cloud = ({ src, alt, width, height, className, animation, delay }) => (
    <motion.div
        className={`absolute ${className}`}
        animate={animation}
        transition={{
            duration: 10,
            ease: 'easeOut',
            delay,
            repeat: Infinity,
        }}
        aria-hidden="true">
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-contain"
            loading="lazy"
        />
    </motion.div>
);

const Hero = () => {
    return (
        <section
            className="pt-24 sm:pt-32 lg:pt-16 px-4 sm:px-6 lg:px-8 bg-[#F8F9FF]"
            aria-labelledby="hero-heading">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
                {/* Text Content */}
                <div className="space-y-8 text-center lg:text-left z-10">
                    <div className="space-y-6">
                        <span className="text-[#5ca4d4] font-medium block">
                            Welcome to Elevate Soft
                        </span>
                        <h1
                            id="hero-heading"
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1D2B4F]">
                            Crafting Digital Experiences That Drive Results
                        </h1>
                        <p className="text-gray-500 text-lg">
                            Backed by expertise and driven by innovation,
                            Elevate Soft delivers top-tier web development and
                            SEO solutions designed to grow your brand and
                            captivate your audience.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <Button
                            className="bg-[#5ca4d4] hover:bg-blue-700 text-white px-8 rounded-lg"
                            size="lg">
                            Contact Us
                        </Button>
                        <Button
                            variant="outline"
                            className="text-gray-700 border-gray-200 rounded-lg"
                            size="lg"
                            aria-label="Watch demo">
                            <Play className="mr-2 h-4 w-4" />
                            View Demo
                        </Button>
                    </div>
                </div>

                {/* Illustration with Animated Clouds */}
                <div className="relative flex justify-center items-center w-full aspect-[4/3] sm:aspect-square z-10">
                    <Image
                        src="/vector-illustration without clouds.png"
                        alt="Illustration of web development"
                        width={500}
                        height={500}
                        priority
                        className="w-full h-full object-contain"
                    />
                    {clouds.map((cloud, idx) => (
                        <Cloud key={idx} {...cloud} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
