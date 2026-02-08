export interface TopCoin {
    id: string
    symbol: string
    name: string
    image: string
    current_price: number
    market_cap: number
    market_cap_rank: number
    fully_diluted_valuation: number
    total_volume: number
    high_24h: number
    low_24h: number
    price_change_24h: number
    price_change_percentage_24h: number
    market_cap_change_24h: number
    market_cap_change_percentage_24h: number
    circulating_supply: number
    total_supply: number
    max_supply: number
    ath: number
    ath_change_percentage: number
    ath_date: string
    atl: number
    atl_change_percentage: number
    atl_date: string
    roi: any
    last_updated: string
    sparkline_in_7d: {
        price: number[]
    }
    price_change_percentage_24h_in_currency: number
}

export const getTopCoins = async (): Promise<TopCoin[]> => {
    const ids = ['bitcoin', 'ethereum', 'ripple', 'litecoin', 'bitcoin-cash', 'cardano', 'polkadot', 'dogecoin', 'solana', 'tron']
    try {
        const options = { method: 'GET', headers: { 'x-cg-demo-api-key': import.meta.env.VITE_COINGECKO_API_KEY } };
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids.join(',')}&sparkline=true&price_change_percentage=24h`, options)
        return response.json();
    } catch (error) {
        return []
    }
}