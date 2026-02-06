import { Search } from "lucide-react";
import SharedContainer from "../SharedContainer";
import { useSuspenseQuery } from "@tanstack/react-query";
import { activityQueryOptions } from "@/hooks/query-options";

export default function PastActivity() {
    const activity = useSuspenseQuery(activityQueryOptions())

    return (
        <SharedContainer>
            <div className="max-w-md pt-6 pb-8 mx-auto">
                <div className="flex items-center justify-center">
                    <div className="rounded-full bg-primary-500 p-4">
                        <Search className="w-6 h-6 text-neutral-950" />
                    </div>
                </div>
                <div className="body-large-plus mt-4 mb-2 text-center">

                    <span>No activity yet</span>
                </div>

                <div className="body-regular text-neutral-300 text-center">
                    Link a bank account to start buying Bitcoin.
                </div>


                <div className="mt-4">
                    <button type="button" className="relative rounded-full text-center whitespace-nowrap outline-none phx-click-loading:cursor-wait active:scale-97 phx-click-loading:active:scale-100 gold-gradient-1 text-neutral-950 hover:opacity-90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 active:ring-0 active:opacity-60 body-small-plus px-6 py-2 w-full" phx-disable-with="" phx-click="add_bank_account">
                        <span className="hidden ancestor-phx-click-loading:flex z-0 absolute inset-0 h-full w-full items-center justify-center">
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-50" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                                </circle>
                                <path className="text-primary-500 opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                        </span>

                        <span className="ancestor-phx-click-loading:opacity-0">

                            Link Bank Account

                        </span>
                    </button>
                </div>

            </div>
        </SharedContainer>
    );
}