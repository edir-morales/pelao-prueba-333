import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Thermometer, 
  Camera, 
  Speaker, 
  Wifi, 
  Lock,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Iluminación Inteligente",
      description: "Control automatizado de luces con sensores de movimiento y programación por horarios",
      features: ["Dimming automático", "Colores RGB", "Control por voz", "Ahorro energético"]
    },
    {
      icon: Thermometer,
      title: "Climatización Smart",
      description: "Sistemas de calefacción y refrigeración con control inteligente de temperatura",
      features: ["Termostatos WiFi", "Programación", "Sensores ambientales", "Control remoto"]
    },
    {
      icon: Camera,
      title: "Seguridad Avanzada",
      description: "Cámaras IP, alarmas y sistemas de control de acceso integrados",
      features: ["Cámaras 4K", "Visión nocturna", "Detección facial", "Alertas móviles"]
    },
    {
      icon: Speaker,
      title: "Audio Multizona",
      description: "Sistema de sonido distribuido con control independiente por zonas",
      features: ["Streaming WiFi", "Control por app", "Múltiples zonas", "Alta calidad"]
    },
    {
      icon: Wifi,
      title: "Red Inteligente",
      description: "Infraestructura de red robusta para todos tus dispositivos conectados",
      features: ["WiFi 6", "Cobertura total", "QoS avanzado", "Monitoreo 24/7"]
    },
    {
      icon: Lock,
      title: "Control de Acceso",
      description: "Cerraduras inteligentes y sistemas biométricos para máxima seguridad",
      features: ["Apertura por app", "Códigos temporales", "Biometría", "Historial accesos"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros <span className="bg-gradient-primary bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones completas de domótica diseñadas para transformar tu hogar en un espacio inteligente, 
            seguro y eficiente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-tech transition-all duration-300 hover:scale-105 bg-gradient-card border-primary/20 hover:border-primary/40">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

export default Services;