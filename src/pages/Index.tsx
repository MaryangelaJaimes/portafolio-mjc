import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Projects from "@/components/site/Projects";
import About from "@/components/site/About";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
