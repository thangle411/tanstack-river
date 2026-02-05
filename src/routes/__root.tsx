import { Outlet, createRootRouteWithContext, redirect } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { QueryClient, QueryClientProvider, useSuspenseQuery } from '@tanstack/react-query'

import Navbar from '@/components/Navbar/Navbar'
import { UserProvider } from '@/providers'
import { userQueryOptions } from '@/hooks/query-options'
import NotFound from '@/components/404'
import Error from '@/components/Error'

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
  const user = queryClient.getQueryData(userQueryOptions().queryKey)

  if (!user) {
    throw redirect({ to: '/login' })
  }

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider user={user}>
        <Navbar />
        <Outlet />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </UserProvider>
    </QueryClientProvider>
  )
}
