import { useEffect, useState } from "react";
import Chart from "./Chart";
import { useSuspenseQuery } from "@tanstack/react-query";
import { coingeckoBitcoinMarketChartQueryOptions, coingeckoBitcoinMarketPriceQueryOptions } from "@/hooks/query-options";
import { formatPrice } from "./utils";
import useWebSocketPriceStore from "@/stores/websocketPriceStore";
import Filters, { TFilter } from "./Filters";
import { Odometer } from "@/components/Odometer";

export default function BitcoinChart() {
    const [isChartHovered, setIsChartHovered] = useState(false);
    const [filter, setFilter] = useState<TFilter>('1');

    const { data: chartData } = useSuspenseQuery(coingeckoBitcoinMarketChartQueryOptions(Number(filter)));
    const { data: priceData } = useSuspenseQuery(coingeckoBitcoinMarketPriceQueryOptions());
    const websocketPrice = useWebSocketPriceStore((state) => state.price);
    const [price, setPrice] = useState<number>(chartData?.prices[chartData?.prices.length - 1][1] || 0);

    useEffect(() => {
        console.log(filter);
    }, [filter]);

    const bitcoinData = chartData?.prices.map(([timestamp, price]: [number, number]) => ({
        timestamp: new Date(timestamp),
        price
    })) || [];

    useEffect(() => {
        if (isChartHovered) return;
        if (websocketPrice === 0) {
            setPrice(bitcoinData[bitcoinData.length - 1].price)
        } else {
            setPrice(websocketPrice)
        }
    }, [websocketPrice, isChartHovered]);

    return (
        <div className="bg-neutral-900 rounded-2xl relative h-[400px] flex flex-col justify-between">
            <div className="pt-6 pl-6 mb-5">
                <div className="body-small text-neutral-300">
                    Bitcoin price
                </div>
                <div className="my-1 body-large-plus tabular-nums flex text-neutral-50">
                    {isChartHovered ?
                        <span>{formatPrice(price)}</span>
                        :
                        <span>$<Odometer
                            value={price}
                            duration={250}
                            formatOptions={{
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            }}
                        /></span>
                    }
                </div>
                <div>
                    <div className="body-small-plus">
                        {priceData.market_data.price_change_24h < 0 && <span>-</span>}
                        <span className={`${priceData.market_data.price_change_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>{formatPrice(priceData.market_data.price_change_24h)} ({priceData.market_data.price_change_percentage_24h.toFixed(2)}%)</span>
                        <span className="text-neutral-300 body-small ml-1">Past 24 hours</span>
                    </div>
                </div>
            </div>

            <Chart
                data={bitcoinData}
                setIsChartHovered={setIsChartHovered}
                setPrice={setPrice}
            />

            <Filters value={filter} setFilter={setFilter} />
        </div>

    );
}
