import { Button } from "@/components/ui/button";
import { Github, Link as LinkIcon } from "lucide-react";


import room from "@/assets/room.png";
import rym from "@/assets/rickandmorty.png";
import pokedex from "@/assets/pokedex.png";
import tech from "@/assets/tech.png";

const projects = [
  {
    title: "Roomverse",
    image: room,
    code: "https://github.com/MaryangelaJaimes/RoomVerse.git",
    live: "https://roomverse.netlify.app/",
  },
  {
    title: "Rick and Morty",
    image: rym,
    code: "https://github.com/MaryangelaJaimes/api-react.git",
    live: "https://router-pokedex.netlify.app/",
  },
  {
    title: "Pokémon Collection",
    image: pokedex,
    code: "https://github.com/MaryangelaJaimes/router-pokedex.git",
    live: "https://pokeddx.netlify.app/",
  },
  {
    title: "marketplace digital",
    image: tech,
    code: "https://github.com/MaryangelaJaimes/marketplace2.git",
    live: "https://marketplacce.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="PROJECTS" className="py-16 md:py-24">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl mb-10">Proyectos</h2>
        <ul className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <li
              key={p.title}
              className="group rounded-xl overflow-hidden border border-border bg-secondary"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={p.image}
                  alt={`Previsualización de ${p.title}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex items-center justify-between">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <div className="flex gap-2">
                  <a href={p.code} target="_blank" rel="noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      aria-label={`Código de ${p.title}`}
                    >
                      <Github className="mr-1" /> Código
                    </Button>
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer">
                    <Button
                      variant="hero"
                      size="sm"
                      aria-label={`Web de ${p.title}`}
                    >
                      <LinkIcon className="mr-1" /> Web
                    </Button>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
