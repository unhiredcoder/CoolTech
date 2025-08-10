
interface MissionSectionProps {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export const MissionSection = ({ title, paragraphs, image, imageAlt, reverse }: MissionSectionProps) => (
  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-16 sm:mb-20 ${reverse ? "flex flex-col-reverse lg:grid" : ""}`}>
    <div>
      <h3 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h3>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0">
          {p}
        </p>
      ))}
    </div>
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-3xl blur-2xl"></div>
      <img src={image} alt={imageAlt} className="relative z-10 w-full max-w-md sm:max-w-lg" />
    </div>
  </div>
);
