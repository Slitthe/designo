import React, { useEffect, useRef } from "react";
import L from "leaflet";

function MapCard({ coordinates }) {
  const { x, y } = coordinates;

  const mapRef = useRef(null);
  useEffect(() => {
    let map;
    if (mapRef.current) {
      map = L.map(mapRef.current, {
        center: [x, y],
        zoom: 12,
      });

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map);

      L.marker([x, y]).addTo(map);
    }

    return () => {
      map?.remove();
    };
  }, [x, y]);
  return (
    <>
      <div ref={mapRef} className="w-full h-full z-1"></div>
    </>
  );
}

export default MapCard;
