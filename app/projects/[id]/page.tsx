import { projects } from '@/data/projects';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.id === params.id);
  return {
    title: `${project.title} | Project Details`,
    description: project.shortDescription,
    openGraph: {
      images: [{
        url: project.image,
        width: 1200,
        height: 630,
      }],
    },
  };
}

export const dynamicParams = false;

// Static import for better initial load
import ProjectPage from './ProjectPage';
export default ProjectPage;