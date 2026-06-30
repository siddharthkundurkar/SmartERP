import Hero from "../components/Hero";
import LandingNavbar from "../components/LandingNavbar";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <LandingNavbar />
            <Hero />
            <Features />
            <Footer />
        </>
    );
}