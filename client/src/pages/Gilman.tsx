import gilman_2 from "/assets/gilman_2.jpg";
import "../styles/Gilman.css";
import Navbar from "../components/Navbar";

export default function Gilman() {
    return (
        <>
        <Navbar />
        <main className="gilman-page">
            <section className="gilman-hero">
                <img 
                    src={gilman_2}
                    alt="Benjamin A. Gilman International Scholarship"
                    className="gilman-image"
                />
            </section>

            <section className="gilman-content">
                <h1>Benjamin A. Gilman Scholarship</h1>

                <a
                    href="https://www.gilmanscholarship.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gilman-link"
                >
                    Visit the Gilman Scholarship website to learn more and apply
                </a>

                <p>
                    My study abroad experience was possible in part due to the 
                    financial support of the Gilman International Scholarship. 
                    I applied to this scholarship just a couple of months before my 
                    program began, and received the funds before I left the country,
                    so I would highly recommend applying to it! Also, I was helped
                    greatly throughout my application by the UW Office of Merit 
                    Scholarships; the advisors there reviewed by essays and helped
                    make my application stand out. I also wanted to mention that since
                    the Gilman scholarship is a federal program, recipients get lots 
                    of support during and after their study abroad. For example, while
                    in Greece, I received the invitation to visit the U.S. Embassy in 
                    Athens. I ultimately couldn't go there but that support network 
                    exists for you when you travel. Also, past recipients get access
                    to events and resources from the Gilman program that greatly help
                    in career searching post college.
                </p>

            </section>
        </main>
        </>
    );
}