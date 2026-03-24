import ScrollReveal from "./ScrollReveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Ui/UX Designing Intern",
    company: "KGiSL Micro College",
    period: "Oct 2025 – Dec 2025",
    description:
      "Designed responsive interfaces and user flows for web applications. Focused on usability improvement and accessible design patterns.",
    tags: ["Figma", "Wireframing", "Prototyping", "User Research"],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "KGiSL Micro College",
    period: "Jul 2025 – Dec 2025",
    description:
      "Building and maintaining scalable web applications using React, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver high-quality features.",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Cognifyz",
    period: "Jun 2025 – Jul 2025",
    description:
      "Developed responsive web applications and REST APIs. Focused on performance optimization and scalable architecture.",
    tags: ["Frontend", "Backend", "REST APIs", "Database Management"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="section-container">
        <ScrollReveal>
          <p className="font-mono text-primary text-sm mb-2">02.</p>
          <h2 className="section-heading">Experience</h2>
          <p className="section-subheading">Where I've worked</p>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.1}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex flex-col md:flex-row ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start gap-8`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 z-10" />

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
                  >
                    <div className="card-surface p-5 sm:p-6 group hover:border-primary/30 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={16} className="text-primary" />
                        <span className="font-mono text-xs text-primary">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {exp.company}
                      </p>
                      <p className="text-sm text-dim leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
