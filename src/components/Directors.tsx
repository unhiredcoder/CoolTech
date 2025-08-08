
import { Card } from "@/components/ui/card";
import data from "../lib/data.json";

export default function Directors() {
    const { title, subtitle, list } = data.directors;

    return (
        <section id="directors" className="page space-y-16">
            {/* Heading */}
            <div className="text-center">
                <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                    <div className="w-10 sm:w-12 h-1 bg-primary rounded-full"></div>
                    <h2 className="heading">
                        {title.split(" ")[0]}
                        {" "}
                        <span className="text-primary">{title.split(" ")[1]}</span>
                    </h2>
                    <div className="w-10 sm:w-12 h-1 bg-primary rounded-full"></div>
                </div>
                <p className="text-muted-foreground text-center para">{subtitle}</p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {list.map((director, index) => (
                    <Card
                        key={index}
                        className="relative overflow-hidden rounded-3xl shadow-3xl group h-[400px]"
                    >
                        <img
                            src={director.image}
                            alt={director.name}
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent z-10" />
                        <div className="relative z-20 p-6 py-0 h-full flex flex-col justify-end">
                            <h3 className="sub-heading text-background mb-2">
                                {director.name}
                            </h3>
                            <p className="text-primary font-semibold">
                                {director.role}
                            </p>
                            <p className="text-sm text-muted">
                                {director.description}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
