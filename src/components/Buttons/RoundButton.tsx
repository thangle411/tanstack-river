export default function RoundButton({ children, classes }: { children: React.ReactNode, classes?: string }) {
    return (
        <button type="button" className={`inline-flex justify-center items-center gap-2 tracking-[0.45px] rounded-full transition-transform duration-100 cursor-pointer active:opacity-80 active:scale-97 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-11 body-small px-5 text-neutral-50 bg-neutral-850 hover:bg-neutral-800 focus-visible:ring-neutral-700 focus-visible:ring-offset-neutral-950 w-full ${classes ?? ''}`}>
            {children}
        </button>
    )
}