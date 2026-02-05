import { Link } from "@tanstack/react-router";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-2xl font-bold">Page Not Found</div>
            <div className="text-lg">Oh no! Looks like the page you are looking for doesn't exist.</div>
            <Link to="/" className="text-primary-500">Back to Home</Link>
        </div>
    )
}