interface CardData {
    title: string;
    tooltip: string;
    value: string;
    percentage: string;
    percentageColor: string;
}

interface BoxData {
    title: string;
    cards: {
        firstCard: CardData;
        secondCard: CardData;
    }
}

interface SummaryBarProps {
    leftBox: BoxData;
    rightBox: BoxData;
}

export default function SummaryBar({ leftBox, rightBox }: SummaryBarProps) {
    return (
        <div className="flex flex-col md:flex-row gap-4 py-4">
            <div className="bg-neutral-900 rounded-2xl flex flex-col gap-y-4 px-6 py-5 w-full" data-phx-id="m47-phx-GJHMqLVRc9D66HOR">
                <div className="flex flex-row items-center">
                    <p className="body-regular-plus text-neutral-50 mr-1">{leftBox.title}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-neutral-850 rounded-2xl flex-grow p-4 text-left" data-phx-id="m48-phx-GJHMqLVRc9D66HOR">
                        <div className="flex flex-row gap-x-1 whitespace-nowrap body-mini text-neutral-300">
                            {leftBox.cards.firstCard.title}
                            <div data-phx-id="m58-phx-GJHMqLVRc9D66HOR" className="relative inline-block group/tooltip whitespace-normal ">
                                icon
                                <span className="absolute left-1/2 bottom-[125%] z-10 mb-1 p-4 invisible opacity-0 group-hover/tooltip:visible group-hover/tooltip:opacity-100 transition-opacity box-shadow bg-neutral-700 rounded-xl text-neutral-50 body-regular text-center w-48 sm:w-80 -ml-24 sm:-ml-40" phx-hook="Tooltip" id="tooltip-893">
                                    {leftBox.cards.firstCard.tooltip}
                                    <div className="absolute rotate-45 bg-neutral-700 bottom-0 pl-px pt-px left-1/2 w-2 h-2 -ml-1 -mb-1">
                                    </div>
                                    <div className="absolute opacity-0 bottom-0 pl-px pt-px left-1/2 w-12 h-3 -ml-6 -mb-3"></div>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col whitespace-nowrap mt-2">
                            <span className="body-medium-plus text-neutral-50">
                                <span data-phx-id="m60-phx-GJHMqLVRc9D66HOR" className="">$0.00</span>
                            </span>
                            <div className="flex flex-row items-center gap-x-2 text-success-400">
                                <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-300 ease-in-out rotate-0">
                                    <path d="M6 2L10 8H2L6 2Z" fill="currentColor"></path>
                                </svg>
                                0.00%
                            </div>
                        </div>
                    </div>
                    <div className="bg-neutral-850 rounded-2xl flex-grow p-4 text-left" data-phx-id="m49-phx-GJHMqLVRc9D66HOR">
                        <div className="flex flex-row gap-x-1 whitespace-nowrap body-mini text-neutral-300">
                            {leftBox.cards.secondCard.title}
                            <div data-phx-id="m55-phx-GJHMqLVRc9D66HOR" className="relative inline-block group/tooltip whitespace-normal ">
                                icon
                                <span className="absolute left-1/2 bottom-[125%] z-10 mb-1 p-4 invisible opacity-0 group-hover/tooltip:visible group-hover/tooltip:opacity-100 transition-opacity box-shadow bg-neutral-700 rounded-xl text-neutral-50 body-regular text-center w-48 sm:w-80 -ml-24 sm:-ml-40" phx-hook="Tooltip" id="tooltip-1696">
                                    {leftBox.cards.secondCard.tooltip}
                                    <div className="absolute rotate-45 bg-neutral-700 bottom-0 pl-px pt-px left-1/2 w-2 h-2 -ml-1 -mb-1">
                                    </div>
                                    <div className="absolute opacity-0 bottom-0 pl-px pt-px left-1/2 w-12 h-3 -ml-6 -mb-3"></div>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col whitespace-nowrap mt-2">
                            <span className="body-medium-plus text-neutral-50">
                                <span data-phx-id="m57-phx-GJHMqLVRc9D66HOR" className="">$0.00</span>
                            </span>
                            <div className="flex flex-row items-center gap-x-2 text-success-400">
                                <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-300 ease-in-out rotate-0">
                                    <path d="M6 2L10 8H2L6 2Z" fill="currentColor"></path>
                                </svg>
                                0.00%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-900 rounded-2xl flex flex-col gap-y-4 px-6 py-5 w-full" data-phx-id="m50-phx-GJHMqLVRc9D66HOR">
                <div className="flex flex-row items-center">
                    <p className="body-regular-plus text-neutral-50 mr-1">{rightBox.title}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-neutral-850 rounded-2xl flex-grow p-4 text-left" data-phx-id="m51-phx-GJHMqLVRc9D66HOR">
                        <div className="flex flex-row gap-x-1 whitespace-nowrap body-mini text-neutral-300">
                            {rightBox.cards.firstCard.title}
                            <div data-phx-id="m61-phx-GJHMqLVRc9D66HOR" className="relative inline-block group/tooltip whitespace-normal ">
                                icon
                                <span className="absolute left-1/2 bottom-[125%] z-10 mb-1 p-4 invisible opacity-0 group-hover/tooltip:visible group-hover/tooltip:opacity-100 transition-opacity box-shadow bg-neutral-700 rounded-xl text-neutral-50 body-regular text-center w-48 sm:w-80 -ml-24 sm:-ml-40" phx-hook="Tooltip" id="tooltip-682">
                                    {rightBox.cards.firstCard.tooltip}
                                    <div className="absolute rotate-45 bg-neutral-700 bottom-0 pl-px pt-px left-1/2 w-2 h-2 -ml-1 -mb-1">
                                    </div>
                                    <div className="absolute opacity-0 bottom-0 pl-px pt-px left-1/2 w-12 h-3 -ml-6 -mb-3"></div>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col whitespace-nowrap mt-2">
                            <span className="body-medium-plus text-neutral-50">
                                {rightBox.cards.firstCard.value}
                            </span>
                            <span className="body-mini text-neutral-300">for bitcoin on River</span>
                        </div>
                    </div>
                    <div className="bg-neutral-850 rounded-2xl flex-grow p-4 text-left" data-phx-id="m52-phx-GJHMqLVRc9D66HOR">
                        <div className="flex flex-row gap-x-1 whitespace-nowrap body-mini text-neutral-300">
                            {rightBox.cards.secondCard.title}
                            <div data-phx-id="m63-phx-GJHMqLVRc9D66HOR" className="relative inline-block group/tooltip whitespace-normal ">
                                icon
                                <span className="absolute left-1/2 bottom-[125%] z-10 mb-1 p-4 invisible opacity-0 group-hover/tooltip:visible group-hover/tooltip:opacity-100 transition-opacity box-shadow bg-neutral-700 rounded-xl text-neutral-50 body-regular text-center w-48 sm:w-80 -ml-24 sm:-ml-40" phx-hook="Tooltip" id="tooltip-1075">
                                    {rightBox.cards.secondCard.tooltip}
                                    <div className="absolute rotate-45 bg-neutral-700 bottom-0 pl-px pt-px left-1/2 w-2 h-2 -ml-1 -mb-1">
                                    </div>
                                    <div className="absolute opacity-0 bottom-0 pl-px pt-px left-1/2 w-12 h-3 -ml-6 -mb-3"></div>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col whitespace-nowrap mt-2">
                            <span className="body-medium-plus text-neutral-50">
                                {rightBox.cards.secondCard.value}
                            </span>
                            <span className="body-mini text-neutral-300">per bitcoin on River</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}