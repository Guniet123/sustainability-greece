import express from "express";
import cors from "cors";
import { locations } from "./data/locations";
 
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: "*"
}));
app.use(express.json());

// Check the health status of the server
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Gets the list of locations
app.get("/api/locations", (_req, res) => {
    res.json(locations);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});