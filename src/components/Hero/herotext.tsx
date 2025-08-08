// HeroText.tsx
import React from "react";

// UI Components
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Define the type
interface HeroTextProps {
  heroData: {
    badgeText: string;
    title: string;
    highlightWords: string[];
    subtitle: string;
    ctaButtons: {
      text: string;
      style: string;
    }[];
  };
}

export const HeroText: React.FC<HeroTextProps> = ({ heroData }) => {
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        {/* Badge */}
        <Badge className="bg-badge rounded-4xl text-primary border-primary/30 text-sm px-4 py-2 backdrop-blur-md">
          {heroData.badgeText}
        </Badge>

        {/* Title with Highlighted Words */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          {heroData.title.split(heroData.highlightWords[0])[0]}
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            {heroData.highlightWords[0]}
          </span>
          {" & "}
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            {heroData.highlightWords[1]}
          </span>
          {heroData.title.split(heroData.highlightWords[1])[1] || ""}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
          {heroData.subtitle}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        {heroData.ctaButtons.map((btn: any, idx: number) => (
          <Button key={idx} variant={btn.style === "primary" ? "default" : "outline"}>
            {btn.text}
            {btn.style === "secondary" && <ArrowRight />}
          </Button>
        ))}
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 z-10 left-0 right-0 opacity-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fillOpacity="0.6"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};


