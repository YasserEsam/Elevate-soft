'use client';

import { memo, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import NextHead from 'next/head';

// Static imports for critical above-the-fold components
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
    Calendar,
    ChevronRight,
    ArrowRight,
    Github,
    ExternalLink,
    Code,
} from 'lucide-react';

// Lazy load non-critical components
import dynamic from 'next/dynamic';

// Simple lightweight components for above-the-fold rendering
const Head = ({ children }) => <NextHead>{children}</NextHead>;

// Lightweight placeholders
const ImagePlaceholder = ({ className }) => (
    <div className={`bg-slate-100 ${className || ''}`} />
);

// Helper Components
const FeatureItem = memo(function FeatureItem({ feature }) {
    return (
        <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-indigo-600 mt-0.5 mr-2 flex-shrink-0" />
            <span>{feature}</span>
        </li>
    );
});

const ProjectLinkButton = memo(function ProjectLinkButton({
    href,
    icon: Icon,
    text,
    variant = 'default',
}) {
    return (
        <Button
            asChild
            variant={variant}
            className={
                variant === 'default'
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'border-indigo-200 hover:bg-indigo-50'
            }>
            <Link href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="mr-2 h-4 w-4" />
                {text}
            </Link>
        </Button>
    );
});

// Deferring the load of TechStackBadge with motion animations
const TechStackBadge = memo(function TechStackBadge({ tech, index }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="inline-block">
            <Badge
                variant="secondary"
                className="px-3 py-1 bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100 transition-colors">
                <Code className="w-3.5 h-3.5 mr-1" />
                {tech}
            </Badge>
        </div>
    );
});

const StatCard = memo(function StatCard({ label, value }) {
    return (
        <div className="bg-slate-50 rounded-lg p-3">
            <p className="text-xs text-slate-500 mb-1">{label}</p>
            <p className="font-semibold text-slate-900">{value}</p>
        </div>
    );
});

// Optimized for performance - static render
const RelatedProjectCard = memo(function RelatedProjectCard({ project }) {
    return (
        <Link href={`/projects/${project.id}`} className="block group">
            <div className="flex items-start gap-3">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={64}
                        height={64}
                        className="object-cover"
                        loading="lazy"
                    />
                </div>
                <div>
                    <h4 className="font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                    </h4>
                    <p className="text-sm text-slate-500 line-clamp-2 mt-1">
                        {project.shortDescription}
                    </p>
                </div>
            </div>
        </Link>
    );
});

// Optimized HeroSection - reduced animation complexity
const HeroSection = memo(function HeroSection({ project }) {
    return (
        <div className="relative h-[50vh] md:h-[60vh] bg-indigo-900 overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={project.images[0]}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    quality={75}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/70" />
            </div>

            <div className="absolute inset-0 bg-black/40" />

            <div className="container relative z-10 h-full flex flex-col justify-end pb-16 px-4 md:px-6">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge
                            variant="outline"
                            className="bg-white/10 backdrop-blur-sm text-white border-white/20 px-4 py-1">
                            {project.category}
                        </Badge>
                        <div className="flex items-center text-white/70 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(project.date).toLocaleDateString(
                                'en-US',
                                {
                                    year: 'numeric',
                                    month: 'long',
                                },
                            )}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {project.title}
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
});

