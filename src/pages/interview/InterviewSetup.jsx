import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStartInterviewMutation } from "../../store/api/interviewApi";


export default function InterviewSetup() {

  const navigate = useNavigate();
  const [jd, setJd] = useState("");
  const [error, setError] = useState("");

  const [config, setConfig] = useState({
    questions: 10,
    difficulty: "Medium",
    type: "Technical",
    duration: "30",
    style: "Professional",
  });

  const [
    startInterview,
    { isLoading }
  ] = useStartInterviewMutation();

  const startInterviewHandler =
    async () => {

      if (!jd.trim()) {
        {
          error && (
            <div
              className="
        bg-red-500/10
        border
        border-red-500/20
        text-red-400
        rounded-lg
        p-3
        mb-4
      "
            >
              {error}
            </div>
          )
        }
        return;
      }

      try {

        const response =
          await startInterview({
            jd,

            interview_type:
              config.type,

            difficulty:
              config.difficulty,

            total_questions:
              Number(
                config.questions
              ),
          }).unwrap();

        navigate(
          "/interview/session",
          {
            state: {

              sessionId:
                response.session_id,

              question:
                response.question,

              audioFile: response.audio_file,

              questionNumber: 1,

              totalQuestions:
                Number(
                  config.questions
                ),
            },
          }
        );

      } catch (error) {

        console.log(error);

        alert(
          "Failed to start interview"
        );
      }
    };


  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ede8]">
      <div className="max-w-4xl mx-auto px-6 py-12">

        <h1 className="font-serif text-3xl text-amber-300 mb-2">
          Mock Interview
        </h1>

        <p className="text-[#666] mb-10">
          Configure your AI-powered interview experience.
        </p>

        {/* JD Card */}
        <div className="bg-[#161616] border border-[#242424] rounded-xl p-6 mb-6">
          <h2 className="text-lg mb-4">Job Description</h2>

          <input
            type="file"
            disabled
            className="
    w-full
    text-sm
    text-[#666]
    opacity-50
    cursor-not-allowed
  "
          />

          <p className="text-xs text-[#555] mt-2">
            PDF upload coming soon
          </p>

          <div className="my-5 text-center text-[#555]">OR</div>

          <textarea
            rows={8}
            value={jd}
            onChange={(e) =>
              setJd(e.target.value)
            }
            placeholder="Paste Job Description..."
            className="
    w-full
    bg-[#1c1c1c]
    border
    border-[#2e2e2e]
    rounded-lg
    p-4
    text-sm
    outline-none
    focus:border-amber-700/50
  "
          />
        </div>

        {/* Config Card */}
        <div className="bg-[#161616] border border-[#242424] rounded-xl p-6 mb-6">
          <h2 className="text-lg mb-6">
            Interview Configuration
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <select
              className="bg-[#1c1c1c] p-3 rounded-lg border border-[#2e2e2e] outline-none focus:border-amber-700/50"
              value={config.questions}
              onChange={(e) =>
                setConfig({
                  ...config,
                  questions:
                    e.target.value,
                })
              }
            >
              <option value={2}>
                2 Questions
              </option>

              <option value={5}>
                5 Questions
              </option>

              <option value={10}>
                10 Questions
              </option>
            </select>

            <select
              className="bg-[#1c1c1c] p-3 rounded-lg border border-[#2e2e2e] outline-none focus:border-amber-700/50"
              value={config.difficulty}
              onChange={(e) =>
                setConfig({
                  ...config,
                  difficulty:
                    e.target.value,
                })
              }
            >
              <option value={"Easy"}>Easy</option>
              <option value={"Medium"}>Medium</option>
              <option value={"Hard"}>Hard</option>
            </select>

            <select
              className="bg-[#1c1c1c] p-3 rounded-lg border border-[#2e2e2e] outline-none focus:border-amber-700/50"
              value={config.type}
              onChange={(e) =>
                setConfig({
                  ...config,
                  type:
                    e.target.value,
                })
              }
            >
              <option value={"Technical"}>Technical</option>
              <option value={"Behavioral"}>Behavioral</option>
              <option value={"Mixed"}>Mixed</option>
              <option value={"HR"}>HR</option>
            </select>



            <select className="bg-[#1c1c1c] p-3 rounded-lg border border-[#2e2e2e]">
              <option>15 Minutes</option>
              <option>30 Minutes</option>
              <option>45 Minutes</option>
              <option>60 Minutes</option>
            </select>

          </div>
        </div>

        {/* Interviewer Style */}
        <div className="bg-[#161616] border border-[#242424] rounded-xl p-6 mb-10">
          <h2 className="text-lg mb-4">
            Interviewer Style
          </h2>

          <select className="w-full bg-[#1c1c1c] p-3 rounded-lg border border-[#2e2e2e]">
            <option>Professional</option>
            <option>Friendly</option>
            <option>Strict</option>
            <option>FAANG Level</option>
          </select>
        </div>

        <button
          disabled={isLoading}
          onClick={
            startInterviewHandler
          }
          className={`
  w-full
  bg-amber-300
  text-black
  font-medium
  py-4
  rounded-xl
  transition-colors
  ${isLoading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-amber-200"
            }
`}
        >
          {
            isLoading
              ? "Starting..."
              : "Start Interview"
          }
        </button>
      </div>
    </div>
  );
}