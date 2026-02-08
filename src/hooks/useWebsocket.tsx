import { useEffect, useRef } from "react";
import useWebSocketPriceStore from "../stores/websocketPriceStore";

export const useWebsocket = (watchCoin: { id: string, symbol: string }) => {
    const setWebSocketPrice = useWebSocketPriceStore((state) => state.setPrice);
    const websocketRef = useRef<WebSocket | null>(null)

    useEffect(() => {
        let interval: NodeJS.Timeout;
        (async () => {
            console.log("watchCoin:", watchCoin);
            let latestPrice = 0;
            websocketRef.current = new WebSocket(`wss://data-stream.binance.vision/ws/${watchCoin.symbol.toLowerCase()}usdt@trade`);
            websocketRef.current.onopen = () => {
                console.log('connected to binance websocket for coin ', watchCoin.symbol);
            };
            websocketRef.current.onmessage = (event) => {
                const data = JSON.parse(event.data);
                latestPrice = parseFloat(data.p);
            };
            websocketRef.current.onclose = (event) => {
                console.log('disconnected from binance websocket for coin ', watchCoin.symbol, event);
            };
            websocketRef.current.onerror = (error) => {
                console.error('error in binance websocket for coin ', watchCoin.symbol, error);
            };
            interval = setInterval(() => {
                if (latestPrice > 0) {
                    setWebSocketPrice(latestPrice);
                }
            }, 3000);
        })()

        return () => {
            websocketRef.current?.close();
            if (interval) clearInterval(interval)
            console.log("unmounted websocket closed for coin ", watchCoin.symbol);
        };
    }, [watchCoin]);
}