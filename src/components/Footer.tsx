import {
  Snowflake,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-white py-16 px-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#e63946] to-[#dc2626] rounded-full flex items-center justify-center">
                  <Snowflake className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold">CoolTech</span>
                  <div className="text-xs text-gray-400">AC REPAIR SERVICES</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Your trusted partner for all AC repair and installation needs. Professional service, guaranteed
                satisfaction, and 24/7 emergency support.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[#e63946] rounded-full flex items-center justify-center hover:bg-[#dc2626] transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-[#e63946] rounded-full flex items-center justify-center hover:bg-[#dc2626] transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-[#e63946] rounded-full flex items-center justify-center hover:bg-[#dc2626] transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-[#e63946] rounded-full flex items-center justify-center hover:bg-[#dc2626] transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-[#e63946]">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="!text-gray-400 hover:text-white transition-colors">
                    AC Installation
                  </a>
                </li>
                <li>
                  <a href="#" className="!text-gray-400 hover:text-white transition-colors">
                    AC Repair & Troubleshooting
                  </a>
                </li>
                <li>
                  <a href="#" className="!text-gray-400 hover:text-white transition-colors">
                    Gas Refilling
                  </a>
                </li>
                <li>
                  <a href="#" className="!text-gray-400 hover:text-white transition-colors">
                    Annual Maintenance Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="!text-gray-400 hover:text-white transition-colors">
                    Emergency Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-[#e63946]">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="!text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="!text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="!text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="!text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="!text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-[#e63946]">Contact Info</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#e63946]" />
                  <span>+1 (555) 123-COOL</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#e63946]" />
                  <span>info@cooltech.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#e63946] mt-1" />
                  <span>
                    123 Service Street
                    <br />
                    Cool City, CC 12345
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#e63946]" />
                  <span>24/7 Emergency Service</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 text-center text-gray-400">
            <p>&copy; 2024 CoolTech AC Repair Services. All rights reserved. | Licensed & Insured HVAC Contractor</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer   