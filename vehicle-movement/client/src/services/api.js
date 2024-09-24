const fetchVehicleData = async () => {
  const response = await fetch('http://localhost:3001/vehicle');
  const data = await response.json();
  return data;
};

export { fetchVehicleData };