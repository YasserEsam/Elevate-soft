// Server component wrapper for layout and data fetching
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectPage from './ProjectPage';

// Server Component (ProjectPageContainer)
export default function ProjectPageContainer({ params }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  // Pre-filter related projects (2 max) on the server
  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  return <ProjectPage project={project} relatedProjects={relatedProjects} />;
}