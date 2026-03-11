"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-blue-500 sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          Future Forge
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-200 transition">
            Home
          </Link>

          <Link
            href="/about"
            className="text-white hover:text-gray-200 transition"
          >
            About
          </Link>

          <Link
            href="/result"
            className="text-white hover:text-gray-200 transition"
          >
            Results
          </Link>
        </div>
      </nav>
    </header>
  );
}
