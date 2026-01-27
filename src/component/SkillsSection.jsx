import { useState } from "react";
import { cn } from "@/lib/utils"; // utility to conditionally join Tailwind classes

// Skills data displayed in the section
// level = proficiency percentage shown in the progress bar
// category = used for filtering
const skills = [
  // Frontend Technologies
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend Technologies
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 85, category: "backend" },
  { name: "Fastify", level: 80, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },
  { name: "SQL", level: 80, category: "backend" },
  { name: "OracleDB/PostgreSQL/MySQL", level: 75, category: "backend" },

  // Tools, Cloud & Workflow
  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "AWS (EC2, S3, RDS, Lambda)", level: 75, category: "tools" },
  { name: "Oracle Linux", level: 85, category: "tools" },
  { name: "PowerBI", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Figma", level: 75, category: "tools" },

  // Methodologies & Practices
  { name: "Agile / Scrum", level: 90, category: "methodologies" },
  { name: "CMMI-DEV", level: 90, category: "methodologies" },
  { name: "Kanban", level: 85, category: "methodologies" },
  { name: "Waterfall", level: 85, category: "methodologies" },
  { name: "Test-Driven Development (TDD)", level: 80, category: "methodologies" },
  { name: "PMI Principles", level: 85, category: "methodologies" },
];

// Categories used for filtering buttons
const categories = ["all", "frontend", "backend", "tools", "methodologies"];

export const SkillsSection = () => {
  // Track which category is currently selected
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter skills based on selected category
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)} // update active filter
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              {/* Skill Name */}
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Progress Bar Background */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                {/* Animated Progress Fill */}
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }} // dynamic width
                />
              </div>

              {/* Percentage Label */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};