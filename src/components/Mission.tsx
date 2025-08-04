'use client';

import data from '../lib/data.json';
import { Snowflake, Phone, ArrowRight, Building2, Settings, Wrench, Camera, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import image1 from "../assets/Shared workspace.svg";
import image2 from "../assets/Vision.svg";

const iconMap = {
    Building2,
    Settings,
    Snowflake,
    Wrench,
    Camera,
    Trophy
};

const Mission = () => {
    const { companyOverview, expertiseAreas, quickLinks } = data;

    return (
        <section id="company-overview" className="mt-10 sm:mt-15 py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-[#F1F8FC]">
            <div className="container mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
                        <div className="w-10 sm:w-12 h-1 bg-[#e63946] rounded-full"></div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1120]">
                            About <span className="bg-[#e63946] text-white px-3 py-1 rounded-full shadow-md">CoolTech</span>
                        </h2>
                        <div className="w-10 sm:w-12 h-1 bg-[#e63946] rounded-full"></div>
                    </div>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Leading the way in professional AC repair and installation services with over 15 years of excellence
                    </p>
                </div>

                {/* Mission Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-16 sm:mb-20">
                    <div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-[#0b1120] mb-6">Our Mission</h3>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                            At CoolTech, our mission is to provide exceptional air conditioning services that ensure optimal comfort
                            for homes and businesses. We are committed to delivering reliable, efficient, and cost-effective
                            solutions while maintaining the highest standards of professionalism and customer satisfaction.
                        </p>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            We believe that everyone deserves to live and work in a comfortable environment, and we strive to make
                            that possible through our expert services, cutting-edge technology, and unwavering dedication to
                            excellence.
                        </p>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#e63946]/10 to-transparent rounded-3xl blur-2xl"></div>
                        <img src={image1} alt="Our Mission" className="relative z-10 w-full max-w-md sm:max-w-lg" />
                    </div>
                </div>

                {/* Vision Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-16 sm:mb-20">
                    <div className="order-2 lg:order-1 flex justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-l from-[#0b1120]/10 to-transparent rounded-3xl blur-2xl"></div>
                        <img src={image2} alt="Our Vision" className="relative z-10 w-full max-w-md sm:max-w-lg" />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h3 className="text-3xl sm:text-4xl font-bold text-[#0b1120] mb-6">Our Vision</h3>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                            To be the most trusted and preferred AC service provider in the region, known for our innovation,
                            reliability, and customer-centric approach. We envision a future where every customer experiences
                            seamless comfort through our advanced HVAC solutions.
                        </p>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            We aim to continuously evolve with technology and industry best practices, setting new standards for
                            service quality and environmental responsibility in the HVAC industry.
                        </p>
                    </div>
                </div>
            </div>

            {/* Company Overview CTA */}
            <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 bg-gradient-to-br from-white via-[#f6f7fb] to-[#eaf6fb]/30">
                <div className="container mx-auto">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0b1120] leading-tight">
                            {companyOverview.heading.split(' ').slice(0, -1).join(' ')}{' '}
                            <span className="bg-gradient-to-r from-[#e63946] to-[#dc2626] bg-clip-text text-transparent">
                                {companyOverview.heading.split(' ').slice(-1)}
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-6">
                            {companyOverview.subheading}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            {companyOverview.ctaButtons.map((btn, idx) => (
                                <Button
                                    key={idx}
                                    variant={btn.type === 'primary' ? 'default' : 'outline'}
                                    className={`${btn.type === 'primary' ? 'bg-[#e63946] hover:bg-[#dc2626] text-white' : 'border-2 border-[#e63946] text-[#e63946] hover:bg-[#e63946] hover:text-white'} font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all`}
                                >
                                    {btn.text}
                                    {btn.text.includes('Quote') && <ArrowRight className="w-5 h-5 ml-2" />}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Areas */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1120]">Our Expertise Areas</h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
                            Specialized HVAC solutions tailored for different sectors and project requirements
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                        {expertiseAreas.map((area, index) => {
                            const Icon = iconMap[area.icon as keyof typeof iconMap];
                            return (
                                <Link key={index} to={area.link || '#'}>
                                    <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-3xl hover:-translate-y-2 cursor-pointer h-full">
                                        <div className="relative overflow-hidden rounded-t-3xl">
                                            <img src={area.image} alt={area.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/40 to-transparent"></div>
                                            <div className="absolute top-4 left-4">
                                                <div className={`w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-r ${area.gradient} rounded-2xl flex items-center justify-center`}>
                                                    <Icon className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                        <CardContent className="p-6 sm:p-8">
                                            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#0b1120] group-hover:text-[#e63946] transition-colors">{area.title}</h3>
                                            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">{area.description}</p>
                                            <div className="flex items-center text-[#e63946] font-semibold group-hover:translate-x-2 transition-transform">
                                                {area.buttonText} <ArrowRight className="w-5 h-5 ml-2" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-[#f6f7fb] to-[#eaf6fb]/50">
                <div className="container mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1120] mb-4">Explore More</h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover our portfolio and achievements in the HVAC industry
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                        {quickLinks.map((linkItem, idx) => {
                            const Icon = iconMap[linkItem.icon as keyof typeof iconMap];
                            return (
                                <Card key={idx} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-3xl hover:-translate-y-2 cursor-pointer">
                                    <CardContent className="p-6 sm:p-8 text-center">
                                        <div className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r ${linkItem.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#0b1120]">{linkItem.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">{linkItem.description}</p>
                                        <Button variant="ghost" className="text-[#e63946] hover:text-[#dc2626] font-semibold group-hover:translate-x-2 transition-all">
                                            <Link to={linkItem.link}>{linkItem.buttonText}</Link>
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Mission;
