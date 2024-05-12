import {React, useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default function MapComponent({position , ...props}){
    
    const [center, setCenter] = useState([30.0444, 31.2357]);
    useEffect(() => {
      if (position)
        setCenter(position);
    }, [position]);

    return(
        <MapContainer center={center} zoom={15} scrollWheelZoom={false} style={{ height: '50vh', width: '100wh' }} {...props}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  
                  <Marker position={center}>
                    <Popup style={{textAlign: 'center'}}>
                    {center[0].toPrecision(4)}, {center[1].toPrecision(4)}
                    </Popup>
                  </Marker>

                </MapContainer> 
    )

}