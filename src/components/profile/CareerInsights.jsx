export default function CareerInsights() {

    return (
        <div className="
            bg-[#161616]
            border border-[#242424]
            rounded-2xl
            p-8
        ">

            <h2 className="
                text-2xl
                text-amber-300
                mb-6
            ">
                CareerAI Insights
            </h2>

            <div className="
                grid
                md:grid-cols-3
                gap-6
            ">

                <div>

                    <h3 className="
                        text-green-400
                        mb-3
                    ">
                        Strengths
                    </h3>

                    <ul className="
                        space-y-2
                        text-[#ccc]
                    ">
                        <li>
                            ✓ Backend Development
                        </li>

                        <li>
                            ✓ FastAPI
                        </li>

                        <li>
                            ✓ MongoDB
                        </li>

                        <li>
                            ✓ AI Integration
                        </li>
                    </ul>

                </div>

                <div>

                    <h3 className="
                        text-red-400
                        mb-3
                    ">
                        Improve
                    </h3>

                    <ul className="
                        space-y-2
                        text-[#ccc]
                    ">
                        <li>
                            • System Design
                        </li>

                        <li>
                            • Kubernetes
                        </li>

                        <li>
                            • Cloud Deployment
                        </li>

                        <li>
                            • Testing
                        </li>
                    </ul>

                </div>

                <div>

                    <h3 className="
                        text-blue-400
                        mb-3
                    ">
                        Recommended Role
                    </h3>

                    <p className="
                        text-xl
                        text-white
                    ">
                        AI Backend Engineer
                    </p>

                    <p className="
                        text-[#777]
                        mt-2
                    ">
                        Based on your projects,
                        interview history and skills.
                    </p>

                </div>

            </div>

        </div>
    );
}