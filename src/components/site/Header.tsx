import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/60">
      <nav className={cn("container flex items-center justify-between h-16")}
        aria-label="Principal">
        <a href="#HERO" className="font-display text-xl tracking-wider">
          <span className="text-foreground">MJC</span>
          <span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#HERO" className="text-muted-foreground hover:text-foreground transition-colors">INICIO</a>
          <a href="#PROJECTS" className="text-muted-foreground hover:text-foreground transition-colors">PROYECTOS</a>
          <a href="#ABOUT" className="text-muted-foreground hover:text-foreground transition-colors">SOBRE MI</a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="hero" size="sm">Contacto</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;