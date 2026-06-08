// import { useState }
//     from "react";

// import Navbar
//     from "../../components/Navbar";

// import JobCard
//     from "../../components/jobs/JobCard";

// import {
//     useGetJobsQuery,
// }
//     from "../../store/api/jobsApi";

// export default function Jobs() {

//     const {
//         data,
//         isLoading,
//         error,
//     } = useGetJobsQuery();

//     console.log("jobs data without filter:", data);

//     const [search,
//         setSearch] = useState("");

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return (
//             <div className="text-red-500">
//                 Failed to load jobs
//             </div>
//         );
//     }

//     const jobs = (data?.jobs || []).map((job) => ({
//         ...job,

//         employer_logo:
//             job.employer_logo ||
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWmR-XRuLFrKKxUHxaQbZaVgNBmK5Yxi04c5U&s=0",

//         employer_website:
//             job.employer_website ||
//             "https://company-website.com",

//         job_employment_type:
//             job.job_employment_type ||
//             "Full Time",

//         job_publisher:
//             job.job_publisher ||
//             "LinkedIn",

//         job_apply_link:
//             job.job_apply_link ||
//             "https://company-careers.com",

//         job_description:
//             job.job_description ||
//             `
// We are looking for a talented AI Software Engineer to join our team.

// Responsibilities:
// • Build AI-powered applications
// • Develop backend APIs
// • Integrate LLMs and vector databases
// • Work with FastAPI and MongoDB

// Requirements:
// • Experience with Python
// • Understanding of AI/LLM concepts
// • Knowledge of REST APIs
// • Good communication skills
//         `,
//     }));

//     const filteredJobs = jobs.filter((job) =>
//         job.title
//             .toLowerCase()
//             .includes(search.toLowerCase())
//     );

//     console.log("jobs data:", data);

//     return (
//         <div className="
//             min-h-screen
//             bg-[#0f0f0f]
//             text-white
//         ">

//             <Navbar />

//             <div className="
//                 max-w-7xl
//                 mx-auto
//                 px-6
//                 py-10
//             ">

//                 <h1 className="
//                     text-3xl
//                     text-amber-300
//                     mb-8
//                 ">
//                     Jobs
//                 </h1>

//                 <input
//                     type="text"
//                     placeholder="Search jobs..."
//                     value={search}
//                     onChange={(e) =>
//                         setSearch(
//                             e.target.value
//                         )
//                     }
//                     className="
//                         w-full
//                         mb-6
//                         bg-[#161616]
//                         border border-[#242424]
//                         rounded-lg
//                         p-3
//                     "
//                 />

//                 <div className="
//                     grid
//                     gap-5
//                 ">

//                     {
//                         filteredJobs.map(
//                             (job) => (
//                                 <JobCard
//                                     key={
//                                         job.job_id
//                                     }
//                                     job={job}
//                                 />
//                             )
//                         )
//                     }

//                 </div>

//             </div>

//         </div>
//     );
// }















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
        <div className="
            min-h-screen
            bg-[#0f0f0f]
            text-white
        ">

            <Navbar />

            <div className="
                max-w-7xl
                mx-auto
                px-6
                py-10
            ">

                {/* Hero */}

                <div className="mb-10">

                    <h1 className="
                        text-5xl
                        font-light
                        text-amber-300
                        mb-4
                    ">
                        Find Your Next Opportunity
                    </h1>

                    <p className="
                        text-[#777]
                        max-w-2xl
                    ">
                        Discover jobs tailored to your
                        skills, prepare for interviews,
                        optimize your resume and track
                        your applications.
                    </p>

                </div>

                {/* Stats */}

                <div className="
                    grid
                    md:grid-cols-4
                    gap-4
                    mb-8
                ">

                    <div className="
                        bg-[#161616]
                        border border-[#242424]
                        rounded-xl
                        p-5
                    ">
                        <p className="text-[#666]">
                            Total Jobs
                        </p>

                        <p className="
                            text-3xl
                            text-amber-300
                            mt-2
                        ">
                            {jobs.length}
                        </p>
                    </div>

                    <div className="
                        bg-[#161616]
                        border border-[#242424]
                        rounded-xl
                        p-5
                    ">
                        <p className="text-[#666]">
                            Saved
                        </p>

                        <p className="
                            text-3xl
                            text-green-400
                            mt-2
                        ">
                            12
                        </p>
                    </div>

                    <div className="
                        bg-[#161616]
                        border border-[#242424]
                        rounded-xl
                        p-5
                    ">
                        <p className="text-[#666]">
                            Applied
                        </p>

                        <p className="
                            text-3xl
                            text-blue-400
                            mt-2
                        ">
                            6
                        </p>
                    </div>

                    <div className="
                        bg-[#161616]
                        border border-[#242424]
                        rounded-xl
                        p-5
                    ">
                        <p className="text-[#666]">
                            Interviews
                        </p>

                        <p className="
                            text-3xl
                            text-purple-400
                            mt-2
                        ">
                            2
                        </p>
                    </div>

                </div>

                {/* Search */}

                <div className="
                    bg-[#161616]
                    border border-[#242424]
                    rounded-xl
                    p-5
                    mb-8
                ">

                    <input
                        type="text"
                        placeholder="Search by role..."
                        value={search}
                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }
                        className="
                            w-full
                            bg-[#0f0f0f]
                            border border-[#242424]
                            rounded-lg
                            p-4
                            outline-none
                            focus:border-amber-300
                        "
                    />

                </div>

                {/* Filters */}

                <div className="
                    flex
                    flex-wrap
                    gap-3
                    mb-8
                ">

                    {[
                        "All",
                        "Remote",
                        "Full Time",
                        "AI/ML",
                        "Backend",
                    ].map((item) => (

                        <button
                            key={item}
                            className="
                                px-4
                                py-2
                                rounded-full
                                bg-[#161616]
                                border border-[#242424]
                                hover:border-amber-300/40
                            "
                        >
                            {item}
                        </button>

                    ))}

                </div>

                {/* Jobs */}

                {
                    filteredJobs.length === 0 ? (

                        <div className="
                            bg-[#161616]
                            border border-[#242424]
                            rounded-xl
                            p-10
                            text-center
                        ">
                            <h2 className="
                                text-2xl
                                text-amber-300
                            ">
                                No Jobs Found
                            </h2>

                            <p className="
                                text-[#777]
                                mt-2
                            ">
                                Try another search term.
                            </p>
                        </div>

                    ) : (

                        <div className="
                            grid
                            gap-5
                        ">

                            {
                                filteredJobs.map(
                                    (job) => (
                                        <JobCard
                                            key={job.job_id}
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