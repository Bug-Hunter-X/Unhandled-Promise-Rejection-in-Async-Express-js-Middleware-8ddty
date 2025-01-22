const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res, next) => {
  const data = req.body;
  setTimeout(() => {
    if (data.id === 1) {
      const err = new Error('Simulated error');
      err.status = 500; // Set appropriate status code
      next(err); // Pass error to Express's error handling middleware
    } else {
      res.json({ message: 'Data processed successfully' });
    }
  }, 1000);
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(err.status || 500).json({ error: err.message });
});
app.listen(3000, () => console.log('Server listening on port 3000'));