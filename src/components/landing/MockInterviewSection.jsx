import { Link } from "react-router-dom";
import interviewImage
    from "../../assets/mock-interview1.svg";

export default function MockInterviewSection() {

    return (

        <section
            id="interview"
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
                        Voice AI Interviews
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
                        Practice realistic
                        interviews using voice
                        conversations powered by
                        AI evaluation systems.
                    </p>

                    <ul className="space-y-4">

                        <li>
                            ✓ Speech To Text
                        </li>

                        <li>
                            ✓ Text To Speech
                        </li>

                        <li>
                            ✓ Answer Evaluation
                        </li>

                        <li>
                            ✓ Detailed Reports
                        </li>

                        <Link
                            to="/interview/setup"
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
                            Start Interview
                        </Link>

                    </ul>

                </div>

                <img
                    src={interviewImage}
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