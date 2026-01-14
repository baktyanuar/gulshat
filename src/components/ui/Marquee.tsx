
interface MarqueeProps {
    items: string[];
    direction?: 'left' | 'right';
    speed?: number;
    className?: string;
}

export const Marquee = ({ items, direction = 'left', speed = 20, className = "" }: MarqueeProps) => {
    return (
        <div className={`relative flex overflow-hidden bg-black py-4 ${className}`}>
            <div
                className={`flex whitespace-nowrap animate-infinite-scroll-${direction}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {[...items, ...items, ...items, ...items].map((item, index) => (
                    <div key={index} className="mx-8 flex items-center gap-4">
                        <span className="text-2xl md:text-4xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 opacity-80">
                            {item}
                        </span>
                        <span className="text-white/20 text-2xl">✦</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
