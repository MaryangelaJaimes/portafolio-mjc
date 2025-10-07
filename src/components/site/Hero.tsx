import heroPortrait from "@/assets/hero-portrait.jpg";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="HERO" className="Section relative pt-28 md:pt-36 pb-12 md:pb-24">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-primary font-medium tracking-widest">MARYANGELA JAIMES CONTRERAS</p>
          <h1 className={cn("font-display text-[16vw] leading-none md:text-[8rem] lg:text-[10rem] tracking-tight")}>FULL STACK<br/>DEVELOPER</h1>
          <p className="text-muted-foreground max-w-xl">Construyo aplicaciones web modernas y funcionales, con un enfoque en la experiencia de usuario, la accesibilidad y la calidad del código.
</p>
        </div>
        <div className="relative mx-auto max-w-sm">
          <div className="absolute -inset-6 rotate-6 rounded-2xl border border-primary/60" aria-hidden="true"/>
          <div className="absolute -inset-6 -rotate-3 rounded-2xl border border-primary/30" aria-hidden="true"/>
          <img src={heroPortrait} alt="Retrato lateral con iluminación dramática" className="relative rounded-2xl border border-border/50 shadow-xl" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Hero;