//importing icons
import { Settings, ArrowRight, Wrench, Snowflake, Shield } from "lucide-react";
import { Button } from "../ui/button";

// importing shadcn components
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

// Importing the dynamic content
import data from "../../lib/data.json";

// render icon components dynamically using their names from JSON
const iconComponents = {
  Settings,
  Wrench,
  Snowflake,
  Shield,
};

export const Services = () => {
  // ✅ Destructure the services section data from imported JSON
  const servicesData = data.servicesSection;

  return (
    <section className="py-20 px-8 bg-white">
      <div className="container mx-auto px-4">

        {/* ✅ Section header with badge, title, and subtext */}
        <div className="text-center mb-16">
          <Badge className="bg-red-400/20 rounded-4xl text-red-400 border-red-300/30 mb-6 text-sm px-4 py-2 backdrop-blur-md">
            {servicesData.badgeText}
          </Badge>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              {servicesData.heading}
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {servicesData.subtext}
          </p>
        </div>

        {/* ✅ Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.services.map((service, idx) => {
            // ✅ Dynamically pick the icon component from the map (fallback to Settings if not found)
            const Icon = iconComponents[service.icon as keyof typeof iconComponents] || Settings;

            return (
              <Card
                key={idx}
                className="group border-0 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8 text-center">
                  {/* ✅ Icon with gradient background */}
                  <div className="w-20 h-20 bg-gradient-to-r from-[#e63946] to-[#dc2626] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 drop-shadow text-white" />
                  </div>

                  {/* ✅ Title and Description */}
                  <h3 className="text-xl font-semibold mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                    {service.description}
                  </p>

                  {/* ✅ Action Button */}
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
