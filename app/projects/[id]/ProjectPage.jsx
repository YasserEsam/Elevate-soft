'use client';

import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { useEffect, useRef, useMemo, memo , useState} from 'react';
import dynamic from 'next/dynamic';
import { toast } from 'sonner';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Head from 'next/head';

// Static imports for critical above-the-fold components
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// Static imports for critical icons
import { 
  Calendar, 
  ChevronRight, 
  ArrowRight,
  Github,
  ExternalLink,
  Code
} from 'lucide-react';

// Dynamic imports for heavy components (non-critical)
const Tabs = dynamic(() => import('@/components/ui/tabs').then(mod => mod.Tabs));
const TabsContent = dynamic(() => import('@/components/ui/tabs').then(mod => mod.TabsContent));
const TabsList = dynamic(() => import('@/components/ui/tabs').then(mod => mod.TabsList));
const TabsTrigger = dynamic(() => import('@/components/ui/tabs').then(mod => mod.TabsTrigger));

const AspectRatio = dynamic(() => 
  import('@/components/ui/aspect-ratio').then(mod => mod.AspectRatio), {
  ssr: false
});

const Avatar = dynamic(() => import('@/components/ui/avatar'), {
  ssr: false
});

// Dynamic import for motion (only when needed)
const MotionDiv = dynamic(
  () => import('framer-motion').then(mod => mod.motion.div),
  { ssr: false }
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
FeatureItem.displayName = 'FeatureItem';

const ProjectLinkButton = memo(function ProjectLinkButton({ href, icon: Icon, text, variant = 'default' }) {
  return (
    <Button
      asChild
      variant={variant}
      className={
        variant === 'default'
          ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
          : 'border-indigo-200 hover:bg-indigo-50'
      }>
      <Link href={href} target="_blank" rel="noopener noreferrer" prefetch={false}>
        <Icon className="mr-2 h-4 w-4" />
        {text}
      </Link>
    </Button>
  );
});
ProjectLinkButton.displayName = 'ProjectLinkButton';

const TechStackBadge = memo(function TechStackBadge({ tech, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MotionDiv
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      <Badge
        variant="secondary"
        className="px-3 py-1 bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100 transition-colors"
        onClick={() => toast.info(`${tech} is a key technology in this project.`)}
      >
        <Code className="w-3.5 h-3.5 mr-1" />
        {tech}
      </Badge>
    </MotionDiv>
  );
});
TechStackBadge.displayName = 'TechStackBadge';

const StatCard = memo(function StatCard({ label, value }) {
  return (
    <div className="bg-slate-50 rounded-lg p-3">
      <p className="text-xs text-slate-500 mb-1">{label}</p>
      <p className="font-semibold text-slate-900">{value}</p>
    </div>
  );
});
StatCard.displayName = 'StatCard';

const RelatedProjectCard = memo(function RelatedProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.id}`} className="block group" prefetch={false}>
      <div className="flex items-start gap-3">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            width={64}
            height={64}
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
            quality={75}
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
RelatedProjectCard.displayName = 'RelatedProjectCard';

// Import SponsorCard component
const SponsorCard = dynamic(() => import('./components/SponsorCard'), {
  loading: () => <div className="h-32 bg-gray-100 rounded-lg" />,
  ssr: false
});


// Main Component
// Main Component
export default function ProjectPage({ params }) {
  const project = useMemo(() => projects.find((p) => p.id === params.id), [params.id]);
  const headerRef = useRef(null);
  const galleryRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!headerRef.current || isAnimating) return;

    const loadAnimations = async () => {
      setIsAnimating(true);
      try {
        // Dynamic imports with error handling
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        // Optimized header animation
        const animateItems = headerRef.current.querySelectorAll('.animate-item');
        if (animateItems.length > 0) {
          gsap.fromTo(animateItems,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.1,
              duration: 0.8,
              ease: 'power3.out',
              overwrite: 'auto'
            }
          );
        }

        // Optimized gallery animation
        if (galleryRef.current) {
          const galleryItems = galleryRef.current.querySelectorAll('.gallery-item');
          if (galleryItems.length > 0) {
            gsap.fromTo(galleryItems,
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
                  markers: false // Disable in production
                },
                overwrite: 'auto'
              }
            );
          }
        }
      } catch (error) {
        console.error('Animation error:', error);
      } finally {
        setIsAnimating(false);
      }
    };

    const timer = setTimeout(() => {
      loadAnimations();
    }, 100); // Small delay to allow browser to prioritize rendering

    return () => {
      clearTimeout(timer);
      setIsAnimating(false);
    };
  }, [isAnimating]);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Optimized preload */}
      <Head>
        <link 
          rel="preload" 
          href={project.images[0]} 
          as="image"
          imagesrcset={`${project.images[0]}?w=640 640w, ${project.images[0]}?w=1200 1200w`}
          imagesizes="(max-width: 768px) 100vw, 50vw"
        />
      </Head>

      <HeroSection project={project} headerRef={headerRef} />

      <div className="container px-4 md:px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <ProjectTabs project={project} galleryRef={galleryRef} />
          </div>
          
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

// Optimized HeroSection
const HeroSection = memo(function HeroSection({ project, headerRef }) {
  const firstImage = project.images[0];
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative h-[50vh] md:h-[60vh] bg-indigo-900 overflow-hidden">
      {/* Priority-loaded optimized image */}
      <div className="absolute inset-0">
        <Image
          src={firstImage}
          alt=""
          fill
          priority
          quality={80}
          className={`object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoadingComplete={() => setImageLoaded(true)}
          sizes="100vw"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/70"
          aria-hidden="true"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container relative z-10 h-full flex flex-col justify-end pb-16 px-4 md:px-6">
        <div ref={headerRef} className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4 animate-item">
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
          </div>

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
});
HeroSection.displayName = 'HeroSection';

