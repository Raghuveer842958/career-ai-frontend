import { useState } from "react";

function Home() {

    const [messages, setMessages] = useState([]);
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    const [toolStatus, setToolStatus] = useState([]);

    const TOOL_LABELS = {
        suggest_job_role: {
            icon: "🔍",
            label: "Analyzing Resume"
        },
        find_jobs: {
            icon: "💼",
            label: "Finding Jobs"
        },
        save_jobs: {
            icon: "💾",
            label: "Saving Jobs"
        },
        resume_strengths_tool: {
            icon: "🧠",
            label: "Analyzing Resume Strengths"
        },
        resume_weakness_tool: {
            icon: "⚠️",
            label: "Analyzing Resume Weaknesses"
        },
        resume_projects_tool: {
            icon: "P",
            label: "Analyzing Resume Projects"
        },
        resume_improvement_tool: {
            icon: "I",
            label: "Analyzing Resume Improvements"
        },
        // resume_projects_tool
    };

    const askAgent = () => {

        if (!question.trim()) return;

        const currentQuestion = question;

        setQuestion("");
        setLoading(true);
        setToolStatus([]);

        setMessages(prev => [
            ...prev,
            {
                role: "user",
                content: currentQuestion
            },
            {
                role: "assistant",
                content: ""
            }
        ]);

        let streamedContent = "";

        const eventSource = new EventSource(
            `http://localhost:8000/chat/stream?query=${encodeURIComponent(currentQuestion)}`
        );

        eventSource.onmessage = (event) => {

            const data = JSON.parse(event.data);

            if (data.type === "tool_start") {

                setToolStatus(prev => [
                    ...prev,
                    {
                        tool: data.tool,
                        status: "running"
                    }
                ]);

            }

            else if (data.type === "tool_end") {

                setToolStatus(prev =>
                    prev.map(item =>
                        item.tool === data.tool
                            ? {
                                ...item,
                                status: "completed"
                            }
                            : item
                    )
                );

            }

            else if (data.type === "token") {

                streamedContent += data.content;

                setMessages(prev => {

                    const copy = [...prev];

                    copy[copy.length - 1] = {
                        ...copy[copy.length - 1],
                        content: streamedContent
                    };

                    return copy;
                });

            }

            else if (data.type === "done") {

                setLoading(false);
                eventSource.close();

            }

        };

        eventSource.onerror = () => {

            setLoading(false);
            eventSource.close();

        };

    };

    return (
        <div className="bg-slate-950 text-white h-screen flex flex-col">

            <header className="border-b border-slate-800 p-5">

                <h1 className="text-2xl font-bold">
                    Career AI
                </h1>

            </header>

            <main className="flex-1 overflow-y-auto p-6">

                <div className="max-w-4xl mx-auto space-y-6">

                    {messages.map((message, index) => (


                        <div
                            key={index}
                            className={`flex ${message.role === "user"
                                ? "justify-end"
                                : "justify-start"
                                }`}
                        >

                            <div
                                className={`max-w-[80%] p-4 rounded-xl ${message.role === "user"
                                    ? "bg-blue-600"
                                    : "bg-slate-800"
                                    }`}
                            >

                                {message.role === "assistant" &&
                                    toolStatus.length > 0 && (

                                        <div className="mb-4 space-y-2">

                                            {toolStatus.map((step, idx) => (

                                                <div
                                                    key={idx}
                                                    className="text-sm bg-slate-700 rounded-lg p-2"
                                                >

                                                    {TOOL_LABELS[step.tool]?.icon}
                                                    {" "}
                                                    {TOOL_LABELS[step.tool]?.label}
                                                    {" "}

                                                    {step.status === "running"
                                                        ? "⏳"
                                                        : "✅"}

                                                </div>

                                            ))}

                                        </div>

                                    )}

                                <div className="whitespace-pre-wrap">
                                    {message.content}
                                </div>

                            </div>

                        </div>

                    ))}

                    {loading && (

                        <div className="flex justify-start">

                            <div className="bg-slate-800 px-5 py-4 rounded-xl">

                                <div className="flex gap-2">

                                    <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>

                                    <span
                                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                                        style={{
                                            animationDelay: "0.15s"
                                        }}
                                    ></span>

                                    <span
                                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                                        style={{
                                            animationDelay: "0.3s"
                                        }}
                                    ></span>

                                </div>

                            </div>

                        </div>

                    )}

                </div>

            </main>

            <footer className="border-t border-slate-800 p-4">

                <div className="max-w-4xl mx-auto flex gap-3">

                    <input
                        type="text"
                        disabled={loading}
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        onKeyDown={(e) => {

                            if (
                                e.key === "Enter" &&
                                !loading &&
                                question.trim()
                            ) {
                                askAgent();
                            }

                        }}
                        placeholder="Ask about jobs, career paths, skills..."
                        className="flex-1 bg-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        onClick={askAgent}
                        disabled={loading}
                        className="bg-blue-600 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Thinking..." : "Send"}
                    </button>

                </div>

            </footer>

        </div>
    );
}

export default Home;