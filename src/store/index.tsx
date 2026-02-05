import { create } from 'zustand'

type TBuySellModalView = "buy" | "sell" | 'add-cash'

interface IBuySellModalStore {
    open: boolean
    setOpen: (open: boolean) => void
    tab: TBuySellModalView
    setTab: (tab: TBuySellModalView) => void
}

const useBuySellModalStore = create<IBuySellModalStore>((set) => ({
    open: false,
    setOpen: (open: boolean) => set({ open }),
    tab: "buy",
    setTab: (tab: TBuySellModalView) => set({ tab }),
}))

export default useBuySellModalStore