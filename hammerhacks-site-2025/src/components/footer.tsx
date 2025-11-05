export default function FooterComponent() {
    return (
        <div id="footer" className={"px-[4px] min-h-[320px] h-auto flex flex-col justify-center items-center text-center"}>
            <p className="text-3xl font-bold relative top-4">
                Interested in supporting our hackathon?</p>
            <a href="https://hcb.hackclub.com/donations/start/hammerhacks"
               className="text-3xl border-8 border-orange-400  rounded-4xl font-bold bg-orange-400 relative top-10 hover:bg-blue-800  hover:border-blue-800">
                Donate
            </a>
            <div className={"top-[40px] font-[1rem]"}>
                <h1 className="text-2xl font-bold relative top-[80px]">Contact Us</h1>
                <p className="text-1xl relative top-15 top-[80px]">For any inquiries, please email us
                    at <a href="mailto:info@hammerhacks.ca"
                          className="underline text-orange-500">info@hammerhacks.ca</a></p>
            </div>


            <div className={"top-[40px] font-[1rem]"}>
                <p className="">Our <a href="https://github.com/HammerHacks/2025-Website"
                                       className="underline text-orange-400">website</a> and <a
                    href="https://hcb.hackclub.com/hammerhacks" className="underline text-green-500">finances</a> are
                    open</p>
                <p className="hcb">HammerHacks is fiscally sponsored by The Hack Foundation (d.b.a. <a
                    href="https://hackclub.com/hcb">Hack Club</a>), a 501(c)(3) nonprofit (EIN: 81-2908499)</p>
            </div>
        </div>
    )
}