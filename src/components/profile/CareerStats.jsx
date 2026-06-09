export default function CareerStats() {

    const stats = [
        {
            title: "Jobs Saved",
            value: "12",
            color: "text-green-400",
        },
        {
            title: "Jobs Applied",
            value: "5",
            color: "text-blue-400",
        },
        {
            title: "Interviews Taken",
            value: "8",
            color: "text-purple-400",
        },
        {
            title: "Avg Interview Score",
            value: "82%",
            color: "text-amber-300",
        },
    ];

    return (
        <div>

            <h2 className="
                text-2xl
                text-amber-300
                mb-5
            ">
                Career Stats
            </h2>

            <div className="
                grid
                md:grid-cols-4
                gap-4
            ">

                {
                    stats.map((item) => (

                        <div
                            key={item.title}
                            className="
                                bg-[#161616]
                                border border-[#242424]
                                rounded-xl
                                p-6
                            "
                        >

                            <p className="text-[#666]">
                                {item.title}
                            </p>

                            <p className={`
                                text-3xl
                                mt-3
                                ${item.color}
                            `}>
                                {item.value}
                            </p>

                        </div>

                    ))
                }

            </div>

        </div>
    );
}