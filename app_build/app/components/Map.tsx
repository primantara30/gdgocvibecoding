'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with Next.js
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function Map() {
  const [mounted, setMounted] = useState(false);
  
  // Center of the target sub-district (Example coordinates)
  const mapCenter: [number, number] = [-6.200000, 106.816666]; 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading Spatial Engine...</div>;

  return (
    <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={true} style={{ width: '100%', height: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Example Household Marker */}
      <Marker position={[-6.205000, 106.816666]} icon={customIcon}>
        <Popup>
          <strong>Household ID: 8a2f...</strong><br/>
          Eligibility Score: 87.5<br/>
          Status: <span style={{color: 'var(--color-accent)'}}>Eligible</span>
        </Popup>
      </Marker>

      {/* Geofencing Radius Example */}
      <Circle center={[-6.205000, 106.816666]} radius={50} pathOptions={{ color: 'var(--color-secondary)', fillColor: 'var(--color-secondary)', fillOpacity: 0.2 }} />
    </MapContainer>
  );
}
