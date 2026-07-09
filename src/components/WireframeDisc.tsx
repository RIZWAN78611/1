"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float, Text, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Disc({ color = "#3b82f6" }: { color?: string }) {
  const meshRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.z += 0.005;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        state.mouse.y * 0.5,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        state.mouse.x * 0.5,
        0.05
      );
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z -= 0.02;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z += 0.03;
      ring2Ref.current.rotation.x = Math.sin(time) * 0.1;
    }
    if (coreRef.current) {
      coreRef.current.scale.setScalar(1 + Math.sin(time * 3) * 0.1);
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={3} rotationIntensity={0.5} floatIntensity={0.7}>
        {/* Outer Main Disc */}
        <mesh>
          <cylinderGeometry args={[3.2, 3.2, 0.15, 64]} />
          <meshBasicMaterial color={color} transparent opacity={0.05} />
          <Edges color={color} threshold={15} />
        </mesh>

        {/* Outer Technical Ring - Hexagonal */}
        <mesh ref={ring1Ref}>
          <cylinderGeometry args={[3.6, 3.6, 0.1, 6, 1, true]} />
          <Edges color={color} threshold={1} />
        </mesh>

        {/* Mid Ring with high detail */}
        <mesh ref={ring2Ref}>
          <cylinderGeometry args={[2.4, 2.4, 0.4, 48, 1, true]} />
          <Edges color={color} threshold={5} />
        </mesh>

        {/* Central Core - Distorted Sphere for "AI/Energy" feel */}
        <mesh ref={coreRef}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <MeshDistortMaterial
            color={color}
            speed={2}
            distort={0.3}
            transparent
            opacity={0.4}
          />
          <Edges color="#fff" />
        </mesh>

        {/* Dynamic Data lines */}
        {[...Array(16)].map((_, i) => (
          <mesh key={i} rotation={[0, (i * Math.PI) / 8, 0]}>
            <boxGeometry args={[6.8, 0.01, 0.01]} />
            <meshBasicMaterial color={color} transparent opacity={0.4} />
          </mesh>
        ))}

        {/* Circular pulse rings */}
        {[1, 1.5, 2].map((radius, i) => (
          <mesh key={`pulse-${i}`} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius, radius + 0.02, 64]} />
            <meshBasicMaterial color={color} transparent opacity={0.2} />
          </mesh>
        ))}

        {/* Measurement markers */}
        {[...Array(36)].map((_, i) => (
          <group key={`m-${i}`} rotation={[0, 0, (i * Math.PI) / 18]}>
            <mesh position={[3.4, 0, 0]}>
              <boxGeometry args={[0.3, 0.02, 0.02]} />
              <meshBasicMaterial color={i % 9 === 0 ? "#fff" : color} />
            </mesh>
          </group>
        ))}

        {/* Technical Text */}
        <Text
          position={[0, 4.2, 0]}
          fontSize={0.25}
          color={color}
          fontWeight="bold"
        >
          UAU PRECISION CORE v2.0
        </Text>

        <Text
          position={[0, -4.2, 0]}
          fontSize={0.15}
          color={color}
          opacity={0.5}
        >
          TOLERANCE MONITORING: ACTIVE
        </Text>
      </Float>
    </group>
  );
}

export default function WireframeDisc() {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 12], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Disc />
      </Canvas>
    </div>
  );
}
