import { Outlet, createRootRouteWithContext, redirect, useLocation } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Navbar from '@/components/Navbar/Navbar'
import { userQueryOptions } from '@/hooks/query-options'
import NotFound from '@/components/404'
import Error from '@/components/Error'
import BuySellModal from '@/components/BuySellModal.tsx'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
  errorComponent: () => <Error />,
  notFoundComponent: () => <NotFound />,
  beforeLoad: async ({ context: { queryClient }, location }) => {
    const user = await queryClient.ensureQueryData(userQueryOptions())
    if (!user && location.pathname !== '/login') {
      throw redirect({ to: '/login' })
    }
  },
})

function RootComponent() {
  const { queryClient } = Route.useRouteContext()
  const { pathname } = useLocation();
  const user = queryClient.getQueryData(userQueryOptions().queryKey)

  if (!user) {
    throw redirect({ to: '/login' })
  }

  return (
    <QueryClientProvider client={queryClient}>
      {pathname !== '/login' &&
        <>
          <Navbar />
          <BuySellModal />
        </>
      }
      <Outlet />
    </QueryClientProvider>
  )
}
