import Navbar from "../../components/Navbar";

import ProfileHeader from "../../components/profile/ProfileHeader";
import ResumeCard from "../../components/profile/ResumeCard";
import CareerStats from "../../components/profile/CareerStats";
import CareerInsights from "../../components/profile/CareerInsights";
import QuickActions from "../../components/profile/QuickActions";

export default function Profile() {

    const user = {
        name: "Raghuveer Chauhan",
        email: "raghuveer@gmail.com",
        targetRole: "AI Engineer",
        experienceLevel: "Fresher",
    };

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

                <div className="mb-10">

                    <h1 className="
                        text-5xl
                        font-light
                        text-amber-300
                        mb-3
                    ">
                        Profile
                    </h1>

                    <p className="text-[#777]">
                        Manage your resume, career insights,
                        interviews and applications.
                    </p>

                </div>

                <div className="
                    grid
                    gap-6
                ">

                    <ProfileHeader
                        user={user}
                    />

                    <ResumeCard />

                    <CareerStats />

                    <CareerInsights />

                    <QuickActions />

                </div>

            </div>

        </div>
    );
}