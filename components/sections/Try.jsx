'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Project, projects } from '@/data/projects';
import Image from 'next/image';

const categories = [
    'Web Design',
    'Web UI UX',
    'Mobile UI',
    'Dashboard',
    'Product Design',
] as const;

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState<
        (typeof categories)[number] | 'all'
    >('all');

    const filteredProjects =
        activeCategory === 'all'
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <section className="py-12 bg-white">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-[#1D2B4F] mb-12">
                    Find The Category For You
                </h2>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-8 py-3 rounded-xl transition-all text-sm font-medium ${
                            activeCategory === 'all'
                                ? 'bg-[#EEF2FF] text-[#4353FF] border border-[#E2E8FF]'
                                : 'border border-[#E5E7EB] text-[#4B5563] hover:bg-[#EEF2FF] hover:text-[#4353FF] hover:border-[#E2E8FF]'
                        }`}>
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-8 py-3 rounded-xl transition-all text-sm font-medium ${
                                activeCategory === category
                                    ? 'bg-[#EEF2FF] text-[#4353FF] border border-[#E2E8FF]'
                                    : 'border border-[#E5E7EB] text-[#4B5563] hover:bg-[#EEF2FF] hover:text-[#4353FF] hover:border-[#E2E8FF]'
                            }`}>
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                {activeCategory === 'all' ? (
                    // Original layout for 'all' category
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left side - 2x2 grid of smaller projects */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Top Left Card */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                            <div className="aspect-[4/3] overflow-hidden">
                                <Image
                                    src={projects[0].image}
                                    alt="User Centered Design"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    width={500}
                                    height={375}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#1D2B4F] mb-3">
                                    User Centered Design
                                </h3>
                                <p className="text-[#6B7280] text-sm mb-4">
                                    Take us wherever you go so that you know what's going
                                </p>
                                <span className="text-[#4353FF] font-medium text-sm">
                                    Read more
                                </span>
                            </div>
                        </div>

                        {/* Top Right Card */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                            <div className="aspect-[4/3] overflow-hidden">
                                <Image
                                    src={projects[1].image}
                                    alt="What Is Design System"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    width={500}
                                    height={375}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#1D2B4F] mb-3">
                                    What Is Design System
                                </h3>
                                <p className="text-[#6B7280] text-sm mb-4">
                                    Take us wherever you go so that you know what's going
                                </p>
                                <span className="text-[#4353FF] font-medium text-sm">
                                    Read more
                                </span>
                            </div>
                        </div>

                        {/* Bottom Left Card */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                            <div className="aspect-[4/3] overflow-hidden">
                                <Image
                                    src={projects[3].image}
                                    alt="Illustration Depends"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    width={500}
                                    height={375}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#1D2B4F] mb-3">
                                    Illustration Depends
                                </h3>
                                <p className="text-[#6B7280] text-sm mb-4">
                                    Take us wherever you go so that you know what's going
                                </p>
                                <span className="text-[#4353FF] font-medium text-sm">
                                    Read more
                                </span>
                            </div>
                        </div>

                        {/* Bottom Right Card */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                            <div className="aspect-[4/3] overflow-hidden">
                                <Image
                                    src={projects[4].image}
                                    alt="How Icons Formed"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    width={500}
                                    height={375}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#1D2B4F] mb-3">
                                    How Icons Formed
                                </h3>
                                <p className="text-[#6B7280] text-sm mb-4">
                                    Take us wherever you go so that you know what's going
                                </p>
                                <span className="text-[#4353FF] font-medium text-sm">
                                    Read more
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Larger featured project */}
                    <div className="lg:col-span-1 h-full">
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col">
                            <div className="aspect-[4/3] lg:flex-grow overflow-hidden">
                                <Image
                                    src={projects[2].image}
                                    alt="React.Js Loops & Libraries"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    width={500}
                                    height={700}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#1D2B4F] mb-3">
                                    React.Js Loops & Libraries
                                </h3>
                                <p className="text-[#6B7280] text-sm mb-5">
                                    Take us wherever you go so that you know what's going on with your money at all times.
                                </p>
                                <button className="bg-[#4353FF] text-white px-5 py-2.5 rounded-lg text-sm font-medium">
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                ) : (
                    // Filtered layout for specific categories
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <Link
                                key={project.id}
                                href={`/projects/${project.id}`}
                                className="block group">
                                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            width={500}
                                            height={375}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-[#1D2B4F] mb-3">
                                            {project.title}
                                        </h3>
                                        <p className="text-[#6B7280] text-sm mb-4">
                                            {project.shortDescription}
                                        </p>
                                        <span className="text-[#4353FF] font-medium text-sm">
                                            Read more
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
