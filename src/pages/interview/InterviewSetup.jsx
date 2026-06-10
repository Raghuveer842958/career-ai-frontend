// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useStartInterviewMutation } from "../../store/api/interviewApi";


// export default function InterviewSetup() {

//   const navigate = useNavigate();
//   const [jd, setJd] = useState("");
//   const [error, setError] = useState("");

//   const [config, setConfig] = useState({
//     questions: 10,
//     difficulty: "Medium",
//     type: "Technical",
//     duration: "30",
//     style: "Professional",
//   });

//   const [
//     startInterview,
//     { isLoading }
//   ] = useStartInterviewMutation();

//   const startInterviewHandler =
//     async () => {

//       if (!jd.trim()) {
//         {
//           error && (
//             <div
//               className="
//         bg-red-500/10
//         border
//         border-red-500/20
//         text-red-400
//         rounded-lg
//         p-3
//         mb-4
//       "
//             >
//               {error}
//             </div>
//           )
//         }
//         return;
//       }

//       try {

//         const response =
//           await startInterview({
//             jd,

//             interview_type:
//               config.type,

//             difficulty:
//               config.difficulty,

//             total_questions:
//               Number(
//                 config.questions
//               ),
//           }).unwrap();

//         navigate(
//           "/interview/session",
//           {
//             state: {

//               sessionId:
//                 response.session_id,

//               question:
//                 response.question,

//               audioFile: response.audio_file,

//               questionNumber: 1,

//               totalQuestions:
//                 Number(
//                   config.questions
//                 ),
//             },
//           }
//         );

//       } catch (error) {

//         console.log(error);

//         alert(
//           "Failed to start interview"
//         );
//       }
//     };


//   return (
//     <div className="min-h-screen bg-[#0f0f0f] text-[#f0ede8]">
//       <div className="max-w-4xl mx-auto px-6 py-12">

//         <h1 className="font-serif text-3xl text-amber-300 mb-2">
//           Mock Interview
//         </h1>

//         <p className="text-[#666] mb-10">
//           Configure your AI-powered interview experience.
//         </p>

//         {/* JD Card */}
//         <div className="bg-[#161616] border border-[#242424] rounded-xl p-6 mb-6">
//           <h2 className="text-lg mb-4">Job Description</h2>

//           <input
//             type="file"
//             disabled
//             className="
//     w-full
//     text-sm
//     text-[#666]
//     opacity-50
//     cursor-not-allowed
//   "
//           />

//           <p className="text-xs text-[#555] mt-2">
//             PDF upload coming soon
//           </p>

//           <div className="my-5 text-center text-[#555]">OR</div>

//           <textarea
//             rows={8}
//             value={jd}
//             onChange={(e) =>
//               setJd(e.target.value)
//             }
//             placeholder="Paste Job Description..."
//             className="
//     w-full
//     bg-[#1c1c1c]
//     border
//     border-[#2e2e2e]
//     rounded-lg
//     p-4
//     text-sm
//     outline-none
//     focus:border-amber-700/50
//   "
//           />
//         </div>

//         {/* Config Card */}
//         <div className="bg-[#161616] border border-[#242424] rounded-xl p-6 mb-6">
//           <h2 className="text-lg mb-6">
//             Interview Configuration
//           </h2>

//           <div className="grid md:grid-cols-2 gap-4">

//             <select
//               className="bg-[#1c1c1c] p-3 rounded-lg border border-[#2e2e2e] outline-none focus:border-amber-700/50"
//               value={config.questions}
//               onChange={(e) =>
//                 setConfig({
//                   ...config,
//                   questions:
//                     e.target.value,
//                 })
//               }
//             >
//               <option value={2}>
//                 2 Questions
//               </option>

//               <option value={5}>
//                 5 Questions
//               </option>

//               <option value={10}>
//                 10 Questions
//               </option>
//             </select>

//             <select
//               className="bg-[#1c1c1c] p-3 rounded-lg border border-[#2e2e2e] outline-none focus:border-amber-700/50"
//               value={config.difficulty}
//               onChange={(e) =>
//                 setConfig({
//                   ...config,
//                   difficulty:
//                     e.target.value,
//                 })
//               }
//             >
//               <option value={"Easy"}>Easy</option>
//               <option value={"Medium"}>Medium</option>
//               <option value={"Hard"}>Hard</option>
//             </select>

