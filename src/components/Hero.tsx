import { Button } from "./ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto text-center relative z-10">
        <img 
          src="/logo.png" 
          alt="MF Farias Terraplanagem - Logo" 
          className="h-32 w-auto mx-auto mb-8 animate-fade-in"
        />
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 animate-fade-in">
          MF Farias Terraplanagem
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white mb-8 animate-fade-in">
          Movendo o solo, construindo o futuro
        </h2>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 animate-fade-in">
          Terraplanagem, demolições, abertura de açudes e tanques, locação de máquinas e caminhões. Compromisso com qualidade, segurança e sustentabilidade.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-secondary"
            onClick={() => window.open("https://wa.me/5514981131926", "_blank")}
          >
            Solicitar orçamento
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => {
              const element = document.getElementById("services");
              if (element) {
                const headerHeight = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
          >
            Nossos serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
