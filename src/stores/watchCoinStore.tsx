import { create } from "zustand"

interface WatchCoinStore {
    watchCoin: {
        id: string;
        symbol: string;
    };
    setWatchCoin: (coin: { id: string; symbol: string }) => void;
}

export const useWatchCoinStore = create<WatchCoinStore>((set) => ({
    watchCoin: {
        id: "bitcoin",
        symbol: "BTC"
    },
    setWatchCoin: (coin: { id: string; symbol: string }) => set({ watchCoin: coin }),
}))

export default useWatchCoinStore;