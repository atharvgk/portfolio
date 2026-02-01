import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { VoiceTrackerDiagram } from "@/components/diagrams/VoiceTrackerDiagram";
import { NexusNoteDiagram } from "@/components/diagrams/NexusNoteDiagram";
import { ChatExporterDiagram } from "@/components/diagrams/ChatExporterDiagram";
import { CineQuestDiagram } from "@/components/diagrams/CineQuestDiagram";

export const PERSONAL_INFO = {
    name: "Atharv Katyarmal",
    title: "Full Stack Engineer",
    headline: "I learn. I build. I break. I fix. I ship.",
    email: "atharv.katyarmal@gmail.com",
    socials: [
        { name: "GitHub", href: "https://github.com/atharvgk", icon: Github },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/atharv-katyarmal-990304250/", icon: Linkedin },
        { name: "X (Twitter)", href: "https://x.com/Prateek40593386", icon: Twitter },
        { name: "Email", href: "mailto:atharv.katyarmal@gmail.com", icon: Mail },
    ],
};

export const PROJECTS = [
    {
        id: "dls",
        title: "Distributed Logging System",
        description: "A scalable distributed logging system providing real-time monitoring and alerting with sub-100ms latency and 99% delivery reliability",
        tech: ["Apache Kafka", "Elasticsearch", "Fluentd", "Python"],
        link: "https://voex.prateekdwivedi.me/",
        gradient: "from-blue-500/20 to-cyan-500/20",
        Diagram: VoiceTrackerDiagram,
        featured: true,
    },
    {
        id: "Lambda-serverless",
        title: "Lambda Serverless",
        description: "A serverless function execution platform for Python and JavaScript functions with low-latency cold starts and real-time performance monitoring.",
        tech: ["Docker","Python", "JavaScript", "Streamlit"],
        link: "https://cinequest.prateekdwivedi.me/",
        gradient: "from-yellow-500/20 to-orange-500/20",
        Diagram: CineQuestDiagram,
        featured: true,
    },
    {
        id: "gradopia",
        title: "Gradopia",
        description: "A college and alumni networking platform enabling connections, content sharing, and referral-based opportunities with efficient relational data management.",
        tech: ["React.js", "Node.js", "Express.js", "MySQL"],
        link: "https://github.com/dprateek996/nexusnote",
        gradient: "from-purple-500/20 to-pink-500/20",
        Diagram: NexusNoteDiagram,
    },
    {
        id: "chat-exporter",
        title: "Chat Exporter AI",
        description: "Browser extension to export and summarize chat logs into PDF/JSON using local AI processing models.",
        tech: ["JavaScript", "Manifest V3", "GenAI", "Chrome API"],
        link: "https://github.com/dprateek996/chat_exporter",
        gradient: "from-accent-500/20 to-green-500/20",
        Diagram: ChatExporterDiagram,
    },
];

export const EXPERIENCE = [
    {
        company: "datacove.ai",
        role: "Software Development Intern",
        date: "June 2025 - July 2025",
        bullets: [
            "Architected a cloud based workflow for ingesting, normalizing, and serializing document data to enable agentic AI driven analysis.",
            "Implemented backend coordination layers to consume agentic AI generated insights and expose results seamlessly to the frontend.",
            "Authored technical content documenting architectural decisions and AI-assisted processing flows.",
        ]
    },
];

// Tech stack with SVG icon URLs (using devicons)
export const TECH_STACK = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    // { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    // { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"},
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    // { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original-wordmark.svg"},
    { name: "Elasticsearch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original-wordmark.svg"},
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"},
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"},
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg"},
    { name: "Numpy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"},
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"},
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"},
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"}    
];

export const EXTRA_PROJECTS = [
    {
        title: "Pinterest Backend",
        description: "Robust REST API for a social image platform. Features Passport.js auth, MongoDB schemas, and session management.",
        tech: ["Node.js", "Express", "MongoDB", "Passport.js"],
        link: "https://github.com/dprateek996/Pinterest-Backend",
        repo: "https://github.com/dprateek996/Pinterest-Backend"
    },
    {
        title: "Perfume Gallery",
        description: "Full-stack e-commerce platform for luxury fragrances. Includes product management, cart logic, and responsive UI.",
        tech: ["React", "Node.js", "Express", "CSS Modules"],
        link: "https://perfume-gallery.vercel.app",
        repo: "https://github.com/dprateek996/perfume-gallery"
    },
    {
        title: "Realtime Tracker",
        description: "Live geolocation tracking application using WebSockets to broadcast user movements in real-time.",
        tech: ["Node.js", "Socket.io", "Leaflet Maps"],
        link: "https://github.com/dprateek996/Realtime-Tracker",
        repo: "https://github.com/dprateek996/Realtime-Tracker"
    },
];

export const CURRENTLY_LEARNING = {
    title: "Building Microservices with Go",
    channel: "Nic Jackson",
    thumbnail: "https://i.ytimg.com/vi/VzBGi_n65iU/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=VzBGi_n65iU",
    progress: 42,
    watching: true
};
