//importing icons 
import {
  Zap,
  Shield,
  Thermometer,
  Clock,
  Settings,
  Wrench,
  CheckCircle,
  Camera,
  Trophy,
} from "lucide-react";

//importing data
import data from "../../../lib/data.json";

const iconMap = {
  Zap,
  Shield,
  Thermometer,
  Clock,
  Settings,
  Wrench,
  CheckCircle,
  Camera,
  Trophy,
} as const;

export const ServicesWeOffer = () => {
  return (
    <>
      {/* Installation Benefits Section */}
      <section className="sm:px-6 md:px-8 lg:px-20 py-16 sm:py-20">
        <div className="mt-20 container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {data.installationBenefits.title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {data.installationBenefits.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.installationBenefits.benefits.map((benefit, index) => {
              const Icon =
                iconMap[benefit.icon as keyof typeof iconMap] || Zap;

              return (
                <div
                  key={index}
                  className="text-center group hover:shadow-lg p-6 rounded-3xl bg-secondary transition-all duration-300"
                >
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 sm:w-10 h-8 sm:h-10 text-secondary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-20 py-16 sm:py-20 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
              <span className="w-10 sm:w-12 h-1 bg-primary rounded-full" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {data.serviceHighlights.title}
              </h2>
              <span className="w-10 sm:w-12 h-1 bg-primary rounded-full" />
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {data.serviceHighlights.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Highlights List */}
            <div className="space-y-8">
              {data.serviceHighlights.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-base sm:text-lg">
                      {highlight.title}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-3xl blur-2xl" />
              <img
                src={data.serviceHighlights.image}
                alt="Service Highlight"
                className="relative z-10 w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


