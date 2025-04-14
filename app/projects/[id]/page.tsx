import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Calendar, Github, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <main className="pt-32 pb-16">
            <div className="container px-4 md:px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <Image
                            src={project.sponsor.logo}
                            alt={project.sponsor.name}
                            width={300}
                            height={300}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-[#1D2B4F]">
                                {project.title}
                            </h1>
                            <p className="text-gray-600">
                                {project.sponsor.name}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 mb-8">
                        <Calendar className="w-5 h-5" />
                        <span>
                            {new Date(project.date).toLocaleDateString(
                                'en-US',
                                {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                },
                            )}
                        </span>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl font-semibold mb-6">
                        Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="max-w-5xl mx-auto mb-12">
                    <h2 className="text-2xl font-semibold mb-6">
                        Project Gallery
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.images.map((image, index) => (
                            <div
                                key={index}
                                className="aspect-[4/3] rounded-xl overflow-hidden">
                                <Image
                                    src={image}
                                    alt={`${project.title} - Image ${
                                        index + 1
                                    }`}
                                    className="w-full h-full object-cover"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="max-w-3xl mx-auto flex flex-wrap gap-4">
                    <Button asChild className="bg-[#1D2B4F] hover:bg-[#2a3d6d]">
                        <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View on GitHub
                        </Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Globe className="mr-2 h-4 w-4" />
                            Visit Live Site
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
