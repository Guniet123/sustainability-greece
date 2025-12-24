import type { Location } from "../types/location";

interface LocationsListProps {
    locations: Location[];
}

function LocationsList ({ locations } : LocationsListProps) {
    return (
        <ul>
            {locations.map(location => (
                <li key={location.id}>
                <h3>{location.category}</h3>
                <p>{location.city}</p>
                <p>{location.description}</p>
                </li>
            ))}
        </ul>
    );
}

export default LocationsList;