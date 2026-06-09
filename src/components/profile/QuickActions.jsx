import { Link } from "react-router-dom";

export default function QuickActions() {

    const actions = [

        {
            title: "Analyze Resume",
            description:
                "Get strengths and weaknesses.",
            link: "/resume-analysis",
        },

        {
            title: "Optimize Resume",
            description:
                "Tailor resume according to JD.",
            link: "/resume-optimizer",
        },

        {
            title: "Find Jobs",
            description:
                "Discover matching opportunities.",
            link: "/jobs",
        },

        {
            title: "Mock Interview",
            description:
                "Practice with AI interviewer.",
            link: "/interview/setup",
        },
    ];

    return (
        <div>

            <h2 className="
                text-2xl
                text-amber-300
                mb-5
            ">
                Quick Actions
            </h2>

            <div className="
                grid
                md:grid-cols-2
                gap-5
            ">

                {
                    actions.map((action) => (

                        <Link
                            key={action.title}
                            to={action.link}
                            className="
                                bg-[#161616]
                                border border-[#242424]
                                rounded-xl
                                p-6
                                hover:border-amber-300/40
                                transition-all
                            "
                        >

                            <h3 className="
                                text-xl
                                mb-2
                            ">
                                {action.title}
                            </h3>

                            <p className="
                                text-[#777]
                            ">
                                {action.description}
                            </p>

                        </Link>

                    ))
                }

            </div>

        </div>
    );
}