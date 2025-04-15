'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project, projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  'Web Design',
  'Web UI UX',
  'Mobile UI',
  'Dashboard',
  'Product Design',
] as const;

// Memoized components to prevent unnecessary re-renders
const SmallCard = memo(({ project }: { project: Project }) => (
  <Link href={`/projects/${project.id}`} className="block group h-full">
    <Card className="flex flex-col h-full rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
          width={600}
          height={500}
          priority={false}
        />
      </div>
      <CardContent className="flex flex-col p-5">
        <h3 className="text-xl font-semibold text-[#1D2B4F] mb-2">{project.title}</h3>
        <p className="text-[#6B7280] text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
        <span className="text-[#4353FF] font-medium text-sm mt-auto hover:underline">Read more</span>
      </CardContent>
    </Card>
  </Link>
));

SmallCard.displayName = 'SmallCard';

const BigCard = memo(({ project }: { project: Project }) => (
  <Link href={`/projects/${project.id}`} className="block h-full group">
    <Card className="flex flex-col h-full rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={800}
          height={600}
          priority={true}
        />
      </div>
      <CardContent className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-semibold text-[#1D2B4F] mb-3">{project.title}</h3>
        <p className="text-[#6B7280] text-sm line-clamp-3 mb-6">{project.shortDescription}</p>
        <div className="mt-auto">
          <Button className="bg-[#4353FF] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#3246CC] focus:ring-2 focus:ring-[#4353FF]/50">
            Read more
          </Button>
        </div>
      </CardContent>
    </Card>
  </Link>
));

BigCard.displayName = 'BigCard';

const FilteredProjectCard = memo(({ project }: { project: Project }) => (
  <Link href={`/projects/${project.id}`} className="block group h-full">
    <Card className="h-full rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={500}
          height={375}
          loading="lazy"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-[#1D2B4F] mb-3">{project.title}</h3>
        <p className="text-[#6B7280] text-sm mb-4">{project.shortDescription}</p>
        <span className="text-[#4353FF] font-medium text-sm hover:underline">Read more</span>
      </CardContent>
    </Card>
  </Link>
));

FilteredProjectCard.displayName = 'FilteredProjectCard';

const CategoryButton = memo(({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => (
  <Button
    onClick={onClick}
    variant={isActive ? 'secondary' : 'outline'}
    className={`px-8 py-3 rounded-xl text-sm font-medium border transition-all ${
      isActive
        ? 'bg-[#EEF2FF] text-[#4353FF] border-[#E2E8FF]'
        : 'border-[#E5E7EB] text-[#4B5563] hover:bg-[#F9FAFC] hover:text-[#4353FF] hover:border-[#E2E8FF]'
    }`}
  >
    {children}
  </Button>
));

CategoryButton.displayName = 'CategoryButton';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number] | 'all'>('all');

  // Memoize this filtering operation for performance
  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1D2B4F] mb-12">
          Find The Category For You
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          <CategoryButton isActive={activeCategory === 'all'} onClick={() => setActiveCategory('all')}>
            All
          </CategoryButton>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </div>

        {activeCategory === 'all' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.slice(0, 4).map((project) => (
                  <SmallCard key={project.id} project={project} />
                ))}
              </div>
            </div>
            <div className="md:col-span-7 h-full">
              <BigCard project={projects[2]} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <FilteredProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}