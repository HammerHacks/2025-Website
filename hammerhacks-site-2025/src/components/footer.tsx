import { DONATE_URL } from "@/data/nav-links";

export default function FooterComponent() {
    return (
        <footer
            id="footer"
            className="foot flex flex-col justify-center items-center text-center gap-6 py-10"
        >
            <p className="text-3xl font-bold">
                Interested in supporting our hackathon?
            </p>
            <a
                href={DONATE_URL}
                className="text-3xl border-8 border-orange-400 rounded-4xl font-bold bg-orange-400 hover:bg-blue-800 hover:border-blue-800 transition px-4 py-2"
            >
                Donate
            </a>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p className="text-lg mt-2">
                    For any inquiries, please email us at{" "}
                    <a
                        href="mailto:info@hammerhacks.ca"
                        className="underline text-orange-500"
                    >
                        info@hammerhacks.ca
                    </a>
                </p>
            </div>

            <div className="mt-4 text-sm">
                <p>
                    Our{" "}
                    <a
                        href="https://github.com/HammerHacks/2025-Website"
                        className="underline text-orange-400"
                    >
                        website
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://hcb.hackclub.com/hammerhacks"
                        className="underline text-green-500"
                    >
                        finances
                    </a>{" "}
                    are open
                </p>
                <p className="mt-1 text-gray-400">
                    HammerHacks is fiscally sponsored by The Hack Foundation (d.b.a.{" "}
                    <a href="https://hackclub.com/hcb" className="underline">
                        Hack Club
                    </a>
                    ), a 501(c)(3) nonprofit (EIN: 81-2908499)
                </p>
            </div>
        </footer>
    );
}