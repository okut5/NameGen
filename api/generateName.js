// API route file (e.g., /api/generateName.js)

const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
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
    console.error('Error occurred:', error.message); // Logging the error message
    res.status(500).send({ error: 'An error occurred' });
  }
};
