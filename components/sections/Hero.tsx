"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="text-blue-600 font-medium">Welcome QuickSpace</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1D2B4F]">
                Satisfied Customer Is the Best Business Strategy
              </h1>
              <p className="text-gray-500 text-lg">
                Backed with vast experience and fully up to date skills set, at Enuke Software offer the best in class E-Prescription solution
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-lg">
                Try Free
              </Button>
              <Button size="lg" variant="outline" className="text-gray-700 border-gray-200 rounded-lg">
                <Play className="mr-2 h-4 w-4" /> View Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square">

               <Image
                src="/Hero_main.webp"
                alt="Hero illustration"
                className="w-full h-full object-contain"
                width={500}
                height={500}
                priority
              />
              {/* Floating Elements */}
              <div className="absolute top-8 left-0 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                  👨‍🎨
                </div>
                <div>
                  <p className="font-medium text-sm">Great Designer</p>
                  <div className="flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-yellow-400">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-12 right-0 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=32&h=32"
                  alt="Gavin Henry"
                  className="w-8 h-8 rounded-full"
                  width={32}
                  height={32}
                  priority
                />
                <div>
                  <p className="font-medium text-sm">Gavin Henry</p>
                  <p className="text-xs text-gray-500">1m ago</p>
                </div>
              </div>
              <div className="absolute bottom-24 left-12 bg-white p-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    📨
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Notification</p>
                    <p className="text-sm">Send a message to</p>
                    <p className="text-sm font-medium">Ilya Zinchenko</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;