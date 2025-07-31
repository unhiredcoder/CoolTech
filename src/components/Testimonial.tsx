import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Testimonial = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1120] mb-4">
            What Our{" "}
            <span className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 bg-[#e63946] text-white inline-block shadow-md">
              Customers
            </span>{" "}
            Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Real feedback from our satisfied customers
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            {
              text: `"Excellent service! They fixed our AC quickly and professionally. The technician was knowledgeable and explained everything clearly. Highly recommended!"`,
              name: "Sarah Johnson",
              role: "Homeowner",
            },
            {
              text: `"Fast, reliable, and affordable. They installed our new AC system perfectly and provided great maintenance tips. Outstanding customer service!"`,
              name: "Mike Davis",
              role: "Business Owner",
            },
            {
              text: `"Professional team with fair pricing. They diagnosed the problem quickly and had our AC running perfectly. Will definitely use them again!"`,
              name: "Lisa Chen",
              role: "Property Manager",
            },
          ].map(({ text, name, role }, i) => (
            <Card
              key={i}
              className="border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6 sm:p-8 text-center">
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
                <p className="text-gray-600 mb-5 sm:mb-6 italic leading-relaxed text-sm sm:text-base">
                  {text}
                </p>

                {/* Name + Role */}
                <div className="flex items-center justify-center gap-3">
                  <div>
                    <div className="font-semibold text-[#0b1120] text-sm sm:text-base">
                      {name}
                    </div>
                    <div className="text-sm text-gray-500">{role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
