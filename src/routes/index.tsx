import MainLayout from '@/components/MainLayout'
import { createFileRoute } from '@tanstack/react-router'
import { coingeckoBitcoinMarketChartQueryOptions, coingeckoBitcoinMarketPriceQueryOptions } from '@/hooks/query-options'
import Container from '@/components/SharedContainer'
import RoundButton from '@/components/Buttons/RoundButton'
import { ChevronRight } from 'lucide-react'
import BitcoinChart, { BitcoinChartSuspense } from '@/components/Main/BitcoinChart'
import { Suspense } from 'react'
import Onboarding from '@/components/Main/Onboarding'

export const Route = createFileRoute('/')({
  component: App,
  loader: async ({ context }) => {
    context.queryClient.ensureQueryData(coingeckoBitcoinMarketChartQueryOptions())
    context.queryClient.ensureQueryData(coingeckoBitcoinMarketPriceQueryOptions())
  }
})

function App() {
  return (
    <MainLayout>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center mb-4">
          <div className="title-small text-neutral-50">Home</div>
          <div className="hidden xl:flex gap-2">
            <button type="button" className="relative rounded-full text-center whitespace-nowrap outline-none active:scale-97 gold-gradient-1 text-neutral-950 hover:opacity-90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 active:ring-0 active:opacity-60 body-small-plus px-6 py-2">
              <span className="hidden z-0 absolute inset-0 h-full w-full items-center justify-center">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-50" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4">
                  </circle>
                  <path className="text-primary-500 opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
              </span>
              <span className="">
                Buy Bitcoin
              </span>
            </button>
            <button type="button" className="relative rounded-full text-center whitespace-nowrap outline-none active:scale-97 bg-neutral-850 text-neutral-50 hover:bg-neutral-800 hover:text-neutral-50 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 focus-visible:bg-neutral-850 active:ring-0 active:opacity-60 ancestor-js-modal:bg-neutral-800 ancestor-js-modal:hover:bg-neutral-700 ancestor-js-modal:focus-visible:bg-neutral-800 ancestor-js-modal:focus-visible:ring-neutral-800 body-small-plus px-6 py-2">
              <span className="hidden z-0 absolute inset-0 h-full w-full items-center justify-center">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-50" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4">
                  </circle>
                  <path className="text-primary-500 opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
              </span>
              <span className="">
                Sell Bitcoin
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-4 mt-3">
          <div className="xl:flex flex-col flex-grow space-y-4">
            <div>
              <Suspense fallback={<BitcoinChartSuspense />}>
                <BitcoinChart />
              </Suspense>
            </div>
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
                  <RoundButton>
                    <span className="lg:hidden">Receive BTC</span>
                    <span className="hidden lg:inline whitespace-nowrap">Receive bitcoin</span>
                  </RoundButton>
                  <RoundButton>
                    <span className="lg:hidden">Send BTC</span>
                    <span className="hidden lg:inline whitespace-nowrap">Send bitcoin</span>
                  </RoundButton>
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
                  <RoundButton>
                    <span className="lg:hidden">Add cash</span>
                    <span className="hidden lg:inline whitespace-nowrap">Add cash</span>
                  </RoundButton>
                  <RoundButton>
                    <span className="lg:hidden">Withdraw cash</span>
                    <span className="hidden lg:inline whitespace-nowrap">Withdraw cash</span>
                  </RoundButton>
                </div>
              </Container>
            </div>
            <Container>
              bitcoin interest on cash
            </Container>
          </div>
          <Onboarding />
        </div>
      </div>
    </MainLayout >
  )
}
