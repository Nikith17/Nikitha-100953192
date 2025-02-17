const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Successfully my application is running by visiting the URL provided by Cloud Run');
});

// Listen on the environment's PORT or default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
