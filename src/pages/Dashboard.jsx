import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

export default function Dashboard() {
    const cards = [
        {
            title: "Resume Analysis",
            description:
                "Analyze strengths, weaknesses, projects and receive personalized resume improvements.",
            link: "/resume-analysis",
        },
        {
            title: "Job Search",
            description:
                "Discover jobs that match your skills and career goals.",
            link: "/jobs",
        },
        {
            title: "Mock Interview",
            description:
                "Practice real interview questions with an AI voice interviewer.",
            link: "/interview/setup",
        },
        {
            title: "Interview History",
            description:
                "Ask CareerAI anything about your resume, skills, roadmap or career.",
            link: "/interview/history",
        },
        {
            title: "Career Chat",
            description:
                "Ask CareerAI anything about your resume, skills, roadmap or career.",
            link: "/chat",
        },
    ];

    return (
        <div className="min-h-screen bg-[#0f0f0f]">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-12">

                {/* Hero Section */}
                <div className="mb-12">
                    <h2 className="text-4xl font-light text-[#f0ede8] mb-4">
                        Welcome back
                    </h2>

                    <p className="text-[#666] max-w-2xl">
                        Your AI-powered career assistant. Analyze your resume,
                        discover matching jobs, prepare for interviews, and
                        accelerate your career growth.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-2">
                    {cards.map((card) => (
                        <DashboardCard
                            key={card.title}
                            title={card.title}
                            description={card.description}
                            link={card.link}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}