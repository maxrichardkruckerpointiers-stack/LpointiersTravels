import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Safe access to environment variables to prevent runtime crashes in browser environments
// where 'process' might not be defined globally.
const getApiKey = () => {
  try {
    // @ts-ignore
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      // @ts-ignore
      return process.env.API_KEY;
    }
    // Check for Vite-style env vars if process is missing
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_KEY) {
       // @ts-ignore
       return import.meta.env.VITE_API_KEY;
    }
  } catch (e) {
    console.warn("Could not access environment variables safely.");
  }
  return '';
};

const apiKey = getApiKey();

// Initialize only if key exists to avoid immediate errors, handle gracefully in sendMessage
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

const SYSTEM_INSTRUCTION = `
You are "Carly", an expert local tour guide for Cartagena, Colombia. 
You work for "Cartagena Explorer" agency.
Your tone is warm, enthusiastic, and helpful.
You should encourage users to book a tour through our website forms.

Here is the context of the tours we offer:
1. Historic Walled City Walk (Cultural) - $45 - 3 hours. Highlights: San Felipe Castle, Clock Tower.
2. Rosario Islands Snorkel (Adventure) - $85 - 8 hours. Highlights: Coral reefs, private boat, lunch.
3. Street Food Safari (Gastronomic) - $55 - 4 hours. Highlights: Arepas, Ceviche, Local market.
4. Sunset Sailing (Family) - $65 - 2 hours. Highlights: Open bar, sunset views, music.

If asked about prices, currency is USD.
Keep answers concise (under 80 words) as users are on mobile.
`;

export const sendMessageToGemini = async (
  message: string,
  history: ChatMessage[]
): Promise<string> => {
  if (!apiKey || !ai) {
    return "I'm currently offline (Configuration missing). Please contact us directly via the form!";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I couldn't quite catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the spirits of Cartagena right now. Please try again later.";
  }
};