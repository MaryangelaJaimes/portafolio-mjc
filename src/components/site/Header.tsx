// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// const Header = () => {
//   return (
//     <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/60">
//       <nav className={cn("container flex items-center justify-between h-16")}
//         aria-label="Principal">
//         <a href="#HERO" className="font-display text-xl tracking-wider">
//           <span className="text-foreground">MJC</span>
//           <span className="text-primary">.</span>
//         </a>
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <a href="#HERO" className="text-muted-foreground hover:text-foreground transition-colors">INICIO</a>
//           <a href="#PROJECTS" className="text-muted-foreground hover:text-foreground transition-colors">PROYECTOS</a>
//           <a href="#ABOUT" className="text-muted-foreground hover:text-foreground transition-colors">SOBRE MI</a>
//         </div>
//         <div className="flex items-center gap-3">
//           <Button variant="hero" size="sm">Contacto</Button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [showContact, setShowContact] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  // Cerrar click fuera
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowContact(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowContact(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/60">
      <nav
        className={cn("container flex items-center justify-between h-16")}
        aria-label="Principal"
      >
        {/* Logo */}
        <a href="#HERO" className="font-display text-xl tracking-wider">
          <span className="text-foreground">MJC</span>
          <span className="text-primary">.</span>
        </a>

        {/* Enlaces */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a
            href="#HERO"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            INICIO
          </a>
          <a
            href="#PROJECTS"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            PROYECTOS
          </a>
          <a
            href="#ABOUT"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            SOBRE MI
          </a>
        </div>

        {/* Botón de contacto y popup */}
        <div className="relative flex items-center gap-3">
          <Button
            variant="hero"
            size="sm"
            onClick={() => setShowContact((prev) => !prev)}
          >
            Contacto
          </Button>

          {showContact && (
            <div
              ref={popupRef}
              className="absolute top-12 right-0 bg-white/95 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-border rounded-xl shadow-lg px-4 py-3 text-sm"
            >
              <p className="font-medium select-all">📧 Maryangelajc.6@gmail.com</p>
              <p className="font-medium select-all">📞 +56 9 5640 4374</p>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

