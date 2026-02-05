import { useUser } from "@/providers";
import { Copy, RefreshCcw } from "lucide-react";
import Button from "../Buttons/Button";
import useBuySellModalStore from "@/store";
import { useState } from "react";

export default function AddCashTab() {
    const { user } = useUser();
    const setOpen = useBuySellModalStore((state) => state.setOpen);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = async (text: string, index: number) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedIndex(index);
            setTimeout(() => {
                setCopiedIndex(null);
            }, 1000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const wireInstructions = [
        {
            label: "Bank name",
            value: "Lead Bank"
        },
        {
            label: "Bank address",
            value: "1801 Main Street, Kansas City, MO 64108"
        },
        {
            label: "Routing number",
            value: "101019644"
        },
        {
            label: "Recipient name",
            value: user.name
        },
        {
            label: "Your account number",
            value: user.phone
        },
        {
            label: "Receipient address",
            value: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`
        }
    ];


    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 gap-y-4">
            <div className="flex-shrink-0 text-neutral-50 group-active:text-neutral-400 w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center">
                <RefreshCcw className="w-5 h-5 text-neutral-50" />
            </div>
            <div className="body-large-plus text-neutral-50">
                Wire instructions
            </div>
            <div className="flex flex-col w-full">
                {wireInstructions.map((instruction, index) => (
                    <div
                        key={index}
                        onClick={() => handleCopy(instruction.value, index)}
                        className="items-center flex justify-between cursor-pointer text-base font-light border-solid border border-neutral-700 first:rounded-t last:rounded-b px-4 py-3 text-neutral-50 bg-neutral-800 hover:bg-neutral-700 [&amp;:hover_.copy-icon]:text-neutral-50 gap-y-4"
                    >
                        <div className="flex flex-col gap-y-1">
                            <span className="body-small text-neutral-300">
                                {instruction.label}
                            </span>
                            <span id="Bank-name-success-msg" className="body-regular-plus flex items-center">
                                {copiedIndex === index ? "Copied!" : instruction.value}
                            </span>
                        </div>
                        <Copy className="w-4 h-4 text-neutral-300" />
                    </div>
                ))}
            </div>
            <div className="body-small text-neutral-300">
                Need help with your wire? Call <a className="text-primary-500" href="tel:+18889948046">(888) 994-8046</a>.
            </div>
            <Button variant="primary" classes="w-full" onClick={() => setOpen(false)}>
                <span className="body-regular-plus">Done</span>
            </Button>
        </div>
    )
}