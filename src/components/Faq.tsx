import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle } from "lucide-react"
import faqData from "../lib/data.json" // Adjust path as per your folder structure
import { useLocation } from "react-router-dom"

const FaqSection = () => {
    const { faq } = faqData
    const location = useLocation();

    const isFAQ = location.pathname.includes('/faq');

    return (
        <section className={`${isFAQ ? 'mt-10 ' : ''}py-20 bg-white`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <HelpCircle className="w-8 h-8 text-[#e63946]" />
                        <h2 className="text-4xl lg:text-5xl font-bold">{faq.title}</h2>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {faq.subtitle}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faq.faqs.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index + 1}`}
                                className="bg-white  border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 px-6 py-2"
                            >
                                <AccordionTrigger className="bg-white text-left hover:text-[#e63946] transition-colors duration-300 text-lg font-semibold hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* CTA Button */}
                    <div className="text-center mt-12">
                        <Button className="bg-gradient-to-r from-[#e63946] to-[#dc2626] hover:from-[#dc2626] hover:to-[#b91c1c] font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl hover:shadow-[#e63946]/25 transition-all transform hover:scale-105 hover:-translate-y-1">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Still have questions?
                        </Button>
                        <p className="text-gray-500 mt-4 text-sm">Contact our friendly team for personalized assistance</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection
