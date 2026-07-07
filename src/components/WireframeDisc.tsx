"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float } from "@react-three/drei";
import * as THREE from "three";

function Disc({ color = "#3b82f6" }: { color?: string }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        state.mouse.y * 0.3,
        0.1
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        state.mouse.x * 0.3,
        0.1
      );
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <cylinderGeometry args={[3, 3, 0.2, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.05} />
          <Edges color={color} threshold={15} />
        </mesh>
        {/* Inner detail ring */}
        <mesh>
          <cylinderGeometry args={[1.5, 1.5, 0.22, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.05} />
          <Edges color={color} threshold={15} />
        </mesh>
        {/* Radial lines */}
        {[...Array(8)].map((_, i) => (
          <mesh key={i} rotation={[0, (i * Math.PI) / 4, 0]}>
            <boxGeometry args={[6, 0.05, 0.05]} />
            <meshBasicMaterial color={color} transparent opacity={0.3} />
          </mesh>
        ))}
      </Float>
    </group>
  );
}

export default function WireframeDisc() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Disc />
      </Canvas>
    </div>
  );
}
