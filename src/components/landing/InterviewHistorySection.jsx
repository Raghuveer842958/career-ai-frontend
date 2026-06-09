import { Link } from "react-router-dom";
import historyImage
    from "../../assets/interview-history.svg";

export default function InterviewHistorySection() {

    return (

        <section
            id="history"
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

                <img
                    src={historyImage}
                    alt=""
                    className="
                        w-full
                        max-w-[550px]
                        mx-auto
                    "
                />

                <div>

                    <h2 className="
                        text-5xl
                        font-semibold
                        mb-6
                    ">
                        Interview History
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
                        Access previous interviews,
                        reports, feedback, scores
                        and performance trends.
                    </p>

                    <ul className="space-y-4">

                        <li>✓ Interview Reports</li>

                        <li>✓ Score Tracking</li>

                        <li>✓ Feedback History</li>

                        <li>✓ Progress Analysis</li>

                    </ul>

                    <Link
                        to="/interview/history"
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
                        View History
                    </Link>

                </div>

            </div>

        </section>

    );

}