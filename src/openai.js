// import Groq from "groq-sdk";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.AI_APIKEY,
});

export async function callAI(prop) {
  const chatCompletion = await getGroqChatCompletion(prop);
  // Print the completion returned by the LLM.
  return chatCompletion.choices[0]?.message?.content || "";
}

async function getGroqChatCompletion(prop) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You're an English teacher. Just check the sentences and provide the right one then explain",
      },
      {
        role: "user",
        content: prop,
      },
    ],
    model: "llama3-8b-8192",
  });
}

// module.exports = { callAI };
