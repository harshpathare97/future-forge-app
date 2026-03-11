"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("userData");

    if (!data) {
      setLoading(false);
      return;
    }

    async function fetchPrediction() {
      try {
        const res = await fetch("/api/predict", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        });

        const json = await res.json();

        console.log("Prediction:", json);

        setResult(json);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPrediction();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl">
        Analyzing your future...
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-400">
        Something went wrong.
      </div>
    );
  }

  const score = result.score || 70;

  return (
    <main className="min-h-screen p-10 bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Your Future Dashboard
      </h1>

      {/* Score */}
      <div className="max-w-xl mx-auto mb-12 text-center">
        <h3 className="text-xl mb-2">Future Readiness Score</h3>

        <div className="w-full bg-gray-700 h-4 rounded-full">
          <div
            style={{ width: `${score}%` }}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 h-4 rounded-full"
          />
        </div>

        <p className="mt-2 text-lg">{score}%</p>
      </div>

      {/* Dashboard Grid */}
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

        {/* Risks */}
        <div className="bg-red-900/30 border border-red-500 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Reality Check</h2>

          {result.risks?.map((r, i) => (
            <p key={i}>• {r}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
