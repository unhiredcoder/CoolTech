import {
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
import { Navlogo } from "./navbar/nav-logo";
import { Link } from "react-router-dom";

const iconMap = {
    Facebook: Facebook,
    Twitter: Twitter,
    Instagram: Instagram,
    Linkedin: Linkedin,
};

const Footer = () => {
    const footer = data.footer;

    return (
        <footer className="bg-foreground dark:bg-background page min-h-0">
            <div className="grid md:grid-cols-4 gap-8 lg:gap-16 mb-12">
                {/* Company Info */}
                <div>
                    <div className="!text-background">
                        <Navlogo />
                    </div>

                    <p className="text-muted/80 my-6">
                        {footer.description}
                    </p>

                    <div className="flex space-x-4">
                        {footer.socialLinks.map((platform, i) => {
                            const Icon = iconMap[platform as keyof typeof iconMap];
                            return (
                                <div
                                    key={i}
                                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
                                >
                                    <Icon className="w-5 h-5 text-background dark:text-foreground" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Services Links */}
                <div>
                    <h4 className="text-xl font-bold mb-6 text-primary">Services</h4>
                    <ul className="space-y-3 text-muted-foreground">
                        {footer.servicesLinks.map((service, i) => (
                            <li key={i}>
                                <Link to={``} className="!text-muted hover:transition-colors">
                                    {service}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-bold mb-6 text-primary">Quick Links</h4>
                    <ul className="space-y-3 text-muted">
                        {footer.quickLinks.map((link, i) => (
                            <li key={i}>
                                <a href="#" className="!text-muted hover:transition-colors">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-xl font-bold mb-6 text-primary">Contact Info</h4>
                    <ul className="space-y-4 text-muted-foreground">
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary" />
                            <span className="text-muted">{footer.contact.phone}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary" />
                            <span className="text-muted">{footer.contact.email}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary mt-1" />
                            <span className="text-muted">
                                {footer.contact.addressLine1}
                                <br />
                                {footer.contact.addressLine2}
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-primary" />
                            <span className="text-muted">{footer.contact.hours}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-muted-foreground pt-8 text-center text-background">
                <p>{footer.copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;
