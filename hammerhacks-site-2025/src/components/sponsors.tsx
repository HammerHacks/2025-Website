"use client";

export default function SponsorsComponent() {
    return (
        <section className="sponsor-section flex flex-col items-center justify-center w-full py-16 bg-white">
            <h2 className="text-5xl font-bold mb-6 text-center text-blue-900">Our Sponsors</h2>
            <p className="text-xl text-gray-700 text-center max-w-2xl mb-2">Become a part of Hamilton's largest high school hackathon. Your support helps inspire the next generation of innovators and leaders in technology.</p>
            <p className="text-lg text-gray-600 text-center max-w-2xl">Looking to make an impact? Email us at <a href="mailto:sponsorships@hammerhacks.ca" className="underline text-orange-500">sponsorships@hammerhacks.ca</a>.</p>
        </section>
    )
}