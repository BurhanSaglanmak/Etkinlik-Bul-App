import React from 'react'
import "../style.css"
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'

function DetailMap({konum, latitude, longitude}) {
    
  return (
    
    <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={true} className="radius">
  <TileLayer className="radius"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[latitude, longitude]} >
    <Popup>
      {konum}
    </Popup>
  </Marker>
 
</MapContainer>
      
  )
}

export default DetailMap