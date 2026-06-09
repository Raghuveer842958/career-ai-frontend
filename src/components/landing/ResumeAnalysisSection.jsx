import { Link } from "react-router-dom";
import resumeImage
    from "../../assets/resume-analysis.svg";

export default function ResumeAnalysisSection() {

    return (

        <section
            id="resume"
            className="py-16"
        >

            <div className="
                max-w-7xl
                mx-auto
                px-6
                grid
                lg:grid-cols-2
                gap-20
                items-center
            ">

                <div>

                    <h2 className="
                        text-5xl
                        font-semibold
                        mb-6
                    ">
                        Resume Analysis
                    </h2>

                    <p
                        className="
                            text-lg
                            leading-8
                            mb-8
                        "
                        style={{
                            color:
                                "var(--secondary)"
                        }}
                    >
                        Get detailed insights about
                        strengths, weaknesses,
                        projects, skills, and overall
                        resume quality using AI.
                    </p>

                    <ul className="space-y-4 mb-8">

                        <li>✓ Strength Analysis</li>

                        <li>✓ Weakness Detection</li>

                        <li>✓ Project Evaluation</li>

                        <li>✓ Improvement Suggestions</li>

                    </ul>

                    <Link
                        to="/resume-analysis"
                        className="
        px-6
        py-3
        rounded-xl
        font-medium
        transition-all
        hover:scale-[1.02]
    "
                        style={{
                            background:
                                "var(--accent)",
                            color:
                                "#fff",
                        }}
                    >
                        Analyze Resume
                    </Link>

                </div>

                <img
                    src={resumeImage}
                    alt=""
                    className="
                        w-full
                        max-w-[550px]
                        mx-auto
                    "
                />

            </div>

        </section>

    );

}