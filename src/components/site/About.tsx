const About = () => {
  return (
    <section id="ABOUT" className="py-16 md:py-24">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Sobre mí</h2>
         <p className="text-muted-foreground leading-relaxed">
  Desarrolladora Junior en constante aprendizaje, con interés en el desarrollo Full Stack y en la creación de experiencias digitales que aporten valor. Me motiva seguir ampliando mis conocimientos y enfrentar nuevos desafíos que me permitan crecer tanto técnica como profesionalmente.
</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {['React', 'TypeScript', 'Node', 'Tailwind', 'Vite', 'Supabase'].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground/90 border border-border">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;