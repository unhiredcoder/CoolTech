import { Settings, ArrowRight, Wrench, Snowflake, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import data from "../lib/data.json";

const iconComponents = {
  Settings,
  Wrench,
  Snowflake,
  Shield
};

const Services = () => {
  const servicesData = data.servicesSection;

  return (
    <section className="py-20 px-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-red-400/20 rounded-4xl text-red-400 border-red-300/30 mb-6 text-sm px-4 py-2 backdrop-blur-md">
            {servicesData.badgeText}
          </Badge>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-[#e63946] rounded-full"></div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0b1120]">{servicesData.heading}</h2>
            <div className="w-12 h-1 bg-[#e63946] rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {servicesData.subtext}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.services.map((service, idx) => {
            const Icon = iconComponents[service.icon as keyof typeof iconComponents];
            return (
              <Card
                key={idx}
                className="group border-0 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#e63946] to-[#dc2626] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-white drop-shadow" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#0b1120] tracking-tight">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-base">{service.description}</p>
                  <Button
                    variant="ghost"
                    className="text-[#e63946] hover:text-[#dc2626] font-semibold group transition-colors"
                  >
                    {service.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
