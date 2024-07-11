import OpenAI from "openai";

const openapi = new OpenAI();

async function main() {
  console.log("Hello, world!");
  const completion = await openapi.chat.completions.create({
    messages: [
      { role: "user", content: "What is the capital of the United States?" },
    ],
    model: "gpt-3.5-turbo",
    max_tokens: 100,
  });
  console.log(completion.choices[0].message.content);
}

main();
