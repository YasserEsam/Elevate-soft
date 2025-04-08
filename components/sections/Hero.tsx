"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="pt-32 lg:pt-16 px-4 sm:px-6 lg:px-8 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-start">
          <div className="space-y-6">
            <span className="text-[#5ca4d4] font-medium">
              Welcome to Elevate Soft
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1D2B4F]">
              Crafting Digital Experiences That Drive Results
            </h1>
            <p className="text-gray-500 text-lg">
              Backed by expertise and driven by innovation, Elevate Soft
              delivers top-tier web development and SEO solutions designed to
              grow your brand and captivate your audience.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:pb-0 pb-10 justify-center lg:justify-start">
            <Button
              className="bg-[#5ca4d4] hover:bg-blue-700 text-white px-8 rounded-lg"
              size="lg"
            >
              Contact Us
            </Button>
            <Button
              variant="outline"
              className="text-gray-700 border-gray-200 rounded-lg"
              size="lg"
            >
              <Play className="mr-2 h-4 w-4" /> View Demo
            </Button>
          </div>
        </div>

        <div className="relative hidden md:flex justify-center">
          <div
            className={`relative ${
              isMobile ? "w-4/5" : "w-full"
            } aspect-square`}
          >
            <Image
              src="/vector-illustration without clouds.png"
              alt="Hero illustration"
              className="w-full h-full object-contain"
              width={500}
              height={500}
              priority
            />

            {/* Cloud 1 */}
            <motion.div
              className={`absolute w-24 h-16 ${
                isMobile ? "-top-5 -left-5" : "top-10 left-10"
              }`}
              animate={{ y: [0, -15, 0, -5, 0], x: [0, 10, 0, -5, 0] }}
              transition={{ duration: 10, ease: "easeOut", repeat: Infinity }}
            >
              <Image
                src="/cloud.png"
                alt="Cloud"
                width={96}
                height={64}
                className="object-contain"
              />
            </motion.div>

            {/* Cloud 2 */}
            <motion.div
              className={`absolute w-16 h-10 ${
                isMobile ? "-top-3 -right-5" : "top-20 right-5"
              }`}
              animate={{ y: [0, -12, 0, -3, 0], x: [0, 8, 0, 4, 0] }}
              transition={{
                duration: 7,
                ease: "easeOut",
                delay: 1,
                repeat: Infinity,
              }}
            >
              <Image
                src="/small-cloud.png"
                alt="Small Cloud"
                width={64}
                height={40}
                className="object-contain"
              />
            </motion.div>

            {/* Cloud 3 */}
            <motion.div
              className={`absolute w-20 h-12 ${
                isMobile ? "-bottom-5 -right-5" : "bottom-10 right-10"
              }`}
              animate={{ y: [0, -15, 0, -5, 0], x: [0, -12, 0, 8, 0] }}
              transition={{
                duration: 9,
                ease: "easeOut",
                delay: 0.5,
                repeat: Infinity,
              }}
            >
              <Image
                src="/cloud.png"
                alt="Cloud"
                width={80}
                height={48}
                className="object-contain"
              />
            </motion.div>

            {/* Cloud 4 */}
            <motion.div
              className={`absolute w-16 h-10 ${
                isMobile ? "-bottom-4 -left-5" : "bottom-10 left-10"
              }`}
              animate={{ y: [0, -8, 0, -3, 0], x: [0, 15, 0, -10, 0] }}
              transition={{
                duration: 8,
                ease: "easeOut",
                delay: 0.3,
                repeat: Infinity,
              }}
            >
              <Image
                src="/small-cloud.png"
                alt="Small Cloud"
                width={72}
                height={56}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
