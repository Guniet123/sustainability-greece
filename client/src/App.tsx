import { useEffect, useState } from "react";
import type { Location } from "./types/location";
import LocationsList from "./components/LocationsList";

type Category = "all" | "windmill" | "solar" | "recycling" | "leiki";

function App() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<Category>("all");

  useEffect(() => {
    fetch("http://localhost:3001/api/locations")
      .then(res => res.json())
      .then((data: Location[]) => {
        setLocations(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch locations:", err);
        setLoading(false);
      });
  }, []);

  const filteredLocations =
    category === "all"
    ? locations
    : locations.filter(locations => locations.category === category);

  if (loading) {
    return <p>Loading locations...</p>;
  }

  return (
    <div>
      <h1>Sustainability Locations</h1>
      <div>
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("windmill")}>WindMills</button>
        <button onClick={() => setCategory("solar")}>Solar</button>
        <button onClick={() => setCategory("recycling")}>Recycling</button>
        <button onClick={() => setCategory("leiki")}>Leiki - Farmer's Markets</button>
      </div>

      <LocationsList locations={filteredLocations} />
    </div>
  );
}

export default App;
