import MainLayout from '@/components/MainLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/performance')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <MainLayout>
      <div className='text-neutral-50'>
        Performance
      </div>
    </MainLayout>
  )
}
