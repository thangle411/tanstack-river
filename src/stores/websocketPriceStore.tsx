import { create } from 'zustand'

interface IWebSocketPriceStore {
    price: number
    setPrice: (price: number) => void
}

const useWebSocketPriceStore = create<IWebSocketPriceStore>((set) => ({
    price: 0,
    setPrice: (price: number) => set({ price }),
}))

export default useWebSocketPriceStore