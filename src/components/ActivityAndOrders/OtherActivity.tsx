import { ChevronRightIcon, CircleXIcon } from "lucide-react";

export default function OtherActivity() {
    return (
        <div className="bg-neutral-900 rounded-2xl p-6 flex flex-col space-y-6" data-phx-id="m50-phx-GJGQvqMfkqn3WfwK">
            <h3 className="body-regular-plus">
                Other activity
            </h3>
            <button type="button" className="flex items-center focus:outline-none hover:opacity-60 transition-opacity duration-150">
                <CircleXIcon className="w-4 h-4 text-neutral-500" />
                <div className="ml-3 mr-4 text-left flex-grow flex items-center justify-between">
                    <div className="flex items-center space-x-1 body-small ">
                        <span>Inactive orders</span>
                    </div>
                    <ChevronRightIcon className="w-4 h-4 text-neutral-500" />
                </div>
            </button>
        </div>
    );
}