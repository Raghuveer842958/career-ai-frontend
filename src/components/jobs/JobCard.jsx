import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {

    const navigate = useNavigate();

    const matchScore =
        Math.floor(
            Math.random() * 15
        ) + 80;

    return (

        <div
            onClick={() =>
                navigate(`/jobs/${job.id}`)
            }
            className="
                cursor-pointer
                rounded-3xl
                border
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
            style={{
                background:
                    "var(--surface)",

                borderColor:
                    "var(--border)",
            }}
        >

            {/* Header */}

            <div className="
                flex
                justify-between
                items-start
                gap-4
            ">

                <div className="
                    flex
                    gap-4
                ">

                    <img
                        src={job.employer_logo}
                        alt={job.company}
                        className="
                            w-16
                            h-16
                            rounded-2xl
                            bg-white
                            object-contain
                            p-2
                        "
                    />

                    <div>

                        <h3 className="
                            text-xl
                            font-semibold
                            mb-1
                        ">
                            {job.title}
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
                            {job.company}
                        </p>

                    </div>

                </div>

                <div
                    className="
                        px-3
                        py-1.5
                        rounded-full
                        text-xs
                        font-medium
                    "
                    style={{
                        background:
                            "rgba(34,197,94,.1)",

                        color:
                            "#22c55e",
                    }}
                >
                    {matchScore}% Match
                </div>

            </div>

            {/* Meta */}

            <div className="
                flex
                flex-wrap
                gap-4
                mt-5
                text-sm
            ">

                <span>
                    📍 {job.location}
                </span>

                <span>
                    💼 {job.job_employment_type}
                </span>

                <span>
                    🌎 Remote Friendly
                </span>

            </div>

            {/* Skills */}

            <div className="
                flex
                flex-wrap
                gap-2
                mt-5
            ">

                {[
                    "FastAPI",
                    "MongoDB",
                    "React",
                    "AI"
                ].map((skill) => (

                    <span
                        key={skill}
                        className="
                            px-3
                            py-1
                            rounded-full
                            text-xs
                        "
                        style={{
                            background:
                                "var(--bg)",

                            border:
                                "1px solid var(--border)",
                        }}
                    >
                        {skill}
                    </span>

                ))}

            </div>

            {/* Footer */}

            <div
                className="
                    flex
                    justify-between
                    items-center
                    mt-6
                    pt-5
                    border-t
                "
                style={{
                    borderColor:
                        "var(--border)"
                }}
            >

                <span
                    className="
                        text-sm
                    "
                    style={{
                        color:
                            "var(--secondary)"
                    }}
                >
                    via {job.job_publisher}
                </span>

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                    "
                    style={{
                        color:
                            "var(--accent)"
                    }}
                >
                    View Details →
                </div>

            </div>

        </div>

    );

}