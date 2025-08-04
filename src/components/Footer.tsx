import {
  Snowflake,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import data from "../lib/data.json";

const iconMap = {
  Facebook: Facebook,
  Twitter: Twitter,
  Instagram: Instagram,
  Linkedin: Linkedin,
};

const Footer = () => {
  const footer = data.footer;

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
                <span className="text-2xl font-extrabold">{footer.companyName}</span>
                <div className="text-xs text-gray-400">{footer.tagline}</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">{footer.description}</p>
            <div className="flex space-x-4">
              {footer.socialLinks.map((platform, i) => {
                const Icon = iconMap[platform as keyof typeof iconMap];
                return (
                  <div
                    key={i}
                    className="w-10 h-10 bg-[#e63946] rounded-full flex items-center justify-center hover:bg-[#dc2626] transition-colors cursor-pointer"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#e63946]">Services</h4>
            <ul className="space-y-3 text-gray-400">
              {footer.servicesLinks.map((service, i) => (
                <li key={i}>
                  <a href="#" className="!text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#e63946]">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {footer.quickLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="!text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#e63946]">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#e63946]" />
                <span>{footer.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#e63946]" />
                <span>{footer.contact.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#e63946] mt-1" />
                <span>
                  {footer.contact.addressLine1}
                  <br />
                  {footer.contact.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#e63946]" />
                <span>{footer.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 text-center text-gray-400">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
