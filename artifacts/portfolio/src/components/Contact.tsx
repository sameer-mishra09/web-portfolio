import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Twitter, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 container mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-8">
            <Mail className="w-6 h-6" />
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-8">
            Let's build something <br className="hidden md:block" />
            <span className="italic text-muted-foreground">extraordinary</span>.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Currently available for freelance opportunities. If you have a project that needs some creative injection, I'd love to hear about it.
          </p>

          <a 
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-4 text-xl md:text-3xl font-serif border-b pb-2 border-primary text-foreground hover:text-primary transition-colors group"
          >
            hello@alexmorgan.design
            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-24 flex justify-center gap-8"
        >
          <SocialLink href="#" icon={<Github className="w-5 h-5" />} label="GitHub" />
          <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
          <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href}
      aria-label={label}
      className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
    >
      {icon}
    </a>
  );
}
