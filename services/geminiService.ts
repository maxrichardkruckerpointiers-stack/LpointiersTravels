import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Thanks to vite.config.ts 'define', process.env.API_KEY is available in the browser build.
// @ts-ignore
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Carly", an expert local tour guide for Cartagena, Colombia. 
You work for "EcoExplorer Mundo" agency (formerly Lpointiers).
Your tone is warm, enthusiastic, and helpful.
You emphasize our core values: Unforgettable experiences, high quality, fair prices, and eco-sustainability.
You should encourage users to book a tour through our website forms using the promo code ECO20.

Here is the context of the tours we offer:
1. Cartagena Colonial & Legendaria (Cultural) - $45 - 4 hours. Highlights: Walled City, History, Museums.
2. Paraíso Islas del Rosario VIP (Adventure) - $95 - Full Day. Highlights: Crystal water, private boat, food.
3. Gastro-Tour: Sabores del Caribe (Food) - $65 - 3.5 hours. Highlights: Market food, exotic fruits.
4. Atardecer Mágico en Velero (Family/Romantic) - $79 - 2 hours. Highlights: Sunset, open bar.

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