//             <select
//               className="bg-[#1c1c1c] p-3 rounded-lg border border-[#2e2e2e] outline-none focus:border-amber-700/50"
//               value={config.type}
//               onChange={(e) =>
//                 setConfig({
//                   ...config,
//                   type:
//                     e.target.value,
//                 })
//               }
//             >
//               <option value={"Technical"}>Technical</option>
//               <option value={"Behavioral"}>Behavioral</option>
//               <option value={"Mixed"}>Mixed</option>
//               <option value={"HR"}>HR</option>
//             </select>



//             <select className="bg-[#1c1c1c] p-3 rounded-lg border border-[#2e2e2e]">
//               <option>15 Minutes</option>
//               <option>30 Minutes</option>
//               <option>45 Minutes</option>
//               <option>60 Minutes</option>
//             </select>

//           </div>
//         </div>

//         {/* Interviewer Style */}
//         <div className="bg-[#161616] border border-[#242424] rounded-xl p-6 mb-10">
//           <h2 className="text-lg mb-4">
//             Interviewer Style
//           </h2>

//           <select className="w-full bg-[#1c1c1c] p-3 rounded-lg border border-[#2e2e2e]">
//             <option>Professional</option>
//             <option>Friendly</option>
//             <option>Strict</option>
//             <option>FAANG Level</option>
//           </select>
//         </div>

//         <button
//           disabled={isLoading}
//           onClick={
//             startInterviewHandler
//           }
//           className={`
//   w-full
//   bg-amber-300
//   text-black
//   font-medium
//   py-4
//   rounded-xl
//   transition-colors
//   ${isLoading
//               ? "opacity-50 cursor-not-allowed"
//               : "hover:bg-amber-200"
//             }
// `}
//         >
//           {
//             isLoading
//               ? "Starting..."
//               : "Start Interview"
//           }
//         </button>
//       </div>
//     </div>
//   );
// }





import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";

import {
  useStartInterviewMutation
} from "../../store/api/interviewApi";

