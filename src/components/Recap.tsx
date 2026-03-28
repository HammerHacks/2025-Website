import { LEFT_STATS, RIGHT_STATS, RECAP_VIDEO_URL } from "@/data/recap-stats";
import Carousel from "@/components/Carousel";

export default function Recap() {
    return (
        <section className="bg-[var(--navy)] pt-20 pb-10 text-white overflow-hidden" id="recap">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    A Look Into Last Year...
                </h2>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24">
                    <div className="flex flex-row lg:flex-col justify-center gap-16 lg:gap-12 text-center">
                        {LEFT_STATS.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <span className="text-5xl font-bold">{stat.value}</span>
                                <span className="text-xl mt-2">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="w-full max-w-[560px] aspect-video rounded-xl overflow-hidden shadow-2xl relative z-10">
                        <iframe
                            width="100%"
                            height="100%"
                            src={RECAP_VIDEO_URL}
                            title="HammerHacks Recap Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="border-0 bg-black"
                        ></iframe>
                    </div>

                    <div className="flex flex-row lg:flex-col justify-center gap-16 lg:gap-12 text-center">
                        {RIGHT_STATS.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <span className="text-5xl font-bold">{stat.value}</span>
                                <span className="text-xl mt-2">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Carousel />
        </section>
    );
}
