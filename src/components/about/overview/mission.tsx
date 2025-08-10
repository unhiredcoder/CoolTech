// pages/Mission.tsx
import { Link } from "react-router-dom";
//importing data and components
import data from "../../../lib/data.json";
//importing icons
import { ArrowRight, Building2, Settings, Snowflake, Wrench, Camera, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
//importing constants and utils
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import { handleClick } from "@/lib/utils";

//importing images
import image1 from "../../../assets/Shared workspace.svg";
import image2 from "../../../assets/Vision.svg";

//importing components
import { MissionSection } from "./missionsection";
import { ExpertiseCard } from "./expertisecard";

const iconMap = { Building2, Settings, Snowflake, Wrench, Camera, Trophy };

export const Mission = () => {
    const { companyOverview, expertiseAreas, quickLinks } = data;

    return (
        <section id="company-overview" className="page">
            <div className="container mx-auto">
                {/* Page Heading */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
                        <div className="w-10 sm:w-12 h-1 bg-primary rounded-full"></div>
                        <h1 className="heading">
                            About <span className="text-primary">{APP_NAME}</span>
                        </h1>
                        <div className="w-10 sm:w-12 h-1 bg-primary rounded-full"></div>
                    </div>
                    <p className="para mx-auto">{APP_DESCRIPTION}</p>
                </div>

                {/* Mission & Vision */}
                <MissionSection
                    title={companyOverview.missiontitle}
                    paragraphs={Array.isArray(companyOverview.missionparagraph) ? companyOverview.missionparagraph : [companyOverview.missionparagraph]}
                    image={image1}
                    imageAlt="Our Mission"
                />
                <MissionSection
                    title={companyOverview.visiontitle}
                    paragraphs={Array.isArray(companyOverview.visionparagraph) ? companyOverview.visionparagraph : [companyOverview.visionparagraph]}
                    image={image2}
                    imageAlt="Our Vision"
                    reverse
                />
            </div>

            {/* Expertise Areas */}
            <section className="py-16 sm:py-20">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Expertise Areas</h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                        Specialized HVAC solutions tailored for different sectors and project requirements
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    {expertiseAreas.map((area, i) => (
                        <ExpertiseCard key={i} area={area} Icon={iconMap[area.icon as keyof typeof iconMap]} />
                    ))}
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 sm:py-20 bg-muted rounded-2xl">
                <div className="container mx-auto text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Explore More</h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover our portfolio and achievements in the HVAC industry
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                    {quickLinks.map((linkItem, idx) => {
                        const Icon = iconMap[linkItem.icon as keyof typeof iconMap];
                        return (
                            <Card key={idx} className="group hover:shadow-2xl transition-all duration-300 border-0 rounded-3xl hover:-translate-y-2 cursor-pointer">
                                <CardContent className="p-6 sm:p-8 text-center">
                                    <div className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r ${linkItem.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-8 sm:w-10 h-8 sm:h-10 text-background" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-4">{linkItem.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">{linkItem.description}</p>
                                    <Button variant="ghost" className="text-primary font-semibold group-hover:translate-x-2 transition-all" onClick={handleClick}>
                                        <Link to={linkItem.link}>{linkItem.buttonText}</Link>
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>
        </section>
    );
};

// export default Mission;
