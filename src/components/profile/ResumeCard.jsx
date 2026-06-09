import { Link } from "react-router-dom";

export default function ResumeCard() {

    return (
        <div className="
            bg-[#161616]
            border border-[#242424]
            rounded-2xl
            p-8
        ">

            <div className="
                flex
                items-center
                justify-between
                mb-6
            ">

                <div>

                    <h2 className="
                        text-2xl
                        text-amber-300
                    ">
                        Resume
                    </h2>

                    <p className="
                        text-[#777]
                        mt-1
                    ">
                        Manage and optimize your resume
                    </p>

                </div>

                <div className="
                    px-4
                    py-2
                    rounded-full
                    bg-green-500/10
                    text-green-400
                    text-sm
                ">
                    Uploaded
                </div>

            </div>

            <div className="
                bg-[#111]
                border border-[#242424]
                rounded-xl
                p-5
            ">

                <p className="text-white">
                    Raghuveer_Resume.pdf
                </p>

                <p className="
                    text-[#777]
                    text-sm
                    mt-2
                ">
                    Updated 2 days ago
                </p>

            </div>

            <div className="
                flex
                flex-wrap
                gap-3
                mt-6
            ">

                <button
                    className="
                        px-5 py-3
                        rounded-xl
                        bg-amber-300
                        text-black
                        font-medium
                    "
                >
                    Upload Resume
                </button>

                <button
                    className="
                        px-5 py-3
                        rounded-xl
                        border border-[#242424]
                    "
                >
                    Replace Resume
                </button>

                <button
                    className="
                        px-5 py-3
                        rounded-xl
                        border border-[#242424]
                    "
                >
                    View Resume
                </button>

                <Link
                    to="/resume-analysis"
                    className="
                        px-5 py-3
                        rounded-xl
                        border border-[#242424]
                    "
                >
                    Analyze Resume
                </Link>

            </div>

        </div>
    );
}