import escavadeira25 from "@/assets/escavadeira-25-tone.jpg";
import cursoTecnicos from "@/assets/curso-tecnicos.jpg";
import prancha from "@/assets/prancha-transporte.jpg";
import paCarregadeira from "@/assets/pa-carregadeira.jpg";
import escavadeira14 from "@/assets/escavadeira-14-tone.jpg";
import miniCarregadeira from "@/assets/mini-carregadeira.jpg";
import caminhoes from "@/assets/caminhoes-basculante.jpg";
import retroEscavadeira from "@/assets/retro-escavadeira.jpg";
import demolicao1 from "@/assets/demolicao-1.jpg";
import demolicao2 from "@/assets/demolicao-2.jpg";
import limpezaRodovia from "@/assets/limpeza-rodovia.jpg";
import terraplanagem from "@/assets/terraplanagem-terreno.jpg";
import compactacao from "@/assets/compactacao-solo.jpg";
import locacoes from "@/assets/locacoes-equipamentos.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: escavadeira25,
      title: "Escavadeira Hidráulica 25 Toneladas",
      description: "Equipamento de alto desempenho para grandes obras de terraplanagem e demolição"
    },
    {
      image: cursoTecnicos,
      title: "Treinamento de Operadores",
      description: "Capacitação técnica para operação segura de máquinas pesadas"
    },
    {
      image: prancha,
      title: "Transporte de Equipamentos",
      description: "Prancha para transporte seguro de máquinas pesadas - R$ 200.000"
    },
    {
      image: paCarregadeira,
      title: "Pá Carregadeira",
      description: "Ideal para movimentação de terra e materiais - R$ 290.000"
    },
    {
      image: escavadeira14,
      title: "Escavadeira Hidráulica 14 Toneladas",
      description: "Máquina versátil para obras de médio porte"
    },
    {
      image: miniCarregadeira,
      title: "Mini Carregadeira",
      description: "Equipamento compacto para trabalhos em espaços reduzidos - R$ 72.000"
    },
    {
      image: caminhoes,
      title: "Caminhões Basculantes",
      description: "Frota de caminhões para transporte de material - R$ 17.000/mês"
    },
    {
      image: retroEscavadeira,
      title: "Retroescavadeira",
      description: "Equipamento multifuncional para escavação e carregamento - R$ 220.000"
    },
    {
      image: demolicao1,
      title: "Demolição de Estruturas",
      description: "Serviços especializados em demolição de bases e estruturas"
    },
    {
      image: demolicao2,
      title: "Remoção de Bases Estruturais",
      description: "Demolição segura de fundações e estruturas de concreto"
    },
    {
      image: limpezaRodovia,
      title: "Limpeza de Rodovia",
      description: "Serviços de limpeza e manutenção em rodovias e vias públicas"
    },
    {
      image: terraplanagem,
      title: "Terraplanagem Residencial",
      description: "Preparação e nivelamento de terrenos para construção"
    },
    {
      image: compactacao,
      title: "Compactação de Solo",
      description: "Compactação profissional para garantir estabilidade do terreno"
    },
    {
      image: locacoes,
      title: "Locação de Equipamentos",
      description: "Frota completa disponível para locação em suas obras"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-4">
          Nossos equipamentos e trabalhos
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Conheça nossa frota moderna e veja alguns dos projetos realizados
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group overflow-hidden rounded-lg border border-border bg-card hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
