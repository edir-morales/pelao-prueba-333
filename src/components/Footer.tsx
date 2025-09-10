import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Clock, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                MultiVikings
              </h3>
            </div>
            <p className="text-muted-foreground">
              Especialistas en domótica y automatización del hogar. 
              Transformamos casas en espacios inteligentes y eficientes.
            </p>
            
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Iluminación Inteligente</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Climatización Smart</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Seguridad Avanzada</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Audio Multizona</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Control de Acceso</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Proyectos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contacto</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Soporte</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+56 992995935</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>Viniciuscruzat@multiviking.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Chile Santiago</span>
              </div>
              {/* Horario eliminado segn solicitud */}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © 2024 MultiVikings. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;