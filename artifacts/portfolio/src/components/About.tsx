import { motion } from "framer-motion";
import { SiPython, SiMysql, SiTensorflow, SiJupyter } from "react-icons/si";
import { Shield, Cloud, Network, BarChart2 } from "lucide-react";

const techStack = [
  { name: "Python", icon: SiPython, isReactIcon: true },
  { name: "MySQL", icon: SiMysql, isReactIcon: true },
  { name: "Power BI", icon: BarChart2, isReactIcon: false },
  { name: "Data Science", icon: SiJupyter, isReactIcon: true },
  { name: "AI / ML", icon: SiTensorflow, isReactIcon: true },
  { name: "Cyber Security", icon: Shield, isReactIcon: false },
  { name: "Cloud Computing", icon: Cloud, isReactIcon: false },
  { name: "Computer Networks", icon: Network, isReactIcon: false },
];

const softSkills = [
  "Query Handling",
  "Issue Resolution",
  "Troubleshooting",
  "Client Communication",
  "Problem Solving",
  "Time Management",
  "Team Collaboration",
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 container mx-auto bg-card/30 border-y border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 tracking-tight">About me.</h2>
            <div className="w-12 h-[1px] bg-primary mb-8"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 flex flex-col gap-8 text-lg text-muted-foreground leading-relaxed font-sans"
        >
          <p>
            I'm a detail-oriented B.Tech student with a genuine passion for technology and people. I bridge the gap between technical depth and clear communication — whether it's diagnosing a system issue or presenting insights from data.
          </p>
          <p>
            Proficient in Python and MySQL, with hands-on knowledge of DBMS, operating systems, and computer networks. I'm actively seeking an entry-level Customer Support or Technical Support role where I can contribute meaningfully from day one.
          </p>

          <div className="mt-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-foreground mb-8">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex flex-col items-center gap-3 group"
                  data-testid={`skill-${tech.name.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center text-2xl text-muted-foreground group-hover:text-primary group-hover:border-primary transition-colors duration-300">
                    {tech.isReactIcon ? <tech.icon /> : <tech.icon className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-foreground mb-6">Customer Support Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="text-xs font-medium px-3 py-1.5 border border-border text-foreground"
                  data-testid={`soft-skill-${skill.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
