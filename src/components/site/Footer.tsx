const Footer = () => {
  return (
    <footer className="border-t border-border py-10 mt-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} MJC. Todos los derechos reservados.</p>
        <nav aria-label="Secundario" className="flex gap-6 text-sm">
          <a href="#HERO" className="hover:text-foreground text-muted-foreground">Inicio</a>
          <a href="#PROJECTS" className="hover:text-foreground text-muted-foreground">Proyectos</a>
          <a href="#ABOUT" className="hover:text-foreground text-muted-foreground">Sobre mí</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;