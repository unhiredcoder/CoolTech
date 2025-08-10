// Testimonial.tsx
import { useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

// Shadcn carousel components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi  
} from "@/components/ui/carousel";

// Testimonial card component
import { TestimonialCard } from "./testimonial-card";

// JSON data
import data from "../../lib/data.json";

// Type definitions
type TestimonialData = {
  heading: string;
  highlightWord: string;
  subtext: string;
  testimonials: {
    text: string;
    name: string;
    role: string;
  }[];
};

export const Testimonial: React.FC = () => {
  const testimonialData = data.testimonialSection as TestimonialData;

  // Autoplay plugin
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true
    })
  );

  // const [api, setApi] = useState<CarouselApi>();

  // Split heading into parts before/after highlight word
  const splitHighlight = (text: string, word: string) => {
    const parts = text.split(word);
    return { before: parts[0], after: parts[1] };
  };

  const headingParts = splitHighlight(
    testimonialData.heading,
    testimonialData.highlightWord
  );

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {headingParts.before}
            <span className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 bg-primary inline-block shadow-md">
              {testimonialData.highlightWord}
            </span>
            {headingParts.after}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            {testimonialData.subtext}
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          plugins={[autoplay.current]}
          className="relative max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonialData.testimonials.map((testimonial, idx) => (
              <CarouselItem
                key={idx}
                className="basis-full sm:basis-1/2 lg:basis-1/3 p-3"
              >
                <TestimonialCard
                  text={testimonial.text}
                  name={testimonial.name}
                  role={testimonial.role}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="absolute -left-9 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute -right-9 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
};
