import { Router, Request, Response } from "express";
import { askAI } from "../services/openaiService";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        const { message, history } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message is required." });
        }

        const { reply, source } = await askAI(message, history || []);
        res.json({ reply, source });

    } catch (err: any) {
        console.error("[Chat Route Error]", err?.message || err);
        res.status(500).json({
            error: "Something went wrong. Please try again or contact IARE at info@iare.ac.in."
        });
    }
});

export default router;