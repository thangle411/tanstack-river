import { ArrowDownUpIcon, CircleAlertIcon } from "lucide-react";

export default function BitcoinInterest() {
    return (
        <div className="bg-neutral-900 rounded-2xl flex flex-col gap-y-4 p-6 w-full">
            <div className="flex sm:flex-row flex-col sm:items-center">
                <button type="button" className="flex flex-row items-center cursor-pointer">
                    <p className="body-medium-plus text-neutral-50 mr-1">Bitcoin Interest on Cash</p>
                    <CircleAlertIcon className="text-neutral-300 w-4 h-4" />
                </button>
                <div className="sm:ml-auto">
                    <p className="text-neutral-300 text-sm">Next payout: Mar 1, 2026</p>
                </div>
            </div>
            <div className="border-t border-neutral-800"></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 sm:gap-y-0 w-full">
                <div className="flex flex-col gap-y-2">
                    <p className="text-neutral-300">Accrued this month</p>
                    <button type="button" className="flex items-center cursor-pointer group w-fit" aria-label="Toggle accrued interest currency">
                        <p className="body-regular-plus text-neutral-50 group-hover:text-neutral-100 transition-colors">
                            0 BTC
                        </p>
                        <ArrowDownUpIcon className="text-neutral-300 ml-1 group-hover:text-neutral-100 transition-colors w-4 h-4" />
                    </button>
                </div>

                <div className="flex flex-col gap-y-2">
                    <p className="text-neutral-300">Cash earning interest</p>
                    <button type="button" className="flex items-center cursor-pointer group w-fit" aria-label="Toggle accrued interest currency">
                        <p className="body-regular-plus text-neutral-50 group-hover:text-neutral-100 transition-colors">
                            $0.00
                        </p>
                        <ArrowDownUpIcon className="text-neutral-300 ml-1 group-hover:text-neutral-100 transition-colors w-4 h-4" />
                    </button>
                </div>

                <div className="flex flex-col gap-y-2">
                    <p className="text-neutral-300">Lifetime earnings</p>
                    <button type="button" className="flex items-center cursor-pointer group w-fit" aria-label="Toggle accrued interest currency">
                        <p className="body-regular-plus text-neutral-50 group-hover:text-neutral-100 transition-colors">
                            0 BTC
                        </p>
                        <ArrowDownUpIcon className="text-neutral-300 ml-1 group-hover:text-neutral-100 transition-colors w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}