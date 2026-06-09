import heroImage
    from "../../assets/hero.svg";

export default function HeroSection() {

    return (

        <section
            id="home"
            className="
                min-h-screen
                flex
                items-center
            "
        >

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-6
                    w-full
                "
            >

                <div
                    className="
                        grid
                        lg:grid-cols-2
                        gap-20
                        items-center
                    "
                >

                    {/* LEFT */}

                    <div>

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-4
                                py-2
                                rounded-full
                                mb-8
                            "
                            style={{
                                background:
                                    "var(--surface)",

                                border:
                                    "1px solid var(--border)",
                            }}
                        >

                            <span>
                                ✨
                            </span>

                            <span
                                style={{
                                    color:
                                        "var(--secondary)",
                                }}
                            >
                                AI-Powered Career Platform
                            </span>

                        </div>

                        <h1
                            className="
                                text-6xl
                                lg:text-7xl
                                font-semibold
                                leading-tight
                                tracking-tight
                            "
                        >
                            Build Your

                            <span
                                style={{
                                    color:
                                        "var(--accent)",
                                }}
                            >
                                {" "}Career
                            </span>

                            <br />

                            With AI
                        </h1>

                        <p
                            className="
                                mt-8
                                text-xl
                                max-w-2xl
                                leading-relaxed
                            "
                            style={{
                                color:
                                    "var(--secondary)",
                            }}
                        >
                            Analyze resumes, discover jobs,
                            practice interviews, optimize
                            applications, and accelerate
                            your professional growth using
                            AI-powered career tools.
                        </p>

                        <div
                            className="
                                flex
                                flex-wrap
                                gap-4
                                mt-10
                            "
                        >

                            <button
                                className="
                                    px-8
                                    py-4
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
                                Get Started
                            </button>

                            <button
                                className="
                                    px-8
                                    py-4
                                    rounded-xl
                                    transition-all
                                "
                                style={{
                                    background:
                                        "var(--surface)",

                                    border:
                                        "1px solid var(--border)",
                                }}
                            >
                                Explore Features
                            </button>

                        </div>

                        {/* Stats */}

                        <div
                            className="
                                flex
                                gap-12
                                mt-16
                            "
                        >

                            <Stat
                                value="6+"
                                label="AI Modules"
                            />

                            <Stat
                                value="24/7"
                                label="Career Guidance"
                            />

                            <Stat
                                value="100%"
                                label="Personalized"
                            />

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div>

                        <img
                            src={heroImage}
                            alt="CareerAI"
                            className="
                                w-full
                                max-w-[650px]
                                mx-auto
                            "
                        />

                    </div>

                </div>

            </div>

        </section>

    );

}

function Stat({
    value,
    label,
}) {

    return (

        <div>

            <h3
                className="
                    text-3xl
                    font-semibold
                "
            >
                {value}
            </h3>

            <p
                style={{
                    color:
                        "var(--secondary)",
                }}
            >
                {label}
            </p>

        </div>

    );

}