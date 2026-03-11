import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { skills, interests, personality, education, dream } = body;
    console.log("Received data for prediction:", body);
    const prompt = `
A person has the following:

Skills: ${skills}
Interests: ${interests}
Personality: ${personality}
Education: ${education}
Dream Career: ${dream}

Based on future trends (2035):

1. Suggest 3 realistic careers
2. Skills they should develop
3. A step-by-step roadmap
4. Risks or things that might go wrong in their plan

Respond ONLY in JSON format with keys:
careers, skills, roadmap, risks
`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: "application/json" },
    });

    const json = result.response.toJSON(); // <-- raw JS object
    console.log("Generated prediction:", json);
    return Response.json(json);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Prediction failed" }, { status: 500 });
  }
}
