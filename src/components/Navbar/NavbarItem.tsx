import { Link, useLocation } from "@tanstack/react-router";

interface INavbarItem {
    to: string;
    icon: any;
    label: string;
    routeToMatch: string[];
}

export default function NavbarItem({ item }: { item: INavbarItem }) {
    const location = useLocation();
    const isActive = item.routeToMatch.some(route => location.pathname === route);

    return (
        <Link to={item.to} className="group focus-visible:outline-none">
            <div className={`flex flex-row px-4 py-2.5 mb-1 items-center rounded-2xl space-x-2 hover:bg-neutral-850 group-focus-visible:bg-neutral-850 ${isActive ? 'bg-neutral-900' : 'border border-transparent'}`}>
                <item.icon className="text-neutral-300 group-hover:text-neutral-50 group-focus-visible:text-neutral-50 w-5 h-5" />
                <div className={`body-small ${isActive ? 'text-neutral-50' : 'text-neutral-300'} group-hover:text-neutral-50 group-focus-visible:text-neutral-50`}>
                    {item.label}
                </div>
            </div>
        </Link>
    )
}