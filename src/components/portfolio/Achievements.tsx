import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Award, ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const achievements = [
  {
    title: "CCNA Certification",
    org: "Cisco",
    year: "2025",
    description: "Gained networking fundamentals including routing, switching, and network security concepts.",
  },
  {
    title: "Flutter Zero to Hero",
    org: "Lets Upgrade",
    year: "2024",
    description: "Learned Flutter development including UI building, state management, and mobile app deployment.",
  },
  {
    title: "JavaScript Essentials 1",
    org: "Cisco",
    year: "2024",
    description: "Built strong foundation in JavaScript covering core concepts, functions, and DOM manipulation.",
  },
  {
    title: "Python 101 for Data Science",
    org: "IBM",
    year: "2024",
    description: "Introduced to Python programming for data analysis, visualization, and basic data science workflows.",
  },
  {
    title: "Full Stack Development",
    org: "NoviTech",
    year: "2023",
    description: "Learned full-stack web development including frontend, backend, and database integration concepts.",
  },
  {
    title: "Introduction to SQL",
    org: "SkillsUp",
    year: "2023",
    description: "Understood database fundamentals, SQL queries, joins, and data manipulation techniques.",
  },
];

const INITIAL_SHOW = 3;

const Achievements = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? achievements : achievements.slice(0, INITIAL_SHOW);

  return (
    <section id="achievements" className="py-24 sm:py-32 bg-card/50">
      <div className="section-container">
        <ScrollReveal>
          <p className="font-mono text-primary text-sm mb-2">05.</p>
          <h2 className="section-heading">Achievements</h2>
          <p className="section-subheading">Certifications & awards</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visible.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="card-surface p-6 h-full hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Award size={20} className="text-primary" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{ach.year}</span>
                  </div>
                  <h3 className="font-semibold mb-1">{ach.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{ach.org}</p>
                  <p className="text-sm text-dim leading-relaxed">{ach.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {achievements.length > INITIAL_SHOW && (
          <ScrollReveal className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-medium rounded-lg active-scale hover:bg-secondary transition-all"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Show More <ChevronDown size={16} />
                </>
              )}
            </button>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default Achievements;
