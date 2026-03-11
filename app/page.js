import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <Navbar />   */}
      <main className="flex flex-col items-center justify-center h-screen text-center px-6 bg-gradient-to-r from-blue-600 to-purple-800">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Future Forge: AI Career Predictor
        </h1>

        <p className="text-xl dark:text-gray-300 max-w-xl mb-8">
          Discover who you could become in 2035 using AI-powered career
          prediction.
        </p>

        <Link href="/form">
          <button className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition text-lg font-semibold shadow-lg">
            Start Exploring
          </button>
        </Link>
      </main>
    </>
  );
}
