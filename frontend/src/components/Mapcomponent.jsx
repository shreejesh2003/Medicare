// MapComponent.jsx
import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const hospitalLocation = { lat: 12.8720103, lng: 74.8462787 };
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: hospitalLocation
    });
    const marker = new window.google.maps.Marker({
      position: hospitalLocation,
      map: map,
      title: "KMC Hospital, Mangaluru"
    });
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default MapComponent;
