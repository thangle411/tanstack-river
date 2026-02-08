import { queryOptions } from "@tanstack/react-query"
import { getBitcoinMarketData, getBitcoinPrice } from "@/api/bitcoin"
import { ACTIVITY_QUERY_KEY, BITCOIN_MARKET_CHART_QUERY_KEY, BITCOIN_MARKET_PRICE_QUERY_KEY, TOP_COINS_QUERY_KEY, USER_QUERY_KEY } from "@/constants/query-key"
import { getUser } from "@/api/user"
import { getActivity } from "@/api/activity"
import { getTopCoins } from "@/api/topCoins"

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

export const coingeckoBitcoinMarketChartQueryOptions = (id: string, filter: number = 1) => (
    queryOptions({
        queryKey: [BITCOIN_MARKET_CHART_QUERY_KEY, id, filter],
        queryFn: () => getBitcoinMarketData(id, filter),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 5,
    })
)

export const coingeckoBitcoinMarketPriceQueryOptions = (id: string) => (
    queryOptions({
        queryKey: [BITCOIN_MARKET_PRICE_QUERY_KEY, id],
        queryFn: () => getBitcoinPrice(id),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 5,
    })
)

export const topCoinsQueryOptions = () => (
    queryOptions({
        queryKey: [TOP_COINS_QUERY_KEY],
        queryFn: getTopCoins,
        staleTime: 1000 * 60 * 10,
        gcTime: 1000 * 60 * 10,
    })
)


