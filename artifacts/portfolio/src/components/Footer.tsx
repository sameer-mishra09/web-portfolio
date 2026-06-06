export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border/50 bg-background text-center md:text-left">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Sameer Mishra. All rights reserved.</p>
        <p>Lucknow, India</p>
        <a
          href="mailto:sameeranupammishra@gmail.com"
          className="hover:text-foreground transition-colors"
        >
          sameeranupammishra@gmail.com
        </a>
      </div>
    </footer>
  );
}
