import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import dotenv from "dotenv";
import { searchKnowledge } from "../data/iareKnowledge";
dotenv.config();

// ── MODE FLAGS ───────────────────────────────────────────────────────────────
// USE_LOCAL_KB=true  → Local knowledge base only (no AI, no quota)
// USE_OLLAMA=true    → Local Ollama LLM (no API key needed)
// default            → Gemini API (with local KB fallback on rate-limit)
const USE_LOCAL_KB = process.env.USE_LOCAL_KB?.toLowerCase() === "true";
const USE_OLLAMA = process.env.USE_OLLAMA?.toLowerCase() === "true";
const OLLAMA_URL = process.env.OLLAMA_URL || "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "llama3.2";

if (USE_LOCAL_KB) {
    console.log("[IARE Bot] 📚 Mode: LOCAL KNOWLEDGE BASE (all AI disabled)");
} else if (USE_OLLAMA) {
    console.log(`[IARE Bot] 🦙 Mode: OLLAMA (model: ${OLLAMA_MODEL} @ ${OLLAMA_URL})`);
} else {
    console.log("[IARE Bot] 🤖 Mode: GEMINI API (local KB used as fallback on rate-limit)");
}

// ── GEMINI SETUP ────────────────────────────────────────────────────────────
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const IARE_SYSTEM_PROMPT = `You are the official AI assistant for IARE (Institute of Aeronautical Engineering), Hyderabad (iare.ac.in). Answer ONLY IARE-specific questions. Refuse all off-topic requests with: "I can only help with IARE-related questions. Visit https://www.iare.ac.in/ or email info@iare.ac.in."

KEY FACTS:
- Established 2000 | Dundigal, Hyderabad, Telangana 500 043
- AICTE approved, JNTUH affiliated, NAAC A++, 80% programs NBA accredited
- 6337+ students, 345 faculty (40% Ph.D), 1:19 faculty-student ratio
- NIRF top 200 nationally, top 100 in Innovation

PROGRAMS: B.Tech in CSE, CSE(AI&ML), CSE(Data Science), IT, Aeronautical, ECE, EEE, ME, Civil | M.Tech | MBA | Ph.D

PLACEMENTS: 91% placed, 17% abroad, 62+ companies/year. Microsoft, Amazon, JPMorgan, IBM, Accenture, Infosys, Wipro, TCS, Deloitte, Tech Mahindra + more. PAT Officer: Dr. M Pala Prasad Reddy | pat@iare.ac.in | 9491602701

FACILITIES: Smart AC classrooms, Central Library, Wi-Fi, Bus facility (live tracking), Sports, Cafeteria, Day Care, Women's 24x7 helpline

RESEARCH: 4 centers, 18 start-ups, Rs.1015L+ grants, SRI/TIPS/VIPs/PICS programs, SAE India competitions

CONTACT: +91-9154379624 (admissions, 8am-8pm) | info@iare.ac.in | Academic: +91-91546-78977 | iare.ac.in/appointmentform.html

RULES: Never invent fees/dates/cut-offs — direct to website. Be warm and encouraging. Use bullet points.`;

const safetySettings = [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];

// ── OLLAMA CALL ─────────────────────────────────────────────────────────────
async function askOllama(
    message: string,
    history: { role: "user" | "assistant"; content: string }[]
): Promise<string> {
    // RAG: inject relevant KB snippet into system prompt for this query
    const kbSnippet = searchKnowledge(message);
    const systemPrompt = kbSnippet
        ? `${IARE_SYSTEM_PROMPT}\n\n## RELEVANT IARE INFO (use this to answer accurately):\n${kbSnippet}`
        : IARE_SYSTEM_PROMPT;

    const messages = [
        { role: "system", content: systemPrompt },
        ...history.slice(-12).map((h) => ({ role: h.role, content: h.content })),
        { role: "user", content: message },
    ];

    const res = await fetch(`${OLLAMA_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: OLLAMA_MODEL, messages, stream: false }),
    });

    if (!res.ok) {
        throw new Error(`Ollama responded with HTTP ${res.status}`);
    }

    const data = await res.json() as { message?: { content?: string } };
    return data.message?.content || "I'm sorry, I couldn't generate a response.";
}

// ── GEMINI CALL ─────────────────────────────────────────────────────────────
async function askGemini(
    message: string,
    history: { role: "user" | "assistant"; content: string }[]
): Promise<string> {
    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash-lite",
        systemInstruction: IARE_SYSTEM_PROMPT,
        safetySettings,
    });

    const geminiHistory = history.slice(-12).map((h) => ({
        role: h.role === "assistant" ? "model" : "user",
        parts: [{ text: h.content }],
    }));

    const chat = model.startChat({ history: geminiHistory });
    const result = await chat.sendMessage(message);
    return result.response.text() || "I'm sorry, I couldn't generate a response.";
}

// ── LOCAL KB RESPONSE ───────────────────────────────────────────────────────
function localResponse(message: string): { reply: string; source: "local" } {
    const localAnswer = searchKnowledge(message);
    const reply = localAnswer
        ? localAnswer
        : `I couldn't find a specific answer for that. Here's how to get help:\n\n• 🌐 Visit: https://www.iare.ac.in/\n• 📞 Call: +91 9154379624 (8 AM – 8 PM)\n• 📧 Email: info@iare.ac.in\n• 📅 Book appointment: https://iare.ac.in/appointmentform.html\n\nTry asking about: admissions, courses, placements, facilities, research, contact, or bus transport.`;
    return { reply, source: "local" };
}

// ── MAIN EXPORT ─────────────────────────────────────────────────────────────
/**
 * askAI — two modes controlled by USE_LOCAL_KB in .env
 *
 * LOCAL mode  (USE_LOCAL_KB=true):  Always use local KB, never call Gemini.
 * API mode    (USE_LOCAL_KB=false): Try Gemini, fall back to local KB on 429.
 */
export async function askAI(
    message: string,
    history: { role: "user" | "assistant"; content: string }[] = []
): Promise<{ reply: string; source: "gemini" | "local" }> {

    // ── LOCAL-ONLY MODE ──────────────────────────────────────────────────────
    if (USE_LOCAL_KB) {
        return localResponse(message);
    }

    // ── OLLAMA MODE ──────────────────────────────────────────────────────────
    if (USE_OLLAMA) {
        try {
            const reply = await askOllama(message, history);
            return { reply, source: "gemini" }; // reuse "gemini" label so the UI shows AI badge
        } catch (err: any) {
            console.warn("[IARE Bot] ⚠️  Ollama unavailable — switching to local KB fallback.", err?.message);
            const local = localResponse(message);
            return {
                reply: `${local.reply}\n\n---\n*ℹ️ Answering from local knowledge base (Ollama not reachable). Make sure Ollama is running: \`ollama serve\`.*`,
                source: "local",
            };
        }
    }

    // ── GEMINI MODE (+ fallback) ─────────────────────────────────────────────
    try {
        const reply = await askGemini(message, history);
        return { reply, source: "gemini" };
    } catch (err: any) {
        const isRateLimit =
            err?.status === 429 ||
            err?.message?.includes("429") ||
            err?.message?.includes("quota");

        if (isRateLimit) {
            console.warn("[IARE Bot] ⚠️  Gemini rate-limited — switching to local KB fallback.");
            const local = localResponse(message);
            return {
                reply: `${local.reply}\n\n---\n*ℹ️ Answering from local knowledge base (AI temporarily unavailable). For live queries visit [iare.ac.in](https://www.iare.ac.in/).*`,
                source: "local",
            };
        }

        throw err;
    }
}