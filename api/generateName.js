// API route file (e.g., /api/generateName.js)

const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      {
        prompt: "generate a random name and surname in only 2 words",
        max_tokens: 5
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` // Securely using environment variable
        }
      }
    );

    const name = response.data.choices[0].text.trim();
    res.status(200).send({ name });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred' });
  }
};
