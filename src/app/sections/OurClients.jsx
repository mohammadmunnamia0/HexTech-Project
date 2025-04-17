"use client"
import { useEffect, useRef } from "react";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world";

export default function OurClients() {
  const map = useRef(null);
  useEffect(() => {
    if (map.current) return;
    map.current = new jsVectorMap({
      map: "world",
      selector: "#map",
      zoomOnScroll: false,
      zoomButtons: false,
      markers: [
        { name: "Bangladesh", coords: [23.685, 90.3563] },
        { name: "Canada", coords: [56.1304, -106.3468] },
        { name: "USA", coords: [37.0902, -95.7129] },
        { name: "United Kingdom", coords: [51.5074, -0.1278] }
      ],
      lines: [
        { from: "Bangladesh", to: "Canada" },
        { from: "Bangladesh", to: "USA" },
        { from: "Bangladesh", to: "United Kingdom" },
        { from: "Canada", to: "USA" },
        { from: "USA", to: "United Kingdom" },
        { from: "Canada", to: "United Kingdom" }
      ],
      labels: {
        markers: {
          render: (marker) => marker.name,
          style: {
            fill: "#880808",
            fontSize: "14px",
            fontWeight: "bold",
          }
        }
      },
      markerStyle: {
        initial: {
          fill: "#880808",
          stroke: "#880808",
        }
      },
      lineStyle: {
        animation: true
      }
    });
  }, []);
  return (
    <div className="bg-black py-24">
      {/* Heading for the section */}
      <h2 className="text-white text-center font-bold text-3xl mb-8">Global Reach</h2>
      {/* Map */}
      <div id="map" style={{ height: "600px", width: "100%" }} />
    </div>
  );
}
