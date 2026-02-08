import { useSuspenseQuery } from "@tanstack/react-query"
import { topCoinsQueryOptions } from "@/hooks/query-options"
import { useState } from "react";

export function CoinsListLoader() {
    return (
        <div className="flex justify-between">
            {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="cursor-pointer bg-neutral-900 p-2 rounded hover:bg-neutral-800 transition-colors">
                    <div className="flex flex-col items-center justify-between w-[60px]">
                        <div className="w-8 h-8 bg-neutral-800 rounded animate-pulse" />
                        <div className="w-10 h-4 bg-neutral-800 rounded animate-pulse mt-2" />
                        <div className="w-12 h-4 bg-neutral-800 rounded animate-pulse mt-2" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function CoinsList() {
    const { data } = useSuspenseQuery(topCoinsQueryOptions());
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="overflow-hidden relative bg-neutral-900 p-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-wrapper {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
                .marquee-container {
                    display: flex;
                    gap: 0.25rem; /* gap-1 */
                    width: max-content;
                    animation: marquee 20s linear infinite;
                }
                .marquee-container.paused {
                    animation-play-state: paused;
                }
                `}
            </style>
            <div className={`marquee-wrapper`}>
                <div className={`marquee-container ${isHovered ? 'paused' : ''}`}>
                    {data.map((coin) => (
                        <div key={coin.id} className="cursor-pointer bg-neutral-800 p-2 rounded hover:bg-neutral-700 transition-colors">
                            <div className="flex flex-col items-center justify-between w-[60px]">
                                <img src={coin.image} alt={coin.name} className="w-8 h-8" />
                                <p className="text-[12px] text-neutral-500 mt-2">{coin.symbol.toUpperCase()}</p>
                                <p className="text-[14px] text-neutral-500">${coin.current_price}</p>
                            </div>
                        </div>
                    ))}
                    {/* duplicated items for seamless looping */}
                    {data.map((coin) => (
                        <div key={`${coin.id}-duplicate`} className="cursor-pointer bg-neutral-800 p-2 rounded hover:bg-neutral-700 transition-colors">
                            <div className="flex flex-col items-center justify-between w-[60px]">
                                <img src={coin.image} alt={coin.name} className="w-8 h-8" />
                                <p className="text-[12px] text-neutral-500 mt-2">{coin.symbol.toUpperCase()}</p>
                                <p className="text-[14px] text-neutral-500">${coin.current_price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
