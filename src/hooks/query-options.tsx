import { queryOptions } from "@tanstack/react-query"
import { getBitcoinMarketData, getBitcoinPrice } from "@/api/bitcoin"
import { BITCOIN_MARKET_CHART_QUERY_KEY, BITCOIN_MARKET_PRICE_QUERY_KEY, USER_QUERY_KEY } from "@/constants/query-key"
import { getUser } from "@/api/user"

export const userQueryOptions = () => (
    queryOptions({
        queryKey: [USER_QUERY_KEY],
        queryFn: getUser,
        staleTime: 1000 * 60 * 1,
        gcTime: 1000 * 60 * 10,
    })
)

export const coingeckoBitcoinMarketChartQueryOptions = () => (
    queryOptions({
        queryKey: [BITCOIN_MARKET_CHART_QUERY_KEY],
        queryFn: getBitcoinMarketData,
        staleTime: 1000 * 60 * 1,
        gcTime: 1000 * 60 * 10,
    })
)

export const coingeckoBitcoinMarketPriceQueryOptions = () => (
    queryOptions({
        queryKey: [BITCOIN_MARKET_PRICE_QUERY_KEY],
        queryFn: getBitcoinPrice,
        staleTime: 1000 * 60 * 1,
        gcTime: 1000 * 60 * 10,
    })
)

