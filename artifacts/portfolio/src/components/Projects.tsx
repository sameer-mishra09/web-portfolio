import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Aura Watch Co.",
    category: "E-Commerce",
    description: "A headless e-commerce storefront for a luxury watch brand. Built with Next.js, Shopify, and Framer Motion for a seamless, editorial shopping experience.",
    image: "/projects/project-1.png",
    tags: ["Next.js", "Shopify API", "Tailwind", "Radix UI"],
    link: "#"
  },
  {
    id: 2,
    title: "BlockTerminal",
    category: "Fintech Dashboard",
    description: "Real-time cryptocurrency analytics dashboard featuring WebSocket integrations, advanced data visualization, and a meticulously crafted dark mode.",
    image: "/projects/project-2.png",
    tags: ["React", "TypeScript", "D3.js", "WebSockets"],
    link: "#"
  },
  {
    id: 3,
    title: "Jot AI",
    category: "Productivity",
    description: "An AI-powered workspace that automatically categorizes and links your notes. Minimalist interface focused purely on the writing experience.",
    image: "/projects/project-3.png",
    tags: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
    link: "#"
  },
  {
    id: 4,
    title: "The Haven",
    category: "Hospitality",
    description: "A boutique hotel booking platform highlighting the property's aesthetics through large imagery and refined typography.",
    image: "/projects/project-4.png",
    tags: ["Next.js", "Sanity CMS", "Framer Motion"],
    link: "#"
  }
];

export function Projects() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 container mx-auto">
      <div className="mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif tracking-tight"
        >
          Selected Works.
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[1px] bg-border mt-8"
        />
      </div>

      <div className="flex flex-col gap-32">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3 1"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
    >
      <div className="w-full md:w-3/5 group relative overflow-hidden bg-muted aspect-video">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <a href={project.link} className="w-16 h-16 rounded-full bg-background text-foreground flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
            <ArrowUpRight className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="w-full md:w-2/5 flex flex-col">
        <div className="text-sm font-mono text-primary mb-4">{project.category}</div>
        <h3 className="text-3xl font-serif mb-6">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">{project.description}</p>
        
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-xs font-medium px-3 py-1 border border-border text-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
