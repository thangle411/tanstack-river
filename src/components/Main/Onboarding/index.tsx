import { useUser } from "@/providers";
import { BitcoinIcon, ChevronRight, CircleCheck } from "lucide-react";

export default function Onboarding() {
    const { user } = useUser();

    return (
        <div>
            <div className="space-y-4 xl:max-w-[368px]">
                <div className="space-y-2 flex flex-col">
                    carousel
                </div>
                <div className="bg-neutral-900 rounded-2xl flex flex-col space-y-6">
                    <img src="/river-vertical-stripes-theme.svg" className="w-full h-full" />
                    <div className="px-6 pb-3 flex-col space-y-6">
                        <div>
                            <div className="body-medium-plus mb-1">
                                Welcome {user.name},
                            </div>
                            <p className="text-neutral-300 body-small">
                                You're almost done setting up your account
                            </p>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="flex flex-row items-center">
                                <div className="w-full bg-neutral-700 rounded-full h-4">
                                    <div className="bg-primary-500 rounded-full h-4" style={{ width: '67%' }}>
                                    </div>
                                </div>
                                <p className="ml-6 body-regular-plus">2/3</p>
                            </div>
                        </div>
                        <div className="rounded-2xl space-y-0 flex flex-col">
                            <div className="p-1 flex w-full flex w-full items-center gap-4 rounded-xl text-left overflow-hidden">
                                <div className="p-3 flex w-full items-center gap-4 rounded-lg">
                                    <div>
                                        <CircleCheck className="text-teal-300" />
                                    </div>
                                    <div className="space-y-0 grow">
                                        <div className="inline-flex items-center gap-2">
                                            <div className="text-neutral-50 body-regular-plus ">
                                                Create a River account
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-1 flex w-full flex w-full items-center gap-4 rounded-xl text-left overflow-hidden">
                                <div className="p-3 flex w-full items-center gap-4 rounded-lg">
                                    <div>
                                        <CircleCheck className="text-teal-300" />
                                    </div>
                                    <div className="space-y-0 grow">
                                        <div className="inline-flex items-center gap-2">
                                            <div className="text-neutral-50 body-regular-plus ">
                                                Verify your info
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="p-1 flex w-full flex w-full items-center gap-4 group rounded-xl text-left overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-neutral-950" phx-click="open_buy_sell_modal" phx-target="#buy-sell-modal">
                                <div className="p-3 flex w-full items-center gap-4 rounded-lg group-hover:bg-neutral-800">
                                    <div>
                                        <BitcoinIcon />
                                    </div>
                                    <div className="space-y-0 grow">
                                        <div className="inline-flex items-center gap-2">
                                            <div className="text-neutral-50 body-regular-plus group-active:text-neutral-400">
                                                Buy bitcoin
                                            </div>
                                        </div>
                                        <div className="text-neutral-300 body-small group-active:text-neutral-400">
                                            Start investing instantly
                                        </div>
                                    </div>
                                    <div>
                                        <ChevronRight className="text-neutral-500 h-5 w-5" />
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}