// Main Component with code-splitting
export default function ProjectPage({ project, relatedProjects }) {
    const [activeTab, setActiveTab] = useState('overview');
    // Load tabs content lazily
    const GalleryTab = dynamic(() => import('./components/GalleryTab'), {
        loading: () => (
            <div className="p-6 min-h-[300px] bg-slate-50 animate-pulse rounded-md"></div>
        ),
        ssr: false,
    });

    const TechnicalDetailsTab = dynamic(
        () => import('./components/TechnicalDetailsTab'),
        {
            loading: () => (
                <div className="p-6 min-h-[300px] bg-slate-50 animate-pulse rounded-md"></div>
            ),
            ssr: false,
        },
    );

    // Load non-critical UI components lazily
    const SponsorCard = dynamic(() => import('./components/SponsorCard'), {
        loading: () => <div className="h-32 bg-gray-100 rounded-lg"></div>,
        ssr: false,
    });

    const handleTabChange = useCallback((tab) => {
        setActiveTab(tab);
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <Head>
                <link
                    rel="preload"
                    as="image"
                    href={project.images[0]}
                    imagesizes="100vw"
                />
            </Head>

            <HeroSection project={project} />

            <div className="container px-4 md:px-6 -mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-2">
                        <Card className="shadow-xl border-0 overflow-hidden">
                            <div className="w-full">
                                <div className="flex px-6 pt-6 bg-white border-b gap-2">
                                    <button
                                        onClick={() =>
                                            handleTabChange('overview')
                                        }
                                        className={`px-4 py-2 text-sm font-medium transition-colors ${
                                            activeTab === 'overview'
                                                ? 'text-indigo-600 border-b-2 border-indigo-600'
                                                : 'text-slate-500 hover:text-slate-700'
                                        }`}>
                                        Overview
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleTabChange('gallery')
                                        }
                                        className={`px-4 py-2 text-sm font-medium transition-colors ${
                                            activeTab === 'gallery'
                                                ? 'text-indigo-600 border-b-2 border-indigo-600'
                                                : 'text-slate-500 hover:text-slate-700'
                                        }`}>
                                        Gallery
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleTabChange('details')
                                        }
                                        className={`px-4 py-2 text-sm font-medium transition-colors ${
                                            activeTab === 'details'
                                                ? 'text-indigo-600 border-b-2 border-indigo-600'
                                                : 'text-slate-500 hover:text-slate-700'
                                        }`}>
                                        Technical Details
                                    </button>
                                </div>

                                {activeTab === 'overview' && (
                                    <div className="p-6">
                                        <div className="prose prose-slate max-w-none">
                                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                                Project Overview
                                            </h2>
                                            <p className="text-slate-700 leading-relaxed mb-8">
                                                {project.description}
                                            </p>

                                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                                Key Features
                                            </h3>
                                            <ul className="space-y-2 text-slate-700 mb-8">
                                                {project.features.map(
                                                    (feature, index) => (
                                                        <FeatureItem
                                                            key={index}
                                                            feature={feature}
                                                        />
                                                    ),
                                                )}
                                            </ul>

                                            <div className="flex flex-wrap gap-4 mt-8">
                                                <ProjectLinkButton
                                                    href={project.liveUrl}
                                                    icon={ExternalLink}
                                                    text="View Live Demo"
                                                />
                                                <ProjectLinkButton
                                                    href={project.githubUrl}
                                                    icon={Github}
                                                    text="Source Code"
                                                    variant="outline"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'gallery' && (
                                    <GalleryTab project={project} />
                                )}

                                {activeTab === 'details' && (
                                    <TechnicalDetailsTab project={project} />
                                )}
                            </div>
                        </Card>
                    </div>

                    <div className="lg:col-span-1 space-y-6">
                        <SponsorCard sponsor={project.sponsor} />

                        <Card className="overflow-hidden border-0 shadow-lg">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                                    Technology Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, index) => (
                                        <TechStackBadge
                                            key={tech}
                                            tech={tech}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="overflow-hidden border-0 shadow-lg">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                                    Project Stats
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-600">
                                                Completion
                                            </span>
                                            <span className="font-medium text-indigo-600">
                                                100%
                                            </span>
                                        </div>
                                        <Progress
                                            value={100}
                                            className="h-2 bg-indigo-100 [&>div]:bg-indigo-600"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-2">
                                        <StatCard
                                            label="Duration"
                                            value={project.stats.duration}
                                        />
                                        <StatCard
                                            label="Team Size"
                                            value={project.stats.teamSize}
                                        />
                                        <StatCard
                                            label="Components"
                                            value={project.stats.components}
                                        />
                                        <StatCard
                                            label="Lines of Code"
                                            value={project.stats.linesOfCode}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="overflow-hidden border-0 shadow-lg">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                                    Related Projects
                                </h3>
                                <div className="space-y-4">
                                    {relatedProjects.map((relatedProject) => (
                                        <RelatedProjectCard
                                            key={relatedProject.id}
                                            project={relatedProject}
                                        />
                                    ))}

                                    <div className="pt-2">
                                        <Button
                                            variant="ghost"
                                            asChild
                                            className="w-full justify-between text-indigo-600">
                                            <Link href="/projects">
                                                Browse All Projects
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
}
