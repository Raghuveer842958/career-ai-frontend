// import { useParams } from "react-router-dom";

// import Navbar
//     from "../../components/Navbar";

// import {
//     useGetJobByIdQuery,
// }
//     from "../../store/api/jobsApi";

// export default function JobDetails() {

//     const { id } = useParams();

//     const {
//         data,
//         isLoading,
//         error,
//     } = useGetJobByIdQuery(id);

//     const job = data?.job || data;

//     if (isLoading) {
//         return (
//             <div className="
//                 min-h-screen
//                 bg-[#0f0f0f]
//                 text-white
//                 flex
//                 items-center
//                 justify-center
//             ">
//                 Loading...
//             </div>
//         );
//     }

//     if (error || !job) {
//         return (
//             <div className="
//                 min-h-screen
//                 bg-[#0f0f0f]
//                 text-red-500
//                 flex
//                 items-center
//                 justify-center
//             ">
//                 Job not found
//             </div>
//         );
//     }

//     const employerLogo =
//         job.employer_logo ||
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWmR-XRuLFrKKxUHxaQbZaVgNBmK5Yxi04c5U&s=0";

//     const jobDescription =
//         job.job_description ||
//         `
// We are looking for a talented AI Software Engineer to join our team.

// Responsibilities:
// • Build scalable applications
// • Work on AI-powered products
// • Collaborate with product teams
// • Develop backend APIs

// Requirements:
// • Strong problem solving skills
// • Experience with modern technologies
// • Good communication skills
// `;

//     return (
//         <div className="
//             min-h-screen
//             bg-[#0f0f0f]
//             text-white
//         ">

//             <Navbar />

//             <div className="
//                 max-w-6xl
//                 mx-auto
//                 px-6
//                 py-10
//             ">

//                 <div className="
//                     bg-[#161616]
//                     border
//                     border-[#242424]
//                     rounded-2xl
//                     p-8
//                 ">

//                     {/* Header */}
//                     <div className="
//                         flex
//                         flex-col
//                         md:flex-row
//                         gap-6
//                     ">

//                         <img
//                             src={employerLogo}
//                             alt={job.company}
//                             className="
//                                 w-24
//                                 h-24
//                                 rounded-2xl
//                                 bg-white
//                                 p-2
//                                 object-contain
//                             "
//                         />

//                         <div className="flex-1">

//                             <h1 className="
//                                 text-4xl
//                                 text-amber-300
//                                 mb-2
//                             ">
//                                 {job.title}
//                             </h1>

//                             <p className="
//                                 text-xl
//                                 text-[#ddd]
//                             ">
//                                 {job.company}
//                             </p>

//                             <div className="
//                                 flex
//                                 flex-wrap
//                                 gap-4
//                                 mt-3
//                                 text-[#777]
//                             ">
//                                 <span>
//                                     📍 {job.location}
//                                 </span>

//                                 <span>
//                                     💼 {
//                                         job.job_employment_type ||
//                                         "Full Time"
//                                     }
//                                 </span>

//                                 <span>
//                                     📰 {
//                                         job.job_publisher ||
//                                         "LinkedIn"
//                                     }
//                                 </span>
//                             </div>

//                         </div>

//                     </div>

//                     {/* Action Buttons */}
//                     <div className="
//                         flex
//                         flex-wrap
//                         gap-3
//                         mt-8
//                     ">

//                         <a
//                             href={
//                                 job.job_apply_link ||
//                                 "#"
//                             }
//                             target="_blank"
//                             rel="noreferrer"
//                             className="
//                                 px-5
//                                 py-3
//                                 rounded-xl
//                                 bg-amber-300
//                                 text-black
//                                 font-medium
//                             "
//                         >
//                             Apply Now
//                         </a>

//                         <button
//                             className="
//                                 px-5
//                                 py-3
//                                 rounded-xl
//                                 bg-[#111]
//                                 border
//                                 border-[#242424]
//                                 hover:border-amber-300/40
//                             "
//                         >
//                             Save Job
//                         </button>

//                         <button
//                             className="
//                                 px-5
//                                 py-3
//                                 rounded-xl
//                                 bg-[#111]
//                                 border
//                                 border-[#242424]
//                                 hover:border-blue-400/40
//                             "
//                         >
//                             Mock Interview
//                         </button>

//                         <button
//                             className="
//                                 px-5
//                                 py-3
//                                 rounded-xl
//                                 bg-[#111]
//                                 border
//                                 border-[#242424]
//                                 hover:border-green-400/40
//                             "
//                         >
//                             Optimize Resume
//                         </button>

//                     </div>

//                     {/* Status Cards */}
//                     <div className="
//                         grid
//                         md:grid-cols-3
//                         gap-4
//                         mt-8
//                     ">

