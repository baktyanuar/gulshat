import { StrategyHero } from '@/components/strategy/StrategyHero';
import { StrategyFoundation } from '@/components/strategy/StrategyFoundation';
import { StrategyAudience } from '@/components/strategy/StrategyAudience';
import { StrategyContent } from '@/components/strategy/StrategyContent';
import { StrategyProducts } from '@/components/strategy/StrategyProducts';
import { StrategyMarket } from '@/components/strategy/StrategyMarket';
import { StrategyCTA } from '@/components/strategy/StrategyCTA';
import { NavigationDark } from '@/components/dark/NavigationDark';

const Strategy = () => {
    return (
        <div className="min-h-screen bg-white text-foreground selection:bg-emerald-200 font-sans">
            <div className="noise" />
            <NavigationDark />
            <StrategyHero />
            <StrategyFoundation />
            <StrategyAudience />
            <StrategyMarket />
            <StrategyContent />
            <StrategyProducts />
            <StrategyCTA />
        </div>
    );
};

export default Strategy;
