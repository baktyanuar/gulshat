import { NavigationDark } from '@/components/dark/NavigationDark';
import { HeroSectionDark } from '@/components/dark/HeroSectionDark';
import { VisionSectionDark } from '@/components/dark/VisionSectionDark';
import { AudienceSectionDark } from '@/components/dark/AudienceSectionDark';
import { StrategySectionDark } from '@/components/dark/StrategySectionDark';
import { MonetizationSectionDark } from '@/components/dark/MonetizationSectionDark';
import { FooterDark } from '@/components/dark/FooterDark';
import { Marquee } from '@/components/ui/Marquee';

const IndexDark = () => {
  return (
    <div className="min-h-screen bg-white text-foreground selection:bg-emerald-200">
      <div className="noise" />
      <NavigationDark />
      <HeroSectionDark />

      <Marquee
        items={["Энергия", "Изобилие", "Любовь", "Трансформация"]}
        speed={30}
        className="rotate-[-2deg] scale-105 border-y-4 border-white z-20 relative -mt-10 mb-10"
      />

      <VisionSectionDark />
      <div className="py-12" />
      <StrategySectionDark />

      <Marquee
        items={["Женственность", "Баланс", "Роскошь", "Уверенность", "Счастье"]}
        direction="right"
        speed={35}
        className="rotate-[1deg] scale-105 border-y-4 border-white z-20"
      />

      <MonetizationSectionDark />
      <AudienceSectionDark />
      <FooterDark />
    </div>
  );
};

export default IndexDark;
