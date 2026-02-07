import { create } from 'zustand'

type TBuySellModalView = "one-time-buy" | "one-time-sell" | 'target-buy' | 'target-sell' | 'add-cash' | 'order-type';

interface IBuySellModalStore {
    open: boolean
    setOpen: (open: boolean) => void
    tab: TBuySellModalView
    setTab: (tab: TBuySellModalView) => void
    showRecurringOrdersType: boolean
    setShowRecurringOrdersType: (showRecurringOrdersType: boolean) => void
}

const useBuySellModalStore = create<IBuySellModalStore>((set) => ({
    open: false,
    setOpen: (open: boolean) => set({ open }),
    tab: "one-time-buy",
    setTab: (tab: TBuySellModalView) => set({ tab }),
    showRecurringOrdersType: false,
    setShowRecurringOrdersType: (showRecurringOrdersType: boolean) => set({ showRecurringOrdersType })
}))

export default useBuySellModalStore