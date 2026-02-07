import { GoogleGenAI } from "@google/genai";
import { Biodata } from "../types";

const getClient = () => {
  let apiKey: string | undefined;
  try {
    // Safely check if process.env exists to avoid ReferenceError in browser
    if (typeof process !== 'undefined' && process.env) {
      apiKey = process.env.API_KEY;
    }
  } catch (e) {
    console.warn("Could not access process.env");
  }

  if (!apiKey) {
    console.warn("API_KEY not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateProfessionalSummary = async (data: Biodata): Promise<string> => {
  const ai = getClient();
  if (!ai) return "Please configure your API Key to use AI features.";

  const prompt = `
    Write a warm, professional, and engaging "About Me" summary for a matrimonial biodata profile based on the following details. 
    Keep it under 80 words. Tone should be respectful, sincere, and family-oriented.
    
    Name: ${data.personal.fullName}
    Occupation: ${data.education.occupation} at ${data.education.companyName}
    Education: ${data.education.qualification}
    Hobbies: ${data.hobbies}
    Family Values: ${data.family.familyType} family background.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "Could not generate summary.";
  } catch (error) {
    console.error("AI Generation Error:", error);
    return "Error generating summary. Please try again later.";
  }
};