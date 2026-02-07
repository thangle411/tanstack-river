import { Link } from "@tanstack/react-router";
import { Layers2Icon, TrendingUp, Wallet } from "lucide-react";

const tabs = [
    {
        id: 'bitcoin_returns',
        label: 'Bitcoin returns',
        icon: TrendingUp,
        path: '/performance'
    },
    {
        id: 'account',
        label: 'Account value',
        icon: Wallet,
        path: '/performance/account'
    },
    {
        id: 'bitcoin_lots',
        label: 'Bitcoin lots',
        icon: Layers2Icon,
        path: '/performance/bitcoin_lots'
    },
]

export default function TabsBar({ tab }: { tab: 'account' | 'bitcoin_lots' | 'bitcoin_returns' }) {
    return (
        <div className="w-full md:max-w-md overflow-x-auto md:overflow-x-visible pb-2">
            <div className="min-w-max">
                <div className="flex space-x-4" data-phx-id="m43-phx-GJHLnTZhLlK6BxTB">
                    {tabs.map((t) => (
                        <Link key={t.id} to={t.path} className={`outline-none select-none body-regular px-5 py-2.5 border-0 flex items-center justify-center rounded-2xl ${tab === t.id ? 'bg-neutral-900 text-neutral-50' : 'text-neutral-300'}`}>
                            <div className="inline-flex items-center justify-center whitespace-nowrap gap-2 cursor-pointer">
                                <t.icon className="w-4 h-4" />
                                <span>
                                    <span className="whitespace-nowrap">{t.label}</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}