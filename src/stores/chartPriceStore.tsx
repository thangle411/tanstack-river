import { create } from "zustand"

interface IChartPriceStore {
    price: number
    isChartHovered: boolean
    setPrice: (price: number) => void
    setIsChartHovered: (isChartHovered: boolean) => void
}

const useChartPriceStore = create<IChartPriceStore>((set) => ({
    price: 0,
    isChartHovered: false,
    setPrice: (price: number) => set({ price }),
    setIsChartHovered: (isChartHovered: boolean) => set({ isChartHovered })
}))

export default useChartPriceStore