interface InputProps {
    amount: string;
    handleAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
}

export default function Input({ amount, handleAmountChange, onFocus }: InputProps) {
    const getFontSize = () => {
        if (amount.length > 9) {
            return "56px"
        }
        return "64px"
    }
    const getActiveColor = () => {
        if (amount && amount !== "$0" && amount !== "0 BTC") {
            return "text-primary-500"
        }
        return "text-neutral-400"
    }
    return (
        <div>
            <input autoComplete="off" className={`w-full border-0 text-center py-0 font-semibold h-20 amount-input 
                ${getActiveColor()} outline-none`}
                inputMode="decimal" placeholder="$0" type="text" value={amount}
                style={{ caretColor: "rgb(197, 160, 99)", fontSize: getFontSize() }}
                onChange={handleAmountChange}
                onFocus={onFocus}
            />
        </div>
    )
}