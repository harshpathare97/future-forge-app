"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("userData");

    if (!data) return;

    async function fetchPrediction() {
        console.log("Fetching prediction with data:", data);
      try {
        const res = await fetch("/api/predict", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        });

        const json = await res.json();

        console.log(json);

        setResult(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPrediction();
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-20 text-lg">Analyzing your future...</p>
    );
  }

  if (!result) {
    return (
      <p className="text-center mt-20 text-red-400">Something went wrong.</p>
    );
  }

  return (
    <main className="min-h-screen p-10 bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        Your Future Dashboard
      </h1>

      {/* Future Score */}
      <div className="max-w-xl mx-auto mb-12 text-center">
        <h3 className="text-xl mb-2">Future Readiness Score</h3>

        <div className="w-full bg-gray-700 h-4 rounded-full">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-4 rounded-full w-[75%]"></div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Careers */}
        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
          <h2 className="text-xl font-bold mb-4">Future Careers</h2>

          {result.careers?.map((c, i) => (
            <p key={i}>• {c}</p>
          ))}
        </div>

        {/* Skills */}
        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
          <h2 className="text-xl font-bold mb-4">Skills To Develop</h2>

          {result.skills?.map((s, i) => (
            <p key={i}>• {s}</p>
          ))}
        </div>

        {/* Roadmap */}
        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
          <h2 className="text-xl font-bold mb-4">Future Roadmap</h2>

          {result.roadmap?.map((r, i) => (
            <p key={i}>• {r}</p>
          ))}
        </div>

        {/* Reality Check */}
        <div className="bg-red-900/30 border border-red-500 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Reality Check ⚠️</h2>

          {result.risks?.map((r, i) => (
            <p key={i}>• {r}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
