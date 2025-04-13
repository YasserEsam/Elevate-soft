'use client';

import { useMemo } from 'react';
import { ServiceCard } from '../sections/services/ServiceCard';
import { AnimatedUnderline } from '../sections/services/AnimatedUnderline';
import { services } from '../sections/services/data';

export default function OurServices() {
    const servicesGrid = useMemo(
        () => (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index} />
                ))}
            </div>
        ),
        [],
    );

    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
            {/* Decorative blur circle */}
            <div className="absolute top-0 left-10 w-96 h-96 bg-blue-700/40 blur-[80px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 text-center relative">
                    <div className="flex justify-center mb-4">
                        <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full tracking-wide">
                            WHAT WE OFFER
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                        <span className="relative z-10">Exceptional Digital</span>
                        <span className="relative inline-block ml-3 z-10">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                                Services
                            </span>
                            <AnimatedUnderline />
                        </span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We combine cutting-edge technology with creative expertise to deliver
                        solutions that drive growth, enhance user experience, and elevate your brand
                        in the digital landscape.
                    </p>
                </div>

                {servicesGrid}
            </div>
        </section>
    );
}
