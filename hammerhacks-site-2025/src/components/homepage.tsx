"use client";

export default function HomepageComponent() {
    return (
          <div className="homepage h-[700px] flex flex-col p-8 gap-[0.5rem] bg-[#3e5caa] bg-[url(/background.webp)]">
            <div className="slide-in mx-auto w-auto">
                <img src="/logo.webp" alt="Hammer Hacks Logo"
            className="h-100 w-max my-20 mx-auto transition-transform duration-300 hover:scale-105 cursor-normal select-none" />
            <div className="slide-in relative b-15 text-center font-bold text-4xl p-5 rounded-md bg-radial from-white to-[#b3dbf4]/80 transition-transform duration-300 hover:scale-105">
                <h1 className="slide-in text-yellow-500 glowing-text-yellow text-5xl">A High School Hackathon where you can present your amazing ideas with technology!</h1>
                <h1 className="slide-in text-black">Winter 2026</h1>
                <h1 className="slide-in glowing-text">Hamilton, Ontario</h1>
            </div>
         </div>
  </div>
    )
}