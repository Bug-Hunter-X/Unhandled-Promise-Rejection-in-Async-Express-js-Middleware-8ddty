const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data asynchronously (e.g., database operation)
  setTimeout(() => {
    // Simulate an error
    if (data.id === 1) {
      throw new Error('Simulated error');
    }
    res.json({ message: 'Data processed successfully' });
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));