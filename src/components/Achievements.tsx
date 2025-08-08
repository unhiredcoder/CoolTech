import { Card, CardContent } from './ui/card'
import { Button } from "./ui/button"
import {
    Building2, CheckCircle, Users, Calendar, MapPin,
    Clock, DollarSign, Settings, Shield, Star
} from "lucide-react"
import data from "../lib/data.json"

const iconComponents = {
    Star, Shield, Users, Settings, DollarSign, Clock,
    Building2, Calendar, CheckCircle
}

const Achievements = () => {
    const { title, subtitle, awards, projectStats, caseStudies, gallery } = data.achievements;
    const { images } = gallery;
    return (
        <section id="awards" className="page">
            <div className="container mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
                        <div className="w-10 sm:w-12 h-1 bg-primary rounded-full"></div>
                        <h2 className="heading">
                            {title.split(' ')[0]} &{" "}
                            <span className="text-primary">
                                Achievenment
                            </span>
                        </h2>
                        <div className="w-10 sm:w-12 h-1 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {awards.map((award, idx) => {
                        const Icon = iconComponents[award.icon as keyof typeof iconComponents];
                        return (
                            <Card key={idx} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted rounded-3xl hover:-translate-y-2">
                                <CardContent className="p-6 sm:p-8 text-center">
                                    <div className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r ${award.iconGradient.join(' ')} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-8 sm:w-10 h-8 sm:h-10 text-background" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{award.title}</h3>
                                    <p className="text-muted-foreground text-sm sm:text-base mb-2 sm:mb-4">{award.subtitle}</p>
                                    <p className="text-xs sm:text-sm text-gray-500">{award.description}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>

            {/* Project Stats */}
            <section className="py-16 sm:py-20 relative -mt-10 sm:-mt-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
                        {projectStats.map((stat, idx) => {
                            const Icon = iconComponents[stat.icon as keyof typeof iconComponents];
                            return (
                                <Card key={idx} className="text-center p-6 sm:p-8 shadow-xl rounded-3xl border-0">
                                    <div className={`w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-r ${stat.iconGradient.join(' ')} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                                        <Icon className="w-6 sm:w-8 h-6 sm:h-8" />
                                    </div>
                                    <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{stat.number}</div>
                                    <div className="text-muted-foreground text-sm sm:text-base">{stat.label}</div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
                            <div className="w-10 sm:w-12 h-1 bg-primary rounded-full"></div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{gallery.title}</h2>
                            <div className="w-10 sm:w-12 h-1 bg-primary rounded-full"></div>
                        </div>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">{gallery.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {images.map((item, index) => (
                            <Card key={index} className="group rounded-none border-none shadow-none bg-none p-0">
                                <div className="relative overflow-hidden aspect-[16/9]">
                                    <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h4 className="font-bold text-sm sm:text-lg text-background">{item.title}</h4>
                                        <p className="text-xs sm:text-sm text-muted">{item.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
                            <div className="w-10 sm:w-12 h-1 bg-primary rounded-full"></div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Featured Case Studies</h2>
                            <div className="w-10 sm:w-12 h-1 bg-primary rounded-full"></div>
                        </div>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">Detailed insights into our most successful infrastructure projects</p>
                    </div>

                    <div className="space-y-12 sm:space-y-16">
                        {caseStudies.map((study, idx) => (
                            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#e63946]/10 to-transparent rounded-3xl blur-2xl"></div>
                                    <img src={study.image} alt={study.title} className="rounded-2xl sm:rounded-3xl w-full shadow-xl relative z-10" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                                        <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-[#e63946]" />
                                        <span className="text-[#e63946] font-semibold text-sm sm:text-base">{study.location}</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">{study.title}</h3>
                                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">{study.description}</p>
                                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                                        {study.points.map((point, pIdx) => (
                                            <div key={pIdx} className="flex items-center gap-2 sm:gap-3">
                                                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#e63946]" />
                                                <span className="text-sm sm:text-base text-gray-700">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button className="bg-primary hover:bg-[#dc2626] font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full">
                                        View Full Case Study
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Achievements
