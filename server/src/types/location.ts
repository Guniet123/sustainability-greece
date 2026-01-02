// Interface to define what a point of location is, 
// including its type, coordinates, and closest city.
export interface Location {
    category: "windmill" | "recycling" | "leiki" | "solar" | "hydro";
    latitude: number;
    longitude: number;
    description: string;
    id: string;
    city: string;
}