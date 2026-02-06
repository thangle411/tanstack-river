import PastActivity from '@/components/ActivityAndOrders/PastActivity'
import MainLayout from '@/components/MainLayout'
import { createFileRoute } from '@tanstack/react-router'
import OtherActivity from '@/components/ActivityAndOrders/OtherActivity'
import { FilterIcon } from 'lucide-react'
import { activityQueryOptions } from '@/hooks/query-options'
import { Suspense } from 'react'
import PastActivitySuspense from '@/components/ActivityAndOrders/PastActivitySuspense'

export const Route = createFileRoute('/account')({
    component: RouteComponent,
    loader: async ({ context }) => {
        context.queryClient.ensureQueryData(activityQueryOptions())
    }
})

function RouteComponent() {
    return (
        <MainLayout>
            <div className="text-start title-small text-neutral-50 w-full">Activity & Orders</div>
            <div className='flex flex-col xl:flex-row gap-4 w-full'>
                <div className="xl:flex flex-col flex-grow space-y-4">
                    <div className="flex items-center justify-between mt-2">
                        <h2 className="body-medium-plus">Past activity</h2>
                        <div className="flex items-center gap-2">
                            <button type="button" phx-click="open_filters_modal" className="active:opacity-60 active:ring-0 ancestor-js-modal:bg-neutral-800 ancestor-js-modal:focus-visible:bg-neutral-800 ancestor-js-modal:focus-visible:ring-neutral-800 ancestor-js-modal:hover:bg-neutral-700 bg-neutral-850 body-small-plus flex focus-visible:bg-neutral-850 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 focus:outline-none gap-2 hover:bg-neutral-800 hover:text-neutral-50 items-center justify-center px-6 py-2 rounded-full text-neutral-50" aria-label="Open filters">
                                <FilterIcon className="w-6 h-6" /> Filter
                            </button>
                        </div>
                    </div>
                    <Suspense fallback={<PastActivitySuspense />}>
                        <PastActivity />
                    </Suspense>
                </div>
                <div className='space-y-4 xl:flex-none xl:w-[368px]'>
                    <OtherActivity />
                </div>
            </div>
        </MainLayout>
    )
}
