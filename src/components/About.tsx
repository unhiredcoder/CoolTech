import {
  Shield,
  Clock,
  DollarSign,
  Search,
  Users,
  MessageCircle,
} from "lucide-react";
import { Badge } from "./ui/badge";

const features = [
  {
    icon: Shield,
    title: "Certified Technicians",
    desc: "Licensed and experienced professionals with extensive training",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    desc: "Quick response times with same-day service availability",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Competitive rates with transparent pricing and no hidden fees",
  },
  {
    icon: Search,
    title: "Free Site Inspection",
    desc: "Complimentary assessment and detailed quotes for all services",
  },
  {
    icon: Users,
    title: "1000+ Happy Customers",
    desc: "Proven track record with thousands of satisfied customers",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    desc: "Round-the-clock customer support and emergency services",
  },
];

const About = () => {
  return (
    <section className="relative py-14 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-[#f6f7fb] via-[#eaf6fb]/70 to-[#d1f3fa] overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#e63946]/20 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#457b9d]/20 rounded-full blur-2xl z-0 animate-pulse" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 px-2">
          <Badge className="bg-red-400/20 rounded-4xl text-red-400 border-red-300/30 mb-4 text-sm px-4 py-2 backdrop-blur-md">
            Why Choose Us
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1120] mb-4 drop-shadow-lg">
            Why Choose Our{" "}
            <span className="bg-[#e63946] text-white px-3 py-0 sm:py-1 lg:py-1  rounded-full shadow-md font-extrabold">
              Services
            </span>
            ?
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium px-2">
            Experience the{" "}
            <span className="text-[#e63946] font-semibold">difference</span> with
            our professional, reliable, and customer-focused approach
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-2">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="relative bg-white/90 rounded-3xl shadow-xl p-6 sm:p-8 text-center group transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-[#e63946]/10"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#e63946]/10 via-[#e63946]/10 to-[#457b9d]/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none blur-md z-0" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500 rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#0b1120] group-hover:text-[#4e3538] transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-medium">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
