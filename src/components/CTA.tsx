import { Phone } from 'lucide-react';
import { Button } from './ui/button';

const CTA = () => {
  return (
    <section
      className="py-20 px-8 text-white relative overflow-hidden"
      style={{
        background:
          'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
      }}
    >
      {/* Decorative Blurs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-95 font-medium drop-shadow">
          Contact us today or book your AC service online. Our expert technicians are ready to help you stay cool and comfortable.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-[#833AB4] hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-transparent"
          >
            Book Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-[#833AB4] font-bold px-8 py-4 text-lg rounded-full transition-all group bg-transparent shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
