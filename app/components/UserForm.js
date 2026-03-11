"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserForm() {
  const router = useRouter();

  const steps = ["skills", "interests", "personality", "education", "dream"];
    const [error, setError] = useState("");

  const questions = {
    skills: "What skills do you have?",
    interests: "What are your interests?",
    personality: "How would you describe your personality?",
    education: "What is your education background?",
    dream: "What is your dream career?",
  };

  const placeholders = {
    skills: "Coding, Design, Math, Communication...",
    interests: "AI, Robotics, Business, Creativity...",
    personality: "Analytical, Creative, Leader...",
    education: "Computer Science Student...",
    dream: "AI Engineer, Entrepreneur...",
  };

  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    skills: "",
    interests: "",
    personality: "",
    education: "",
    dream: "",
  });

  const current = steps[step];

  const nextStep = () => {
    if (!form[current] || form[current].trim() === "") {
      setError("Please fill this field before continuing.");
      return;
    }

    setError("");

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem("userData", JSON.stringify(form));
      router.push("/result");
    }
  };

  return (
    <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-xl">
      {/* Progress */}
      <div className="mb-6">
        <div className="h-2 bg-gray-700 rounded-full">
          <div
            className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-bold mb-6">{questions[current]}</h2>

      {/* Input */}
      <input
        type="text"
        placeholder={placeholders[current]}
        value={form[current]}
        onChange={(e) => setForm({ ...form, [current]: e.target.value })}
        className="w-full p-4 rounded-xl bg-black/40 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      {/* Button */}
      <button
        onClick={nextStep}
        className="mt-6 w-full py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition text-lg"
      >
        {step === steps.length - 1 ? "See My Future 🚀" : "Next"}
      </button>
    </div>
  );
}
