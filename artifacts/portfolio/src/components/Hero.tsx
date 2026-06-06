import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="min-h-[100dvh] flex flex-col justify-center relative px-6 md:px-12 container mx-auto pt-20">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-[1px] w-12 bg-primary"></div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">Sameer Mishra</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] tracking-tight mb-8"
        >
          Turning data into
          <br />
          <span className="text-muted-foreground italic">decisions</span> that
          <br />
          drive results.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12 font-sans"
        >
          B.Tech student specializing in Python, Data Science, and AI — passionate about solving real problems through technology and clear communication. Based in Lucknow, India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6"
        >
          <a
            href="#work"
            data-testid="link-view-projects"
            className="inline-flex h-12 items-center justify-center rounded-none bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            View Projects
          </a>
          <a
            href="#contact"
            data-testid="link-get-in-touch"
            className="inline-flex h-12 items-center justify-center rounded-none border border-border px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex flex-col items-center gap-4"
      >
        <span className="text-xs font-mono tracking-widest text-muted-foreground origin-left -rotate-90 translate-y-12">SCROLL</span>
        <div className="w-[1px] h-16 bg-border relative overflow-hidden mt-8">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
