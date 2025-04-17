export interface Project {
    id: string;
    title: string;
    description: string;
    category:
        | 'Web Design'
        | 'Web UI UX'
        | 'Mobile UI'
        | 'Dashboard'
        | 'Product Design';
    shortDescription: string;
    image: string;
    sponsor: {
        name: string;
        logo: string;
    };
    date: string;
    techStack: string[];
    images: string[];
    githubUrl: string;
    liveUrl: string;
    features: string[];
    stats: {
        duration: string;
        teamSize: string;
        components: string;
        linesOfCode: string;
    };
    architecture?: string;
    implementationChallenges?: string;
    codeSnippet?: string;
}

export const projects: Project[] = [
    {
        id: 'user-centered-design',
        title: 'User Centered Design',
        description: "Take us wherever you go so that you know what's going",
        shortDescription:
            "Take us wherever you go so that you know what's going",
        category: 'Web Design',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600&h=400',
        sponsor: {
            name: 'TechCorp Inc.',
            logo: 'https://via.placeholder.com/150',
        },
        date: '2024-01-15',
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
        images: [
            'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200&h=800',
            'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=1200&h=800',
            'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200&h=800',
        ],
        githubUrl: 'https://github.com/example/project',
        liveUrl: 'https://example.com',
        features: [
            'Responsive design optimized for all devices',
            'Real-time data synchronization across platforms',
            'Advanced analytics dashboard with customizable reports',
            'Accessibility-compliant interface following WCAG guidelines',
        ],
        stats: {
            duration: '3 months',
            teamSize: '5 members',
            components: '24+',
            linesOfCode: '~15,000',
        },
        architecture:
            'This project implements a modern frontend architecture using React and Next.js for server-side rendering and optimal performance. We leverage TypeScript for type safety and improved developer experience.',
        implementationChallenges:
            'One of the main challenges was implementing a responsive design that works seamlessly across all devices while maintaining excellent performance. We solved this by using a combination of Tailwind CSS and custom optimizations.',
        codeSnippet: `// Example component implementation
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="rounded-lg overflow-hidden shadow-lg"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={225}
        className="w-full h-auto"
      />
      <div className="p-4">
        <h3 className="font-bold text-xl">{project.title}</h3>
        <p className="text-gray-700 mt-2">{project.shortDescription}</p>
      </div>
    </motion.div>
  );
};`,
    },
    {
        id: 'design-system',
        title: 'What Is Design System',
        description: "Take us wherever you go so that you know what's going",
        shortDescription:
            "Take us wherever you go so that you know what's going",
        category: 'Web UI UX',
        image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=600&h=400',
        sponsor: {
            name: 'DesignLab',
            logo: 'https://via.placeholder.com/150',
        },
        date: '2024-02-01',
        techStack: ['Figma', 'Sketch', 'Adobe XD', 'Storybook'],
        images: [
            'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=1200&h=800',
            'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200&h=800',
            'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=1200&h=800',
        ],
        githubUrl: 'https://github.com/example/design-system',
        liveUrl: 'https://example.com/design-system',
        features: [
            'Comprehensive component library with consistent styling',
            'Design tokens for colors, typography, and spacing',
            'Interactive documentation with usage examples',
            'Integration with popular design tools',
        ],
        stats: {
            duration: '4 months',
            teamSize: '7 members',
            components: '50+',
            linesOfCode: '~20,000',
        },
        architecture:
            'Our design system is built with a component-first approach, ensuring consistency across all platforms. We use Storybook for documentation and testing, with a modular structure that allows for easy updates and maintenance.',
        implementationChallenges:
            'Creating a system that works across multiple products while maintaining flexibility for individual project needs was challenging. We implemented a token-based approach that allows for theme customization while preserving the core design language.',
        codeSnippet: `// Example component implementation
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="rounded-lg overflow-hidden shadow-lg"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={225}
        className="w-full h-auto"
      />
      <div className="p-4">
        <h3 className="font-bold text-xl">{project.title}</h3>
        <p className="text-gray-700 mt-2">{project.shortDescription}</p>
      </div>
    </motion.div>
  );
};`,
    },
    {
        id: 'react-libraries',
        title: 'React.Js Loops & Libraries',
        description:
            "Take us wherever you go so that you know what's going on with your money at all times.",
        shortDescription:
            "Take us wherever you go so that you know what's going on with your money at all times.",
        category: 'Dashboard',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&h=800',
        sponsor: {
            name: 'ReactPro',
            logo: 'https://via.placeholder.com/150',
        },
        date: '2024-02-15',
        techStack: ['React', 'TypeScript', 'Redux', 'Material-UI'],
        images: [
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&h=800',
            'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=1200&h=800',
            'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200&h=800',
        ],
        githubUrl: 'https://github.com/example/react-libs',
        liveUrl: 'https://example.com/react-libs',
        features: [
            'Optimized rendering with React Suspense and concurrent mode',
            'State management with Redux Toolkit and hooks',
            'Component lazy loading and code splitting',
            'Performance monitoring and optimization tools',
        ],
        stats: {
            duration: '5 months',
            teamSize: '4 members',
            components: '35+',
            linesOfCode: '~18,000',
        },
        architecture:
            "This project showcases modern React patterns including hooks, context, and efficient rendering strategies. We've implemented a custom state management solution that combines Redux for global state with Context API for component-specific state.",
        implementationChallenges:
            'Managing performance with complex data visualization components was challenging. We implemented virtualization and memoization techniques to ensure smooth performance even with large datasets.',
        codeSnippet: `// Example component implementation
const DataTable = ({ data }) => {
    },
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Value</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.value}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};`,
    },
    {
        id: 'illustration-depends',
        title: 'Illustration Depends',
        description: "Take us wherever you go so that you know what's going",
        shortDescription:
            "Take us wherever you go so that you know what's going",
        category: 'Product Design',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600&h=400',
        sponsor: {
            name: 'ArtStudio',
            logo: 'https://via.placeholder.com/150',
        },
        date: '2024-03-01',
        techStack: ['Adobe Illustrator', 'Procreate', 'Figma'],
        images: [
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200&h=800',
            'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=1200&h=800',
            'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200&h=800',
        ],
        githubUrl: 'https://github.com/example/illustrations',
        liveUrl: 'https://example.com/illustrations',
        features: [
            'Custom illustration system with consistent style guide',
            'Scalable vector graphics optimized for web and mobile',
            'Animation-ready assets with layered compositions',
            'Comprehensive icon set with multiple size variants',
        ],
        stats: {
            duration: '2 months',
            teamSize: '3 members',
            components: '100+',
            linesOfCode: '~5,000',
        },
        architecture:
            "Our illustration system is built on a grid-based framework that ensures consistency while allowing for creative expression. We've developed a custom color palette and style guide that maintains brand identity across all assets.",
        implementationChallenges:
            'Creating illustrations that work across different platforms and contexts required careful planning. We developed a modular approach that allows illustrations to be adapted for various use cases while maintaining visual consistency.',
    },
    {
        id: 'icons-formed',
        title: 'How Icons Formed',
        description: "Take us wherever you go so that you know what's going",
        shortDescription:
            "Take us wherever you go so that you know what's going",
        category: 'Mobile UI',
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600&h=400',
        sponsor: {
            name: 'IconWorks',
            logo: 'https://via.placeholder.com/150',
        },
        date: '2024-03-15',
        techStack: ['Adobe Illustrator', 'Sketch', 'Figma'],
        images: [
            'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200&h=800',
            'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=1200&h=800',
            'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200&h=800',
        ],
        githubUrl: 'https://github.com/example/icons',
        liveUrl: 'https://example.com/icons',
        features: [
            'Consistent icon grid system with multiple size variants',
            'Optimized SVG format for web performance',
            'Interactive icon library with search and filtering',
            'Dark and light mode variations for all icons',
        ],
        stats: {
            duration: '3 months',
            teamSize: '2 members',
            components: '200+',
            linesOfCode: '~3,000',
        },
        architecture:
            "Our icon system is built on a 24x24 grid that scales proportionally to different sizes. We've implemented a naming convention and organization system that makes it easy to find and use icons across the application.",
        implementationChallenges:
            'Ensuring visual consistency across hundreds of icons required establishing clear guidelines and review processes. We created a specialized QA workflow to verify that all icons adhere to our design principles.',
    },
];
