import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-12">
          Sobre nós
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-foreground mb-6">
            A MF Farias Terraplanagem foi fundada em fevereiro de 2019, com o propósito de oferecer serviços de qualidade e confiança no segmento de terraplanagem e movimentação de solo. Desde o início, a empresa vem construindo sua trajetória com muito trabalho, dedicação e investimento constante em tecnologia e capacitação.
          </p>
          <p className="text-lg text-foreground mb-6">
            Ao longo dos anos, a MF Farias expandiu suas atividades, incorporando novos serviços como demolições, locação de máquinas e caminhões, além de parcerias sólidas com prefeituras e órgãos públicos. Essa diversificação permitiu atender obras de diferentes portes, sempre com eficiência e comprometimento.
          </p>
          <p className="text-lg text-foreground">
            O crescimento da empresa é resultado de uma gestão focada em melhorias contínuas de equipamentos, garantindo produtividade, segurança e resultados de alto desempenho em cada projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-background p-8 rounded-lg border border-border hover:border-primary transition-colors">
            <Target className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-primary mb-4">Missão</h3>
            <p className="text-foreground">
              Executar serviços de terraplanagem com excelência, segurança e eficiência, garantindo qualidade em cada etapa do processo e contribuindo para o desenvolvimento de obras sólidas e sustentáveis.
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg border border-border hover:border-primary transition-colors">
            <Eye className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-primary mb-4">Visão</h3>
            <p className="text-foreground">
              Ser referência regional em soluções de terraplanagem, reconhecida pela confiança, inovação e compromisso com a satisfação dos clientes e parceiros.
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg border border-border hover:border-primary transition-colors">
            <Heart className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-primary mb-4">Valores</h3>
            <ul className="text-foreground space-y-2">
              <li>• Comprometimento</li>
              <li>• Responsabilidade</li>
              <li>• Transparência</li>
              <li>• Inovação</li>
              <li>• Valorização das pessoas</li>
              <li>• Sustentabilidade</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
