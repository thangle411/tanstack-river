import MainLayout from '@/components/MainLayout'
import { createFileRoute } from '@tanstack/react-router'
import { coingeckoBitcoinMarketChartQueryOptions, coingeckoBitcoinMarketPriceQueryOptions } from '@/hooks/query-options'
import Container from '@/components/SharedContainer'
import Button from '@/components/Buttons/Button'
import { ChevronRight } from 'lucide-react'
import BitcoinChart from '@/components/Main/BitcoinChart'
import { Suspense } from 'react'
import Onboarding from '@/components/Main/Onboarding'
import useBuySellModalStore from '@/stores/buySellModalStore'
import BitcoinInterest from '@/components/Main/BitcoinInterest'
import { BitcoinChartSuspense } from '@/components/Main/BitcoinChart/BitcoinChartSuspense'

export const Route = createFileRoute('/')({
  component: App,
  loader: async ({ context }) => {
    context.queryClient.ensureQueryData(coingeckoBitcoinMarketChartQueryOptions())
    context.queryClient.ensureQueryData(coingeckoBitcoinMarketPriceQueryOptions())
  }
})

function App() {
  const setOpen = useBuySellModalStore((state) => state.setOpen);
  const setTab = useBuySellModalStore((state) => state.setTab);

  console.log("test render")

  return (
    <MainLayout>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center mb-4">
          <div className="title-small text-neutral-50">Home</div>
          <div className="hidden xl:flex gap-2">
            <Button variant="primary" classes='px-6' onClick={() => { setOpen(true); setTab("one-time-buy") }}>
              <span className="">
                Buy Bitcoin
              </span>
            </Button>
            <Button variant="default" classes='px-6' onClick={() => { setOpen(true); setTab("one-time-sell") }}>
              <span className="">
                Sell Bitcoin
              </span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-4 mt-3">
          <div className="xl:flex flex-col flex-grow space-y-4">
            <Suspense fallback={<BitcoinChartSuspense />}>
              <BitcoinChart />
            </Suspense>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <Container>
                <button type="button" className="cursor-pointer block rounded-md duration-150 ease-linear transition-all text-center justify-center text-base tracking-normal leading-6 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-primary-500 hover:text-primary-400 active:text-primary-400 outline-none font-light mt-0" >
                  <div className="text-neutral-50 hover:text-neutral-300 text-left">
                    <div className="flex flex-row mb-3 justify-between">
                      <div className="text-neutral-300 ">
                        Bitcoin
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="flex flex-row items-center justify-between hover:opacity-60">
                        <div className="body-medium-plus text-inherit">
                          0 BTC
                        </div>
                        <ChevronRight className="text-neutral-400 w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </button>

                <div className="grid grid-cols-2 border-neutral-800 pt-1 gap-3">
                  <Button>
                    <span className="lg:hidden">Receive BTC</span>
                    <span className="hidden lg:inline whitespace-nowrap">Receive bitcoin</span>
                  </Button>
                  <Button>
                    <span className="lg:hidden">Send BTC</span>
                    <span className="hidden lg:inline whitespace-nowrap">Send bitcoin</span>
                  </Button>
                </div>
              </Container>

              <Container>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-neutral-300 ">
                    Cash
                  </div>
                  <button id="earns-interest-pill" aria-label="Earns interest" type="button">
                    <span className="inline-flex items-center justify-center rounded-full h-7 px-3 bg-gradient-to-br from-[#D4B583]/20 to-[#987B4A]/20 ">
                      <span className="select-none body-mini-plus animate-shimmer bg-[length:200%_100%] bg-gradient-to-r text-transparent bg-clip-text from-[#FFF5E5] via-[#9E804F] to-[#FFF5E5] ">
                        Earns 3.3% in BTC
                      </span>
                    </span>
                  </button>
                </div>
                <button type="button" className="block rounded-md duration-150 ease-linear transition-all text-center justify-center text-base tracking-normal leading-6 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-primary-500 hover:text-primary-400 active:text-primary-400 outline-none font-light mt-0">
                  <div className="text-neutral-50 text-left [&amp;:not(:has(#pill:hover))]:hover:text-neutral-300">
                    <div className="mb-2.5 flex flex-row items-center justify-between hover:opacity-60">
                      <div className="body-medium-plus text-inherit">
                        $0.00
                      </div>
                      <ChevronRight className="text-neutral-400 w-5 h-5" />
                    </div>
                  </div>
                </button>
                <div className="grid grid-cols-2 border-neutral-800 pt-1 gap-3">
                  <Button>
                    <span className="lg:hidden">Add cash</span>
                    <span className="hidden lg:inline whitespace-nowrap">Add cash</span>
                  </Button>
                  <Button>
                    <span className="lg:hidden">Withdraw cash</span>
                    <span className="hidden lg:inline whitespace-nowrap">Withdraw cash</span>
                  </Button>
                </div>
              </Container>
            </div>
            <BitcoinInterest />
          </div>

          <div className="space-y-4 xl:max-w-[368px]">
            <Onboarding />
          </div>
        </div>
      </div>
    </MainLayout >
  )
}
