// StatCard.tsx
import React from "react";
import { Users, Clock } from "lucide-react";

// Icon mapping from string to component
const iconComponents = {
  Users,
  Clock
};

interface StatCardProps {
  stat: {
    icon: string;
    value: string;
    label: string;
  };
  position: number;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, position }) => {
  const Icon = iconComponents[stat.icon as keyof typeof iconComponents];

  return (
    <div
      className={`absolute ${position === 0 ? "top-0 left-0" : "bottom-10 right-10"} 
      bg-white/30 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/30 animate-float-updown 
      ${position === 1 ? "delay-150" : ""}`}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-r from-popover-foreground to-secondary-foreground/80 rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="font-bold text-lg">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      </div>
    </div>
  );
};


