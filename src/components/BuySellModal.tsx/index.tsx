import { useState, useEffect } from "react"
import useBuySellModalStore from "@/stores/buySellModalStore"
import { XIcon } from "lucide-react"
import AddCashTab from "./AddCashTab"
import OrderType from "./OrderType"
import OneTimeBuy from "./OneTimeBuy"
import TargetBuySell from "./TargetBuySell"
import OneTimeSell from "./OneTimeSell"

const titles: Record<string, string> = {
    "one-time-buy": "Buy Bitcoin",
    "one-time-sell": "Sell Bitcoin",
    "add-cash": "Add Cash",
    "order-type": "Order Type",
    "target-buy": "Target Buy",
    "target-sell": "Target Sell"
}

export default function BuySellModal() {
    const open = useBuySellModalStore((state) => state.open)
    const tab = useBuySellModalStore((state) => state.tab)
    const setOpen = useBuySellModalStore((state) => state.setOpen)
    const setTab = useBuySellModalStore((state) => state.setTab)
    const [isAnimating, setIsAnimating] = useState(false)
    const [shouldRender, setShouldRender] = useState(false)

    const isBuyOrSell = tab === "one-time-buy" || tab === "one-time-sell" || tab === "target-buy" || tab === "target-sell";

    useEffect(() => {
        if (open) {
            setShouldRender(true)
            setTimeout(() => setIsAnimating(true), 10)
        } else {
            setIsAnimating(false)
            const timer = setTimeout(() => setShouldRender(false), 150)
            return () => clearTimeout(timer)
        }
    }, [open])

    const handleClose = () => {
        setOpen(false)
    }

    const renderTabButtons = () => {
        const baseClasses = "cursor-pointer w-full py-3 border-b-2"
        const activeClasses = "text-neutral-50 border-primary-500"
        const inactiveClasses = "text-neutral-300 border-neutral-700"

        const handleBuyClick = () => {
            if (tab === "one-time-buy" || tab === "target-buy") {
                return;
            }
            if (tab === "target-sell") {
                setTab("target-buy");
                return;
            } else if (tab === "one-time-sell") {
                setTab("one-time-buy");
                return;
            }
        };

        const handleSellClick = () => {
            if (tab === "one-time-sell" || tab === "target-sell") {
                return;
            }
            if (tab === "target-buy") {
                setTab("target-sell");
                return;
            } else if (tab === "one-time-buy") {
                setTab("one-time-sell");
                return;
            }
        };

        return (
            <div className="flex justify-center items-center">
                <button className={`${baseClasses} ${tab.includes("buy") ? activeClasses : inactiveClasses}`}
                    onClick={handleBuyClick}>
                    Buy
                </button>
                <button className={`${baseClasses} ${tab.includes("sell") ? activeClasses : inactiveClasses}`}
                    onClick={handleSellClick}>
                    Sell
                </button>
            </div>
        )
    }

    return (
        <div>
            {shouldRender && (
                <>
                    <div
                        onClick={handleClose}
                        className={`background fixed z-99 w-full h-full top-0 left-0 bg-[#000000] transition-opacity duration-300 ${isAnimating ? "opacity-75" : "opacity-0"
                            }`}
                    ></div>
                    <div className={`modal absolute z-100 top-[5%] left-1/2 transform -translate-x-1/2
                        bg-neutral-900 rounded-2xl w-[475px] transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"
                        }`}>
                        <div className="relative flex justify-between items-center">
                            <div className="body-medium-plus text-center w-full p-5">
                                {titles[tab]}
                            </div>
                            <button onClick={handleClose} type="button"
                                className="cursor-pointer absolute right-5 top-5">
                                <XIcon className="w-7 h-7 text-neutral-500" />
                            </button>
                        </div>

                        {isBuyOrSell && renderTabButtons()}

                        <div className="">
                            {tab === "one-time-buy" && <OneTimeBuy />}
                            {tab === "one-time-sell" && <OneTimeSell />}
                            {tab === "add-cash" && <AddCashTab />}
                            {tab === "order-type" && <OrderType />}
                            {tab === "target-buy" && <TargetBuySell type="buy" />}
                            {tab === "target-sell" && <TargetBuySell type="sell" />}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}