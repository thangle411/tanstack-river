import { IBitcoinMarketChart, IBitcoinMarketPrice } from "@/types/api";

export const getBitcoinMarketData = async (filter: number): Promise<IBitcoinMarketChart> => {
    try {
        const options = { method: 'GET', headers: { 'x-cg-demo-api-key': import.meta.env.VITE_COINGECKO_API_KEY } };
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${filter}`, options);
        return response.json();
    } catch (error) {
        return {
            prices: [],
            market_caps: [],
            total_volumes: []
        }
    }
}

export const getBitcoinPrice = async (): Promise<IBitcoinMarketPrice> => {
    try {
        const options = { method: 'GET', headers: { 'x-cg-demo-api-key': import.meta.env.VITE_COINGECKO_API_KEY } };
        const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin', options)
        return response.json();
    } catch (error) {
        return {
            market_data: {
                current_price: {
                    usd: 0
                },
                price_change_percentage_24h: 0,
                price_change_24h: 0,
                price_change_percentage_7d: 0,
                price_change_7d: 0,
                price_change_percentage_30d: 0,
                price_change_30d: 0,
                price_change_percentage_1y: 0,
                price_change_1y: 0,
            }
        }
    }
}