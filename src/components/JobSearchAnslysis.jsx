import { useState } from "react";
import Navbar from "./Navbar";

export default function JobSearchAnalysis() {

    const [messages, setMessages] = useState([]);
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    const [toolStatus, setToolStatus] = useState([]);

    const TOOL_LABELS = {

        resume_strengths_tool: {
            icon: "🧠",
            label: "Analyzing Resume Strengths"
        },

        resume_weakness_tool: {
            icon: "⚠️",
            label: "Analyzing Resume Weaknesses"
        },

        resume_projects_tool: {
            icon: "📁",
            label: "Analyzing Projects"
        },

        resume_improvement_tool: {
            icon: "✨",
            label: "Generating Improvements"
        },

        suggest_job_role: {
            icon: "🎯",
            label: "Finding Suitable Roles"
        },

        find_jobs: {
            icon: "💼",
            label: "Finding Jobs"
        },

        save_jobs: {
            icon: "💾",
            label: "Saving Jobs"
        }

    };

    const suggestions = [

        "Find jobs that match my profile",

        "Find Full Stack Developer jobs in Bangalore",

        "Find jobs according to my profile and skills and save them for future reference",

        "Suggest remote AI job opportunities",

        "Suggest remote AI job opportunities"

    ];

    const askAgent = (customQuestion) => {

        const currentQuestion =
            customQuestion || question;

        if (!currentQuestion.trim())
            return;

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

            const data =
                JSON.parse(event.data);

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

                streamedContent +=
                    data.content;

                setMessages(prev => {

                    const copy =
                        [...prev];

                    copy[
                        copy.length - 1
                    ] = {

                        ...copy[
                        copy.length - 1
                        ],

                        content:
                            streamedContent

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
    max-w-6xl
    mx-auto
    px-6
    py-10
"
            >

                {/* Resume Header */}

                <div className="mb-8">

                    <h1
                        className="
            text-4xl
            font-semibold
            mb-3
        "
                    >
                        AI Job Search Assistant
                    </h1>

                    <p
                        className="
            max-w-4xl
            leading-7
        "
                        style={{
                            color:
                                "var(--secondary)"
                        }}
                    >
                        Find opportunities that match your profile, evaluate job
                        descriptions, understand hiring requirements, and get
                        personalized recommendations to accelerate your job search.
                        Ask CareerAI about roles, companies, skills, salary trends,
                        or career paths.
                    </p>

                </div>

                {
                    messages.length === 0 && (

                        <div
                            className="
                grid
                md:grid-cols-2
                gap-4
                mb-8
            "
                        >

                            {
                                [
                                    {
                                        title:
                                            "Find Matching Jobs",

                                        desc:
                                            "Discover jobs that align with your skills and experience"
                                    },

                                    {
                                        title:
                                            "Full Stack Jobs in Bangalore",

                                        desc:
                                            "Explore Full Stack Developer opportunities in Bangalore"
                                    },

                                    {
                                        title:
                                            "Recommend & Save Jobs",

                                        desc:
                                            "Find jobs according to my profile and skills and save them for future reference"
                                    },

                                    {
                                        title:
                                            "Remote AI Opportunities",

                                        desc:
                                            "Discover remote AI and Machine Learning job opportunities"
                                    }
                                ].map(
                                    (card) => (

                                        <button
                                            key={card.title}
                                            disabled={loading}
                                            onClick={() =>
                                                askAgent(card.desc)
                                            }
                                            className="
                    text-left
                    p-5
                    rounded-2xl
                    transition-all
                    hover:-translate-y-1
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
                        font-semibold
                        mb-2
                    "
                                            >
                                                {card.title}
                                            </h3>

                                            <p
                                                className="
                        text-sm
                    "
                                                style={{
                                                    color:
                                                        "var(--secondary)"
                                                }}
                                            >
                                                {card.desc}
                                            </p>

                                        </button>

                                    )
                                )
                            }

                        </div>

                    )
                }

                {/* Chat Area */}

                <div
                    className="
        space-y-8
        mb-40
    "
                >

                    {
                        messages.map(
                            (
                                message,
                                index
                            ) => (

                                <div
                                    key={index}
                                    className={
                                        message.role === "user"
                                            ? "flex justify-end"
                                            : "flex justify-start"
                                    }
                                >

                                    <div
                                        className="
                                            rounded-2xl
                                            px-5
                                            py-4
                                        "
                                        style={{

                                            maxWidth:
                                                message.role === "user"
                                                    ? "70%"
                                                    : "95%",

                                            background:
                                                message.role === "user"
                                                    ? "var(--accent)"
                                                    : "var(--surface)",

                                            color:
                                                message.role === "user"
                                                    ? "#fff"
                                                    : "var(--text)",

                                            border:
                                                message.role === "assistant"
                                                    ? "1px solid var(--border)"
                                                    : "none"

                                        }}
                                    >

                                        {
                                            message.role === "assistant" &&
                                            toolStatus.length > 0 && (

                                                <div
                                                    className="
                                                        mb-4
                                                        space-y-2
                                                    "
                                                >

                                                    {
                                                        toolStatus.map(
                                                            (
                                                                step,
                                                                idx
                                                            ) => (

                                                                <div
                                                                    key={idx}
                                                                    className="
                                                                        text-sm
                                                                        px-3
                                                                        py-2
                                                                        rounded-xl
                                                                    "
                                                                    style={{
                                                                        background:
                                                                            "var(--bg)"
                                                                    }}
                                                                >

                                                                    {
                                                                        TOOL_LABELS[
                                                                            step.tool
                                                                        ]?.icon
                                                                    }

                                                                    {" "}

                                                                    {
                                                                        TOOL_LABELS[
                                                                            step.tool
                                                                        ]?.label
                                                                    }

                                                                    {" "}

                                                                    {
                                                                        step.status === "running"
                                                                            ? "⏳"
                                                                            : "✅"
                                                                    }

                                                                </div>

                                                            )
                                                        )
                                                    }

                                                </div>

                                            )
                                        }

                                        <div
                                            className="
                                                whitespace-pre-wrap
                                                leading-7
                                            "
                                        >
                                            {message.content}
                                        </div>

                                    </div>

                                </div>

                            )
                        )
                    }

                    {
                        loading && (

                            <div className="flex">

                                <div
                                    className="
                                        px-5
                                        py-4
                                        rounded-2xl
                                    "
                                    style={{
                                        background:
                                            "var(--surface)",

                                        border:
                                            "1px solid var(--border)"
                                    }}
                                >

                                    Thinking...

                                </div>

                            </div>

                        )
                    }

                </div>

                {/* Input */}

                <div
                    className="
        fixed
        bottom-0
        left-0
        right-0
        z-40
        px-6
        pb-6
    "
                >

                    <div
                        className="
            max-w-6xl
            mx-auto
            rounded-3xl
            p-3
            flex
            items-end
            gap-3
            backdrop-blur-xl
        "
                        style={{
                            background:
                                "var(--surface)",
                            border:
                                "1px solid var(--border)",
                            boxShadow:
                                "0 -10px 40px rgba(0,0,0,0.08)"
                        }}
                    >

                        <textarea
                            value={question}
                            disabled={loading}
                            rows={2}
                            placeholder="Ask anything about your resume..."
                            onChange={(e) =>
                                setQuestion(
                                    e.target.value
                                )
                            }
                            onKeyDown={(e) => {

                                if (
                                    e.key === "Enter" &&
                                    !e.shiftKey &&
                                    !loading
                                ) {

                                    e.preventDefault();
                                    askAgent();

                                }

                            }}
                            className="
                flex-1
                resize-none
                bg-transparent
                outline-none
                px-4
                py-3
            "
                            style={{
                                color:
                                    "var(--text)"
                            }}
                        />

                        <button
                            disabled={
                                loading ||
                                !question.trim()
                            }
                            onClick={() =>
                                askAgent()
                            }
                            className="
                px-6
                py-3
                rounded-2xl
                font-medium
                transition-all
                disabled:opacity-50
                disabled:cursor-not-allowed
            "
                            style={{
                                background:
                                    "var(--accent)",
                                color:
                                    "#fff"
                            }}
                        >
                            {loading
                                ? "Thinking..."
                                : "Send"}
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}