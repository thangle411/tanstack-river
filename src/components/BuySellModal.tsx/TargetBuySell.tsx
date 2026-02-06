import useWebSocketPriceStore from "@/stores/websocketPriceStore";
import Button from "../Buttons/Button";
import Input from "./Input";
import { useEffect, useState } from "react";
import { handleAmountChange } from "./utils/handleAmountChange";
import { Odometer } from "../Odometer";

const PERCENTAGES = [2, 5, 10];

export default function TargetBuySell({ type }: { type: "buy" | "sell" }) {
    const websocketPrice = useWebSocketPriceStore((state) => state.price);
    const [amount, setAmount] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [percent, setPercent] = useState(0);
    const [chosenPercent, setChosenPercent] = useState(0);

    const handlePercentSelect = (percent: number) => {
        setChosenPercent(percent);
        if (type === "sell") {
            handleAmountChange((websocketPrice + ((percent / 100 * websocketPrice))).toFixed(2), setAmount)
        } else {
            handleAmountChange((websocketPrice - ((percent / 100 * websocketPrice))).toFixed(2), setAmount)
        }
    }

    useEffect(() => {
        if (chosenPercent === 0) return;
        setAmount((websocketPrice + ((chosenPercent / 100 * websocketPrice))).toFixed(2));
    }, [chosenPercent, websocketPrice])

    useEffect(() => {
        if (!amount) {
            setTransactionAmount(0);
            return;
        }
        const formattedAmount = Number(amount.replace(/[^\d.]/g, ''));
        setTransactionAmount(formattedAmount / websocketPrice);
        setPercent((formattedAmount - websocketPrice) / websocketPrice * 100);
    }, [amount, websocketPrice])

    const handleAmountChangeLocal = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChosenPercent(0);
        handleAmountChange(e.target.value, setAmount)
    }

    return (
        <div className="px-8 py-6">
            <form onSubmit={() => { }}>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="body-large-plus text-white">
                        Target {type} price
                    </h2>
                    <p className="mt-2 mb-4">
                        <span className="text-neutral-500">Current price:</span>
                        <span className="text-primary-500">
                            &nbsp; $<Odometer value={websocketPrice} duration={250} formatOptions={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }} />
                        </span>
                    </p>
                    <Input amount={amount} handleAmountChange={handleAmountChangeLocal} />
                    {transactionAmount > 0 && (
                        <div className="text-neutral-500 mt-4">
                            {chosenPercent ?
                                <span>{chosenPercent}% from current price</span>
                                :
                                <span>{percent > 0 && "+"}{percent.toFixed(2)}% from current price</span>
                            }
                        </div>
                    )}
                    <div className="grid grid-cols-3 gap-2 w-full mt-6">
                        {PERCENTAGES.map((percent) => (
                            <button type="button" onClick={() => handlePercentSelect(percent)} key={percent} className="inline-flex justify-center items-center gap-2 tracking-[0.45px] rounded-full transition-transform duration-100 cursor-pointer active:opacity-80 active:scale-97 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-11 body-small px-5 text-neutral-50 bg-neutral-800 hover:bg-neutral-700 focus-visible:ring-neutral-700 focus-visible:ring-offset-neutral-950 w-full">
                                {type === "buy" ? "-" : "+"}{percent}%
                            </button>
                        ))}
                    </div>
                    <Button disabled={true} variant="primary" type="submit" classes="w-full mt-6">Continue</Button>
                </div>
            </form>
        </div>
    )
}