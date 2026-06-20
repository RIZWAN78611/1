"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function MechanicalPart() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        hovered ? state.mouse.y * 0.5 : state.clock.getElapsedTime() * 0.2,
        0.1
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        hovered ? state.mouse.x * 0.5 : state.clock.getElapsedTime() * 0.3,
        0.1
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        {/* A stylized "precision part" using a torus knot with some technical feel */}
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color={hovered ? "#3b82f6" : "#60a5fa"}
          speed={2}
          distort={0.2}
          radius={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

const ThreeScene = () => {
  return (
    <div className="w-full h-[500px] lg:h-[600px] relative">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1000} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={500} color="#3b82f6" />

        <MechanicalPart />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      {/* Decorative tech overlay */}
      <div className="absolute inset-0 pointer-events-none border border-blue-500/10 rounded-full scale-90 animate-pulse" />
      <div className="absolute inset-0 pointer-events-none border border-blue-500/5 rounded-full scale-110" />
    </div>
  );
};

export default ThreeScene;
