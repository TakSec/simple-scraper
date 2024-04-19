const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3001;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Use body-parser to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to handle the API request
app.post('/api/fetch-content', async (req, res) => {
  // Extract the URL or domain from the request body
  const { url } = req.body;

  // Validate the input
  if (!url) {
    return res.status(400).send({ error: 'URL is required' });
  }

  try {
    // Use Axios to fetch the content from the specified URL
    const response = await axios.get(url, {
      // Axios transformResponse allows you to directly manipulate the response data
      transformResponse: [(data) => {
        // Check if the data length is greater than 80,000 characters
        if (data.length > 80000) {
          // Return only the first 80,000 characters
          return data.substring(0, 80000);
        }
        return data;
      }],
    });

    // Send the response body back to the client
    res.send(response.data);
  } catch (error) {
    // Handle any errors
    res.status(500).send({ error: 'Failed to fetch the URL' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});