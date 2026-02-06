import Button from "@/components/Buttons/Button";
import SharedContainer from "@/components/SharedContainer";
import useBuySellModalStore from "@/stores/buySellModalStore";
import { BanknoteIcon, ChevronLeftIcon, ChevronRightIcon, GiftIcon, HistoryIcon, LandmarkIcon, LucideIcon, PlugZap } from "lucide-react";
import { useState } from "react";

export default function Carousel() {
    const [current, setCurrent] = useState(0);
    const setTab = useBuySellModalStore((state) => state.setTab);
    const setOpen = useBuySellModalStore((state) => state.setOpen);

    const handleNext = () => {
        setCurrent((prev) => Math.min(prev + 1, data.length - 1));
    };

    const handlePrev = () => {
        setCurrent((prev) => Math.max(prev - 1, 0));
    };

    const data: { title: string, subtitle: string, buttonText: string, icon: any, action: () => void, isNew?: boolean }[] = [
        {
            title: 'Get paid with Bitcoin',
            subtitle: 'Set up direct deposite to get paid in bitcoin. Zero fees',
            buttonText: "Get Started",
            icon: <BanknoteIcon />,
            action: () => { },
            isNew: true
        },
        {
            title: 'Supercharged recurring buys',
            subtitle: 'Aotumatically double your buys during dips with zero fees',
            buttonText: "Create or edit order",
            icon: <PlugZap />,
            action: () => { },
            isNew: true
        },
        {
            title: 'Buy Bitcoin instantly with your bank',
            subtitle: 'Link your bank account in seconds and start buying Bitcoin',
            buttonText: 'Link bank account',
            icon: <LandmarkIcon />,
            action: () => { }
        },
        {
            title: 'Earn up to $100',
            subtitle: 'For each referral you invite to River that buys Bitcoin',
            buttonText: "Learn More",
            icon: <GiftIcon />,
            action: () => { }
        },
        {
            title: 'Get zero fees on recurring buys',
            subtitle: 'Buy on a regular schedule. Get zero fees after the first week.',
            buttonText: "Create a recurring buy",
            icon: <HistoryIcon />,
            action: () => {
                setOpen(true);
                setTab('one-time-buy');
            }
        }
    ]

    return (
        <div>
            <div className="overflow-hidden">
                <div className={`flex relative transition-transform duration-200 ease-in-out`} style={{ transform: `translateX(-${current * 104.4}%)` }}>
                    {data.map((item, index) => (
                        <div key={index} className={`min-w-full mr-4 relative`}>
                            <SharedContainer>
                                <div>
                                    <div className="text-neutral-50 font-semibold ">{item.title}
                                        {item.isNew && <span className="ml-2 inline-flex items-center justify-center rounded-full h-7 px-3 bg-gradient-to-br from-[#D4B583]/20 to-[#987B4A]/20 ">
                                            <span className="select-none body-mini-plus animate-shimmer bg-[length:200%_100%] bg-gradient-to-r text-transparent bg-clip-text from-[#FFF5E5] via-[#9E804F] to-[#FFF5E5] ">
                                                New
                                            </span>
                                        </span>}
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex-1 flex flex-col items-start gap-4">
                                            <div className="text-neutral-300 font-light text-sm leading-normal text-neutral-300">
                                                {item.subtitle}
                                            </div>
                                            <Button onClick={item.action} variant="default">{item.buttonText}</Button>
                                        </div>
                                        <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                    </div>

                                </div>
                            </SharedContainer>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-center w-full gap-3 py-2">
                <button disabled={current === 0} type="button" className="cursor-pointer" onClick={handlePrev}>
                    <ChevronLeftIcon className={`${current === 0 ? 'text-neutral-500' : 'text-neutral-50'} w-4 h-4`} />
                </button>
                <div className="flex items-center gap-1">
                    {data.map((_, index) => (
                        <div key={index} data-carousel-dot=""
                            onClick={() => setCurrent(index)}
                            className={`cursor-pointer w-1 h-1 rounded-full ${index === current ? 'bg-neutral-50' : 'bg-neutral-500'}`}></div>
                    ))}
                </div>

                <button disabled={current === data.length - 1} className="cursor-pointer" type="button" onClick={handleNext}>
                    <ChevronRightIcon className={`${current === data.length - 1 ? 'text-neutral-500' : 'text-neutral-50'} w-4 h-4`} />
                </button>
            </div>
        </div>
    )
}