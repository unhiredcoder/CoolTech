// importing from react
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// importing shadcn components
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// importing components
import { Navlogo } from "@/components/navbar/nav-logo";

// importing icons
import { ArrowUpRight, Menu } from "lucide-react";

// importing data
import data from "@/lib/data.json";

export function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [sheetOpen, setSheetOpen] = useState(false);

    const { logo, ctaButton, links, aboutDropdown } = data.navbar;

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setShowNavbar(currentScroll <= 0 || currentScroll < lastScrollY);
            setLastScrollY(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleLinkClick = () => {
        setSheetOpen(false);  // Close Sheet when link clicked
    };

    return (
        <>
            <nav className={`bg-background/25 backdrop-blur-sm shadow-sm border-b rounded-2xl fixed left-1/2 top-1 transform -translate-x-1/2 w-[96%] transition-transform duration-300 z-50 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="container px-4 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Navlogo
                        text={logo.title}
                    />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavigationMenu viewport={false}>
                            <NavigationMenuList>
                                {links.map((link, idx) => (
                                    <NavigationMenuLink key={idx} className="text-base font-semibold" asChild>
                                        <Link to={link.href}>
                                            <div className="font-medium">{link.label}</div>
                                        </Link>
                                    </NavigationMenuLink>
                                ))}

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-base">About Us</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[200px] gap-2">
                                            <li>
                                                {aboutDropdown.map((item, idx) => (
                                                    <NavigationMenuLink key={idx}>
                                                        <Link to={item.href} className="w-full capitalize">{item.label}</Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    {/* Desktop Contact & CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button asChild>
                            <Link to={`/login`}>
                                {ctaButton}
                                <ArrowUpRight />
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <div className="md:hidden">
                        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" className="!hover:bg-none">
                                    <Menu className="scale-150 text-primary" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="top" className="rounded-b-2xl">
                                <div className="flex items-center justify-between mb-5 p-4">
                                    <Navlogo
                                        text={logo.title}
                                    />
                                </div>

                                <nav className="flex flex-col gap-6 p-4">
                                    {links.map((link, idx) => (
                                        <Link key={idx} to={link.href} className="font-semibold" onClick={handleLinkClick}>
                                            {link.label}
                                        </Link>
                                    ))}

                                    <Accordion type="single" defaultValue="item-1" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger className="text-base">About Us</AccordionTrigger>
                                            <AccordionContent className="flex-col pt-0">
                                                {aboutDropdown.map((item, idx) => (
                                                    <Link key={idx} to={item.href} className="text-muted-foreground p-2" onClick={handleLinkClick}>
                                                        <div className="text-base">
                                                            {item.label}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    <Button onClick={handleLinkClick}>
                                        {ctaButton}
                                        <ArrowUpRight />
                                    </Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div >
            </nav>
        </>
    );
};
