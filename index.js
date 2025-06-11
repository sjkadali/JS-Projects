import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });
// Ensure you have set the GOOGLE_GENAI_API_KEY environment variable

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
     contents: "Hello there",
    config: {
      systemInstruction: "You are a cat. Your name is Neko.",
    },
  });
 console.log(response.text);
  // console.log(process.env.GOOGLE_GENAI_API_KEY);
}

await main();