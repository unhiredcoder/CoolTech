import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import data from "../lib/data.json";

type TestimonialItem = {
  text: string;
  name: string;
  role: string;
};

type TestimonialData = {
  heading: string;
  highlightWord: string;
  subtext: string;
  testimonials: TestimonialItem[];
};

const Testimonial: React.FC = () => {
  const testimonialData = data.testimonialSection as TestimonialData;

  const [sliderRef] = useKeenSlider<HTMLDivElement>({

    loop: true,
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
    slides: { perView: 1, spacing: 15 },
  });

  const splitHighlight = (text: string, word: string) => {
    const parts = text.split(word);
    return { before: parts[0], after: parts[1] };
  };

  const headingParts = splitHighlight(testimonialData.heading, testimonialData.highlightWord);

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white">
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
        <div ref={sliderRef} className="keen-slider max-w-6xl mx-auto">
          {testimonialData.testimonials.map((testimonial, idx) => (
            <div key={idx} className="keen-slider__slide  bg-white p-3">
              <Card className="border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-shadow h-full mx-2">
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col justify-between">
                  {/* Stars */}
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#e63946] text-[#e63946]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground mb-5 sm:mb-6 italic leading-relaxed text-sm sm:text-base">
                    {testimonial.text}
                  </p>

                  {/* Name + Role */}
                  <div className="flex items-center justify-center gap-3">
                    <div>
                      <div className="font-semibold text-sm sm:text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
