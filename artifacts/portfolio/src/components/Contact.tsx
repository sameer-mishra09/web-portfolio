import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

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
            Let's connect and
            <br className="hidden md:block" />
            <span className="italic text-muted-foreground">build together</span>.
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Currently seeking entry-level Customer Support or Technical Support opportunities. Open to internships and collaborative projects in data and tech.
          </p>

          <a
            href="mailto:sameeranupammishra@gmail.com"
            data-testid="link-email"
            className="inline-flex items-center gap-4 text-xl md:text-3xl font-serif border-b pb-2 border-primary text-foreground hover:text-primary transition-colors group"
          >
            sameeranupammishra@gmail.com
            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground"
        >
          <div className="flex items-center gap-2" data-testid="text-phone">
            <Phone className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm">+91 9335271141</span>
          </div>
          <div className="flex items-center gap-2" data-testid="text-location">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm">Lucknow, India</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 flex justify-center gap-8"
        >
          <SocialLink href="#" icon={<Github className="w-5 h-5" />} label="GitHub" />
          <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      data-testid={`link-social-${label.toLowerCase()}`}
      className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
    >
      {icon}
    </a>
  );
}
