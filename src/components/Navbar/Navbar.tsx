import { Link, useLocation } from "@tanstack/react-router";
import { Home, ChartNoAxesCombined, FileText, Clock, Headphones, Settings, Box, ChevronRight } from "lucide-react";
import NavbarItem from "./NavbarItem";
import useBuySellModalStore from "@/stores/buySellModalStore";
import Button from "../Buttons/Button";

const topSection = [
    {
        to: "/",
        icon: Home,
        label: "Home",
    },
    {
        to: "/account",
        icon: Clock,
        label: "Activity & Orders",
    },
    {
        to: "/performance",
        icon: ChartNoAxesCombined,
        label: "Performance",
    },
    {
        to: "/documents",
        icon: FileText,
        label: "Taxes & Documents",
    },
];
const bottomSection = [
    {
        to: "/earn-rewards",
        icon: Box,
        label: "Earn Rewards",
    },
    {
        to: "/support",
        icon: Headphones,
        label: "Support",
    },
    {
        to: "/settings",
        icon: Settings,
        label: "Profile & Settings",
    },
];


export default function Navbar() {
    const location = useLocation();
    const setOpen = useBuySellModalStore((state) => state.setOpen)
    const setTab = useBuySellModalStore((state) => state.setTab)

    return (
        <nav>
            <img src="/gold-glow.svg" alt="background-img" className="fixed -top-[500px] -left-[600px] z-50 pointer-events-none w-[1210px] h-[980px]" />
            <div className="xl:flex">
                <div className="fixed hidden xl:flex flex-col bg-black w-[300px] min-h-screen px-6 py-8 justify-between overflow-y-auto max-h-screen h-dvh min-h-[100dvh] max-h-[100dvh]">
                    <div className="flex flex-col">
                        <Link to="/" className="focus-visible:outline-none">
                            <img src="/logo.svg" alt="logo" className="mb-6 h-[28px]" />
                        </Link>
                        <Link to="/performance" className="flex flex-row px-4 py-3 mb-4 rounded-2xl bg-neutral-900 justify-between items-center hover:bg-neutral-800 focus:bg-neutral-800 cursor-pointer">
                            <div className="body-small text-neutral-50">
                                <div className="body-small text-neutral-300 mb-0.5">Account value</div>
                                <div className="body-regular-plus mb-0.5">$0.00</div>
                            </div>
                            <div>
                                <ChevronRight className="text-neutral-400 w-5 h-5" />
                            </div>
                        </Link>
                        {topSection.map((item, index) => (
                            <NavbarItem key={index} item={{ ...item, href: location.href }} />
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <Button onClick={() => { setOpen(true); setTab("buy") }} type="button"
                                variant="primary" classes="w-full">
                                Buy bitcoin
                            </Button>
                        </div>
                        {bottomSection.map((item, index) => (
                            <NavbarItem key={index} item={{ ...item, href: location.href }} />
                        ))}
                    </div>
                </div>
            </div>
        </nav >
    )
}