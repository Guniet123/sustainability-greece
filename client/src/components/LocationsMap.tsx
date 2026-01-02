import { GoogleMap} from "@react-google-maps/api";
import type { Location } from "../types/location";
import { useEffect, useRef } from "react";

// Prop passed from App containing the list of locations
type Props = {
    locations: Location[];
}

const markerIcons: Record<string, string> = {
    windmill: "🌀",
    solar: "☀️",
    hydro: "💧",
    leiki: "🌿",
    recycling: "♻️"
};

// format the map box
const containerStyle = {
    width: "100%",
    height: "100%",
};

// General center of Greece
const defaultCenter = {
    lat: 37.9386,
    lng: 22.6322
}

function createMarkerContent(loc: Location) {
    const container = document.createElement("div");
    container.className = `custom-marker ${loc.category}`;

    const icon = document.createElement("div");
    icon.className = "marker-icon";
    icon.innerText = markerIcons[loc.category] ?? "📍";

    const tooltip = document.createElement("div");
    tooltip.className = "marker-tooltip";
    tooltip.innerHTML = `
        <strong>${loc.city}</strong>
        <div>${loc.description}</div>
    `;

    container.appendChild(icon);
    container.appendChild(tooltip);
    
    return container;
}

export default function LocationsMap({locations}: Props) {
    const mapRef = useRef<google.maps.Map | null>(null);
    const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);

    useEffect(() => {
        if (!mapRef.current || !window.google) {
            return;
        }

        markersRef.current.forEach((marker) => (marker.map = null));
        markersRef.current = [];

        if (locations.length === 0) return;

        const bounds = new google.maps.LatLngBounds();

        locations.forEach((loc) => {
            const marker = new google.maps.marker.AdvancedMarkerElement({
                position: { lat: loc.latitude, lng: loc.longitude },
                map: mapRef.current,
                title: loc.city,
                content: createMarkerContent(loc)
            });

            markersRef.current.push(marker);
            bounds.extend(marker.position as google.maps.LatLng);
        });

        mapRef.current.fitBounds(bounds);

    }, [locations]);

    return (
        <div style={{width: "100%", height: "100%"}}>
        <GoogleMap mapContainerStyle={containerStyle}
            center={defaultCenter} zoom={7}
            onLoad={(map) => {
                mapRef.current = map;
            }}
            options={{
                
                mapTypeId: "hybrid",
                disableDefaultUI: true,
                zoomControl: true,
            }}>
            
        </GoogleMap>
        </div>
    );
}