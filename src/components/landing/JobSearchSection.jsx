import jobsImage
    from "../../assets/job-search.svg";

import {
    Link,
} from "react-router-dom";

export default function JobSearchSection() {

    return (

        <section
            id="jobs"
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
                    src={jobsImage}
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
                        Smart Job Search
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
                        Discover jobs, save
                        opportunities, track
                        application status and
                        prepare for interviews.
                    </p>

                    <ul className="space-y-4">

                        <li>
                            ✓ AI Job Discovery
                        </li>

                        <li>
                            ✓ Application Tracking
                        </li>

                        <li>
                            ✓ Status Management
                        </li>

                        <li>
                            ✓ Interview Preparation
                        </li>

                        <Link
                            to="/job-search"
                            className="
        inline-flex
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
                            Explore Jobs
                        </Link>

                    </ul>

                </div>

            </div>

        </section>

    );

}