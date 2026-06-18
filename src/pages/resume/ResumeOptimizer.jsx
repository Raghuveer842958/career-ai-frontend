import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import PdfResumeViewer from "../../components/resume/PdfResumeViewer";

const mockResume = `
Raghuveer Chauhan

Full Stack Developer

Skills
- React.js
- Node.js
- MongoDB
- Express.js
- Redux Toolkit
- FastAPI

Projects
- CareerAI
- DevTinder
- NetflixGPT
`;

const initialMessage = {
  role: "assistant",
  content: `
Hello 👋

I've analyzed your resume against this job description.

Current ATS Match Score: 72%

Missing Keywords:
• Docker
• Redis
• Kubernetes
• CI/CD

Suggested Improvements:
• Add deployment experience
• Highlight cloud technologies
• Quantify project achievements

Ask me anything about improving your resume for this role.
`,
};

const ResumeOptimizer = () => {
  const location = useLocation();

  const resumePdfUrl =
    "/my_resume.pdf";

  const jobDescription =
    location.state?.jobDescription || "";

  const [messages, setMessages] = useState([
    initialMessage,
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        role: "assistant",
        content:
          "Backend integration coming next. This response is currently mocked.",
      },
    ]);

    setInput("");
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <Navbar />

      <div className="h-[calc(100vh-72px)]">
        <div className="grid lg:grid-cols-[45%_55%] h-full">
          {/* ========================= */}
          {/* LEFT CHAT PANEL */}
          {/* ========================= */}

          <div
            className="flex flex-col border-r"
            style={{
              borderColor: "var(--border)",
            }}
          >
            {/* Header */}

            <div
              className="px-6 py-5 border-b"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
              }}
            >
              <h1 className="text-2xl font-bold">
                Resume Optimizer
              </h1>

              <p
                className="text-sm mt-1"
                style={{
                  color: "var(--secondary)",
                }}
              >
                Optimize your resume for this role using AI.
              </p>
            </div>

            {/* Chat Messages */}


            {/* ATS OVERVIEW */}
            <div
              className="px-6 py-4 border-b"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
              }}
            >
              <div className="grid md:grid-cols-3 gap-3">

                <div
                  className="rounded-2xl p-4"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p
                    className="text-xs uppercase mb-1"
                    style={{
                      color: "var(--secondary)",
                    }}
                  >
                    ATS Score
                  </p>

                  <h3 className="text-2xl font-bold">
                    72%
                  </h3>
                </div>

                <div
                  className="rounded-2xl p-4"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p
                    className="text-xs uppercase mb-1"
                    style={{
                      color: "var(--secondary)",
                    }}
                  >
                    Missing Skills
                  </p>

                  <h3 className="font-semibold">
                    Docker, Redis
                  </h3>
                </div>

                <div
                  className="rounded-2xl p-4"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p
                    className="text-xs uppercase mb-1"
                    style={{
                      color: "var(--secondary)",
                    }}
                  >
                    Match Level
                  </p>

                  <h3 className="font-semibold text-green-500">
                    Strong Match
                  </h3>
                </div>

              </div>
            </div>


            <div className="flex-1 overflow-y-auto px-5 py-6">
              <div className="space-y-5">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                      }`}
                  >
                    <div
                      className="max-w-[90%] rounded-3xl px-5 py-4 whitespace-pre-wrap"
                      style={{
                        background:
                          msg.role === "user"
                            ? "var(--accent)"
                            : "var(--surface)",

                        color:
                          msg.role === "user"
                            ? "#fff"
                            : "var(--text)",

                        border:
                          msg.role === "assistant"
                            ? "1px solid var(--border)"
                            : "none",
                      }}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Input */}

            <div
              className="p-5 border-t"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
              }}
            >
              <div className="flex gap-3">
                <input
                  value={input}
                  onChange={(e) =>
                    setInput(e.target.value)
                  }
                  placeholder="Ask AI how to improve your resume..."
                  className="flex-1 px-4 py-3 rounded-2xl border outline-none"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                />

                <button
                  onClick={handleSend}
                  className="px-6 rounded-2xl font-medium"
                  style={{
                    background: "var(--accent)",
                    color: "#fff",
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* ========================= */}
          {/* RIGHT RESUME PANEL */}
          {/* ========================= */}

          <div
            className="hidden lg:flex flex-col"
            style={{
              background: "var(--surface)",
            }}
          >
            {/* Header */}

            <div
              className="px-6 py-5 border-b flex justify-between items-center"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <div>
                <h2 className="text-2xl font-bold">
                  Resume Preview
                </h2>

                <p
                  className="text-sm mt-1"
                  style={{
                    color: "var(--secondary)",
                  }}
                >
                  Your current resume
                </p>
              </div>

              <a
                href={resumePdfUrl}
                download
                className="px-5 py-2 rounded-xl text-white font-medium"
                style={{
                  background: "var(--accent)",
                }}
              >
                Download
              </a>
            </div>

            {/* PDF Viewer */}

            <div className="flex-1 p-5 overflow-hidden">
              <div
                className="h-full rounded-3xl overflow-hidden border"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg)",
                }}
              >
                <PdfResumeViewer
                  pdfUrl={resumePdfUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Resume Notice */}

      <div
        className="lg:hidden fixed bottom-24 right-4 px-4 py-2 rounded-xl text-sm"
        style={{
          background: "var(--accent)",
          color: "#fff",
        }}
      >
        Resume preview available on larger screens
      </div>
    </div>
  );

};

export default ResumeOptimizer;