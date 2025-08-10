
// Icon imports 
import { Shield, Clock, DollarSign, Search, Users, MessageCircle } from "lucide-react";

// UI Components 
import { Badge } from "../ui/badge";

// Static data import
import data from "../../lib/data.json";

// --------------------
// Types
// --------------------
type Feature = {
    icon: keyof typeof iconComponents;
    title: string;
    desc: string;
};

type WhyChooseUsData = {
    badgeText: string;
    heading: string;
    highlightWord: string;
    subtext: string;
    features: Feature[];
};

// --------------------
// Icons Mapping
// --------------------
const iconComponents: Record<string, React.ElementType> = {
    Shield,
    Clock,
    DollarSign,
    Search,
    Users,
    MessageCircle
};

export function WhyChooseUs() {
    const aboutData = data.whyChooseUsSection as WhyChooseUsData;

    const splitHighlight = (text: string, word: string) => {
        const parts = text.split(word);
        return { before: parts[0], after: parts[1] };
    };

    const headingParts = splitHighlight(aboutData.heading, aboutData.highlightWord);
    const subtextParts = splitHighlight(aboutData.subtext, "difference");

    return (
        <section className="relative py-14 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-secondary via-secondary/70 to-secondary overflow-hidden">
            {/* Decorative Blobs */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-2xl z-0 animate-pulse" />

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16 sm:mb-20 px-2">
                    <Badge className="bg-primary/20 rounded-lg text-primary-400  mb-4 text-sm px-4 py-2 backdrop-blur-md">
                        {aboutData.badgeText}
                    </Badge>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                        {headingParts.before}
                        <span className="bg-primary px-3 py-0 sm:py-1 lg:py-1 rounded-full shadow-md font-bold">
                            {aboutData.highlightWord}
                        </span>
                        {headingParts.after}
                    </h2>

                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium px-2">
                        {subtextParts.before}
                        <span className="text-primary font-semibold">difference</span>
                        {subtextParts.after}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-2">
                    {aboutData.features.map((feature, idx) => {
                        const Icon = iconComponents[feature.icon];
                        return (
                            <div
                                key={idx}
                                className="relative bg-background/90 rounded-3xl shadow-xl p-6 sm:p-8 text-center group transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-primary/10"
                            >
                                {/* Glow effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/10 via-primary/10 to-muted-foreground/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none blur-md z-0" />

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-secondary drop-shadow-lg" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2  transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-muted-foreground font-medium">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
