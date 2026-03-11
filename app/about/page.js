export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white px-6 py-16">
      {/* Title */}

      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          About Future Forge
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Future Forge is an AI-powered platform designed to help individuals
          understand and shape their future careers using technology, predictive
          insights, and intelligent guidance.
        </p>
      </div>

      {/* Mission Section */}

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>

          <p className="text-gray-300">
            Our mission is to empower people to make better decisions about
            their future. By combining artificial intelligence with career trend
            analysis, Future Forge helps users discover opportunities,
            understand required skills, and prepare for the rapidly evolving job
            market.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">What We Do</h2>

          <p className="text-gray-300">
            Using AI prediction models, Future Forge analyzes user inputs such
            as skills, interests, personality, and education to generate future
            career possibilities, skill development suggestions, and strategic
            roadmaps.
          </p>
        </div>
      </div>

      {/* Features */}

      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
            <h3 className="font-semibold text-xl mb-2">
              🤖 AI Career Predictions
            </h3>

            <p className="text-gray-300">
              Predicts possible future career paths based on your skills and
              interests.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
            <h3 className="font-semibold text-xl mb-2">
              📈 Skill Gap Analysis
            </h3>

            <p className="text-gray-300">
              Identifies the skills you need to learn to reach your desired
              future career.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
            <h3 className="font-semibold text-xl mb-2">⚠ Reality Check</h3>

            <p className="text-gray-300">
              Provides potential risks and challenges to help you prepare
              realistically for your career journey.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="text-center mt-20 text-gray-400">
        <p>Future Forge — Shaping Tomorrow with AI</p>
      </div>
    </main>
  );
}