//                         <div className="
//                             bg-[#111]
//                             border
//                             border-[#242424]
//                             rounded-xl
//                             p-5
//                         ">
//                             <p className="text-[#666]">
//                                 Application Status
//                             </p>

//                             <p className="
//                                 mt-2
//                                 text-green-400
//                                 text-lg
//                             ">
//                                 Saved
//                             </p>
//                         </div>

//                         <div className="
//                             bg-[#111]
//                             border
//                             border-[#242424]
//                             rounded-xl
//                             p-5
//                         ">
//                             <p className="text-[#666]">
//                                 Match Score
//                             </p>

//                             <p className="
//                                 mt-2
//                                 text-amber-300
//                                 text-lg
//                             ">
//                                 84%
//                             </p>
//                         </div>

//                         <div className="
//                             bg-[#111]
//                             border
//                             border-[#242424]
//                             rounded-xl
//                             p-5
//                         ">
//                             <p className="text-[#666]">
//                                 Employment Type
//                             </p>

//                             <p className="
//                                 mt-2
//                                 text-white
//                             ">
//                                 {
//                                     job.job_employment_type ||
//                                     "Full Time"
//                                 }
//                             </p>
//                         </div>

//                     </div>

//                     {/* Job Info */}
//                     <div className="
//                         mt-8
//                         bg-[#111]
//                         border
//                         border-[#242424]
//                         rounded-xl
//                         p-6
//                     ">

//                         <h2 className="
//                             text-xl
//                             text-amber-300
//                             mb-5
//                         ">
//                             Company Information
//                         </h2>

//                         <div className="
//                             grid
//                             md:grid-cols-2
//                             gap-5
//                         ">

//                             <div>

//                                 <p className="text-[#666]">
//                                     Publisher
//                                 </p>

//                                 <p>
//                                     {
//                                         job.job_publisher ||
//                                         "LinkedIn"
//                                     }
//                                 </p>

//                             </div>

//                             <div>

//                                 <p className="text-[#666]">
//                                     Website
//                                 </p>

//                                 <a
//                                     href={
//                                         job.employer_website ||
//                                         "#"
//                                     }
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className="
//                                         text-blue-400
//                                         hover:underline
//                                     "
//                                 >
//                                     Visit Company
//                                 </a>

//                             </div>

//                         </div>

//                     </div>

//                     {/* Description */}
//                     <div className="mt-8">

//                         <h2 className="
//                             text-2xl
//                             text-amber-300
//                             mb-4
//                         ">
//                             Job Description
//                         </h2>

//                         <div className="
//                             bg-[#111]
//                             border
//                             border-[#242424]
//                             rounded-xl
//                             p-6
//                         ">
//                             <p className="
//                                 text-[#ccc]
//                                 whitespace-pre-line
//                                 leading-8
//                             ">
//                                 {jobDescription}
//                             </p>
//                         </div>

//                     </div>

//                     {/* CareerAI Recommendations */}
//                     <div className="
//                         mt-8
//                         bg-[#111]
//                         border
//                         border-[#242424]
//                         rounded-xl
//                         p-6
//                     ">

//                         <h2 className="
//                             text-xl
//                             text-amber-300
//                             mb-4
//                         ">
//                             CareerAI Recommendations
//                         </h2>

//                         <ul className="
//                             space-y-3
//                             text-[#ccc]
//                         ">

//                             <li>
//                                 ✓ Resume match score: 84%
//                             </li>

//                             <li>
//                                 ✓ Strong fit for backend development
//                             </li>

//                             <li>
//                                 ✓ Practice Node.js interview questions
//                             </li>

//                             <li>
//                                 ✓ Improve Docker and System Design skills
//                             </li>

//                         </ul>

//                     </div>

//                 </div>

//             </div>

//         </div>
//     );
// }






import { useParams } from "react-router-dom";

import Navbar
    from "../../components/Navbar";

import {
    useGetJobByIdQuery,
} from "../../store/api/jobsApi";

