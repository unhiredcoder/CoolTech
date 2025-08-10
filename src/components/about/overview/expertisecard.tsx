// components/ExpertiseCard.tsx
//importing ui
import { Card, CardContent } from "@/components/ui/card";
//importing icons
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ExpertiseCard = ({ area, Icon }: any) => (
  <Link to={area.link || "#"}>
    <Card className="group hover:shadow-2xl transition-all duration-300 border-0 rounded-3xl hover:-translate-y-2 cursor-pointer h-full pt-0">
      <div className="relative overflow-hidden rounded-t-3xl">
        <img src={area.image} alt={area.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-popover-foreground/40 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <div className={`w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-r ${area.gradient} rounded-2xl flex items-center justify-center`}>
            <Icon className="w-7 sm:w-8 h-7 sm:h-8 text-secondary" />
          </div>
        </div>
      </div>
      <CardContent className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{area.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">{area.description}</p>
        <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
          {area.buttonText} <ArrowRight className="w-5 h-5 ml-2" />
        </div>
      </CardContent>
    </Card>
  </Link>
);
