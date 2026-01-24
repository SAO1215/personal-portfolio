
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (

        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Software Developer & Aspiring Project Manager
                    </h3>

                    <p className="text-muted-foreground">
                        As a Computer Science & Technology graduate, with experience developing real-world applications, 
                        I enjoy turning ideas into real-world solutions with technology that’s simple, clear, and purposeful. 
                        I’ve worked across the full stack and led student-led software projects, which sparked my interest in both software development and team coordination.
                    </p>

                    <p className="text-muted-foreground">
                        I’ve grown to love not only developing software, but also helping teams, improving processes, and delivering work that creates real impact.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>

                        <a
                            href=""
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Software Development</h4>
                                <p className="text-muted-foreground">
                                    Bringing ideas to life through code, building digital tools that move from concept to something people can actually use.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Mentoring</h4>
                                <p className="text-muted-foreground">
                                    Creating spaces where people feel supported to learn, ask questions, and build confidence in their skills.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground">
                                    Keeping ideas from stalling by turning plans into steady progress and helping teams stay focused on what matters most.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};
