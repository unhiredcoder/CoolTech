// src/routes.tsx
import type { RouteObject } from "react-router-dom";
import { Hero } from "./components/Hero/hero";
import { Services } from "./components/services/Services";
import { WhyChooseUs } from "./components/whychooseus/whychooseus";
import { Testimonial } from "./components/testimonial/testimonial";
import { Mission } from "./components/about/overview/mission";
import Directors from "./components/about/directors/Directors";
import { Achievements } from "./components/about/achievements/Achievements";
import ContactUs from "./components/ContactUs";
import { ServicesWeOffer } from "./components/about/services/ServicesWeOffer";
import FaqSection from "./components/Faq";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonial />
      </>
    )
  },
  { path: "/services", element: <Services /> },
  { path: "/about/achievements", element: <Achievements /> },
  { path: "/about/directors", element: <Directors /> },
  { path: "/about/overview", element: <Mission /> },
  { path: "/about/services", element: <ServicesWeOffer /> },
  { path: "/faq", element: <FaqSection /> },
  { path: "/contact", element: <ContactUs /> }
];
