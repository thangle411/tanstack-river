export default function Input({ amount, handleAmountChange }:
    { amount: string, handleAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <input autoComplete="off" className={`w-full border-0 text-center py-0 font-semibold h-20 amount-input 
                ${amount ? "text-primary-500" : "text-neutral-400"} outline-none`}
            inputMode="decimal" placeholder="$0" type="text" value={amount} onChange={handleAmountChange}
            style={{ caretColor: "rgb(197, 160, 99)", fontSize: "64px" }}
        />
    )
}