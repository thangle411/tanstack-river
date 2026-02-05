export default function SharedContainer({ children, classes }: { children: React.ReactNode, classes?: string }) {
    return (
        <div className={`bg-neutral-900 rounded-2xl flex flex-col px-6 py-5 w-full ${classes ?? ''}`}>
            {children}
        </div>
    )
}