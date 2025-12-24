import express from "express";
import cors from "cors";
import { locations } from "./data/locations";
 
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/locations", (_req, res) => {
    res.json(locations);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});