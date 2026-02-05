export interface IBitcoinMarketPrice {
    market_data: {
        current_price: {
            usd: number;
        };
        price_change_percentage_24h: number;
        price_change_24h: number;
        price_change_percentage_7d: number;
        price_change_7d: number;
        price_change_percentage_30d: number;
        price_change_30d: number;
        price_change_percentage_1y: number;
        price_change_1y: number;
    };
}

export interface IBitcoinMarketChart {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
}