import MainLayout from '@/components/MainLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/earn-rewards')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <MainLayout>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center mb-4">
          <div className="title-small text-neutral-50">Earn Rewards</div>
        </div>
      </div>
    </MainLayout>
  )
}
