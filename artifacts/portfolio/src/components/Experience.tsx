import { motion } from "framer-motion";

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "Studio Nexus",
    period: "2021 — Present",
    description: "Leading the frontend architecture for high-profile client projects. Mentoring junior developers and establishing design system standards across the agency."
  },
  {
    role: "Full Stack Developer",
    company: "Aura Technologies",
    period: "2018 — 2021",
    description: "Built and maintained the core SaaS platform using React and Node.js. Reduced application load time by 40% through code splitting and efficient data fetching."
  },
  {
    role: "UI/UX Designer",
    company: "Freelance",
    period: "2016 — 2018",
    description: "Designed digital experiences for local businesses. Translated brand identities into functional, beautiful web interfaces."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 container mx-auto bg-card/30 border-y border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-4"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Experience.</h2>
          <p className="text-muted-foreground font-sans">A timeline of my professional journey.</p>
        </motion.div>

        <div className="md:col-span-8 flex flex-col gap-12">
          {experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <h3 className="text-xl md:text-2xl font-serif group-hover:text-primary transition-colors">{job.role}</h3>
                <span className="text-sm font-mono text-muted-foreground">{job.period}</span>
              </div>
              <div className="text-foreground font-medium mb-4">{job.company}</div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {job.description}
              </p>
              
              {index !== experience.length - 1 && (
                <div className="w-full h-[1px] bg-border mt-12" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
