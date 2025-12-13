"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteraction = useRef<number | null>(null);
  const pointerDown = useRef(false);
  const rotation = useRef(0);
  const rotationSpeed = useRef(0.002);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let height = 0;
    
    if (!canvasRef.current) return;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
        height = canvasRef.current.offsetHeight;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: height * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 2.5,
      mapSamples: 20000,
      mapBrightness: 1.5,
      baseColor: [1, 1, 1],
      markerColor: [239/255, 68/255, 68/255], // Red markers for emphasis
      glowColor: [0.9, 0.9, 0.9],
      markers: [
        // Major cities where the company operates
        { location: [28.6139, 77.2090], size: 0.06 }, // Delhi, India
        { location: [19.0760, 72.8777], size: 0.05 }, // Mumbai, India
        { location: [25.2048, 55.2708], size: 0.05 }, // Dubai, UAE
        { location: [51.5074, -0.1278], size: 0.05 }, // London, UK
        { location: [40.7128, -74.0060], size: 0.05 }, // New York, USA
        { location: [35.6895, 139.6917], size: 0.05 }, // Tokyo, Japan
        { location: [52.5200, 13.4050], size: 0.05 }, // Berlin, Germany
        { location: [48.8566, 2.3522], size: 0.05 }, // Paris, France
        { location: [37.7749, -122.4194], size: 0.04 }, // San Francisco, USA
        { location: [34.0522, -118.2437], size: 0.04 }, // Los Angeles, USA
        { location: [43.6532, -79.3832], size: 0.04 }, // Toronto, Canada
        { location: [33.8688, 151.2093], size: 0.04 }, // Sydney, Australia
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        if (!pointerDown.current) {
          // Auto-rotate when not being dragged
          phi += rotationSpeed.current;
        }
        state.phi = phi;
        state.theta = 0.3;
        state.rotation = rotation.current;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 100);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center animate-fade-in">
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerDown.current = true;
          const left = e.currentTarget.getBoundingClientRect().left;
          pointerInteraction.current =
            e.clientX - left;
          canvasRef.current!.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerDown.current = false;
          pointerInteraction.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerDown.current = false;
          pointerInteraction.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onPointerMove={(e) => {
          if (pointerDown.current && pointerInteraction.current !== null) {
            const left = e.currentTarget.getBoundingClientRect().left;
            const delta = e.clientX - left - pointerInteraction.current;
            rotation.current += delta * 0.002;
            pointerInteraction.current = e.clientX - left;
          }
        }}
        style={{
          contain: "layout paint size",
          opacity: "0",
          transition: "opacity 1s ease",
          cursor: "grab",
        }}
        className="h-full w-full"
      />
    </div>
  );
}
