import ScrollReveal from "./ScrollReveal";
import { User, FileDown } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-container">
        <ScrollReveal>
          <p className="font-mono text-primary text-sm mb-2">01.</p>
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">Get to know me better</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <ScrollReveal
            className="md:col-span-2 flex justify-center"
            delay={0.1}
            direction="left"
          >
            <div className="relative w-56 h-56 sm:w-80 sm:h-80 rounded-xl overflow-hidden card-surface">
              <img
                src="public/profile.png"
                alt="Rajarajan R profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-xl border-2 border-primary/20 -z-10" />
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="md:col-span-3"
            delay={0.15}
            direction="right"
          >
            <div className="card-surface p-6 sm:p-8">
              <h3 className="text-xl font-semibold mb-4">
                Hello! I'm <span className="gradient-text">Rajarajan R</span>
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  I'm a passionate Full Stack Developer with a strong foundation
                  in the MERN stack and a keen eye for UI/UX design. I enjoy
                  crafting seamless digital experiences by combining functional
                  development with intuitive and visually appealing interfaces.
                </p>
                <p>
                  As a fresher with hands-on experience through internships and
                  real-world projects, I have worked with technologies like
                  React.js, Node.js, Express.js, and MongoDB, along with design
                  tools such as Figma. I focus on building responsive,
                  user-centric applications that deliver both performance and
                  great user experience.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring open-source
                  projects, writing technical articles, or tinkering with new
                  frameworks.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg active-scale hover:brightness-110 transition-all"
                >
                  More About Me
                </a>
                <a
                  href="public/Rajarajan_R_MERN.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-medium rounded-lg active-scale hover:bg-secondary transition-all"
                >
                  <FileDown size={16} />
                  Download CV
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
