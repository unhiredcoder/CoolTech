// TestimonialCard.tsx
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type TestimonialCardProps = {
  text: string;
  name: string;
  role: string;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  name,
  role
}) => {
  return (
    <Card className="border border-border rounded-3xl ml-5 shadow-lg hover:shadow-xl transition-shadow h-full">
      <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col justify-between">
        {/* Stars */}
        <div className="flex justify-center mb-3 sm:mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-muted-foreground mb-5 sm:mb-6 italic leading-relaxed text-sm sm:text-base">
          {text}
        </p>

        {/* Name + Role */}
        <div>
          <div className="font-semibold text-sm sm:text-base">{name}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </CardContent>
    </Card>
  );
};
