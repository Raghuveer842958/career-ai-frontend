export default function ProfileHeader({
    user,
}) {

    return (
        <div className="
            bg-[#161616]
            border border-[#242424]
            rounded-2xl
            p-8
        ">

            <div className="
                flex
                flex-col
                md:flex-row
                items-start
                md:items-center
                gap-6
            ">

                {/* Avatar */}

                <div className="
                    w-24
                    h-24
                    rounded-full
                    bg-amber-300
                    text-black
                    flex
                    items-center
                    justify-center
                    text-3xl
                    font-bold
                ">
                    {user.name[0]}
                </div>

                {/* User Info */}

                <div className="flex-1">

                    <h2 className="
                        text-3xl
                        text-white
                        mb-2
                    ">
                        {user.name}
                    </h2>

                    <p className="
                        text-[#888]
                        mb-4
                    ">
                        {user.email}
                    </p>

                    <div className="
                        flex
                        flex-wrap
                        gap-3
                    ">

                        <span className="
                            px-4
                            py-2
                            rounded-full
                            bg-amber-300/10
                            text-amber-300
                            text-sm
                        ">
                            🎯 {user.targetRole}
                        </span>

                        <span className="
                            px-4
                            py-2
                            rounded-full
                            bg-blue-500/10
                            text-blue-400
                            text-sm
                        ">
                            🚀 {user.experienceLevel}
                        </span>

                    </div>

                </div>

                {/* Resume Status */}

                <div className="
                    bg-[#111]
                    border border-[#242424]
                    rounded-xl
                    p-5
                    min-w-[220px]
                ">

                    <p className="
                        text-[#666]
                        text-sm
                    ">
                        Resume Status
                    </p>

                    <p className="
                        mt-2
                        text-green-400
                        font-medium
                    ">
                        ✓ Uploaded
                    </p>

                    <p className="
                        text-[#777]
                        text-sm
                        mt-2
                    ">
                        Last updated:
                        <br />
                        June 2026
                    </p>

                </div>

            </div>

        </div>
    );
}