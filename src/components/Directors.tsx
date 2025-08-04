
import { Card } from '@/components/ui/card';
import data from '../lib/data.json';

export default function Directors() {
    const { title, subtitle, list } = data.directors;

    return (
        <section id="directors" className="mt-15 py-16 bg-[#f9fafb]">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-12 px-4">
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                        <div className="w-10 sm:w-12 h-1 bg-[#e63946] rounded-full"></div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0b1120] text-center">
                            {title.split(' ')[0]}{" "}
                            <span className="bg-[#e63946] text-white px-3 py-0.5 sm:py-1 rounded-full shadow-md font-extrabold inline-block">
                                {title.split(' ')[1]}
                            </span>
                        </h2>
                        <div className="w-10 sm:w-12 h-1 bg-[#e63946] rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl text-center">{subtitle}</p>
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
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                            <div className="relative z-20 p-6 h-full flex flex-col justify-end">
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    {director.name}
                                </h3>
                                <p className="text-[#e63946] font-semibold">
                                    {director.role}
                                </p>
                                <p className="text-sm text-gray-200 mt-2">
                                    {director.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