export default function JobDetails() {

    const { id } = useParams();

    const {
        data,
        isLoading,
        error,
    } = useGetJobByIdQuery(id);

    const job = data?.job || data;

    if (isLoading) {
        return (
            <div
                className="
                    min-h-screen
                    flex
                    items-center
                    justify-center
                "
                style={{
                    background: "var(--bg)",
                    color: "var(--text)",
                }}
            >
                Loading...
            </div>
        );
    }

    if (error || !job) {
        return (
            <div
                className="
                    min-h-screen
                    flex
                    items-center
                    justify-center
                "
                style={{
                    background: "var(--bg)",
                    color: "var(--text)",
                }}
            >
                Job not found
            </div>
        );
    }

    const employerLogo =
        job.employer_logo ||
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWmR-XRuLFrKKxUHxaQbZaVgNBmK5Yxi04c5U&s=0";

    const jobDescription =
        job.job_description ||
        `
We are looking for a talented AI Software Engineer to join our team.

Responsibilities:
• Build scalable applications
• Work on AI-powered products
• Collaborate with product teams
• Develop backend APIs

Requirements:
• Strong problem solving skills
• Experience with modern technologies
• Good communication skills
`;

    return (

        <div
            className="min-h-screen"
            style={{
                background: "var(--bg)",
                color: "var(--text)",
            }}
        >

            <Navbar />

            <div
                className="
                    max-w-6xl
                    mx-auto
                    px-6
                    py-12
                "
            >

                {/* HEADER */}

                <div
                    className="
                        rounded-3xl
                        p-8
                        mb-8
                    "
                    style={{
                        background:
                            "var(--surface)",

                        border:
                            "1px solid var(--border)",
                    }}
                >

                    <div
                        className="
                            flex
                            flex-col
                            lg:flex-row
                            justify-between
                            gap-8
                        "
                    >

                        <div
                            className="
                                flex
                                gap-5
                            "
                        >

                            <img
                                src={employerLogo}
                                alt={job.company}
                                className="
                                    w-20
                                    h-20
                                    rounded-2xl
                                    bg-white
                                    object-contain
                                    p-2
                                "
                            />

                            <div>

                                <h1
                                    className="
                                        text-4xl
                                        font-semibold
                                        mb-2
                                    "
                                >
                                    {job.title}
                                </h1>

                                <p
                                    style={{
                                        color:
                                            "var(--secondary)",
                                    }}
                                >
                                    {job.company}
                                </p>

                                <div
                                    className="
                                        flex
                                        flex-wrap
                                        gap-4
                                        mt-3
                                        text-sm
                                    "
                                >

                                    <span>
                                        📍 {job.location}
                                    </span>

                                    <span>
                                        💼 {
                                            job.job_employment_type ||
                                            "Full Time"
                                        }
                                    </span>

                                    <span>
                                        🌐 {
                                            job.job_publisher ||
                                            "LinkedIn"
                                        }
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div>

                            <span
                                className="
                                    px-4
                                    py-2
                                    rounded-full
                                    text-sm
                                    font-medium
                                "
                                style={{
                                    background:
                                        "rgba(34,197,94,.1)",

                                    color:
                                        "#22c55e",
                                }}
                            >
                                84% Match
                            </span>

                        </div>

                    </div>

                    {/* ACTIONS */}

                    <div
                        className="
                            flex
                            flex-wrap
                            gap-3
                            mt-8
                        "
                    >

                        <a
                            href={
                                job.job_apply_link ||
                                "#"
                            }
                            target="_blank"
                            rel="noreferrer"
                            className="
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
                            Apply Now
                        </a>

                        <button
                            className="
                                px-6
                                py-3
                                rounded-xl
                            "
                            style={{
                                background:
                                    "var(--bg)",

                                border:
                                    "1px solid var(--border)",
                            }}
                        >
                            Mock Interview
                        </button>

                        <button
                            className="
                                px-6
                                py-3
                                rounded-xl
                            "
                            style={{
                                background:
                                    "var(--bg)",

                                border:
                                    "1px solid var(--border)",
                            }}
                        >
                            Optimize Resume
                        </button>

                    </div>

                </div>

                {/* DESCRIPTION */}

                <div className="mb-10">

                    <h2
                        className="
                            text-2xl
                            font-semibold
                            mb-5
                        "
                    >
                        Job Description
                    </h2>

                    <div
                        className="
                            rounded-3xl
                            p-8
                        "
                        style={{
                            background:
                                "var(--surface)",

                            border:
                                "1px solid var(--border)",
                        }}
                    >

                        <p
                            className="
                                whitespace-pre-line
                                leading-8
                            "
                            style={{
                                color:
                                    "var(--secondary)",
                            }}
                        >
                            {jobDescription}
                        </p>

                    </div>

                </div>

                {/* CAREER AI INSIGHTS */}

                <div>

                    <h2
                        className="
                            text-2xl
                            font-semibold
                            mb-5
                        "
                    >
                        CareerAI Insights
                    </h2>

                    <div
                        className="
                            rounded-3xl
                            p-8
                        "
                        style={{
                            background:
                                "var(--surface)",

                            border:
                                "1px solid var(--border)",
                        }}
                    >

                        <ul
                            className="
                                space-y-4
                            "
                        >

                            <li>
                                ✓ Strong fit for Backend Engineering roles
                            </li>

                            <li>
                                ✓ Resume optimization available for this job
                            </li>

                            <li>
                                ✓ Practice FastAPI and System Design questions
                            </li>

                            <li>
                                ✓ Missing Docker expertise may reduce ATS score
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>

    );

}