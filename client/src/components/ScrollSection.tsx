import { useEffect, useState, useRef } from "react";
import LocationsMap from "../components/LocationsMap";
import type { Location } from "../types/location";

const sections = [
    {
        title: "Windmills",
        description: "Spread abundantly across Greece's rolling hills and" + 
                        " mountain tops, windmills form a significant" + 
                        " portion of renewable energy produced. Almost everywhere we went" +
                        " windmills could be seen over the horizon far in the distance," +
                        " even in the night as they emit flashing red lights that stand out." +
                        " We first encountered them in the night when leaving Athens on highway A1," +
                        " though we initially confused the red flashing lights to cellphone" +
                        " towers. Regardless, there is a real debate in Greece as to the use" +
                        " of windmills, as many locals believe that it causes irreparable damage" +
                        " to the soil and landscape (not the ones show in the background!). While on the other hand, pressure from the EU" +
                        " renewable energy laws cause more windmills to be installed across Greece.",
        image: "/assets/windmills_1.jpg", 
        category: "windmill"
    },
    {
        title: "Solar",
        description: "Utilizing the warm, dry climate with loads of sun, " + 
                        "large solar farms are built on otherwise arid land." +
                        " These were harder to spot while driving on the road as" +
                        " they don't stick out as well as the windmills! Nonetheless," +
                        " Greece has some of the largest solar farms in Europe as the" +
                        " country gets uninhibited sunlight in the summer, and has large" +
                        " areas of land that are unusable for farming. These solar farms" +
                        " also seemed to be located far away from any substantially populated" +
                        " cities. But overall I was surprised that solar farms weren't used as much as windmills.",
        image: "/assets/solar_1.jpg", 
        category: "solar"
    },
    {
        title: "Hydro",
        description: "Numerous lakes and reservoirs along our trips made up for some really" +
                        " scenic views. These reservoirs also provide for great source of" +
                        " hydro power and fresh water reserves for the long and dry summers" +
                        " that are prone to drought. Greece's terrain is uniformly mountainous, which creates" +
                        " many streams and rivers, and also valleys that can become lake beds." +
                        " In my experience, it was difficult to recognize that a body of water" +
                        " was being used to generate hydro power, but a little research on official" +
                        " power stations data helped retrospectively trace these locations from our trips.",
        image: "/assets/hydro_4.jpg", 
        category: "hydro"
    },
    {
        title: "Leiki - Farmer's Markets",
        description: "Though supermarkets are easily available in any town or city," + 
                        " there is a strong culture among the Greeks to buy local" + 
                        " and fresh produce from neighborhood farmer's markets or Leiki." +
                        " Unlike what we're used to in the States, Greek Leikis tend to be" +
                        " cheaper than buying from supermarkets and offer more variety of foods." +
                        " This culture of buying local reduces transport emissions and costs," +
                        " offering a sustainable alternative to chain stores that require great" +
                        " amounts of energy to operate." +
                        " The Leiki closest to the residences typically holds on Monday mornings" +
                        " and was a great source of our fruit and egg supply!",
        image: "/assets/leiki_1.jpg", 
        category: "leiki"
    },
    {
        title: "Recyling",
        description: "As part of our sustainability research, we interviewed locals" + 
                        " in 5 different locations in Athens to ask them about their" + 
                        " thoughts on recycling and sustainability in Greece. The 5 locations" +
                        " are marked on the map. While people in an urban city like Athens" +
                        " are generally more educated and aware of sustainability efforts," +
                        " those in more rural communities may not be, which causes the overall" +
                        " effect to be minimal. Furthermore, most people we interviewed admitted to" +
                        " not following recycling measures despite agreeing that they are important." +
                        " However, the positive is that the Greek culture is naturally a lot more" +
                        " environmentally-friendly than that of the United States :-)",
        image: "/assets/recycling_1.jpg", 
        category: "recycling"
    }

];

export default function ScrollSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [allLocations, setAllLocations] = useState<Location[]>([]);

    const sectionRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
    fetch("http://localhost:3001/api/locations")
      .then((res) => res.json())
      .then((data: Location[]) => setAllLocations(data))
      .catch((err) => console.error("Failed to fetch locations:", err));
  }, []);
    
    useEffect(() => {
        const handleScroll = () => {
        let currentIndex = 0; //

        sectionRefs.current.forEach((section, index) => {
            if (!section) return;
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.4) {
                currentIndex = index;
            }
        });

        setActiveIndex(currentIndex);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const activeSection = sections[activeIndex];

    const filteredLocations = allLocations.filter(
        (loc) => loc.category === activeSection.category
    );

    return ( 
        <>
            <div className="scroll-wrapper">
                <div className="scroll-backgrounds">
                    {sections.map((section, index) => (
                        <div
                            key={section.category}
                            className="scroll-background"
                            style={{
                                backgroundImage: `url(${section.image})`,
                                opacity: activeIndex === index ? 1 : 0,
                                    zIndex: -index, 
                            }}
                        />
                    ))}
                </div>

                <div className="scroll-content">
                    {sections.map((section, index) => (
                        <section 
                        key={section.title}
                        className="scroll-section"
                        ref={(el) => {
                            sectionRefs.current[index] = el;
                        }}>
                        <h2>{section.title}</h2>
                        <p>{section.description}</p>
                    </section> ))}
                </div>

                <div className="map-overlay active">
                    <LocationsMap locations={filteredLocations} />
                </div>
            </div>
        </>
    );
}