export const BitcoinChartSuspense = () => (
    <div className="bg-neutral-900 rounded-2xl relative max-h-[400px]">
        <style>
            {`
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}
        </style>
        <div className="pt-6 pl-6">
            <div className="body-small text-neutral-300">Bitcoin price</div>
            <div className="my-1 h-8 w-40 bg-neutral-800/50 rounded animate-pulse mb-2"></div>
            <div className="h-4 w-56 bg-neutral-800/50 rounded animate-pulse mb-4"></div>
        </div>
        <div
            className="w-full animate-pulse bg-neutral-800/30 rounded-lg"
            style={{
                maxHeight: '240px',
                aspectRatio: 1.618,
                background: 'linear-gradient(90deg, rgba(38, 38, 38, 0.3) 0%, rgba(64, 64, 64, 0.5) 50%, rgba(38, 38, 38, 0.3) 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s infinite'
            }}
        >
        </div>
        <div className="w-full px-12 lg:px-40 xl:px-24 2xl:px-40 pb-4 text-xs mt-2">
            <div className="flex justify-between">
                <button className="text-neutral-300 body-mini">24H</button>
                <button className="text-neutral-300 body-mini">1W</button>
                <button className="text-neutral-300 body-mini">1M</button>
                <button className="text-neutral-300 body-mini">1Y</button>
            </div>
        </div>
    </div>
)