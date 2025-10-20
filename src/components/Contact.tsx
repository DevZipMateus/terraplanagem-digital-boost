import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 bg-card">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-8 sm:mb-12">
          Entre em contato
        </h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Fale conosco</h3>
              <p className="text-sm sm:text-base text-foreground mb-6 sm:mb-8">
                Estamos prontos para atender suas necessidades. Entre em contato e solicite um orçamento sem compromisso.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm sm:text-base font-semibold text-foreground mb-1">Telefone</p>
                  <a 
                    href="https://wa.me/5514997641440" 
                    className="text-sm sm:text-base text-primary hover:text-accent transition-colors break-all"
                  >
                    (14) 99764-1440
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm sm:text-base font-semibold text-foreground mb-1">E-mail</p>
                  <a 
                    href="mailto:comercialmfterraplanagem@gmail.com" 
                    className="text-sm sm:text-base text-primary hover:text-accent transition-colors break-all"
                  >
                    comercialmfterraplanagem@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm sm:text-base font-semibold text-foreground mb-1">Endereço</p>
                  <p className="text-sm sm:text-base text-foreground">
                    Rua Horacio Alves Cunha, 7-13
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm sm:text-base font-semibold text-foreground mb-1">Horário de atendimento</p>
                  <p className="text-sm sm:text-base text-foreground">Segunda a sexta: 8h às 18h</p>
                  <p className="text-sm sm:text-base text-foreground">Sábados: 8h às 12h</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm sm:text-base font-semibold text-foreground mb-4">Redes sociais</p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open("https://www.instagram.com/mf.terraplanagem", "_blank")}
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open("https://www.facebook.com/share/17KVSB54Ko/", "_blank")}
                >
                  <Facebook className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-background p-6 sm:p-8 rounded-lg border border-border">
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6">Solicite um orçamento</h3>
            <p className="text-sm sm:text-base text-foreground mb-6">
              Clique no botão abaixo para falar diretamente conosco pelo WhatsApp e solicitar um orçamento personalizado.
            </p>
            <Button 
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-secondary"
              onClick={() => window.open("https://wa.me/5514997641440", "_blank")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
