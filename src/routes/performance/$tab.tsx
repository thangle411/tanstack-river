import MainLayout from '@/components/MainLayout'
import AccountValue from '@/components/Performance/AccountValue';
import BitcoinLots from '@/components/Performance/BitcoinLots';
import TabsBar from '@/components/Performance/TabsBar';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/performance/$tab')({
  component: RouteComponent,
  loader: async ({ params }) => {
    console.log('Performance params', params)
  },
})

function RouteComponent() {
  const { tab } = Route.useParams();

  console.log('tab', tab)

  return (
    <MainLayout>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center mb-4">
          <div className="title-small text-neutral-50">Performance</div>
        </div>
      </div>
      <TabsBar tab={tab} />
      <div>
        {tab === 'account' && <AccountValue />}
        {tab === 'bitcoin_lots' && <BitcoinLots />}
      </div>
    </MainLayout>
  )
}
