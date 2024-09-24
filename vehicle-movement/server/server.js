
const express = require('express');
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicle'); // Import the routes module

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Use the routes from routes/vehicle.js
app.use('/api',vehicleRoutes);

app.listen(port || process.env.PORT, () => {
  console.log(`Server running at http://localhost:${port}`);
});
