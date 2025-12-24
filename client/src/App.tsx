import { useEffect, useState } from "react";
import type { Location } from "./types/location";

function App() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  if (loading) {
    return <p>Loading locations...</p>;
  }

  return (
    <div>
      <h1>Sustainability Locations</h1>
      <ul>
        {locations.map(location => (
          <li key={location.id}>
            <h3>{location.category}</h3>
            <p>{location.city}</p>
            <p>{location.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
