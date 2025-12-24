export interface Location {
    category: "windmill" | "recycling" | "leiki" | "solar";
    latitude: number;
    longitude: number;
    description: string;
    id: string;
    city: string;
}