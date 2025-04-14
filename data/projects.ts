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
}

export const projects: Project[] = [
    {
        id: 'user-centered-design',
        title: 'User Centered Design',
        description: "Take us wherever you go so that you know what's going",
        shortDescription:
            "Take us wherever you go so that you know what's going Take us wherever you go so that you know what's going",
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
    },
    {
        id: 'design-system',
        title: 'What Is Design System',
        description: "Take us wherever you go so that you know what's going",
        shortDescription:
            "Take us wherever you go so that you know what's going Take us wherever you go so that you know what's going",
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
    },
    {
        id: 'illustration-depends',
        title: 'Illustration Depends',
        description: "Take us wherever you go so that you know what's going",
        shortDescription:
            "Take us wherever you go so that you know what's going Take us wherever you go so that you know what's going",
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
    },
    {
        id: 'icons-formed',
        title: 'How Icons Formed',
        description: "Take us wherever you go so that you know what's going",
        shortDescription:
            "Take us wherever you go so that you know what's going Take us wherever you go so that you know what's going",
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
    },
];
