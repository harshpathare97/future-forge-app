import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const body = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are an AI career advisor.

Analyze this user data and generate a future dashboard.

User Data:
${JSON.stringify(body)}

Return ONLY valid JSON in this format:

{
  "score": number,
  "careers": ["career1", "career2", "career3"],
  "skills": ["skill1", "skill2", "skill3"],
  "roadmap": ["step1", "step2", "step3"],
  "risks": ["risk1", "risk2"]
}
`;

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    console.log("AI Raw Response:", text);

    // Remove markdown if AI wraps JSON in ```json
    const cleaned = text.replace(/```json|```/g, "").trim();

    let json;

    try {
      json = JSON.parse(cleaned);
    } catch (err) {
      console.error("JSON parse error:", err);

      return Response.json(
        { error: "Invalid AI response format" },
        { status: 500 },
      );
    }

    return Response.json(json);
  } catch (error) {
    console.error("Prediction error:", error);

    return Response.json({ error: "Prediction failed" }, { status: 500 });
  }
}
