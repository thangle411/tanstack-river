import { Odometer } from "@/components/Odometer";
import { formatPrice } from "./utils";
import useChartPriceStore from "@/stores/chartPriceStore";
import useWebSocketPriceStore from "@/stores/websocketPriceStore";
import { useEffect } from "react";

interface IPriceDisplay {
    data: { timestamp: Date; price: number }[];
    priceData: any;
}

export default function PriceDisplay({ data, priceData }: IPriceDisplay) {
    const websocketPrice = useWebSocketPriceStore((state) => state.price);
    const isChartHovered = useChartPriceStore((state) => state.isChartHovered);
    const chartPrice = useChartPriceStore((state) => state.price);
    const setChartPrice = useChartPriceStore((state) => state.setPrice);

    useEffect(() => {
        if (isChartHovered) return;
        if (websocketPrice === 0) {
            setChartPrice(data[data.length - 1].price)
        } else {
            setChartPrice(websocketPrice)
        }
    }, [websocketPrice, isChartHovered]);

    return (
        <div className="pt-6 pl-6 mb-5">
            <div className="body-small text-neutral-300">
                Bitcoin price
            </div>
            <div className="my-1 body-large-plus tabular-nums flex text-neutral-50">
                {isChartHovered ?
                    <span>{formatPrice(chartPrice)}</span>
                    :
                    <span>$<Odometer
                        value={chartPrice}
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
                    <span className={`${priceData.market_data.price_change_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>{formatPrice(priceData.market_data.price_change_24h)} ({priceData.market_data.price_change_percentage_24h.toFixed(2)}%)</span>
                    <span className="text-neutral-300 body-small ml-1">Past 24 hours</span>
                </div>
            </div>
        </div>
    )
}