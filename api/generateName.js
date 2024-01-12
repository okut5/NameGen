const axios = require('axios');

module.exports = async (req, res) => {
  const gptModel = "gpt-3.5-turbo"; // You can change the model here

  try {
    const response = await axios.post(
      `https://api.openai.com/v1/engines/${gptModel}/completions`,
      {
        prompt: "generate a random name and surname in only 2 words",
        max_tokens: 10
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    const name = response.data.choices[0].text.trim();
    console.log('Name generated:', name); // Logging the generated name
    res.status(200).send({ name });
  } catch (error) {
    console.error('Error occurred:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data); // Log more response details
    }
    res.status(500).send({ error: 'An error occurred' });
  }
};
