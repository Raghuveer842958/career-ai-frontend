import { useNavigate, useParams } from "react-router-dom";

import Navbar
    from "../../components/Navbar";

import {
    useGetJobByIdQuery,
} from "../../store/api/jobsApi";

export default function JobDetails() {

    const navigate = useNavigate();

    const { id } = useParams();

    const {
        data,
        isLoading,
        error,
    } = useGetJobByIdQuery(id);

    const job = data?.job || data;

    const handleMockInterview = async () => {
        console.log("handleMockInterview called!!")
        try {
            navigate("/interview/setup", {
                state: {
                    jobDescription: jobDescription
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleOptimizeResume = async () => {
        console.log("handleMockInterview called!!")
        try {
            // navigate("/resume-optimizer/setup", {
            //     state: {
            //         jobDescription: jobDescription
            //     }
            // })

            navigate("/resume-optimizer", {
                state: {
                    jobDescription,
                    fromJob: true,
                },
            });

        } catch (error) {
            console.log(error)
        }
    }

    if (isLoading) {
        return (
            <div
                className="
                    min-h-screen
                    flex
                    items-center
                    justify-center
                "
                style={{
                    background: "var(--bg)",
                    color: "var(--text)",
                }}
            >
                Loading...
            </div>
        );
    }

    if (error || !job) {
        return (
            <div
                className="
                    min-h-screen
                    flex
                    items-center
                    justify-center
                "
                style={{
                    background: "var(--bg)",
                    color: "var(--text)",
                }}
            >
                Job not found
            </div>
        );
    }

    const employerLogo =
        job.employer_logo ||
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWmR-XRuLFrKKxUHxaQbZaVgNBmK5Yxi04c5U&s=0";

    const jobDescription =
        job.job_description ||
        `
We are looking for a talented AI Software Engineer to join our team.

Responsibilities:
• Build scalable applications
• Work on AI-powered products
• Collaborate with product teams
• Develop backend APIs

Requirements:
• Strong problem solving skills
• Experience with modern technologies
• Good communication skills
`;

    return (

        <div
            className="min-h-screen"
            style={{
                background: "var(--bg)",
                color: "var(--text)",
            }}
        >

            <Navbar />

            <div
                className="
                    max-w-6xl
                    mx-auto
                    px-6
                    py-12
                "
            >

                {/* HEADER */}

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
                            "1px solid var(--border)",
                    }}
                >

                    <div
                        className="
                            flex
                            flex-col
                            lg:flex-row
                            justify-between
                            gap-8
                        "
                    >

                        <div
                            className="
                                flex
                                gap-5
                            "
                        >

                            <img
                                src={employerLogo}
                                alt={job.company}
                                className="
                                    w-20
                                    h-20
                                    rounded-2xl
                                    bg-white
                                    object-contain
                                    p-2
                                "
                            />

                            <div>

                                <h1
                                    className="
                                        text-4xl
                                        font-semibold
                                        mb-2
                                    "
                                >
                                    {job.title}
                                </h1>

                                <p
                                    style={{
                                        color:
                                            "var(--secondary)",
                                    }}
                                >
                                    {job.company}
                                </p>

                                <div
                                    className="
                                        flex
                                        flex-wrap
                                        gap-4
                                        mt-3
                                        text-sm
                                    "
                                >

                                    <span>
                                        📍 {job.location}
                                    </span>

                                    <span>
                                        💼 {
                                            job.job_employment_type ||
                                            "Full Time"
                                        }
                                    </span>

                                    <span>
                                        🌐 {
                                            job.job_publisher ||
                                            "LinkedIn"
                                        }
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div>

                            <span
                                className="
                                    px-4
                                    py-2
                                    rounded-full
                                    text-sm
                                    font-medium
                                "
                                style={{
                                    background:
                                        "rgba(34,197,94,.1)",

                                    color:
                                        "#22c55e",
                                }}
                            >
                                84% Match
                            </span>

                        </div>

                    </div>

                    {/* ACTIONS */}

                    <div
                        className="
                            flex
                            flex-wrap
                            gap-3
                            mt-8
                        "
                    >

                        <button
                            href={
                                job.job_apply_link ||
                                "#"
                            }
                            target="_blank"
                            rel="noreferrer"
                            className=" px-6 py-3 rounded-xl font-medium cursor-pointer"
                            style={{
                                background:
                                    "var(--accent)",

                                color:
                                    "#fff",
                            }}
                        >
                            Apply Now
                        </button>

                        <button
                            onClick={handleMockInterview}
                            className=" px-6 py-3 rounded-xl cursor-pointer"
                            style={{
                                background:
                                    "var(--bg)",

                                border:
                                    "1px solid var(--border)",
                            }}
                        >
                            Mock Interview
                        </button>

                        <button
                            onClick={handleOptimizeResume}
                            className=" px-6 py-3 rounded-xl cursor-pointer"
                            style={{
                                background:
                                    "var(--bg)",

                                border:
                                    "1px solid var(--border)",
                            }}
                        >
                            Optimize Resume
                        </button>

                    </div>

                </div>

                {/* DESCRIPTION */}

                <div className="mb-10">

                    <h2
                        className="
                            text-2xl
                            font-semibold
                            mb-5
                        "
                    >
                        Job Description
                    </h2>

                    <div
                        className="
                            rounded-3xl
                            p-8
                        "
                        style={{
                            background:
                                "var(--surface)",

                            border:
                                "1px solid var(--border)",
                        }}
                    >

                        <p
                            className="
                                whitespace-pre-line
                                leading-8
                            "
                            style={{
                                color:
                                    "var(--secondary)",
                            }}
                        >
                            {jobDescription}
                        </p>

                    </div>

                </div>

                {/* CAREER AI INSIGHTS */}

                <div>

                    <h2
                        className="
                            text-2xl
                            font-semibold
                            mb-5
                        "
                    >
                        CareerAI Insights
                    </h2>

                    <div
                        className="
                            rounded-3xl
                            p-8
                        "
                        style={{
                            background:
                                "var(--surface)",

                            border:
                                "1px solid var(--border)",
                        }}
                    >

                        <ul
                            className="
                                space-y-4
                            "
                        >

                            <li>
                                ✓ Strong fit for Backend Engineering roles
                            </li>

                            <li>
                                ✓ Resume optimization available for this job
                            </li>

                            <li>
                                ✓ Practice FastAPI and System Design questions
                            </li>

                            <li>
                                ✓ Missing Docker expertise may reduce ATS score
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>

    );

}