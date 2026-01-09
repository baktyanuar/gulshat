import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { VisionSection } from '@/components/VisionSection';
import { AudienceSection } from '@/components/AudienceSection';
import { StrategySection } from '@/components/StrategySection';
import { MonetizationSection } from '@/components/MonetizationSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VisionSection />
      <AudienceSection />
      <StrategySection />
      <MonetizationSection />
      <Footer />
    </div>
  );
};

export default Index;
