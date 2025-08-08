// importing from react
import { Link } from "react-router-dom";

// importing shadcn components
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

// importing constants, utility functions and data
import { APP_EMAIL, MAP_IFRAME_LINK } from "@/lib/constants";
import { handleClick } from "@/lib/utils";
import data from "../lib/data.json";

// importing icons
import {
    Clock,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitter,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
};

const ContactUs = () => {
    const contact = data.contactSection;

    return (
        <section
            id="contact"
            className="page bg-gradient-to-br from-background to-muted-foreground/20"
        >
            <div className="container mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
                        <div className="w-10 sm:w-12 h-1 bg-primary rounded-full"></div>
                        <h2 className="heading">
                            <span className="text-primary">
                                {contact.heading}
                            </span>
                        </h2>
                        <div className="w-10 sm:w-12 h-1 bg-primary rounded-full"></div>
                    </div>
                    <p className="para max-w-2xl mx-auto">
                        {contact.subtext}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="space-y-8">
                        {/* Contact Form */}
                        <Card className="shadow-2xl border-0 rounded-3xl h-fit">
                            <CardContent className="space-y-6">
                                <div className="mb-6 sm:mb-8">
                                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                                        {contact.formTitle}
                                    </h3>
                                    <p className="text-muted-foreground text-base sm:text-lg">{contact.formSubtitle}</p>
                                </div>

                                <div className="grid gap-4 sm:gap-6">
                                    <div>
                                        <Label className="block text-sm font-semibold mb-2">
                                            Name
                                        </Label>
                                        <Input
                                            placeholder="Tell us how we can help you..."
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <Label className="block text-sm font-semibold mb-2">
                                                Mobile
                                            </Label>
                                            <Input
                                                placeholder="Tell us how we can help you..."
                                            />
                                        </div>
                                        <div>
                                            <Label className="block text-sm font-semibold mb-2">
                                                Email
                                            </Label>
                                            <Input
                                                placeholder="Tell us how we can help you..."
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label className="block text-sm font-semibold mb-2">
                                            Your Enquiry
                                        </Label>
                                        <Textarea
                                            placeholder="Tell us how we can help you..."
                                            rows={4}
                                            className="min-h-[100px]"
                                        />
                                    </div>
                                    <Button>
                                        Send Message <Send />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* FAQ Section */}
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className="space-y-4">
                                <h3 className="sub-heading mb-4 sm:mb-6">
                                    Frequently Asked Questions
                                </h3>
                                <div>
                                    <h3 className="font-medium">How do I enquire a site visit?</h3>
                                    <p className="text-muted-foreground">
                                        Email us at <strong>{APP_EMAIL}</strong> with details.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium">Can we partner with you?</h3>
                                    <p className="text-muted-foreground">
                                        Yes! Contact <strong>{APP_EMAIL}</strong> for partnerships.
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="link" className="text-primary pl-0" asChild>
                                    <Link to={"/faq"} onClick={handleClick}>
                                        View all FAQs →
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>

                    {/* Contact Info + Map */}
                    <div className="space-y-8">
                        {/* Address with map */}
                        <Card className="shadow-xl border-0 rounded-3xl">
                            <CardContent>
                                <h3 className="sub-heading mb-4 sm:mb-6">
                                    Visit Our Office
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row items-start gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Address</h4>
                                            <div className="flex flex-wrap gap-2">
                                                <p className="text-muted-foreground text-base md:text-lg">
                                                    {contact.address.lines}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <iframe
                                        title="Office Map"
                                        src={MAP_IFRAME_LINK}
                                        width="100%"
                                        height="250"
                                        className="rounded-xl border-0 w-full"
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contact Details */}
                        <Card className="shadow-xl border-0 rounded-3xl">
                            <CardContent>
                                <h3 className="sub-heading mb-4 sm:mb-6">
                                    Get In Touch
                                </h3>
                                <div className="space-y-5 sm:space-y-6">
                                    {[
                                        { icon: Phone, title: "Phone", value: contact.contactDetails.phone },
                                        { icon: Mail, title: "Email", value: contact.contactDetails.email },
                                    ].map((item, idx) => (
                                        <div className="flex items-center gap-4" key={idx}>
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                                                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">{item.title}</h4>
                                                <p className="text-muted-foreground text-sm sm:text-base">{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                                            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Business Hours</h4>
                                            {contact.contactDetails.businessHours.map((time: string, idx: number) => (
                                                <p className="text-muted-foreground text-sm sm:text-base" key={idx}>
                                                    {time}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                                    <h4 className="font-bold mb-4">Follow Us</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {contact.socialLinks.map((link, idx: number) => {
                                            const Icon = iconMap[link.platform];
                                            return (
                                                <a
                                                    href={link.url}
                                                    key={idx}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center hover:bg-[#dc2626] transition-colors"
                                                >
                                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
