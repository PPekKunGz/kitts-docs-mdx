"use client"
export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl md:text-8xl font-extrabold text-primary mb-4">Kitt's Docs</h1>
      <p className="text-2xl md:text-3xl font-bold text-primary mb-8">Welcome to Kitt's Docs</p>
      <button
        className="hover:cursor-pointer hover:scale-105 transition-all ease-in duration-300 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 hover:shadow-xl hover:shadow-white/20"
        onClick={() => window.location.href = "/docs"}
      >
        <span className="relative px-5 py-1.5 font-bold tracking-wider text-lg">
          Let's go!
        </span>
      </button>
      <div className="absolute bottom-0 left-0 w-full h-52 bg-linear-to-t from-white to-transparent dark:from-gray-900"></div>
    </div>
  );
}
