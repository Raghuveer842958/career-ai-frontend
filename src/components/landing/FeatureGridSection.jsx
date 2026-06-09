import {
    Brain,
    Briefcase,
    Mic,
    History,
    FileText,
    Sparkles,
} from "lucide-react";

const features = [

    {
        icon: Brain,
        title: "Resume Analysis",
        description:
            "Get AI-powered insights, strengths, weaknesses, and improvement suggestions.",
    },

    {
        icon: Briefcase,
        title: "Job Search",
        description:
            "Discover opportunities and manage your job applications effectively.",
    },

    {
        icon: Mic,
        title: "Mock Interview",
        description:
            "Practice interviews with a voice-based AI interviewer and receive feedback.",
    },

    {
        icon: History,
        title: "Interview History",
        description:
            "Review past interviews, reports, scores, and performance trends.",
    },

    {
        icon: FileText,
        title: "Resume Optimizer",
        description:
            "Tailor your resume for specific job descriptions and ATS systems.",
    },

    {
        icon: Sparkles,
        title: "Career Agent",
        description:
            "Ask career questions and receive personalized AI guidance.",
    },

];

export default function FeatureGridSection() {

    return (

        <section
            className="
                py-16
            "
            id="features"
        >

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-6
                "
            >

                {/* Heading */}

                <div
                    className="
                        text-center
                        mb-20
                    "
                >

                    <span
                        className="
                            text-sm
                            tracking-widest
                            uppercase
                        "
                        style={{
                            color:
                                "var(--accent)",
                        }}
                    >
                        Platform Features
                    </span>

                    <h2
                        className="
                            text-5xl
                            font-semibold
                            mt-4
                            mb-6
                        "
                    >
                        Everything You Need To
                        Grow Your Career
                    </h2>

                    <p
                        className="
                            max-w-3xl
                            mx-auto
                            text-lg
                        "
                        style={{
                            color:
                                "var(--secondary)",
                        }}
                    >
                        CareerAI combines resume analysis,
                        job discovery, interview preparation,
                        career guidance, and AI-powered
                        optimization into a single platform.
                    </p>

                </div>

                {/* Grid */}

                <div
                    className="
                        grid
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-6
                    "
                >

                    {
                        features.map(
                            (
                                feature
                            ) => {

                                const Icon =
                                    feature.icon;

                                return (

                                    <div
                                        key={
                                            feature.title
                                        }
                                        className="
                                            group
                                            p-8
                                            rounded-3xl
                                            border
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                        "
                                        style={{
                                            background:
                                                "var(--surface)",

                                            borderColor:
                                                "var(--border)",
                                        }}
                                    >

                                        <div
                                            className="
                                                w-12
                                                h-12
                                                rounded-xl
                                                flex
                                                items-center
                                                justify-center
                                                mb-6
                                            "
                                            style={{
                                                background:
                                                    "rgba(245,158,11,.1)",
                                            }}
                                        >

                                            <Icon
                                                size={
                                                    24
                                                }
                                                color={
                                                    "#f59e0b"
                                                }
                                            />

                                        </div>

                                        <h3
                                            className="
                                                text-xl
                                                font-semibold
                                                mb-3
                                            "
                                        >
                                            {
                                                feature.title
                                            }
                                        </h3>

                                        <p
                                            style={{
                                                color:
                                                    "var(--secondary)",
                                            }}
                                        >
                                            {
                                                feature.description
                                            }
                                        </p>

                                    </div>

                                );

                            }
                        )
                    }

                </div>

            </div>

        </section>

    );

}