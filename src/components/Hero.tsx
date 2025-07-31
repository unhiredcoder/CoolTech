import { ArrowRight, Clock, Users } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import heroImage from "../assets/image.png";
import { Badge } from "./ui/badge";

const Hero: React.FC = () => (
  <section className="relative pt-24 overflow-hidden bg-gradient-to-br from-white via-[#F5E5E9] to-[#eaf6fb]/30">
    {/* Background Decorative Shapes */}
    <div className="absolute top-20 right-10 w-64 h-64 bg-[#e63946]/50 rounded-full blur-3xl "></div>

    <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
        {/* Left Side - Text Content */}
        <div className="space-y-10">
          <div className="space-y-5">
            <Badge className="bg-red-400/20 rounded-4xl text-red-400 border-red-300/30 text-sm px-4 py-2 backdrop-blur-md">
              Premium AC Services
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0b1120] leading-tight">
              Reliable{" "}
              <span className="bg-gradient-to-r from-[#e63946] to-[#dc2626] bg-clip-text text-transparent">
                AC Repair
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-[#e63946] to-[#dc2626] bg-clip-text text-transparent">
                Installation
              </span>{" "}
              Services
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Expert air conditioning solutions for homes and businesses. Fast, affordable, and 100% satisfaction
              guaranteed.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#e63946] hover:bg-[#dc2626] text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl hover:shadow-[#e63946]/25 transition-all transform hover:scale-105">
              Book a Service
            </Button>
            <Button className="border-2 border-[#e63946] text-white hover:bg-[#e63946] hover:text-white font-bold px-8 py-4 text-lg rounded-full transition-all group bg-transparent">
              View Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Decorative Wave */}
          <div className="absolute bottom-0 z-10 left-0 right-0 opacity-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#e63941"
                fillOpacity="0.6"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Right Side - Image & Floating Stats (hidden on mobile) */}
        <div className="relative hidden lg:flex justify-center items-center">
          <img
            src={heroImage}
            alt="Professional AC Technician"
            width={500}
            className="rounded-3xl relative -z-1"
          />

          {/* Floating Stat - Happy Customers */}
          <div className="absolute top-40 left-0 bg-white/30 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/30 animate-float-updown">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0b1120] to-gray-800 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-[#0b1120] text-lg">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Floating Stat - 24/7 Emergency */}
          <div className="absolute bottom-20 right-10 bg-white/30 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/30 animate-float-updown delay-150">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0b1120] to-gray-800 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-[#0b1120] text-lg">24/7</div>
                <div className="text-sm text-gray-600">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
