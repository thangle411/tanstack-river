import SharedContainer from "../SharedContainer";

export default function PastActivitySuspense() {
    return (
        <SharedContainer>
            <div className="flex flex-col space-y-6">
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-4 animate-pulse">
                        <div className="w-12 h-12 bg-neutral-800/50 rounded-full shrink-0" />
                        <div className="flex-1 space-y-2">
                            <div className="h-6 bg-neutral-800/50 rounded w-3/4" />
                            <div className="h-4 bg-neutral-800/50 rounded w-1/2" />
                        </div>
                    </div>
                ))}
            </div>
        </SharedContainer>
    );
}