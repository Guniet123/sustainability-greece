import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gilman from "./pages/Gilman";
import Trips from "./pages/Trips";
import { useJsApiLoader } from "@react-google-maps/api";

const libraries: ("marker")[] = ["marker"];

export default function App() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) {
    return (
      <div style={{ color: "red", padding: "20px" }}>
        Failed to load Google Maps
      </div>
    );
  }

  if (!isLoaded) {
    return <div style={{ color: "white", padding: "20px" }}>Loading map...</div>;
  }

  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gilman" element={<Gilman />} />
        <Route path="/trips" element={<Trips />} />
      </Routes>
    </Router>
  );
}

