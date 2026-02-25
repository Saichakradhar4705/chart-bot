import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import chatRoute from "./routes/chat";
import { iareKnowledge } from "./data/iareKnowledge";

dotenv.config();

const app = express();
const USE_LOCAL_KB = process.env.USE_LOCAL_KB?.toLowerCase() === "true";

app.use(cors());
app.use(express.json());

// Serve the chatbot frontend
app.use(express.static(path.join(__dirname, "../public")));

// Config endpoint — lets the frontend know which mode is active
app.get("/config", (_req, res) => {
    res.json({
        mode: USE_LOCAL_KB ? "local" : "gemini",
        topics: USE_LOCAL_KB
            ? iareKnowledge.map((e, i) => ({ id: i, topic: e.topic }))
            : [],
    });
});

// Direct topic lookup by index (used in local/FAQ mode)
app.get("/topic/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const entry = iareKnowledge[id];
    if (!entry) return res.status(404).json({ error: "Topic not found" });
    res.json({ topic: entry.topic, answer: entry.answer, source: "local" });
});

app.use("/chat", chatRoute);

app.listen(5000, () =>
    console.log("🚀 College AI Chatbot running on http://localhost:5000")
);
