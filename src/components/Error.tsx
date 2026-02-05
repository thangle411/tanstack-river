import { Link } from "@tanstack/react-router";

export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-2xl font-bold">Something went wrong</div>
            <div className="text-lg">Please try again later</div>
            <Link to="/" className="text-primary-500">Back to Home</Link>
        </div>
    )
}