// HeroImage.tsx
import React from "react";
import {StatCard} from "./statcard";

interface HeroImageProps {
  heroData: {
    badgeText: string;
    title: string;
    highlightWords: string[];
    subtitle: string;
    ctaButtons: { text: string; style: string }[];
    heroImage: string;
    stats: { icon: string; value: string; label: string }[];
  };
}

export const HeroImage: React.FC<HeroImageProps> = ({ heroData }) => {
  return (
    <div className="relative hidden lg:flex justify-center items-center">
      {/* Dynamically loaded image path */}
      <img
        src={heroData.heroImage}
        alt="Hero"
        width={700}
        className="rounded-3xl drop-shadow-2xl relative -z-1"
      />

      {/* Floating Stats */}
      {heroData.stats.map((stat: any, index: number) => (
        <StatCard key={index} stat={stat} position={index} />
      ))}
    </div>
  );
};


