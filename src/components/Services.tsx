import { Mountain, Hammer, Droplets, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Mountain,
      title: "Terraplanagem",
      description: "Movimentação de solo, nivelamento de terrenos e preparação de áreas para construção com equipamentos modernos e equipe especializada."
    },
    {
      icon: Hammer,
      title: "Demolições",
      description: "Serviços de demolição de estruturas com segurança e responsabilidade técnica, incluindo retirada de bases estruturais de torres."
    },
    {
      icon: Droplets,
      title: "Açudes e tanques",
      description: "Abertura e manutenção de açudes e tanques para irrigação, piscicultura e armazenamento de água."
    },
    {
      icon: Truck,
      title: "Locação de equipamentos",
      description: "Locação de máquinas pesadas e caminhões para atender obras de diferentes portes com equipamentos de alto desempenho."
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-3 sm:mb-4">
          Nossos serviços
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Soluções completas em terraplanagem e movimentação de solo para obras de todos os portes
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-6 sm:p-8 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg group"
            >
              <service.icon className="w-12 h-12 sm:w-16 sm:h-16 text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
