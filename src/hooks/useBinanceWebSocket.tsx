import { useEffect, useState, useRef } from "react";

export default function useBinanceWebSocket() {
    const [price, setPrice] = useState<number>(0);
    const latestPriceRef = useRef<number>(0);

    useEffect(() => {
        const ws = new WebSocket('wss://data-stream.binance.vision/ws/btcusdt@trade');

        ws.onopen = () => {
            console.log('connected to binance websocket');
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            latestPriceRef.current = parseFloat(data.p);
        };

        ws.onclose = (event) => {
            console.log('disconnected from binance websocket', event);
        };

        ws.onerror = (error) => {
            console.error('error in binance websocket', error);
        };

        const intervalId = setInterval(() => {
            if (latestPriceRef.current > 0) {
                setPrice(latestPriceRef.current);
            }
        }, 5000);

        return () => {
            clearInterval(intervalId);
            if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
                ws.close();
            }
        };
    }, []);

    return { price };
}