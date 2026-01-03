import ScrollSection from "../components/ScrollSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Mapbar from "../components/Mapbar";

export default function Home() {
    return (
        <>
            <Navbar />

            <Mapbar />

            <Hero />

            <ScrollSection />
        </>
    );

}