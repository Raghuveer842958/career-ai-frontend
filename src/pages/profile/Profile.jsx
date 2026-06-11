// import Navbar from "../../components/Navbar";

// import ProfileHeader from "../../components/profile/ProfileHeader";
// import ResumeCard from "../../components/profile/ResumeCard";
// import CareerStats from "../../components/profile/CareerStats";
// import CareerInsights from "../../components/profile/CareerInsights";
// import QuickActions from "../../components/profile/QuickActions";

// export default function Profile() {

//     const user = {
//         name: "Raghuveer Chauhan",
//         email: "raghuveer@gmail.com",
//         targetRole: "AI Engineer",
//         experienceLevel: "Fresher",
//     };

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

//                 <div className="mb-10">

//                     <h1 className="
//                         text-5xl
//                         font-light
//                         text-amber-300
//                         mb-3
//                     ">
//                         Profile
//                     </h1>

//                     <p className="text-[#777]">
//                         Manage your resume, career insights,
//                         interviews and applications.
//                     </p>

//                 </div>

//                 <div className="
//                     grid
//                     gap-6
//                 ">

//                     <ProfileHeader
//                         user={user}
//                     />

//                     <ResumeCard />

//                     <CareerStats />

//                     <CareerInsights />

//                     <QuickActions />

//                 </div>

//             </div>

//         </div>
//     );
// }




import Navbar from "../../components/Navbar";

export default function Profile() {

    const user = {
        name: "Raghuveer Chauhan",
        email: "raghuveer@example.com",
        resumeName: "Raghuveer_Resume.pdf",
    };

    return (

        <div
            className="min-h-screen"
            style={{
                background: "var(--bg)",
                color: "var(--text)"
            }}
        >

            <Navbar />

            <div
                className="
                    max-w-4xl
                    mx-auto
                    px-6
                    py-10
                "
            >

                {/* Page Header */}

                <div className="mb-10">

                    <h1
                        className="
                            text-4xl
                            font-semibold
                            mb-3
                        "
                    >
                        Profile
                    </h1>

                    <p
                        style={{
                            color:
                                "var(--secondary)"
                        }}
                    >
                        Manage your profile information and resume.
                    </p>

                </div>

                {/* Profile Card */}

                <div
                    className="
                        rounded-3xl
                        p-8
                    "
                    style={{
                        background:
                            "var(--surface)",
                        border:
                            "1px solid var(--border)"
                    }}
                >

                    <div
                        className="
                            flex
                            flex-col
                            md:flex-row
                            md:items-center
                            gap-6
                        "
                    >

                        {/* Avatar */}

                        <div
                            className="
                                w-24
                                h-24
                                rounded-full
                                flex
                                items-center
                                justify-center
                                text-3xl
                                font-semibold
                            "
                            style={{
                                background:
                                    "var(--accent)",
                                color:
                                    "#fff"
                            }}
                        >
                            {user.name[0]}
                        </div>

                        {/* User Details */}

                        <div className="flex-1">

                            <h2
                                className="
                                    text-2xl
                                    font-semibold
                                    mb-2
                                "
                            >
                                {user.name}
                            </h2>

                            <p
                                style={{
                                    color:
                                        "var(--secondary)"
                                }}
                            >
                                {user.email}
                            </p>

                        </div>

                    </div>

                </div>

                {/* Resume Section */}

                <div
                    className="
                        mt-6
                        rounded-3xl
                        p-8
                    "
                    style={{
                        background:
                            "var(--surface)",
                        border:
                            "1px solid var(--border)"
                    }}
                >

                    <h3
                        className="
                            text-xl
                            font-semibold
                            mb-5
                        "
                    >
                        Resume
                    </h3>

                    <div
                        className="
                            flex
                            flex-col
                            md:flex-row
                            md:items-center
                            md:justify-between
                            gap-5
                        "
                    >

                        <div>

                            <p
                                className="
                                    font-medium
                                    mb-1
                                "
                            >
                                Current Resume
                            </p>

                            <p
                                style={{
                                    color:
                                        "var(--secondary)"
                                }}
                            >
                                {user.resumeName}
                            </p>

                        </div>

                        <div
                            className="
                                flex
                                gap-3
                            "
                        >

                            <label
                                className="
                                    px-5
                                    py-3
                                    rounded-xl
                                    cursor-pointer
                                    font-medium
                                "
                                style={{
                                    background:
                                        "var(--accent)",
                                    color:
                                        "#fff"
                                }}
                            >

                                Upload Resume

                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    className="hidden"
                                />

                            </label>

                            <button
                                className="
                                    px-5
                                    py-3
                                    rounded-xl
                                "
                                style={{
                                    border:
                                        "1px solid var(--border)"
                                }}
                            >
                                Download
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}