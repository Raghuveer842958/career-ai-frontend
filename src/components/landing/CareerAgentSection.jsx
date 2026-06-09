import agentImage
    from "../../assets/career-agent.svg";

export default function CareerAgentSection() {

    return (

        <section
            id="agent"
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
                    src={agentImage}
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
                        AI Career Agent
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
                        Ask career questions,
                        explore learning paths,
                        discover opportunities,
                        and receive personalized
                        guidance.
                    </p>

                    <ul className="space-y-4">

                        <li>✓ Career Guidance</li>

                        <li>✓ Skill Roadmaps</li>

                        <li>✓ Learning Plans</li>

                        <li>✓ Job Recommendations</li>

                    </ul>

                </div>

            </div>

        </section>

    );

}