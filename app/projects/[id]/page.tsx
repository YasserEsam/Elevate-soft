import { projects } from '@/data/projects';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.id === params.id);
  
  return {
    metadataBase: new URL('https://elevate-soft.vercel.app'), 
    title: `${project.title} | Project Details`,
    description: project.shortDescription,
    openGraph: {
      images: [{
        url: project.image, // Now resolves to https://your-domain.com/project-image.jpg
        width: 1200,
        height: 630,
      }],
    },
  };
}


export const dynamicParams = false;

// Static import without client component
import ProjectPageContainer from './ProjectPageContainer';
export default ProjectPageContainer;