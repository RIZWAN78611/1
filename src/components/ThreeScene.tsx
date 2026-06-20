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
      meshRef.current.rotation.y += 0.008;
      meshRef.current.rotation.z += 0.003;

      // Mouse reaction - subtle tilt
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        state.mouse.y * 0.2,
        0.05
      );
    }
  });

  const wireColor = hovered ? "#00f0ff" : "#3b82f6";
  const edgeColor = hovered ? "#ffffff" : "#00f0ff";

  return (
    <group
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* Precision 17-teeth spur gear */}
      <group>
        {/* Main Body */}
        <mesh>
          <cylinderGeometry args={[1.8, 1.8, 0.6, 64]} />
          <meshStandardMaterial color="#050505" metalness={1} roughness={0.1} />
          <Edges color={edgeColor} threshold={15} />
        </mesh>

        {/* Central Hub */}
        <mesh>
          <cylinderGeometry args={[0.6, 0.6, 0.9, 32]} />
          <meshStandardMaterial color="#050505" metalness={1} roughness={0.1} />
          <Edges color={edgeColor} />
        </mesh>

        {/* Teeth - 17 count as requested */}
        {[...Array(17)].map((_, i) => (
          <mesh key={i} rotation={[0, (i * Math.PI * 2) / 17, 0]}>
            <boxGeometry args={[0.4, 0.6, 4.6]} />
            <meshStandardMaterial color="#050505" metalness={1} roughness={0.1} />
            <Edges color={edgeColor} />
          </mesh>
        ))}

        {/* Inner Hub Detailing */}
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 1.0, 16]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2} />
        </mesh>
      </group>

      {/* Decorative Floating Tech Rings */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.5, 0.01, 16, 100]} />
          <meshBasicMaterial color={wireColor} transparent opacity={0.3} />
        </mesh>
        <mesh rotation={[0.2, 0.5, 0]}>
          <torusGeometry args={[2.8, 0.005, 16, 100]} />
          <meshBasicMaterial color={wireColor} transparent opacity={0.1} />
        </mesh>
      </group>
    </group>
  );
}

const ThreeScene = () => {
  return (
    <div className="w-full h-[600px] flex items-center justify-center relative">
      <Canvas shadows gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={35} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={500} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={200} color="#3b82f6" />
        <pointLight position={[0, 0, 5]} intensity={100} color="#60a5fa" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <TechnicalGear />
        </Float>
      </Canvas>

      {/* Decorative technical UI elements around the 3D asset */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[400px] h-[400px] border border-cyan-500/10 rounded-full animate-[spin_40s_linear_infinite]" />
        <div className="absolute w-[450px] h-[450px] border border-blue-500/5 rounded-full animate-[spin_60s_linear_infinite_reverse]" />

        {/* Subtle corner markings */}
        <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-cyan-500/30" />
        <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-cyan-500/30" />
        <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-cyan-500/30" />
        <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-cyan-500/30" />
      </div>
    </div>
  );
};

export default ThreeScene;
