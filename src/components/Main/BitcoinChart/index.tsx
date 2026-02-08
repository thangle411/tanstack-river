import { useState } from "react";
import Chart from "./Chart";
import { useSuspenseQuery } from "@tanstack/react-query";
import { coingeckoBitcoinMarketChartQueryOptions, coingeckoBitcoinMarketPriceQueryOptions } from "@/hooks/query-options";
import Filters, { TFilter } from "./Filters";
import PriceDisplay from "./PriceDisplay";
import useWatchCoinStore from "@/stores/watchCoinStore";

export default function BitcoinChart() {
    const watchCoin = useWatchCoinStore((state) => state.watchCoin);
    const [filter, setFilter] = useState<TFilter>('1');
    const { data: chartData } = useSuspenseQuery(coingeckoBitcoinMarketChartQueryOptions(watchCoin.id, Number(filter)));
    const { data: priceData } = useSuspenseQuery(coingeckoBitcoinMarketPriceQueryOptions(watchCoin.id));

    console.log(watchCoin);

    const bitcoinData = chartData?.prices.map(([timestamp, price]: [number, number]) => ({
        timestamp: new Date(timestamp),
        price
    })) || [];

    return (
        <div className="bg-neutral-900 rounded-2xl relative h-[400px] flex flex-col justify-between">
            <PriceDisplay
                data={bitcoinData}
                priceData={priceData}
            />

            <Chart
                data={bitcoinData}
            />

            <Filters value={filter} setFilter={setFilter} />
        </div>

    );
}
