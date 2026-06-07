import { useLocation, useNavigate } from "react-router-dom";

export default function InterviewReport() {

  const navigate = useNavigate();
  const location = useLocation();

  const report = location.state?.report;

  if (!report) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-center">

          <h2 className="text-2xl text-amber-300 mb-4">
            No Report Found
          </h2>

          <button
            onClick={() => navigate("/dashboard")}
            className="
            bg-amber-300
            text-black
            px-6
            py-3
            rounded-lg
          "
          >
            Back to Dashboard
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ede8]">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="font-serif text-4xl text-amber-300 mb-3">
          Interview Report
        </h1>

        <p className="text-[#666] mb-10">
          AI generated feedback and performance analysis.
        </p>

        {/* Score */}
        <div className="bg-[#161616] border border-[#242424] rounded-xl p-8 mb-8 text-center">
          <p className="text-[#666] mb-2">
            Overall Score
          </p>

          <h2 className="text-6xl text-amber-300">
            {report.overall_score}
          </h2>

          <p className="mt-2 text-[#666]">
            {
              report.overall_score >= 80
                ? "Excellent Performance"
                : report.overall_score >= 60
                  ? "Good Performance"
                  : "Needs Improvement"
            }
          </p>
        </div>

        <div
          className="
    bg-[#161616]
    border
    border-[#242424]
    rounded-xl
    p-6
    mb-8
  "
        >

          <h3 className="text-amber-300 mb-4">
            AI Summary
          </h3>

          <p className="text-[#ccc] leading-relaxed">
            {report.summary}
          </p>

        </div>

        {/* Feedback */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#161616] border border-[#242424] rounded-xl p-6">
            <h3 className="text-green-400 mb-4">
              Strengths
            </h3>

            <ul className="space-y-3 text-[#ccc]">

              {
                report.strengths.map(
                  (item, index) => (
                    <li key={index}>
                      ✓ {item}
                    </li>
                  )
                )
              }

            </ul>
          </div>

          <div className="bg-[#161616] border border-[#242424] rounded-xl p-6">
            <h3 className="text-red-400 mb-4">
              Weaknesses
            </h3>

            <ul className="space-y-3 text-[#ccc]">

              {
                report.weaknesses.map(
                  (item, index) => (
                    <li key={index}>
                      ✗ {item}
                    </li>
                  )
                )
              }

            </ul>
          </div>

          <div className="bg-[#161616] border border-[#242424] rounded-xl p-6 md:col-span-2">
            <h3 className="text-amber-300 mb-4">
              Suggested Improvements
            </h3>

            <ul className="space-y-3 text-[#ccc]">

              {
                report.improvements.map(
                  (item, index) => (
                    <li key={index}>
                      • {item}
                    </li>
                  )
                )
              }

            </ul>
          </div>

          <div className="mt-8 flex gap-4">

            <button
              onClick={() =>
                navigate("/interview/setup")
              }
              className="
      bg-amber-300
      text-black
      px-6
      py-3
      rounded-lg
      font-medium
    "
            >
              Start New Interview
            </button>

            <button
              onClick={() =>
                navigate("/dashboard")
              }
              className="
      bg-[#161616]
      border
      border-[#242424]
      px-6
      py-3
      rounded-lg
    "
            >
              Back to Dashboard
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}