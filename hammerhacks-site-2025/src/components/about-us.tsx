"use client";

export default function AboutUs() {
    return (
        <div className="about-us bg-gray-100 p-12 my-12">
  <section className="text-center text-black" id="about">
    <div className="letter bg-white border border-gray-400 shadow-lg mx-auto mt-8 p-8 max-w-4xl relative slide-in">
      

      <h2 className="glowing-text text-3xl font-bold mb-4 slide-in">An Introduction to HammerHacks</h2>
	    <p className="text-left text-1xl font-bold text-gray-800 mt-8 slide-in">Fellow Hackers,</p>
      
      <p className="text-lg mt-4 slide-in">
        HammerHacks is a high school hackathon, a social coding marathon and competition where you can use technology to build your most creative ideas and share your project with other students. We invite all interested students from across the Hamilton-Wentworth Area to join us this winter for a day-long hackathon with plenty of opportunities to grow your skills.
      </p>
      <br/>
      <p className="text-lg mt-4 slide-in">
        Join 100+ Hackers to collaborate and create unique solutions that push your skills to the limits, all while having fun and connecting with like-minded individuals.
      </p>
	  
	  <p className="text-left text-1xl font-bold text-gray-800 mt-8 slide-in caps">
	  From the HammerHacks team,
	  </p>
    <img
        src="/signatures.png"
        alt="organizer signatures!"
        className="signature-img max-w-full h-auto flex responsive-signature-img"/>
	   
    </div>
  </section>
</div>
    )
}