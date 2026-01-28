import { ArrowRight, ExternalLink, Github } from "lucide-react";

// List of projects displayed in the portfolio section
// Each object represents one real project you worked on
const projects = [
    {
        id: 1,
        title: "Delta Software Department",
        description:
            "Led the creation of a university software development department from the ground up. Defined workflows, introduced agile methodologies, mentored student developers, and delivered real projects for external stakeholders.",
        image: "/projects/delta.png",
        tags: ["Leadership", "Agile", "Scrum", "Project Management", "Mentorship"],
        demoUrl: "https://zany-paper-dca.notion.site/Departamento-Delta-4c94e9e9c14a444990d7df8a8cc3fa4b",
        githubUrl: "https://zany-paper-dca.notion.site/Departamento-Delta-4c94e9e9c14a444990d7df8a8cc3fa4b",
    },

    {

        id: 2,
        title: "Michelin Back to Basics 2.0",
        description:
            "Gamified audit web application built for Michelin to ensure brand standards across retail points of sale through a branching questionnaire system. Led development and delivered a full-stack solution focused on usability and performance.",
        image: "/projects/michelin.png",
        tags: ["React", "Node.js", "Fastify", "SQL", "Tailwind CSS", "AWS EC2"],
        demoUrl: "#",
        githubUrl: "https://github.com/softwaredelta/Michelin", // Private project → keep placeholder or remove later
    },
    {
        id: 3,
        title: "Qultura – Cultural Platform",
        description:
            "Platform developed with the Secretaría de Cultura de Querétaro to make museum information more accessible. Included a Kotlin mobile app for users, a web admin system for content management, and a REST API to handle communication between platforms and centralize cultural data.",
        image: "/projects/qultura.png",
        tags: ["Kotlin", "Android", "REST APIs", "JavaScript", "Node.js", "SQL", "HTML", "CSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/monica-ayala/Qultura-Mobile",
    },
    {
        id: 4,
        title: "Zebrands Feedback System",
        description:
            "Internal feedback and data collection web platform built to centralize insights from multiple teams and improve organizational decision-making. Collaborated closely with stakeholders to translate business needs into intuitive interfaces and actionable data views.",
        image: "/projects/zebrands.jpeg",
        tags: ["React", "Tailwind CSS", "JavaScript", "Node.js", "SQL", "AWS EC2"],
        demoUrl: "#",
        githubUrl: "https://github.com/Naiztu/Project-Feedback-Zebrands",
    },
];

// Main Projects Section Component
export const ProjectsSection = () => {
    return (
        // Section wrapper with spacing and positioning
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                {/* Section Subtitle */}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I’ve worked on, focused on real-world
                    problem solving, performance, and user experience.
                </p>

                {/* Responsive grid for project cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id} // Use stable unique id instead of array index
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            {/* Project Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Title */}
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                                {/* Project Description */}
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                {/* Project Links (Live Demo + GitHub) */}
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub Profile Button */}
                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/SAO1215"
                    >
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};