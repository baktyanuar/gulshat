import { NavigationDark } from '@/components/dark/NavigationDark';
import { HeroSectionDark } from '@/components/dark/HeroSectionDark';
import { VisionSectionDark } from '@/components/dark/VisionSectionDark';
import { AudienceSectionDark } from '@/components/dark/AudienceSectionDark';
import { StrategySectionDark } from '@/components/dark/StrategySectionDark';
import { MonetizationSectionDark } from '@/components/dark/MonetizationSectionDark';
import { FooterDark } from '@/components/dark/FooterDark';

const IndexDark = () => {
  return (
    <div className="min-h-screen bg-neu-bg text-neu-text">
      <NavigationDark />
      <HeroSectionDark />
      <VisionSectionDark />
      <AudienceSectionDark />
      <StrategySectionDark />
      <MonetizationSectionDark />
      <FooterDark />
    </div>
  );
};

export default IndexDark;
