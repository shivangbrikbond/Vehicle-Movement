



import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 }, // Default center coordinates
        zoom: 8, // Zoom level
      });

      // Define multiple vehicle paths
      const vehiclePaths = [
        {
          name: 'Vehicle 1',
          pathCoordinates: [
            { lat: -34.397, lng: 150.644 },
            { lat: -35.397, lng: 151.644 },
            { lat: -36.397, lng: 152.644 },
          ],
          strokeColor: '#FF0000', // Red for Vehicle 1
        },
        {
          name: 'Vehicle 2',
          pathCoordinates: [
            { lat: -33.867, lng: 151.207 },
            { lat: -34.867, lng: 152.207 },
            { lat: -35.867, lng: 153.207 },
          ],
          strokeColor: '#0000FF', // Blue for Vehicle 2
        },
        {
          name: 'Vehicle 3',
          pathCoordinates: [
            { lat: -32.397, lng: 149.644 },
            { lat: -33.397, lng: 150.644 },
            { lat: -34.397, lng: 151.644 },
          ],
          strokeColor: '#00FF00', // Green for Vehicle 3
        },
      ];

      // Loop through each vehicle path and create a polyline
      vehiclePaths.forEach(vehicle => {
        const polyline = new window.google.maps.Polyline({
          path: vehicle.pathCoordinates,
          geodesic: true,
          strokeColor: vehicle.strokeColor,
          strokeOpacity: 1.0,
          strokeWeight: 2,
        });

        // Set the polyline on the map
        polyline.setMap(map);
      });
    };

    // Check if the script is already loaded
    const existingScript = document.querySelector(
      `script[src="https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}"]`
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = () => initMap(); // Ensure initMap is called once script is loaded
      script.onerror = () => console.error('Failed to load Google Maps API');
      document.head.appendChild(script);
    } else if (window.google && window.google.maps) {
      initMap(); // Call initMap if API is already loaded
    }
  }, []); // Only run this effect once when the component mounts

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapComponent;
