import { StoryHero } from '@/components/story/StoryHero';
import { StoryBio } from '@/components/story/StoryBio';
import { StoryLifestyle } from '@/components/story/StoryLifestyle';
import { StoryValues } from '@/components/story/StoryValues';
import { StoryExpertise } from '@/components/story/StoryExpertise';
import { StoryDreams } from '@/components/story/StoryDreams';
import { NavigationDark } from '@/components/dark/NavigationDark';

const Story = () => {
    return (
        <div className="min-h-screen bg-white text-foreground selection:bg-emerald-200 font-sans">
            <div className="noise" />
            <NavigationDark />
            <StoryHero />
            <StoryBio />
            <StoryLifestyle />
            <StoryValues />
            <StoryExpertise />
            <StoryDreams />
        </div>
    );
};

export default Story;
