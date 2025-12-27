import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "gsk_api",
  dangerouslyAllowBrowser: true
});

export async function askGroq(prompt) {
  const chatCompletion = await groq.chat.completions.create({
   model: "llama-3.1-8b-instant",

    messages: [
      { role: "system", content: "You are Lexa, a smart voice assistant." },
      { role: "user", content: prompt }
    ]
  });

  return chatCompletion.choices[0].message.content;
}
