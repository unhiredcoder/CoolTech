//importing  Components
import { HeroText } from "./herotext";
import { HeroImage } from "./heroimage";

// Data
import data from "@/lib/data.json";

export function Hero() {
    const heroData = data.heroSection;

    return (
        <section className="relative pt-24 overflow-hidden bg-gradient-to-br from-white via-[#F5E5E9] to-[#eaf6fb]/30">
            {/* Background Shape */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-primary/40 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                    <HeroText heroData={heroData} />
                    <HeroImage heroData={heroData} />
                </div>
            </div>
        </section>
    );
};

