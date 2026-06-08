import { useNavigate }
    from "react-router-dom";

export default function JobCard({ job }) {

    const navigate = useNavigate();

    return (
        <div
            onClick={() => {
                console.log("navigating with:", job);
                navigate(`/jobs/${job.id}`)
            }
            }
            className="
    cursor-pointer
    bg-[#161616]
    border border-[#242424]
    rounded-2xl
    p-6
    hover:border-amber-300/40
    hover:-translate-y-1
    hover:shadow-lg
    hover:shadow-amber-300/5
    transition-all
    duration-300
    flex gap-5
"
        >

            <img
                src={job.employer_logo}
                alt={job.company}
                className="
        w-20
        h-20
        rounded-2xl
        bg-white
        p-2
        object-contain
        shrink-0
    "
            />

            <div className="flex-1">

                <h3 className="text-xl text-white">
                    {job.title}
                </h3>

                <p className="text-[#aaa]">
                    {job.company}

                    <div className="mt-3">

                        <span className="
        px-3 py-1
        rounded-full
        text-xs
        bg-blue-500/10
        text-blue-400
    ">
                            Match Score 84%
                        </span>

                    </div>
                </p>

                <div className="flex gap-4 mt-2 text-sm text-[#777]">

                    <span>
                        📍 {job.location}
                    </span>

                    <span>
                        💼 {job.job_employment_type}
                    </span>

                </div>

                <div className="mt-3 flex items-center gap-3">

                    <span
                        className="
                        px-3 py-1
                        rounded-full
                        text-xs
                        bg-amber-300/10
                        text-amber-300
                    "
                    >
                        {job.job_publisher}
                    </span>

                    <span
                        className="
                        px-3 py-1
                        rounded-full
                        text-xs
                        bg-green-500/10
                        text-green-400
                    "
                    >
                        Saved
                    </span>

                </div>

            </div>

        </div>
    );
}