const ProjectTabs = memo(function ProjectTabs({ project, galleryRef }) {
  const [activeTab, setActiveTab] = useState('overview');
  const firstTwoImages = useMemo(() => project.images.slice(0, 2), [project.images]);
  const remainingImages = useMemo(() => project.images.slice(2), [project.images]);

  return (
    <Card className="shadow-xl border-0 overflow-hidden">
      <div className="w-full">
        <div className="flex px-6 pt-6 bg-white border-b gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'overview' 
                ? 'text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'gallery' 
                ? 'text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'details' 
                ? 'text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
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
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Project Gallery
            </h2>
            <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Eager load first 2 images */}
              {firstTwoImages.map((image, index) => (
                <GalleryImage 
                  key={index}
                  image={image}
                  project={project}
                  index={index}
                  loading="eager"
                />
              ))}
              {/* Lazy load remaining images */}
              {remainingImages.map((image, index) => (
                <GalleryImage 
                  key={index + firstTwoImages.length}
                  image={image}
                  project={project}
                  index={index + firstTwoImages.length}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'details' && (
          <div className="p-6">
            <TechnicalDetails project={project} />
          </div>
        )}
      </div>
    </Card>
  );
});
ProjectTabs.displayName = 'ProjectTabs';

const GalleryImage = memo(function GalleryImage({ image, project, index, loading }) {
  return (
    <div className="gallery-item rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <AspectRatio ratio={16 / 9}>
        <Image
          src={image}
          alt={`${project.title} - Image ${index + 1}`}
          fill
          className="object-cover"
          loading={loading}
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={80}
        />
      </AspectRatio>
    </div>
  );
});
GalleryImage.displayName = 'GalleryImage';

const TechnicalDetails = memo(function TechnicalDetails({ project }) {
  return (
    <>
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
    </>
  );
});
TechnicalDetails.displayName = 'TechnicalDetails';

const TechStackCard = memo(function TechStackCard({ techStack }) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Technology Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <TechStackBadge key={`${tech}-${index}`} tech={tech} index={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
});
TechStackCard.displayName = 'TechStackCard';

const ProjectStats = memo(function ProjectStats({ stats }) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Project Stats
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">Completion</span>
              <span className="font-medium text-indigo-600">100%</span>
            </div>
            <Progress 
              value={100} 
              className="h-2 bg-indigo-100" 
              indicatorClass="bg-indigo-600" 
            />
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
});
ProjectStats.displayName = 'ProjectStats';

const RelatedProjects = memo(function RelatedProjects({ currentProjectId }) {
  const relatedProjects = useMemo(() => 
    projects
      .filter((p) => p.id !== currentProjectId)
      .slice(0, 2),
    [currentProjectId]
  );

  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Related Projects
        </h3>
        <div className="space-y-4">
          {relatedProjects.map((project) => (
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
              <Link href="/projects" prefetch={false}>
                Browse All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
RelatedProjects.displayName = 'RelatedProjects';