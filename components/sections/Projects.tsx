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

//small card compomenet
// Small Card Component
function SmallCard({ project }: { project: Project }) {
    return (
        <Link href={`/projects/${project.id}`} className="block group h-full">
            <div className="h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                
                {/* Image Area */}
                <div className="aspect-[4/3] overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        width={500}
                        height={375}
                    />
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-xl font-semibold text-[#1D2B4F] mb-2">
                        {project.title}
                    </h3>

                    <p className="text-[#6B7280] text-sm mb-4 line-clamp-2">
                        {project.shortDescription}
                    </p>

                    <div className="mt-auto">
                        <span className="text-[#4353FF] font-medium text-sm">
                            Read more
                        </span>
                    </div>
                </div>

            </div>
        </Link>
    );
}

//big card component
function BigCard({ project }: { project: Project }) {
    return (
        <Link href={`/projects/${project.id}`} className="block h-full group">
        <div className="h-full">
          <div className="h-full flex flex-col justify-between bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            
            {/* Image Area */}
            <div className="w-full h-auto">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                width={800}
                height={600}
              />
            </div>
      
            {/* Content Area */}
            <div className="py-4 px-1 mt-auto flex flex-col gap-10 h-full">
              <h3 className="text-xl font-semibold text-[#1D2B4F] mb-3">
                {project.title}
              </h3>
              <p className="text-[#6B7280] text-sm mb-4">
                {project.shortDescription}
              </p>
              <button className="bg-[#4353FF] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#3246CC] transition-colors">
                Read more
              </button>
            </div>
      
          </div>
        </div>
      </Link>
      
    );
}
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
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[766px]">
                        {/* LEFT COLUMN (Two Small Cards) - Takes 5/12 on md+ screens, full width on mobile */}
                        <div className="col-span-1 md:col-span-5 h-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {projects.slice(0, 4).map((project) => (
                                    <SmallCard
                                        project={project}
                                        key={project.id}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN(Big Card) - Takes 7/12 on md+ screens, full width on mobile */}
                        <div className="col-span-1 md:col-span-7 h-full">
                            <BigCard project={projects[2]} />
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
