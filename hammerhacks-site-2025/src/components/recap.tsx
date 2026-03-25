"use client";

export default function RecapComponent() {
    return (

    <div className="Recap slide-in bg-[#263272] text-center py-5 text-white">
        <h1 className="text-5xl font-bold flex justify-center mt-16 mb-8">A Look Into Last Year...</h1>
        <div className="flex justify-center w-full">
            <iframe className="rounded-lg shadow-lg w-[90vw] max-w-[560px] h-[50vw] max-h-[315px]" 
                src="https://www.youtube.com/embed/Jb-2RpDonEs" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>
        </div>
        <h1 className="text-3xl pt-[1rem]">140 Students and 20 Mentors</h1>
        <h1 className="text-3xl">40 projects made and pitched in under 6 hours</h1>
        <h1 className="text-3xl">Raised over $12,000 in monetary and in-kind support</h1>
    </div>
    )
}