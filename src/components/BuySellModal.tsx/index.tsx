import useBuySellModalStore from "@/store"
import BuyTab from "./BuyTab"
import SellTab from "./SellTab"
import { XIcon } from "lucide-react"
import AddCashTab from "./AddCashTab"

const titles: Record<string, string> = {
    buy: "Buy Bitcoin",
    sell: "Sell Bitcoin",
    "add-cash": "Add Cash"
}

export default function BuySellModal() {
    const open = useBuySellModalStore((state) => state.open)
    const tab = useBuySellModalStore((state) => state.tab)
    const setOpen = useBuySellModalStore((state) => state.setOpen)
    const setTab = useBuySellModalStore((state) => state.setTab)

    const isBuyOrSell = tab === "buy" || tab === "sell"

    const renderTabButtons = () => {
        const baseClasses = "cursor-pointer w-full py-3 border-b-2"
        const activeClasses = "text-neutral-50 border-primary-500"
        const inactiveClasses = "text-neutral-300 border-neutral-700"

        return (
            <div className="flex justify-center items-center">
                <button className={`${baseClasses} ${tab === "buy" ? activeClasses : inactiveClasses}`}
                    onClick={() => setTab("buy")}>
                    Buy
                </button>
                <button className={`${baseClasses} ${tab === "sell" ? activeClasses : inactiveClasses}`}
                    onClick={() => setTab("sell")}>
                    Sell
                </button>
            </div>
        )
    }

    return (
        <div>
            {open && (
                <>
                    <div onClick={() => setOpen(false)} className="background fixed z-99 w-full h-full top-0 left-0 bg-[#000000] opacity-75"></div>
                    <div className="modal absolute z-100 top-[5%] left-1/2 transform -translate-x-1/2
                        bg-neutral-900 rounded-2xl w-[475px]">
                        <div className="relative flex justify-between items-center">
                            <div className="body-medium-plus text-center w-full p-5">
                                {titles[tab]}
                            </div>
                            <button onClick={() => setOpen(false)} type="button"
                                className="cursor-pointer absolute right-5 top-5">
                                <XIcon className="w-7 h-7 text-neutral-500" />
                            </button>
                        </div>

                        {isBuyOrSell && renderTabButtons()}

                        <div className="">
                            {tab === "buy" && <BuyTab />}
                            {tab === "sell" && <SellTab />}
                            {tab === "add-cash" && <AddCashTab />}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}