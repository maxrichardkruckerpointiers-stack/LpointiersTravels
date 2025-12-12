import { GoogleGenAI } from "@google/genai";
import { PlannerState } from "../types";

// @ts-ignore
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const PLANNER_SYSTEM_INSTRUCTION = `
You are an elite travel planner for "Lpointiers Travels Tours". 
Create a short, exciting itinerary based on the user's input.
Focus on suggesting specific locations in Cartagena like:
- Rosario Islands (Islas del Rosario)
- Cholón (Party island)
- Playa Blanca / Barú
- Tierra Bomba
- The Walled City (Ciudad Amurallada)
- Getsemaní

Format the output using simple Markdown (bullet points, bold text).
Keep it under 200 words.
ALWAYS finish by recommending the user clicks "Book Now" to make this plan a reality.
`;

export const generateSmartItinerary = async (preferences: PlannerState): Promise<string> => {
  // @ts-ignore
  if (!process.env.API_KEY) {
    return "## System Offline\n\nPlease check your API Key configuration to use the Smart Planner.";
  }

  try {
    const prompt = `
      Create a ${preferences.days} itinerary for a ${preferences.group} group.
      Vibe: ${preferences.vibe}.
      Budget Level: ${preferences.budget}.
      
      Include specific entertainment plans, islands, and sustainable options if possible.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: PLANNER_SYSTEM_INSTRUCTION,
        temperature: 0.8,
      }
    });

    return response.text || "I couldn't generate a plan right now. Please try again.";
  } catch (error) {
    console.error("Planner Error:", error);
    return "Error connecting to the travel brain. Please try again later.";
  }
};