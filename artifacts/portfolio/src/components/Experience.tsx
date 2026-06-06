import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech – Computer Science",
    institution: "Shri Raswaroop Memorial College of Engineering and Management",
    period: "2023 — 2027",
    description: "Currently pursuing a Bachelor of Technology, building a strong foundation in software development, databases, operating systems, and computer networks.",
  },
  {
    degree: "UP Board Class XII",
    institution: "Study Point Inter College",
    period: "2023",
    description: "Completed higher secondary education with 71% marks, focusing on Science and Mathematics.",
  },
  {
    degree: "UP Board Class X",
    institution: "Study Point Inter College",
    period: "2021",
    description: "Completed secondary education with 84% marks.",
  },
];

const certifications = [
  "Communication Skills",
  "Introduction to AI and Intelligent Analysis",
  "Introduction to Cyber Security",
  "Introduction to Data Science and Big Data",
  "Introduction to Cloud Computing",
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
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-serif">Education.</h2>
          </div>
          <p className="text-muted-foreground font-sans">Academic journey and qualifications.</p>
        </motion.div>

        <div className="md:col-span-8 flex flex-col gap-12">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
              data-testid={`education-item-${index}`}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <h3 className="text-xl md:text-2xl font-serif group-hover:text-primary transition-colors">{item.degree}</h3>
                <span className="text-sm font-mono text-muted-foreground">{item.period}</span>
              </div>
              <div className="text-foreground font-medium mb-4">{item.institution}</div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">{item.description}</p>
              {index !== education.length - 1 && <div className="w-full h-[1px] bg-border mt-12" />}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-serif">Certifications.</h2>
          </div>
          <p className="text-muted-foreground font-sans">Verified skills and completed courses.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-8 flex flex-col gap-6"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-4 group"
              data-testid={`cert-item-${i}`}
            >
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform" />
              <span className="text-lg font-sans text-muted-foreground group-hover:text-foreground transition-colors">{cert}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
