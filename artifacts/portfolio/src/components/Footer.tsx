export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border/50 bg-background text-center md:text-left">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed with intention.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground transition-colors">Styleguide</a>
          <a href="#" className="hover:text-foreground transition-colors">Licenses</a>
        </div>
      </div>
    </footer>
  );
}
