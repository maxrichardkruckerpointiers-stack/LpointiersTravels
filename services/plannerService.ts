import { GoogleGenAI, Type, Schema } from "@google/genai";
import { PlannerState, Language, ItineraryPlan } from "../types";

// @ts-ignore
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "A catchy title for the trip" },
    summary: { type: Type.STRING, description: "A 2 sentence summary of the vibe" },
    activities: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          time: { type: Type.STRING, description: "Morning, Afternoon, or specific time" },
          activity: { type: Type.STRING, description: "Name of the activity" },
          location: { type: Type.STRING, description: "Specific place name (e.g. Playa Blanca, Cafe del Mar)" },
          description: { type: Type.STRING, description: "Short appealing description" },
          priceEstimate: { type: Type.STRING, description: "Estimated price per person (e.g. $50 USD or $200.000 COP). Be realistic for tourists." },
          category: { type: Type.STRING, enum: ["Beach", "History", "Food", "Party", "Nature"] }
        },
        required: ["time", "activity", "location", "description", "priceEstimate", "category"]
      }
    }
  },
  required: ["title", "summary", "activities"]
};

export const generateSmartItinerary = async (preferences: PlannerState, lang: Language): Promise<ItineraryPlan | null> => {
  // @ts-ignore
  if (!process.env.API_KEY) {
    console.error("API Key missing");
    return null;
  }

  const currency = lang === 'es' ? 'COP (Colombian Pesos)' : 'USD';
  const languageName = lang === 'es' ? 'Spanish' : 'English';

  try {
    const prompt = `
      Create a ${preferences.days} itinerary for a ${preferences.group} group in Cartagena, Colombia.
      Vibe: ${preferences.vibe}.
      Budget Level: ${preferences.budget}.
      Language: Output strictly in ${languageName}.
      Currency: Show prices in ${currency}.
      
      Suggest specific real places (Islands, Restaurants, Squares).
      For 'priceEstimate', use standard tourist market rates for 2024/2025.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: responseSchema,
        systemInstruction: "You are an expert local tour guide for Cartagena. Be realistic with prices.",
        temperature: 0.7,
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as ItineraryPlan;
    }
    return null;
  } catch (error) {
    console.error("Planner Error:", error);
    return null;
  }
};