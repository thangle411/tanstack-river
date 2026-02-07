import { Bitcoin, ChevronRightIcon, CrosshairIcon } from "lucide-react";
import useBuySellModalStore from "@/stores/buySellModalStore";
import RecurringOrders from "./RecurringOrders";

export default function OrderType() {
    const showRecurringOrdersType = useBuySellModalStore((state) => state.showRecurringOrdersType)
    const setTab = useBuySellModalStore((state) => state.setTab)

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 gap-y-4">
            <div className="rounded-2xl bg-neutral-800 space-y-0">
                <button className="group cursor-pointer w-full" onClick={() => setTab("one-time-sell")}>
                    <div className="p-3 flex w-full items-center justify-between gap-4 rounded-lg group-hover:bg-neutral-700 group-focus-visible:bg-neutral-700">
                        <div>
                            <div className="flex-shrink-0 text-neutral-50 group-active:text-neutral-400 w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center">
                                <Bitcoin className="w-5 h-5 text-neutral-50" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="inline-flex items-center gap-2">
                                <div className="text-neutral-50 body-regular-plus group-active:text-neutral-400">
                                    One-time sell
                                </div>
                            </div>
                            <div className="text-start text-neutral-300 body-small group-active:text-neutral-400">
                                Sell instantly
                            </div>
                        </div>
                        <div>
                            <ChevronRightIcon className="w-5 h-5 text-neutral-300" />
                        </div>
                    </div>
                </button>
                <button className="group cursor-pointer w-full" onClick={() => setTab("target-sell")}>
                    <div className="p-3 flex w-full items-center justify-between gap-4 rounded-lg group-hover:bg-neutral-700 group-focus-visible:bg-neutral-700">
                        <div>
                            <div className="flex-shrink-0 text-neutral-50 group-active:text-neutral-400 w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center">
                                <CrosshairIcon className="w-5 h-5 text-neutral-50" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="inline-flex items-center gap-2">
                                <div className="text-neutral-50 body-regular-plus group-active:text-neutral-400">
                                    Target sell
                                </div>
                            </div>
                            <div className="text-start text-neutral-300 body-small group-active:text-neutral-400">
                                Sell when bitcoin reaches your target price
                            </div>
                        </div>
                        <div>
                            <ChevronRightIcon className="w-5 h-5 text-neutral-300" />
                        </div>
                    </div>
                </button>
            </div>

            {showRecurringOrdersType &&
                <RecurringOrders />
            }
        </div>
    )
}