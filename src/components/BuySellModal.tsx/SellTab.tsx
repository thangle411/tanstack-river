import { ArrowUpDownIcon, ChevronDown, ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function SellTab() {
    const [amount, setAmount] = useState("")

    useEffect(() => {
        const formattedAmount = amount.replace(/[^\d.]/g, '');
        console.log(formattedAmount);
    }, [amount])

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        value = value.replace(/^\$/, '').replace(/,/g, '')
        value = value.replace(/[^\d.]/g, '')
        const parts = value.split('.')
        if (parts.length > 2) {
            value = parts[0] + '.' + parts.slice(1).join('')
        }

        if (value) {
            const [integerPart, decimalPart] = value.split('.')
            const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            const formattedValue = decimalPart !== undefined
                ? `${formattedInteger}.${decimalPart}`
                : formattedInteger
            setAmount(`$${formattedValue}`)
        } else {
            setAmount('')
        }
    }

    return (
        <div className="px-8 py-6">
            <div className="flex mt-0 h-20">
                <input autoComplete="off" className={`w-full border-0 text-center py-0 font-semibold h-20 amount-input 
                ${amount ? "text-primary-500" : "text-neutral-400"}`}
                    inputMode="decimal" placeholder="$0" type="text" value={amount} onChange={handleAmountChange}
                    style={{ caretColor: "rgb(197, 160, 99)", fontSize: "64px" }}
                />
            </div>
            <div className="mt-4 text-center">
                <button type="button" className="cursor-pointer mx-auto flex items-center gap-2 outline-none text-neutral-300">
                    0 BTC
                    <ArrowUpDownIcon className="w-4 h-4" />
                </button>
            </div>
            <button type="button" className="mt-2 w-full flex justify-center items-center text-neutral-500 gap-x-0.5">
                $0.00 available <ChevronRightIcon className="w-3 h-3 relative top-0.5" />
            </button>
            <div className="flex justify-center mt-6">
                <button type="button" className="inline-flex justify-center items-center gap-2 tracking-[0.45px] rounded-full transition-transform duration-100 w-fit cursor-pointer active:opacity-80 active:scale-97 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-11 body-small pl-5 pr-[18px] text-neutral-50 bg-neutral-800 hover:bg-neutral-700 focus-visible:ring-neutral-700 focus-visible:ring-offset-neutral-950">
                    One-time <ChevronDown className="w-4 h-4 relative top-0.5" />
                </button>
            </div>
            <button type="submit" disabled={true} className="relative rounded-full text-center whitespace-nowrap outline-none cursor-not-allowed gold-gradient-1 opacity-50 text-neutral-950 border-[#D4B583] body-regular-plus px-6 py-3 mt-6 w-full">
                <span className="">
                    Preview sell
                </span>
            </button>
        </div>
    )
}