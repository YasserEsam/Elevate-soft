'use client';

import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import {
    Calendar,
    Github,
    ChevronRight,
    ArrowRight,
    ExternalLink,
    Code,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Initialize GSAP ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Helper Components
const FeatureItem = ({ feature }) => (
    <li className="flex items-start">
        <ChevronRight className="w-5 h-5 text-indigo-600 mt-0.5 mr-2 flex-shrink-0" />
        <span>{feature}</span>
    </li>
);

const ProjectLinkButton = ({ href, icon: Icon, text, variant = 'default' }) => (
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

const TechStackBadge = ({ tech, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
            }}>
            <Badge
                variant="secondary"
                className="px-3 py-1 bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100 transition-colors"
                onClick={() =>
                    toast.info(`${tech} is a key technology in this project.`)
                }>
                <Code className="w-3.5 h-3.5 mr-1" />
                {tech}
            </Badge>
        </motion.div>
    );
};

const StatCard = ({ label, value }) => (
    <div className="bg-slate-50 rounded-lg p-3">
        <p className="text-xs text-slate-500 mb-1">{label}</p>
        <p className="font-semibold text-slate-900">{value}</p>
    </div>
);

const RelatedProjectCard = ({ project }) => (
    <Link href={`/projects/${project.id}`} className="block group">
        <div className="flex items-start gap-3">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
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

// Main Component
export default function ProjectPage({ params }) {
    const project = projects.find((p) => p.id === params.id);
    const headerRef = useRef(null);
    const galleryRef = useRef(null);

    useEffect(() => {
        if (!headerRef.current || !galleryRef.current) return;

        // Header animation
        gsap.fromTo(
            headerRef.current.querySelectorAll('.animate-item'),
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out',
            },
        );

        // Gallery animation with ScrollTrigger
        const galleryItems =
            galleryRef.current.querySelectorAll('.gallery-item');
        gsap.fromTo(
            galleryItems,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: galleryRef.current,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none none',
                },
            },
        );
    }, []);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <HeroSection project={project} headerRef={headerRef} />

            {/* Content */}
            <div className="container px-4 md:px-6 -mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <ProjectTabs
                            project={project}
                            galleryRef={galleryRef}
                        />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <SponsorCard sponsor={project.sponsor} />
                        <TechStackCard techStack={project.techStack} />
                        <ProjectStats stats={project.stats} />
                        <RelatedProjects currentProjectId={project.id} />
                    </div>
                </div>
            </div>
        </main>
    );
}

// Sub-Components
const HeroSection = ({ project, headerRef }) => (
    <div
        className="relative h-[50vh] md:h-[60vh] bg-gradient-to-r from-indigo-900 to-purple-900 overflow-hidden"
        style={{
            backgroundImage: `linear-gradient(to right, rgba(30, 41, 59, 0.9), rgba(79, 70, 229, 0.7)), url(${project.images[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 h-full flex flex-col justify-end pb-16 px-4 md:px-6">
            <div ref={headerRef} className="max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-4 animate-item">
                    <Badge
                        variant="outline"
                        className="bg-white/10 backdrop-blur-sm text-white border-white/20 px-4 py-1">
                        {project.category}
                    </Badge>
                    <div className="flex items-center text-white/70 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(project.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                        })}
                    </div>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-item">
                    {project.title}
                </h1>

                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl animate-item">
                    {project.description}
                </p>
            </div>
        </div>
    </div>
);

const ProjectTabs = ({ project, galleryRef }) => (
    <Card className="shadow-xl border-0 overflow-hidden">
        <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start px-6 pt-6 bg-white border-b">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="details">Technical Details</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="p-6">
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
                        {project.features.map((feature, index) => (
                            <FeatureItem key={index} feature={feature} />
                        ))}
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
            </TabsContent>

            <TabsContent value="gallery" className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Project Gallery
                </h2>
                <div
                    ref={galleryRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.map((image, index) => (
                        <div
                            key={index}
                            className="gallery-item rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                            <AspectRatio ratio={16 / 9}>
                                <Image
                                    src={image}
                                    alt={`${project.title} - Image ${
                                        index + 1
                                    }`}
                                    fill
                                    className="object-cover"
                                />
                            </AspectRatio>
                        </div>
                    ))}
                </div>
            </TabsContent>

            <TabsContent value="details" className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Technical Details
                </h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">
                            Architecture
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                            {project.architecture}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">
                            Implementation Challenges
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                            {project.implementationChallenges}
                        </p>
                    </div>

                    {project.codeSnippet && (
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                Code Snippet
                            </h3>
                            <pre className="bg-slate-900 text-white p-4 rounded-lg overflow-x-auto">
                                <code>{project.codeSnippet}</code>
                            </pre>
                        </div>
                    )}
                </div>
            </TabsContent>
        </Tabs>
    </Card>
);

const SponsorCard = ({ sponsor }) => (
    <Card className="overflow-hidden border-0 shadow-lg">
        <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Project Sponsor
            </h3>
            <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                    <AvatarImage src={sponsor.logo} alt={sponsor.name} />
                    <AvatarFallback>{sponsor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold text-slate-900">
                        {sponsor.name}
                    </p>
                    <p className="text-sm text-slate-500">Industry Leader</p>
                </div>
            </div>
        </CardContent>
    </Card>
);

const TechStackCard = ({ techStack }) => (
    <Card className="overflow-hidden border-0 shadow-lg">
        <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                    <TechStackBadge key={tech} tech={tech} index={index} />
                ))}
            </div>
        </CardContent>
    </Card>
);

const ProjectStats = ({ stats }) => (
    <Card className="overflow-hidden border-0 shadow-lg">
        <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Project Stats
            </h3>
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-600">Completion</span>
                        <span className="font-medium text-indigo-600">
                            100%
                        </span>
                    </div>
                    <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 rounded-full w-full"></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                    <StatCard label="Duration" value={stats.duration} />
                    <StatCard label="Team Size" value={stats.teamSize} />
                    <StatCard label="Components" value={stats.components} />
                    <StatCard label="Lines of Code" value={stats.linesOfCode} />
                </div>
            </div>
        </CardContent>
    </Card>
);

const RelatedProjects = ({ currentProjectId }) => (
    <Card className="overflow-hidden border-0 shadow-lg">
        <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Related Projects
            </h3>
            <div className="space-y-4">
                {projects
                    .filter((p) => p.id !== currentProjectId)
                    .slice(0, 2)
                    .map((project) => (
                        <RelatedProjectCard
                            key={project.id}
                            project={project}
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
);
