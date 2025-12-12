import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Thanks to vite.config.ts 'define', process.env.API_KEY is available in the browser build.
// @ts-ignore
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Carly", an expert local tour guide for Cartagena, Colombia. 
You work for "Lpointiers Travels Tours" agency.
Your tone is warm, enthusiastic, and helpful.
You should encourage users to book a tour through our website forms.

Here is the context of the tours we offer:
1. Historic Walled City Walk (Cultural) - $59 - 3 hours. Highlights: San Felipe Castle, Clock Tower.
2. Rosario Islands Snorkel (Adventure) - $109 - 8 hours. Highlights: Coral reefs, private boat, lunch.
3. Street Food Safari (Gastronomic) - $69 - 4 hours. Highlights: Arepas, Ceviche, Local market.
4. Sunset Sailing (Family) - $85 - 2 hours. Highlights: Open bar, sunset views, music.

If asked about prices, currency is USD.
Keep answers concise (under 80 words) as users are on mobile.
`;

export const sendMessageToGemini = async (
  message: string,
  history: ChatMessage[]
): Promise<string> => {
  // @ts-ignore
  if (!process.env.API_KEY) {
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