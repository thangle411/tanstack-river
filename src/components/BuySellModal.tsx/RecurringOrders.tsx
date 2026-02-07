import useBuySellModalStore from "@/stores/buySellModalStore"
import { useEffect } from "react"

export default function RecurringOrders() {
    const setShowRecurringOrdersType = useBuySellModalStore((state) => state.setShowRecurringOrdersType)

    useEffect(() => {
        return () => {
            setShowRecurringOrdersType(false)
        }
    }, [])

    return (
        <div >
            <h3 className="body-medium-plus text-neutral-50 mb-3 flex items-center justify-between">
                <span>Recurring orders</span>
                <span className="inline-flex items-center justify-center rounded-full h-7 px-3 bg-gradient-to-br from-[#D4B583]/20 to-[#987B4A]/20 ">
                    <span className="select-none body-mini-plus animate-shimmer bg-[length:200%_100%] bg-gradient-to-r text-transparent bg-clip-text from-[#FFF5E5] via-[#9E804F] to-[#FFF5E5] ">
                        Zero fees
                    </span>
                </span>
            </h3>
            <div className="rounded-2xl bg-neutral-800 space-y-0 ">
                <button type="button" className="p-1 flex w-full flex w-full items-center gap-4 group rounded-xl bg-neutral-800 text-left overflow-hidden focus:outline-none">
                    <div className="p-3 flex w-full items-center gap-4 rounded-lg group-hover:bg-neutral-700 group-focus-visible:bg-neutral-700">
                        <div>
                            <div className="rounded-full  bg-neutral-700  w-10 h-10 flex items-center justify-center flex-shrink-0 text-neutral-50 group-active:text-neutral-400">
                                icon
                            </div>
                        </div>
                        <div className="space-y-0 grow">
                            <div className="inline-flex items-center gap-2">
                                <div className="text-neutral-50 body-regular-plus group-active:text-neutral-400">
                                    Recurring buy
                                </div>
                            </div>
                            <div className="text-neutral-300 body-small group-active:text-neutral-400">
                                Buy regularly on a schedule
                            </div>
                        </div>
                        <div>
                            icon
                        </div>
                    </div>
                </button>
                <button type="button" className="p-1 flex w-full flex w-full items-center gap-4 group rounded-xl bg-neutral-800 text-left overflow-hidden focus:outline-none">
                    <div className="p-3 flex w-full items-center gap-4 rounded-lg group-hover:bg-neutral-700 group-focus-visible:bg-neutral-700">
                        <div>
                            <div className="rounded-full  bg-neutral-700  w-10 h-10 flex items-center justify-center flex-shrink-0 text-neutral-50 group-active:text-neutral-400">
                                icon
                            </div>
                        </div>
                        <div className="space-y-0 grow">
                            <div className="inline-flex items-center gap-2">
                                <div className="text-neutral-50 body-regular-plus group-active:text-neutral-400">
                                    Supercharged recurring buy
                                </div>
                            </div>
                            <div className="text-neutral-300 body-small group-active:text-neutral-400">
                                Buy regularly on a schedule. If the price dips at the time of your buy, you buy more.
                            </div>
                        </div>
                        <div>
                            icon
                        </div>
                    </div>
                </button>


            </div>
        </div>
    )
}
