import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <img src="/logo.png" alt="MF Farias Terraplanagem - Logo" className="h-36 w-auto" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("home")} className="text-gray-900 hover:text-primary transition-colors font-medium">
            Início
          </button>
          <button onClick={() => scrollToSection("about")} className="text-gray-900 hover:text-primary transition-colors font-medium">
            Sobre
          </button>
          <button onClick={() => scrollToSection("services")} className="text-gray-900 hover:text-primary transition-colors font-medium">
            Serviços
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-900 hover:text-primary transition-colors font-medium">
            Contato
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("home")} className="text-left text-gray-900 hover:text-primary transition-colors font-medium py-2">
              Início
            </button>
            <button onClick={() => scrollToSection("about")} className="text-left text-gray-900 hover:text-primary transition-colors font-medium py-2">
              Sobre
            </button>
            <button onClick={() => scrollToSection("services")} className="text-left text-gray-900 hover:text-primary transition-colors font-medium py-2">
              Serviços
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-left text-gray-900 hover:text-primary transition-colors font-medium py-2">
              Contato
            </button>
          </div>
        </nav>}
    </header>;
};
export default Header;