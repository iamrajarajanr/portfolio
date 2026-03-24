import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 92 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "REST APIs", level: 88 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    title: "Tools & Other",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 60 },
      { name: "AWS", level: 55 },
      { name: "Figma", level: 72 },
      { name: "Jest", level: 70 },
      { name: "CI/CD", level: 65 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs font-mono text-muted-foreground tabular-nums">{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: "var(--hero-gradient)" }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-card/50">
      <div className="section-container">
        <ScrollReveal>
          <p className="font-mono text-primary text-sm mb-2">03.</p>
          <h2 className="section-heading">Skills</h2>
          <p className="section-subheading">Technologies I work with</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <ScrollReveal key={cat.title} delay={ci * 0.1}>
              <div className="card-surface p-6">
                <h3 className="font-semibold text-lg mb-5 gradient-text">{cat.title}</h3>
                <div className="space-y-4">
                  {cat.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={ci * 0.1 + si * 0.08}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
