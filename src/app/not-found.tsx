import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 py-12">
            <div className="max-w-2xl text-center">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-blue-500 mb-6 drop-shadow-lg">
                    404
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 leading-tight">
                    You've been rickrolled by the 404!
                </h2>
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-10 shadow-xl rounded-full overflow-hidden border-4 border-blue-500">
                    <Image
                        src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
                        alt="Rick Astley dancing"
                        layout="fill"
                        objectFit="cover"
                        draggable="false"
                        className="animate-pulse-slow"
                    />
                </div>
                <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                    The page you're looking for is never gonna give you up, never gonna let you down, never gonna run around and
                    desert you.
                </p>
                <div className="flex flex-col md:flex-row gap-5 justify-center">
                    <Link href="/" passHref>
                        <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Go back home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}