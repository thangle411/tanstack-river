import { create } from 'zustand'

interface IWebSocketPriceStore {
    price: number
    setPrice: (price: number) => void
}

const useWebSocketPriceStore = create<IWebSocketPriceStore>((set) => ({
    price: 0,
    setPrice: (price: number) => set({ price }),
}))

// websocket logic
let latestPrice = 0;
const ws = new WebSocket('wss://data-stream.binance.vision/ws/btcusdt@trade');
ws.onopen = () => {
    console.log('connected to binance websocket');
};
ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    latestPrice = parseFloat(data.p);
};
ws.onclose = (event) => {
    console.log('disconnected from binance websocket', event);
};
ws.onerror = (error) => {
    console.error('error in binance websocket', error);
};
setInterval(() => {
    if (latestPrice > 0) {
        useWebSocketPriceStore.setState({ price: latestPrice });
    }
}, 3000);


export default useWebSocketPriceStore