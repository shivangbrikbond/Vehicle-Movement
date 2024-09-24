const express = require('express');
const router = express.Router();



// Endpoint to fetch vehicle data
router.get('/vehicle', (req, res) => {
  res.json(vehicleData);
});

module.exports = router;



let vehicleData = [
  { "latitude": 17.385044, "longitude": 78.486671, "timestamp": "2024-07-20T10:00:00Z" },
  { "latitude": 17.385045, "longitude": 78.486672, "timestamp": "2024-07-20T10:00:05Z" }
  
  
  
  
  
];

setInterval(() => {
  const lastPosition = vehicleData[vehicleData.length - 1];
  const newLatitude = lastPosition.latitude + 0.00001;
  const newLongitude = lastPosition.longitude + 0.00001;
  const newPosition = {
    latitude: newLatitude,
    longitude: newLongitude,
    timestamp: new Date().toISOString()
  };
  vehicleData.push(newPosition);
}, 3000);

router.get('/vehicle', (req, res) => {
  res.json(vehicleData);
});

module.exports = router;