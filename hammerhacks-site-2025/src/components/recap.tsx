"use client";

interface StatItem {
    value: string;
    label: string;
}

const LEFT_STATS: StatItem[] = [
    { value: "140", label: "hackers" },
    { value: "47", label: "projects" },
];

const RIGHT_STATS: StatItem[] = [
    { value: "17", label: "schools" },
    { value: "40+", label: "mentors" },
];

function StatBlock({ stat }: { stat: StatItem }) {
    return (
        <div className="text-center">
            <h2 className="text-5xl xl:text-6xl font-bold mt-4">{stat.value}</h2>
            <h3 className="text-3xl">{stat.label}</h3>
        </div>
    );
}

export default function RecapComponent() {
    return (
        <div className="Recap slide-in bg-[#263272] text-center py-5 text-white">
            <h1 className="text-5xl font-bold flex justify-center mt-16 mb-8">
                A Look Into Last Year...
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 px-4">
                {/* Left stats */}
                <div className="flex flex-col gap-4 md:gap-8 md:items-end md:justify-center">
                    {LEFT_STATS.map((stat) => (
                        <StatBlock key={stat.label} stat={stat} />
                    ))}
                </div>

                {/* Video */}
                <div className="flex justify-center md:mx-8">
                    <iframe
                        className="rounded-lg shadow-lg w-[90vw] max-w-[560px] h-[50vw] max-h-[315px]"
                        src="https://www.youtube.com/embed/Jb-2RpDonEs"
                        title="HammerHacks recap video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>

                {/* Right stats */}
                <div className="flex flex-col gap-4 md:gap-8 md:items-start md:justify-center">
                    {RIGHT_STATS.map((stat) => (
                        <StatBlock key={stat.label} stat={stat} />
                    ))}
                </div>
            </div>
        </div>
    );
}