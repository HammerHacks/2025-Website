"use client"

import Header from "@/components/header";
import AboutUs from "@/components/about-us";
import HomepageComponent from "@/components/homepage";
import RecapComponent from "@/components/recap";
import SponsorsComponent from "@/components/sponsors";
import FAQComponent from "@/components/faq";
import MeetTheTeamComponent from "@/components/meet-the-team";
import FooterComponent from "@/components/footer";


export default function HomePage() {
  return (
    <div className="caps">
        <Header/>
        <HomepageComponent/>
        <AboutUs/>
        <RecapComponent/>
        <SponsorsComponent/>
        <br/>
        <FAQComponent/>
        <MeetTheTeamComponent/>
        <FooterComponent/>
    </div>
  )
}