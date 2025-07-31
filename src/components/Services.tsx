import { Settings, ArrowRight, Wrench, Snowflake, Shield } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

const Services = () => {
  return (
   <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
                  <Badge  className="bg-red-400/20 rounded-4xl text-red-400 border-red-300/30 mb-6 text-sm px-4 py-2 backdrop-blur-md">
              Our Services
            </Badge>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-[#e63946] rounded-full"></div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0b1120]">Our AC Services</h2>
              <div className="w-12 h-1 bg-[#e63946] rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive air conditioning solutions for all your cooling needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group  border-0 bg-gradient-to-b from-white/90 to-transparent rounded-3xl shadow-( rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px) ">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#e63946] to-[#dc2626] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Settings className="w-10 h-10 text-white drop-shadow" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#0b1120] tracking-tight">AC Installation</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  Expert installation of new AC systems, ensuring correct sizing and optimal placement for peak efficiency and comfort.
                </p>
                <Button
                  variant="ghost"
                  className="text-[#e63946] hover:text-[#dc2626] font-semibold group transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group  border-0 bg-white rounded-3xl ">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#0b1120] to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0b1120]">AC Repair & Troubleshooting</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Fast and reliable repair services for all AC brands with expert diagnostics and genuine parts.
                </p>
                <Button variant="ghost" className="text-[#e63946] hover:text-[#dc2626] font-semibold group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group  border-0 bg-white rounded-3xl ">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#e63946] to-[#dc2626] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Snowflake className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0b1120]">Gas Refilling</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Professional refrigerant refilling and leak detection to restore your AC's cooling performance.
                </p>
                <Button variant="ghost" className="text-[#e63946] hover:text-[#dc2626] font-semibold group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group  border-0 bg-white rounded-3xl ">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#0b1120] to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0b1120]">Annual Maintenance Plans</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Comprehensive maintenance packages to keep your AC running efficiently year-round.
                </p>
                <Button variant="ghost" className="text-[#e63946] hover:text-[#dc2626] font-semibold group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default Services