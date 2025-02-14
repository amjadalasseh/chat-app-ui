import axios from "axios";
import { fetchBotResponse } from "./chatService";

jest.mock("axios");

describe("fetchBotResponse", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return the AI-generated response when API call succeeds", async () => {
    const mockedResponse = {
      data: {
        candidates: [
          { content: { parts: [{ text: "Hello, how can I help you?" }] } },
        ],
      },
    };

    (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue(
      mockedResponse,
    );

    const result = await fetchBotResponse("Hi there!");

    expect(result).toBe("Hello, how can I help you?");
    expect(axios.post).toHaveBeenCalledWith(
      "undefined?key=undefined",
      {
        contents: [{ parts: [{ text: "Hi there!" }] }],
      },
      { headers: { "Content-Type": "application/json" } },
    );
  });

  it("should return a default response if the AI does not return a valid response", async () => {
    (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({
      data: {},
    });

    const result = await fetchBotResponse("Tell me a joke");

    expect(result).toBe("I'm not sure how to respond to that.");
  });

  it("should return an error message when the API call fails", async () => {
    (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValue(
      new Error("Network Error"),
    );

    const result = await fetchBotResponse("Hi");

    expect(result).toBe("Oops! Something went wrong with AI.");
  });

  it("should return a fallback response when API_KEY is missing", async () => {
    process.env.NEXT_PUBLIC_GEMINI_API_KEY = "";

    const result = await fetchBotResponse("Hello");

    expect(result).toBe("Oops! Something went wrong with AI.");
  });
});