export default function InterviewSetup() {

  const navigate = useNavigate();

  const [jd, setJd] = useState("");

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
        alert(
          "Please provide a Job Description"
        );
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

              audioFile:
                response.audio_file,

              questionNumber:
                1,

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

    <div
      className="min-h-screen"
      style={{
        background:
          "var(--bg)",
        color:
          "var(--text)"
      }}
    >

      <Navbar />

      <div
        className="
                    max-w-7xl
                    mx-auto
                    px-6
                    py-10
                "
      >

        {/* Hero */}

        <div className="mb-12">

          <h1
            className="
                            text-5xl
                            font-semibold
                            mb-4
                        "
          >
            AI Mock Interview
          </h1>

          <p
            className="
                            max-w-3xl
                            text-lg
                            leading-8
                        "
            style={{
              color:
                "var(--secondary)"
            }}
          >
            Practice realistic interviews
            tailored to your target role.
            CareerAI generates questions,
            evaluates your answers, provides
            feedback, and helps you improve
            interview performance.
          </p>

        </div>

        <div
          className="
                        grid
                        lg:grid-cols-3
                        gap-8
                    "
        >

          {/* Left Side */}

          <div className="lg:col-span-2">

            {/* JD Section */}

            <div
              className="
                                rounded-3xl
                                p-8
                                mb-8
                            "
              style={{
                background:
                  "var(--surface)",
                border:
                  "1px solid var(--border)"
              }}
            >

              <h2
                className="
                                    text-2xl
                                    font-semibold
                                    mb-3
                                "
              >
                Job Description
              </h2>

              <p
                className="mb-6"
                style={{
                  color:
                    "var(--secondary)"
                }}
              >
                Paste a job description
                to generate role-specific
                interview questions.
              </p>

              <div
                className="
                                    p-4
                                    rounded-2xl
                                    mb-5
                                "
                style={{
                  background:
                    "var(--bg)",
                  border:
                    "1px dashed var(--border)"
                }}
              >

                <p
                  style={{
                    color:
                      "var(--secondary)"
                  }}
                >
                  📄 Resume/JD Upload
                  Coming Soon
                </p>

              </div>

              <textarea
                rows={12}
                value={jd}
                onChange={(e) =>
                  setJd(
                    e.target.value
                  )
                }
                placeholder="
Paste Job Description Here...
"
                className="
                                    w-full
                                    rounded-2xl
                                    p-5
                                    resize-none
                                    outline-none
                                "
                style={{
                  background:
                    "var(--bg)",
                  border:
                    "1px solid var(--border)"
                }}
              />

            </div>

            {/* Config */}

            <div
              className="
                                rounded-3xl
                                p-8
                            "
              style={{
                background:
                  "var(--surface)",
                border:
                  "1px solid var(--border)"
              }}
            >

              <h2
                className="
                                    text-2xl
                                    font-semibold
                                    mb-6
                                "
              >
                Interview Configuration
              </h2>

              <div
                className="
                                    grid
                                    md:grid-cols-2
                                    gap-5
                                "
              >

                <select
                  value={
                    config.questions
                  }
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      questions:
                        e.target.value
                    })
                  }
                  className="
                                        p-4
                                        rounded-xl
                                    "
                  style={{
                    background:
                      "var(--bg)",
                    border:
                      "1px solid var(--border)"
                  }}
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
                  value={
                    config.difficulty
                  }
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      difficulty:
                        e.target.value
                    })
                  }
                  className="
                                        p-4
                                        rounded-xl
                                    "
                  style={{
                    background:
                      "var(--bg)",
                    border:
                      "1px solid var(--border)"
                  }}
                >
                  <option>
                    Easy
                  </option>

                  <option>
                    Medium
                  </option>

                  <option>
                    Hard
                  </option>
                </select>

                <select
                  value={
                    config.type
                  }
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      type:
                        e.target.value
                    })
                  }
                  className="
                                        p-4
                                        rounded-xl
                                    "
                  style={{
                    background:
                      "var(--bg)",
                    border:
                      "1px solid var(--border)"
                  }}
                >
                  <option>
                    Technical
                  </option>

                  <option>
                    Behavioral
                  </option>

                  <option>
                    Mixed
                  </option>

                  <option>
                    HR
                  </option>
                </select>

                <select
                  value={
                    config.style
                  }
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      style:
                        e.target.value
                    })
                  }
                  className="
                                        p-4
                                        rounded-xl
                                    "
                  style={{
                    background:
                      "var(--bg)",
                    border:
                      "1px solid var(--border)"
                  }}
                >
                  <option>
                    Professional
                  </option>

                  <option>
                    Friendly
                  </option>

                  <option>
                    Strict
                  </option>

                  <option>
                    FAANG Level
                  </option>
                </select>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="space-y-6">

            <div
              className="
                                rounded-3xl
                                p-6
                            "
              style={{
                background:
                  "var(--surface)",
                border:
                  "1px solid var(--border)"
              }}
            >

              <h3
                className="
                                    text-xl
                                    font-semibold
                                    mb-5
                                "
              >
                Interview Tips
              </h3>

              <ul className="space-y-4">

                <li>
                  ✓ Speak clearly and
                  confidently
                </li>

                <li>
                  ✓ Explain your thought
                  process
                </li>

                <li>
                  ✓ Use real examples
                </li>

                <li>
                  ✓ Keep answers concise
                </li>

              </ul>

            </div>

            <div
              className="
                                rounded-3xl
                                p-6
                            "
              style={{
                background:
                  "var(--surface)",
                border:
                  "1px solid var(--border)"
              }}
            >

              <h3
                className="
                                    text-xl
                                    font-semibold
                                    mb-3
                                "
              >
                What You'll Get
              </h3>

              <ul className="space-y-4">

                <li>
                  ✓ AI Interview Questions
                </li>

                <li>
                  ✓ Voice-Based Interview
                </li>

                <li>
                  ✓ Detailed Feedback
                </li>

                <li>
                  ✓ Performance Score
                </li>

              </ul>

            </div>

            <button
              disabled={isLoading}
              onClick={
                startInterviewHandler
              }
              className="
                                w-full
                                py-4
                                rounded-2xl
                                text-white
                                font-semibold
                                text-lg
                            "
              style={{
                background:
                  "var(--accent)"
              }}
            >

              {
                isLoading
                  ? "Starting..."
                  : "Start Interview"
              }

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}