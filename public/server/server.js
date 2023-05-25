const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serving the static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Define the route for the root URL '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'));
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
