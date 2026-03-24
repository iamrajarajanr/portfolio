import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with product management, cart, payments via Stripe, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/iamrajarajanr/ShopEase",
    live: "https://shopeaseindia.netlify.app/",
  },
  {
    title: "Movie Reviewer",
    description:
      "Movie review platform with ratings, user comments, search functionality, and personalized recommendation system.",
    tags: ["Frontend", "API Integration", "Authentication", "Database"],
    github: "https://github.com/iamrajarajanr/movieReview",
    live: "https://moviereviews-task.netlify.app/",
  },
  {
    title: "Wordle Game",
    description:
      "Interactive word guessing game with daily challenges, input validation, scoring logic, and responsive UI design.",
    tags: ["Game Logic", "JavaScript", "UI Design", "State Management"],
    github: "https://github.com/iamrajarajanr/project-wordle-main",
    live: "https://wordlegamereactjs.netlify.app/",
  },
  {
    title: "YouTube Clone",
    description:
      "Video streaming platform with search, playback controls, channel pages, and responsive layout using modern UI.",
    tags: [
      "Frontend",
      "API Integration",
      "Responsive Design",
      "Media Handling",
    ],
    github: "https://github.com/iamrajarajanr/youtube-internship",
    live: "https://youtubeclone-internship.netlify.app/",
  },
  {
    title: "Cards Game",
    description:
      "Fun card-based game with shuffle logic, score tracking, animations, and engaging user interaction experience.",
    tags: ["Game Logic", "JavaScript", "Animations", "User Interaction"],
    github: "https://github.com/iamrajarajanr/card-game",
    live: "https://cardgame-task.netlify.app/",
  },
  {
    title: "Toast Popup Message",
    description:
      "Reusable toast notification system with dynamic alerts, smooth animations, and customizable UI components.",
    tags: ["UI Component", "Reusable", "JavaScript", "Animations"],
    github: "https://github.com/iamrajarajanr/Toast-starter",
    live: "https://toastmessager.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-container">
        <ScrollReveal>
          <p className="font-mono text-primary text-sm mb-2">04.</p>
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading">Things I've built</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.08}>
              <div className="card-surface p-6 h-full flex flex-col group hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <Layers size={28} className="text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-dim leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
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

export default Projects;
