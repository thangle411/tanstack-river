import { useEffect, useState } from "react";
import Chart from "./Chart";
import { useSuspenseQuery } from "@tanstack/react-query";
import { coingeckoBitcoinMarketChartOptions, coingeckoBitcoinMarketPriceOptions } from "@/hooks/query-options";
import useBinanceWebSocket from "@/hooks/useBinanceWebSocket";
import { formatPrice } from "./utils";

export const BitcoinChartSuspense = () => (
    <div className="bg-neutral-900 rounded-2xl relative max-h-[400px]">
        <style>
            {`
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}
        </style>
        <div className="pt-6 pl-6">
            <div className="body-small text-neutral-300">Bitcoin price</div>
            <div className="my-1 h-8 w-40 bg-neutral-800/50 rounded animate-pulse mb-2"></div>
            <div className="h-4 w-56 bg-neutral-800/50 rounded animate-pulse mb-4"></div>
        </div>
        <div
            className="w-full animate-pulse bg-neutral-800/30 rounded-lg"
            style={{
                maxHeight: '260px',
                aspectRatio: 1.618,
                background: 'linear-gradient(90deg, rgba(38, 38, 38, 0.3) 0%, rgba(64, 64, 64, 0.5) 50%, rgba(38, 38, 38, 0.3) 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s infinite'
            }}
        >
        </div>
        <div className="w-full px-12 lg:px-40 xl:px-24 2xl:px-40 pb-4 text-xs">
            <div className="flex justify-between">
                <button className="text-neutral-300 body-mini">24H</button>
                <button className="text-neutral-300 body-mini">1W</button>
                <button className="text-neutral-300 body-mini">1M</button>
                <button className="text-neutral-300 body-mini">1Y</button>
                <button className="text-neutral-300 body-mini">ALL</button>
            </div>
        </div>
    </div>
)


export default function BitcoinChart() {
    const { data: chartData } = useSuspenseQuery(coingeckoBitcoinMarketChartOptions());
    const { data: priceData } = useSuspenseQuery(coingeckoBitcoinMarketPriceOptions());
    const websocketPrice = useBinanceWebSocket();

    const [isChartHovered, setIsChartHovered] = useState(false);
    const [price, setPrice] = useState<number>(chartData?.prices[chartData?.prices.length - 1][1] || 0);

    const bitcoinData = chartData?.prices.map(([timestamp, price]: [number, number]) => ({
        timestamp,
        price
    })) || [];

    useEffect(() => {
        if (websocketPrice.price === 0) {
            setPrice(bitcoinData[bitcoinData.length - 1].price)
        } else {
            setPrice(websocketPrice.price)
        }
    }, []);

    useEffect(() => {
        if (!isChartHovered) {
            if (bitcoinData.length === 0) return;
            if (websocketPrice.price === 0) {
                console.log('bitcoinData', bitcoinData);
                setPrice(bitcoinData[bitcoinData.length - 1].price)
            } else {
                console.log('websocketPrice.price', websocketPrice.price);
                setPrice(websocketPrice.price)
            }
        } else {
        }
    }, [isChartHovered]);

    return (
        <div className="bg-neutral-900 rounded-2xl relative max-h-[400px]">
            <div className="pt-6 pl-6">
                <div className="body-small text-neutral-300">
                    Bitcoin price
                </div>
                <div className="my-1 body-large-plus tabular-nums flex text-neutral-50">
                    <span>{formatPrice(price)}</span>
                </div>
                <div>
                    <div className="body-small-plus">
                        {priceData.market_data.price_change_24h > 0 && <span>-</span>}
                        <span className={`${priceData.market_data.price_change_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>{formatPrice(priceData.market_data.price_change_24h)} ({priceData.market_data.price_change_percentage_24h.toFixed(2)}%)</span>
                        <span className="text-neutral-300 body-small ml-1">Past 24 hours</span>
                    </div>
                </div>
            </div>

            <Chart
                chartData={bitcoinData}
                setIsChartHovered={setIsChartHovered}
                setPrice={setPrice}
            />


            <div className="w-full px-12 lg:px-40 xl:px-24 2xl:px-40 pb-4 text-xs">
                <div className="flex justify-between">
                    <button className="text-neutral-300 body-mini">24H</button>
                    <button className="text-neutral-300 body-mini">1W</button>
                    <button className="text-neutral-300 body-mini">1M</button>
                    <button className="text-neutral-300 body-mini">1Y</button>
                    <button className="text-neutral-300 body-mini">ALL</button>
                </div>
            </div>
        </div>

    );
}
