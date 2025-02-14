import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const GEMINI_URL = process.env.NEXT_PUBLIC_GEMINI_URL;

const apiConfig = {
  headers: { "Content-Type": "application/json" },
};

/**
 * Fetch AI-powered response from Google Gemini.
 */
export async function fetchBotResponse(userMessage: string): Promise<string> {
  try {
    const response = await axios.post(
      `${GEMINI_URL}?key=${API_KEY}`,
      {
        contents: [{ parts: [{ text: userMessage }] }],
      },
      apiConfig,
    );

    return (
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm not sure how to respond to that."
    );
  } catch (error) {
    console.error("❌ AI response failed:", error);

    return "Oops! Something went wrong with AI.";
  }
}

export const fetchUser = async (id: number) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  return response.data;
};
