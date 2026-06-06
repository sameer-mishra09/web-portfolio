import { motion } from "framer-motion";
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPostgresql, SiFigma, SiFramer } from "react-icons/si";

export function About() {
  const stack = [
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Figma", icon: SiFigma },
    { name: "Framer Motion", icon: SiFramer },
  ];

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
            <h2 className="text-3xl md:text-5xl font-serif mb-6 tracking-tight">The philosophy.</h2>
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
            I believe that great software lives at the intersection of rigorous engineering and thoughtful design. It's not enough for an application to simply work—it must feel right. 
          </p>
          <p>
            With over 6 years of experience building products from zero to one, I focus on the details that matter: sub-100ms interactions, seamless animations, intuitive typography, and scalable, maintainable architectures.
          </p>
          
          <div className="mt-12">
            <h3 className="text-sm font-mono uppercase tracking-widest text-foreground mb-8">Core Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stack.map((tech, i) => (
                <motion.div 
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center text-2xl text-muted-foreground group-hover:text-primary group-hover:border-primary transition-colors duration-300">
                    <tech.icon />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
