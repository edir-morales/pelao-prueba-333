import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-smart-home.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
                        <img src="/logonuevo.png" alt="MultiViking Logo" className="h-32 w-auto mb-4 mx-auto block" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 py-2 leading-normal mt-16">
              MultiViking
            </h1>
            <div className="flex items-center justify-center gap-2 text-xl text-muted-foreground">
              <Zap className="w-6 h-6 text-primary" />
              <span>Domótica Inteligente</span>
              <Zap className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Transforma tu hogar en una
            <span className="bg-gradient-primary bg-clip-text text-transparent"> casa inteligente</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Automatización avanzada, seguridad total y eficiencia energética. 
            Controla tu hogar desde cualquier lugar del mundo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Consulta Gratuita
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="tech" size="lg" className="text-lg px-8 py-6">
              Ver Proyectos
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Automatización</h3>
              <p className="text-sm text-muted-foreground text-center">Control inteligente de luces, climatización y dispositivos</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Seguridad</h3>
              <p className="text-sm text-muted-foreground text-center">Sistemas de vigilancia y control de acceso avanzados</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Eficiencia</h3>
              <p className="text-sm text-muted-foreground text-center">Optimización energética y ahorro inteligente</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-xl" />
    </section>
  );
};

export default Hero;