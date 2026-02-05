import { queryOptions } from "@tanstack/react-query"
import { getBitcoinMarketData, getBitcoinPrice } from "@/api/getBitcoinMarketData"
import { BITCOIN_MARKET_CHART_QUERY_KEY, BITCOIN_MARKET_PRICE_QUERY_KEY } from "@/constants/query-key"

export const coingeckoBitcoinMarketChartOptions = () => (
    queryOptions({
        queryKey: [BITCOIN_MARKET_CHART_QUERY_KEY],
        queryFn: getBitcoinMarketData,
        staleTime: 1000 * 60 * 1,
        gcTime: 1000 * 60 * 10,
    })
)

export const coingeckoBitcoinMarketPriceOptions = () => (
    queryOptions({
        queryKey: [BITCOIN_MARKET_PRICE_QUERY_KEY],
        queryFn: getBitcoinPrice,
        staleTime: 1000 * 60 * 1,
        gcTime: 1000 * 60 * 10,
    })
)

