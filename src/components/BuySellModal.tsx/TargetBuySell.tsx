import useWebSocketPriceStore from "@/stores/websocketPriceStore";
import Button from "../Buttons/Button";
import Input from "./Input";
import { useEffect, useState } from "react";
import { handleAmountChange } from "./utils/handleAmountChange";
import { Odometer } from "../Odometer";
import { validate } from "./utils/validate";

const PERCENTAGES = [2, 5, 10];

export default function TargetBuySell({ type }: { type: "buy" | "sell" }) {
    const websocketPrice = useWebSocketPriceStore((state) => state.price);
    const [amount, setAmount] = useState("");
    const [chosenPercent, setChosenPercent] = useState(0);

    const handlePercentSelect = (percent: number) => {
        setChosenPercent(percent);
    }

    useEffect(() => {
        if (!chosenPercent) return;
        if (type === 'sell') {
            setAmount(handleAmountChange((websocketPrice + ((chosenPercent / 100 * websocketPrice))).toFixed(2), 'cash'));
        } else {
            setAmount(handleAmountChange((websocketPrice - ((chosenPercent / 100 * websocketPrice))).toFixed(2), 'cash'));
        }
    }, [chosenPercent, websocketPrice])

    const handleAmountChangeLocal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const validatedAmount = validate(e.target.value, 'cash');
        const formattedAmount = handleAmountChange(validatedAmount, 'cash');
        setAmount(formattedAmount);
    }

    const handleCurrentPriceClick = () => {
        setChosenPercent(0);
        setAmount(websocketPrice.toFixed());
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
                        <span className="text-primary-500" onClick={handleCurrentPriceClick}>
                            &nbsp; $<Odometer value={websocketPrice} duration={250} formatOptions={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }} />
                        </span>
                    </p>
                    <Input amount={amount} handleAmountChange={handleAmountChangeLocal}
                        onFocus={() => setChosenPercent(0)}
                    />
                    {Number(amount.replace(/[^\d.]/g, '')) > 0 && (
                        <div className="text-neutral-500 mt-4">
                            {chosenPercent ?
                                <span>{type === "buy" ? "-" : "+"}{chosenPercent}% from current price</span>
                                :
                                <span>{((Number(amount.replace(/[^\d.]/g, '')) - websocketPrice) / websocketPrice * 100).toFixed(1)}% from current price</span>
                            }
                        </div>
                    )}
                    <div className="grid grid-cols-3 gap-2 w-full mt-6">
                        {PERCENTAGES.map((percent) => (
                            <button type="button" onClick={() => handlePercentSelect(percent)} key={percent} className={`${percent === chosenPercent ? "bg-neutral-700" : "bg-neutral-800"} inline-flex justify-center items-center gap-2 tracking-[0.45px] rounded-full transition-transform duration-100 cursor-pointer active:opacity-80 active:scale-97 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-11 body-small px-5 text-neutral-50 hover:bg-neutral-700 focus-visible:ring-neutral-700 focus-visible:ring-offset-neutral-950 w-full`}>
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