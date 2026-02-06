import { queryOptions } from "@tanstack/react-query"
import { getBitcoinMarketData, getBitcoinPrice } from "@/api/bitcoin"
import { ACTIVITY_QUERY_KEY, BITCOIN_MARKET_CHART_QUERY_KEY, BITCOIN_MARKET_PRICE_QUERY_KEY, USER_QUERY_KEY } from "@/constants/query-key"
import { getUser } from "@/api/user"
import { getActivity } from "@/api/activity"

export const userQueryOptions = () => (
    queryOptions({
        queryKey: [USER_QUERY_KEY],
        queryFn: getUser,
        staleTime: 1000 * 60 * 1,
        refetchInterval: 1000 * 60 * 1,
    })
)

export const activityQueryOptions = () => (
    queryOptions({
        queryKey: [ACTIVITY_QUERY_KEY],
        queryFn: getActivity,
        staleTime: 1000 * 60 * 1,
    })
)

export const coingeckoBitcoinMarketChartQueryOptions = (filter: number = 1) => (
    queryOptions({
        queryKey: [BITCOIN_MARKET_CHART_QUERY_KEY, filter],
        queryFn: () => getBitcoinMarketData(filter),
        staleTime: 1000 * 60 * 1,
    })
)

export const coingeckoBitcoinMarketPriceQueryOptions = () => (
    queryOptions({
        queryKey: [BITCOIN_MARKET_PRICE_QUERY_KEY],
        queryFn: getBitcoinPrice,
        staleTime: 1000 * 60 * 1,
    })
)


