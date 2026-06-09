
import { useState } from "react";

import Navbar from "../../components/Navbar";
import JobCard from "../../components/jobs/JobCard";

import {
    useGetJobsQuery,
} from "../../store/api/jobsApi";

export default function Jobs() {

    const {
        data,
        isLoading,
        error,
    } = useGetJobsQuery();

    const [search, setSearch] =
        useState("");

    if (isLoading) {
        return (
            <div className="
                min-h-screen
                bg-[#0f0f0f]
                text-white
                flex
                items-center
                justify-center
            ">
                Loading jobs...
            </div>
        );
    }

    if (error) {
        return (
            <div className="
                min-h-screen
                bg-[#0f0f0f]
                text-red-500
                flex
                items-center
                justify-center
            ">
                Failed to load jobs
            </div>
        );
    }

    const jobs = (data?.jobs || []).map((job) => ({
        ...job,

        employer_logo:
            job.employer_logo ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWmR-XRuLFrKKxUHxaQbZaVgNBmK5Yxi04c5U&s=0",

        employer_website:
            job.employer_website ||
            "https://company-website.com",

        job_employment_type:
            job.job_employment_type ||
            "Full Time",

        job_publisher:
            job.job_publisher ||
            "LinkedIn",

        job_apply_link:
            job.job_apply_link ||
            "https://company-careers.com",
    }));

    const filteredJobs =
        jobs.filter((job) =>
            job.title
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
        );

    return (
        <div
            className="min-h-screen"
            style={{
                background: "var(--bg)",
                color: "var(--text)",
            }}
        >
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Header */}

                <div className="mb-12">

                    <span
                        className="
                        text-sm
                        uppercase
                        tracking-widest
                    "
                        style={{
                            color: "var(--accent)"
                        }}
                    >
                        CareerAI Jobs
                    </span>

                    <h1
                        className="
                        text-5xl
                        font-semibold
                        mt-3
                        mb-4
                    "
                    >
                        Find Opportunities
                        Built For You
                    </h1>

                    <p
                        className="
                        max-w-3xl
                        text-lg
                    "
                        style={{
                            color:
                                "var(--secondary)"
                        }}
                    >
                        Discover jobs,
                        prepare for interviews,
                        optimize resumes and
                        manage your career journey
                        from a single place.
                    </p>

                </div>

                <div
                    className="
                    flex
                    justify-between
                    items-center
                    mb-6
                "
                >

                    <h2
                        className="
                        text-2xl
                        font-semibold
                    "
                    >
                        Opportunities
                    </h2>

                    <span
                        style={{
                            color:
                                "var(--secondary)",
                        }}
                    >
                        {
                            filteredJobs.length
                        } Jobs
                    </span>

                </div>

                {/* Job List */}

                {
                    filteredJobs.length === 0 ? (

                        <div
                            className="
                            text-center
                            py-20
                            rounded-3xl
                        "
                            style={{
                                background:
                                    "var(--surface)",
                                border:
                                    "1px solid var(--border)",
                            }}
                        >

                            <h3
                                className="
                                text-2xl
                                mb-3
                            "
                            >
                                No Jobs Found
                            </h3>

                            <p
                                style={{
                                    color:
                                        "var(--secondary)",
                                }}
                            >
                                Try another search term.
                            </p>

                        </div>

                    ) : (

                        <div
                            className="
                            grid
                            gap-5
                        "
                        >

                            {
                                filteredJobs.map(
                                    (job) => (

                                        <JobCard
                                            key={
                                                job.id
                                            }
                                            job={job}
                                        />

                                    )
                                )
                            }

                        </div>

                    )
                }
            </div>

        </div>
    );
}