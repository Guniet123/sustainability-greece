import Navbar from "../components/Navbar";
import "../styles/Trips.css";

const photos = [
  { src: "../assets/trips/photo1.jpg", location: "Mycenae" },
  { src: "../assets/trips/photo2.jpg", location: "Athens" },
  { src: "../assets/trips/photo3.jpg", location: "Temple of Poseidon" },
  { src: "../assets/trips/photo4.jpg", location: "Delphi" },
  { src: "../assets/trips/photo5.jpg", location: "Aegina" },
  { src: "../assets/trips/photo6.jpg", location: "Mykonos" },
  { src: "../assets/trips/photo7.jpg", location: "Aegina" },
  { src: "../assets/trips/photo8.jpg", location: "Nafplio" },
  { src: "../assets/trips/photo9.jpg", location: "Delphi" },
  { src: "../assets/trips/photo10.jpg", location: "Meteora" },
  { src: "../assets/trips/photo11.jpg", location: "Aegina" },
  { src: "../assets/trips/photo12.jpg", location: "Athens" },
  { src: "../assets/trips/photo13.jpg", location: "Meteora" },
  { src: "../assets/trips/photo14.jpg", location: "Thermopylae" },
  { src: "../assets/trips/photo15.jpg", location: "Delphi" },
  { src: "../assets/trips/photo16.jpg", location: "Naflpio" },
  { src: "../assets/trips/photo17.jpg", location: "Mykonos" },
  { src: "../assets/trips/photo18.jpg", location: "Arachova" },
  { src: "../assets/trips/photo19.jpg", location: "Hydra" },
];

export default function Trips() {
  return (
    <>
    <Navbar />
    <main className="trips-page">
      <section className="trips-hero">
        <div className="trips-hero-overlay" />
        <h1>Our Trips Across Greece</h1>
      </section>

      <section className="trips-map">
        <img
          src="../assets/trips/route-map.jpg"
          alt="Route across Greece"
        />
      </section>

      <section className="trips-gallery">
        {photos.map((p, i) => (
          <div key={i} className="trip-photo">
            <img src={p.src} alt={p.location} />
            <span className="photo-label">{p.location}</span>
          </div>
        ))}
      </section>
    </main>
    </>
  );
}
