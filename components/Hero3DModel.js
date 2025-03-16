"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";

function Model() {
  const { scene } = useGLTF("/cyborg.glb"); // Load 3D Model
  const modelRef = useRef();

  // Animate model's Y position (bouncing effect)
  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.position.y = -0.5 + Math.sin(clock.elapsedTime * 3) * 0.1; // Bounce effect
    }
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={[2.3, 2.3, 2.3]} // Keep size
      position={[0, -0.5, 0]} // Start Position
    />
  );
}

export default function Hero3DModel() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        className="w-full h-full"
        style={{ width: "100%", height: "100%" }}
        shadows
        gl={{ antialias: true, preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} /> {/* Brighter ambient light */}
          <directionalLight position={[5, 5, 5]} intensity={2} castShadow /> {/* Better depth */}
          <Model />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
