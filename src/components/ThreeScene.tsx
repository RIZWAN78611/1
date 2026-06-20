"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Edges } from "@react-three/drei";
import * as THREE from "three";

function TechnicalGear() {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth continuous rotation
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.002;

      // Mouse reaction when hovered
      if (hovered) {
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          state.mouse.y * 0.5,
          0.1
        );
      }
    }
  });

  return (
    <group
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* Central Hub */}
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 0.8, 32]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
        <Edges color={hovered ? "#60a5fa" : "#3b82f6"} />
      </mesh>

      {/* Gear Plate */}
      <mesh>
        <cylinderGeometry args={[2, 2, 0.4, 40]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
        <Edges color={hovered ? "#60a5fa" : "#3b82f6"} />
      </mesh>

      {/* Teeth (Spur Gear approach) */}
      {[...Array(20)].map((_, i) => (
        <mesh key={i} rotation={[0, (i * Math.PI * 2) / 20, 0]} position={[0, 0, 0]}>
          <boxGeometry args={[0.4, 0.5, 4.2]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
          <Edges color={hovered ? "#93c5fd" : "#60a5fa"} />
        </mesh>
      ))}

      {/* Inner detailing */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.2, 0.05, 16, 100]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

const ThreeScene = () => {
  return (
    <div className="w-full h-[500px] lg:h-[600px] relative">
      <Canvas shadows gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={40} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={500} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={200} color="#3b82f6" />
        <pointLight position={[0, 0, 5]} intensity={100} color="#60a5fa" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <TechnicalGear />
        </Float>
      </Canvas>

      {/* Decorative tech overlay with glowing rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[300px] h-[300px] border border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute w-[350px] h-[350px] border border-blue-400/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
        <div className="absolute w-[200px] h-[200px] border-t-2 border-blue-500/30 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default ThreeScene;
