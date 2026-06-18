import { Link } from "react-router-dom";
import optimizerImage
    from "../../assets/resume-optimizer.svg";

export default function ResumeOptimizerSection() {

    return (

        <section
            id="optimizer"
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
                        Resume Optimizer
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
                        Upload your resume and a
                        job description. CareerAI
                        will tailor your resume to
                        maximize ATS compatibility.
                    </p>

                    <ul className="space-y-4 mb-8">

                        <li>
                            ✓ JD-Based Resume Optimization
                        </li>

                        <li>
                            ✓ ATS Keyword Enhancement
                        </li>

                        <li>
                            ✓ Skill Gap Identification
                        </li>

                        <li>
                            ✓ AI-Powered Resume Suggestions
                        </li>

                    </ul>

                    <Link
                        to="/resume/optimizer"
                        className="
        inline-flex
        px-6
        py-3
        rounded-xl
        font-medium
    "
                        style={{
                            background:
                                "var(--accent)",
                            color:
                                "#fff",
                        }}
                    >
                        Optimize Resume
                    </Link>

                </div>

                <img
                    src={optimizerImage}
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