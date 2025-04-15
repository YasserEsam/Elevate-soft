// app/projects/[id]/page.tsx
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}


export { default } from './ProjectPage'; 