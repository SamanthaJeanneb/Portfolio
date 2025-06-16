export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface ProcessStep {
  id: string
  type: "image" | "video" | "figma" | "text"
  title?: string
  description?: string
  content: string // URL for images/videos, embed URL for Figma, text content for text
  thumbnail?: string // Optional thumbnail for videos
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  figmaUrl?: string
  videoUrl?: string
  accessNote?: string
  process?: ProcessStep[]
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  // Projects with live links first
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "Personal Website",
    shortDescription:
      "Modern, responsive portfolio website built with Next.js showcasing my projects and skills with interactive animations.",
    description: [
      "A comprehensive portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase my development projects and skills.",
      "Features a modern dark theme with interactive animations, responsive design, and optimized performance across all devices.",
      "Includes detailed project pages with process documentation, gallery views, and seamless navigation between projects.",
    ],
    features: [
      "Responsive design with mobile-first approach",
      "Interactive animations and scroll effects",
      "Dynamic project filtering and categorization",
      "Detailed project process documentation",
      "Image galleries with optimized loading",
      "Contact form with email integration",
      "SEO optimized with meta tags and structured data",
      "Dark theme with glassmorphism design elements",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion", "Lucide Icons"],
    coverImage: "/portfolio-cover.png",
    thumbnailImage: "/portfolio-thumb.png",
    timeline: "Personal Project (2025)",
    role: "Frontend Developer & Designer",
    liveUrl: "https://samanthajbrown.dev",
    githubUrl: "https://github.com/SamanthaJeanneb/portfolio-website",
    process: [
      {
        id: "step1",
        type: "image",
        title: "Initial Wireframes",
        description: "Low-fidelity wireframes exploring different layout options for the portfolio.",
        content: "/portfolio-process-1.png",
      },
      {
        id: "step2",
        type: "figma",
        title: "Design System",
        description: "Complete design system including typography, colors, and component library.",
        content: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/portfolio-design-system",
      },
      {
        id: "step3",
        type: "image",
        title: "Component Development",
        description: "Development of reusable React components with TypeScript.",
        content: "/portfolio-process-3.png",
      },
      {
        id: "step4",
        type: "text",
        title: "Performance Optimization",
        description: "Implemented image optimization, lazy loading, and code splitting for optimal performance.",
        content: "Optimized bundle size and loading times using Next.js built-in features.",
      },
    ],
  },
  {
    id: 2,
    slug: "soundsketch",
    title: "SoundSketch",
    category: "Interactive Spotify App",
    shortDescription:
      "Interactive Spotify app that shows off my artwork while playing recommended songs based off of the artwork and the user's recent Spotify songs.",
    description: [
      "SoundSketch is an innovative interactive Spotify application that combines visual art with music discovery.",
      "The app displays my original artwork while intelligently curating and playing recommended songs based on both the visual elements of the artwork and the user's recent Spotify listening history.",
      "This unique fusion creates a personalized audiovisual experience that bridges the gap between visual and auditory art forms.",
    ],
    features: [
      "Integration with Spotify API for music playback",
      "Original artwork gallery display",
      "AI-powered song recommendations based on artwork themes",
      "User's recent listening history analysis",
      "Seamless audiovisual synchronization",
      "Personalized music discovery experience",
      "Interactive artwork browsing interface",
    ],
    technologies: ["JavaScript", "React", "Spotify API", "Node.js", "CSS3", "Art Integration"],
    coverImage: "/soundsketch-cover.png",
    thumbnailImage: "/soundsketch-thumb.png",
    timeline: "Personal Project (2024)",
    role: "Fullstack Developer & Artist",
    liveUrl: "https://soundsketch-six.vercel.app/",
    githubUrl: "https://github.com/SamanthaJeanneb/soundsketch",
    process: [
      {
        id: "step1",
        type: "image",
        title: "Initial Concept Sketches",
        description: "Early sketches exploring the visual interface and user flow for the SoundSketch application.",
        content: "/soundsketch-process-1.png",
      },
      {
        id: "step2",
        type: "image",
        title: "UI Wireframes",
        description: "Low-fidelity wireframes mapping out the core functionality and layout of the application.",
        content: "/soundsketch-process-2.png",
      },
      {
        id: "step3",
        type: "figma",
        title: "Interactive Prototype",
        description: "High-fidelity prototype demonstrating the user experience and visual design.",
        content:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FexampleID%2FSoundSketch",
      },
      {
        id: "step4",
        type: "video",
        title: "Development Progress",
        description: "A walkthrough of the application during development, showing the integration with Spotify API.",
        content: "https://www.youtube.com/embed/k7Vkkg7CYp4",
        thumbnail: "/soundsketch-video-thumb.png",
      },
    ],
  },
  {
    id: 3,
    slug: "airwaves-rhythm-game",
    title: "BitCamp2025-AirWaves",
    category: "Browser Game",
    shortDescription:
      "Browser-based rhythm game using real-time hand tracking through webcam with OpenCV and TensorFlow.js.",
    description: [
      "Browser-based rhythm game using real-time hand tracking through users web cam with OpenCV and TensorFlow.js.",
      "Built with React and Three.js to create a 3D experience playable directly in the browser.",
      "Supports custom song map uploads, allowing users to create and share their own rhythm challenges.",
    ],
    features: [
      "Real-time hand tracking using webcam input",
      "3D game environment built with Three.js",
      "Custom song map upload functionality",
      "Browser-based gameplay with no downloads required",
      "Computer vision integration with OpenCV",
      "Responsive rhythm-based gameplay mechanics",
    ],
    technologies: ["React", "Three.js", "OpenCV", "TensorFlow.js", "JavaScript", "Computer Vision"],
    coverImage: "/airwaves-cover.png",
    thumbnailImage: "/airwaves-thumb.png",
    timeline: "Hackathon Project (April 2025)",
    role: "Lead Developer",
    liveUrl: "http://cs.oswego.edu/~efereira/airwaves/",
    githubUrl: "https://github.com/SamanthaJeanneb/BitCamp2025-AirWaves",
    process: [
      {
        id: "step1",
        type: "image",
        title: "Concept Art",
        description: "Initial concept art for the rhythm game interface.",
        content: "/airwaves-process-1.png",
      },
      {
        id: "step2",
        type: "text",
        title: "Algorithm Design",
        description: "Outlined the hand tracking and rhythm detection algorithms.",
        content: "Designed the core algorithms for hand tracking and rhythm detection.",
      },
      {
        id: "step3",
        type: "figma",
        title: "UI Prototype",
        description: "Created a Figma prototype for the main game screen.",
        content: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/airwaves-ui",
      },
    ],
  },
  {
    id: 4,
    slug: "lakerhacks-website",
    title: "LakerHacks Website",
    category: "Event Website",
    shortDescription:
      "Website for LakerHacks Pilot event - SUNY Oswego's annual hackathon that I created and lead as Graphic Designer.",
    description: [
      "Website for LakerHacks Pilot event, SUNY Oswego's annual hackathon.",
      "As the creator and lead Graphic Designer of LakerHacks, I contributed to developing the official event website.",
      "The website serves as the central hub for hackathon information, registration, and event updates.",
    ],
    features: [
      "Event information and schedule display",
      "Registration system integration",
      "Responsive design for all devices",
      "Modern web technologies implementation",
      "Event branding and visual design",
      "User-friendly navigation and layout",
    ],
    technologies: ["Svelte", "JavaScript", "CSS3", "Web Design"],
    coverImage: "/lakerhacks-cover.png",
    thumbnailImage: "/lakerhacks-thumb.png",
    timeline: "Event Project (April 2024)",
    role: "Graphic Designer & Web Developer",
    liveUrl: "http://cs.oswego.edu/lakerhacks/",
    githubUrl: "https://github.com/SamanthaJeanneb/lakerhacks-site",
        process: [
      {
        id: "step1",
        type: "image",
        title: "Wireframe",
        description: "Wireframe for the event website layout.",
        content: "/lakerhacks-process-1.png",
      },
      {
        id: "step2",
        type: "text",
        title: "Content Planning",
        description: "Planned the content structure for the event website.",
        content: "Outlined the main sections and navigation for the site.",
      },
      {
        id: "step3",
        type: "figma",
        title: "Visual Design",
        description: "Figma design for the event branding and visuals.",
        content: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/lakerhacks-design",
      },
    ],
  },
  {
    id: 5,
    slug: "quotable",
    title: "Quotable",
    category: "Fullstack Web App",
    shortDescription: "Quote management system to add, store, and organize quotes by category or author.",
    description: [
      "Quotable is a full-stack quote management application that allows users to add, edit, and categorize quotes for inspiration or reference.",
      "Built with user experience in mind, the interface enables easy searching and filtering by author, tags, or date added.",
      "Designed to be scalable and visually clean, it offers responsive performance across devices.",
    ],
    features: [
      "Add/edit/delete quotes with metadata",
      "Filter/search by tag, author, or category",
      "User authentication and saved sessions",
      "Responsive and mobile-friendly design",
      "Export and share quote lists",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "CSS3"],
    coverImage: "/quotable-cover.png",
    thumbnailImage: "/quotable-thumb.png",
    timeline: "Personal Project (2025)",
    role: "Fullstack Developer",
    liveUrl: "http://moxie.cs.oswego.edu:48080/",
    githubUrl: "https://github.com/SamanthaJeanneb/Quotable",
    process: [
      {
        id: "step1",
        type: "image",
        title: "Sketches",
        description: "Initial sketches for the quote management UI.",
        content: "/quotable-process-1.png",
      },
      {
        id: "step2",
        type: "text",
        title: "Database Schema",
        description: "Designed the MongoDB schema for storing quotes.",
        content: "Created collections for quotes, authors, and tags.",
      },
      {
        id: "step3",
        type: "figma",
        title: "UI Mockup",
        description: "Figma mockup for the main dashboard.",
        content: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/quotable-ui",
      },
    ],
  },
  {
    id: 6,
    slug: "interactive-project-map",
    title: "Interactive Project Map",
    category: "Web Prototype",
    shortDescription: "Interactive map prototype for Beardsley Architects + Engineers' Higher Education landing page.",
    description: [
      "This project showcases an interactive map prototype designed for Beardsley Architects + Engineers' Higher Education landing page.",
      "The interactive map allows users to explore various educational projects and locations in an engaging, visual format.",
      "Built with modern JavaScript technologies to provide smooth interactions and responsive design across devices.",
    ],
    features: [
      "Interactive map interface with smooth navigation",
      "Project location markers with detailed information",
      "Responsive design for all device types",
      "Smooth animations and transitions",
      "Educational project showcase integration",
      "Professional client-ready prototype",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Interactive Design"],
    coverImage: "/interactive-map-cover.png",
    thumbnailImage: "/interactive-map-thumb.png",
    timeline: "Client Project (2024)",
    role: "Frontend Developer",
    client: "Beardsley Architects + Engineers",
    liveUrl: "https://higher-education-map.vercel.app/",
    githubUrl: "https://github.com/SamanthaJeanneb/Interactive-Project-Map",
    process: [
      {
        id: "step1",
        type: "image",
        title: "Map Sketch",
        description: "Sketch of the interactive map layout.",
        content: "/interactive-map-process-1.png",
      },
      {
        id: "step2",
        type: "text",
        title: "Feature Planning",
        description: "Planned interactive features for the map.",
        content: "Outlined marker interactions and project info popups.",
      },
      {
        id: "step3",
        type: "figma",
        title: "Prototype",
        description: "Figma prototype for the interactive map.",
        content: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/map-prototype",
      },
    ],
  },
  {
    id: 7,
    slug: "getter-done-task-manager",
    title: "HenHacks2025-GetterDone",
    category: "Task Management App",
    shortDescription:
      "Task management application designed to help users organize and track their tasks efficiently with category-based organization.",
    description: [
      "Built for HenHacks 2025: GetterDone is a task management application designed to help users organize and track their tasks efficiently.",
      "The application includes features such as category-based task organization, priority levels, and progress tracking.",
      "Developed with a focus on user experience and productivity enhancement through intuitive design and efficient task management workflows.",
    ],
    features: [
      "Category-based task organization",
      "Priority level assignment for tasks",
      "Progress tracking and completion status",
      "User-friendly interface design",
      "Efficient task management workflows",
      "Responsive design for mobile and desktop",
    ],
    technologies: ["JavaScript", "React", "Node.js", "CSS3"],
    coverImage: "/getter-done-cover.png",
    thumbnailImage: "/getter-done-thumb.png",
    timeline: "Hackathon Project (March 2025)",
    role: "Fullstack Developer",
    liveUrl:
      "https://devpost.com/software/getterdone?_gl=1*1hmdhgq*_gcl_au*NjMwODI4ODQuMTc0OTA2ODM0Mg..*_ga*MTkyMzMyNzc1OC4xNzQ5MDY4MzQy*_ga_0YHJK3Y10M*czE3NDkwNjgzNDIkbzEkZzEkdDE3NDkwNjgzNDgkajU0JGwwJGgw",
    githubUrl: "https://github.com/SamanthaJeanneb/HenHacks2025-GetterDone",
    process: [
      {
        id: "step1",
        type: "image",
        title: "Task Flow",
        description: "Diagram of the task management workflow.",
        content: "/getterdone-process-1.png",
      },
      {
        id: "step2",
        type: "text",
        title: "UI Planning",
        description: "Outlined the UI for task categories and priorities.",
        content: "Planned the sidebar and main task list layout.",
      },
      {
        id: "step3",
        type: "figma",
        title: "App Design",
        description: "Figma design for the GetterDone app.",
        content: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/getterdone-design",
      },
    ],
  },
  {
    id: 8,
    slug: "escape-utica-game",
    title: "Escape Utica National",
    category: "Java Game",
    shortDescription:
      "Text-based Java adventure game where players navigate an office, interact with NPCs, collect items, and avoid security guards to escape.",
    description: [
      "Text-based Java adventure game where players navigate an office environment, interact with NPCs, collect items, and avoid security guards to escape.",
      "The game features a complex narrative structure with multiple paths and decision points that affect the outcome.",
      "Implemented object-oriented programming principles to create an engaging and replayable gaming experience.",
    ],
    features: [
      "Text-based adventure gameplay",
      "Interactive NPC dialogue system",
      "Item collection and inventory management",
      "Multiple escape routes and endings",
      "Security guard avoidance mechanics",
      "Object-oriented game architecture",
    ],
    technologies: ["Java", "Object-Oriented Programming", "Game Development"],
    coverImage: "/escape-utica-cover.png",
    thumbnailImage: "/escape-utica-thumb.png",
    timeline: "Academic Project (February 2024)",
    role: "Game Developer",
    liveUrl: "http://cs.oswego.edu/~sbrown27/EscapeUticaNational/",
    githubUrl: "https://github.com/SamanthaJeanneb/Escape-Utica-National",
    process: [
      {
        id: "step1",
        type: "image",
        title: "Map Layout",
        description: "Map layout for the office environment.",
        content: "/escape-utica-process-1.png",
      },
      {
        id: "step2",
        type: "text",
        title: "Game Logic",
        description: "Outlined the game logic and escape routes.",
        content: "Designed the branching narrative and guard AI.",
      },
      {
        id: "step3",
        type: "figma",
        title: "UI Design",
        description: "Figma design for the text-based interface.",
        content: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/escape-utica-ui",
      },
    ],
  },
  {
    id: 9,
    slug: "family-tree-web-app",
    title: "FamilyTree",
    category: "Fullstack Web Application",
    shortDescription:
      "Collaborative web app for building and managing visual family trees with real-time collaboration features.",
    description: [
      "Developed a comprehensive Family Tree web application that enables users to build and manage extensive family trees with features like adding family members, defining relationships, and attaching documentation.",
      "Designed a visualization tool for navigating trees, incorporating real-time updates and intuitive user interface elements.",
      "Implemented online collaboration features allowing multiple family members to contribute to and maintain shared family trees.",
    ],
    features: [
      "Add and manage family members with detailed profiles",
      "Define complex family relationships and connections",
      "Attach and organize family documentation and photos",
      "Interactive tree visualization with zoom and navigation",
      "Real-time updates and synchronization",
      "Online collaboration with multiple users",
      "Responsive design for desktop and mobile devices",
    ],
    technologies: ["Java", "JavaScript", "Springboot", "Bootstrap", "React", "Docker"],
    coverImage: "/family-tree-cover.png",
    thumbnailImage: "/family-tree-thumb.png",
    timeline: "Academic Project (2024)",
    role: "Fullstack Developer",
    githubUrl: "https://github.com/SamanthaJeanneb/FamilyTree",
    process: [
      {
        id: "step1",
        type: "figma",
        title: "Figma Prototype",
        description: "Interactive Figma prototype for the Family Tree Web Application.",
        content: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/WY8wFLQpycygkNHo1oqA5z/Family-Tree-Web-Application?node-id=11-1415&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=113%3A324"
      },
      {
        id: "step2",
        type: "image",
        title: "Relationship Diagram",
        description: "Diagram showing family relationships and connections.",
        content: "/family-tree-process-1.png",
      },
      {
        id: "step3",
        type: "text",
        title: "Collaboration Features",
        description: "Outlined real-time collaboration features.",
        content: "Planned user roles and permissions for editing trees.",
      },
    ],
  },
  {
    id: 10,
    slug: "vaers-data-sorting",
    title: "VAERSData-Sorting",
    category: "Data Analysis",
    shortDescription:
      "Java application for sorting and analyzing VAERS (Vaccine Adverse Event Reporting System) data with efficient algorithms.",
    description: [
      "Java application designed for sorting and analyzing VAERS (Vaccine Adverse Event Reporting System) data.",
      "Implements efficient sorting algorithms to process large datasets of vaccine adverse event reports.",
      "Provides data analysis capabilities to help researchers and healthcare professionals understand patterns in adverse event reporting.",
    ],
    features: [
      "Efficient data sorting algorithms",
      "Large dataset processing capabilities",
      "VAERS data format compatibility",
      "Performance optimization for big data",
      "Data analysis and reporting tools",
      "Clean, maintainable code architecture",
    ],
    technologies: ["Java", "Data Structures", "Algorithms", "Data Analysis"],
    coverImage: "/vaers-data-cover.png",
    thumbnailImage: "/vaers-data-thumb.png",
    timeline: "Academic Project (April 2024)",
    role: "Data Analyst & Developer",
    githubUrl: "https://github.com/SamanthaJeanneb/VAERSData-Sorting",
    process: [
      {
        id: "step1",
        type: "image",
        title: "Data Flow Diagram",
        description: "Diagram of the VAERS data processing flow.",
        content: "/vaers-process-1.png",
      },
      {
        id: "step2",
        type: "text",
        title: "Algorithm Design",
        description: "Outlined sorting and analysis algorithms.",
        content: "Planned efficient sorting and reporting logic.",
      },
      {
        id: "step3",
        type: "figma",
        title: "UI Mockup",
        description: "Figma mockup for the data analysis dashboard.",
        content: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/vaers-ui",
      },
    ],
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
