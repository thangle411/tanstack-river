import { BanknoteArrowDownIcon, ChevronRightIcon, LandmarkIcon, RefreshCcw } from "lucide-react";
import useBuySellModalStore from "@/stores/buySellModalStore";

export default function BuyTab() {
    const setTab = useBuySellModalStore((state) => state.setTab)

    return (
        <div className="px-8 py-6 flex flex-col gap-y-4">
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center bg-neutral-800 rounded-full w-16 h-16">
                    <BanknoteArrowDownIcon className="text-neutral-50 w-8 h-8" />
                </div>
            </div>
            <div className="body-medium-plus text-center">Add a payment method</div>
            <div className="body-medium text-center text-neutral-300">Buy bitcoin instantly with a linked bank account or cash added with a wire transfer.</div>
            <div className="rounded-2xl bg-neutral-800 space-y-0">
                <button className="group cursor-pointer w-full">
                    <div className="p-3 flex w-full items-center justify-between gap-4 rounded-lg group-hover:bg-neutral-700 group-focus-visible:bg-neutral-700">
                        <div>
                            <div className="flex-shrink-0 text-neutral-50 group-active:text-neutral-400 w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center">
                                <LandmarkIcon className="w-5 h-5 text-neutral-50" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="inline-flex items-center gap-2">
                                <div className="text-neutral-50 body-regular-plus group-active:text-neutral-400">
                                    Link a bank account
                                </div>
                            </div>
                            <div className="text-start text-neutral-300 body-small group-active:text-neutral-400">
                                Buy instantly.
                            </div>
                        </div>
                        <div>
                            <ChevronRightIcon className="w-5 h-5 text-neutral-300" />
                        </div>
                    </div>
                </button>
                <button className="group cursor-pointer w-full" onClick={() => setTab("add-cash")}>
                    <div className="p-3 flex w-full items-center justify-between gap-4 rounded-lg group-hover:bg-neutral-700 group-focus-visible:bg-neutral-700">
                        <div>
                            <div className="flex-shrink-0 text-neutral-50 group-active:text-neutral-400 w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center">
                                <RefreshCcw className="w-5 h-5 text-neutral-50" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="inline-flex items-center gap-2">
                                <div className="text-neutral-50 body-regular-plus group-active:text-neutral-400">
                                    Wire in cash
                                </div>
                            </div>
                            <div className="text-start text-neutral-300 body-small group-active:text-neutral-400">
                                Buy and send instantly. For large amounts.
                            </div>
                        </div>
                        <div>
                            <ChevronRightIcon className="w-5 h-5 text-neutral-300" />
                        </div>
                    </div>
                </button>
            </div>
        </div >
    )
}