import { ArrowUpDownIcon, ChevronDown, ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import useWebSocketPriceStore from "@/stores/websocketPriceStore";
import useBuySellModalStore from "@/stores/buySellModalStore";
import Button from "../Buttons/Button";
import Input from "./Input";
import { handleAmountChange } from "./utils/handleAmountChange";

export default function OneTimeSell() {
    const setTab = useBuySellModalStore((state) => state.setTab)
    const [amount, setAmount] = useState("");
    const [sellAmount, setSellAmount] = useState('0');
    const websocketPrice = useWebSocketPriceStore((state) => state.price)

    useEffect(() => {
        if (!amount) {
            setSellAmount('0');
            return;
        }
        const formattedAmount = Number(amount.replace(/[^\d.]/g, ''));
        setSellAmount((formattedAmount / websocketPrice).toFixed(8));
    }, [amount, websocketPrice])

    const handleAmountChangeLocal = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleAmountChange(e.target.value, setAmount)
    }

    return (
        <div className="px-8 py-6">
            <div className="flex mt-0 h-20">
                <Input amount={amount} handleAmountChange={handleAmountChangeLocal} />
            </div>
            <div className="mt-4 text-center">
                <button type="button" className="cursor-pointer mx-auto flex items-center gap-2 outline-none text-neutral-300">
                    {sellAmount} BTC
                    <ArrowUpDownIcon className="w-4 h-4" />
                </button>
            </div>
            <button type="button" className="mt-2 w-full flex justify-center items-center text-neutral-500 gap-x-0.5">
                $0.00 available <ChevronRightIcon className="w-3 h-3 relative top-0.5" />
            </button>
            <div className="flex justify-center mt-6">
                <button type="button" onClick={() => setTab("order-type")} className="inline-flex justify-center items-center gap-2 tracking-[0.45px] rounded-full transition-transform duration-100 w-fit cursor-pointer active:opacity-80 active:scale-97 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-11 body-small pl-5 pr-[18px] text-neutral-50 bg-neutral-800 hover:bg-neutral-700 focus-visible:ring-neutral-700 focus-visible:ring-offset-neutral-950">
                    One-time <ChevronDown className="w-4 h-4 relative top-0.5" />
                </button>
            </div>
            <Button type="submit" disabled={true} variant="primary" classes="w-full mt-6">
                Preview sell
            </Button>
        </div>
    )
}