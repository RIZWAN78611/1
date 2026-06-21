"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float } from "@react-three/drei";
import * as THREE from "three";

const Gear = ({ teeth = 17, radius = 2, thickness = 0.5 }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const gearShape = useMemo(() => {
    const shape = new THREE.Shape();
    const toothDepth = 0.4;

    for (let i = 0; i < teeth; i++) {
      const angle = (i / teeth) * Math.PI * 2;
      const nextAngle = ((i + 0.5) / teeth) * Math.PI * 2;
      const midAngle = ((i + 0.25) / teeth) * Math.PI * 2;
      const midAngle2 = ((i + 0.75) / teeth) * Math.PI * 2;

      if (i === 0) {
        shape.moveTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
      }

      // Tooth profile
      shape.lineTo(Math.cos(midAngle) * (radius + toothDepth), Math.sin(midAngle) * (radius + toothDepth));
      shape.lineTo(Math.cos(midAngle2) * (radius + toothDepth), Math.sin(midAngle2) * (radius + toothDepth));
      shape.lineTo(Math.cos(nextAngle + (0.5/teeth)*Math.PI*2) * radius, Math.sin(nextAngle + (0.5/teeth)*Math.PI*2) * radius);
    }

    // Inner hole
    const holePath = new THREE.Path();
    holePath.absarc(0, 0, 0.6, 0, Math.PI * 2, true);
    shape.holes.push(holePath);

    return shape;
  }, [teeth, radius]);

  const extrudeSettings = {
    steps: 2,
    depth: thickness,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 1
  };

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <extrudeGeometry args={[gearShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.8}
          roughness={0.2}
          wireframe={true}
          emissive="#3b82f6"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Glow effect edges */}
      <mesh rotation={[0, 0, 0]}>
        <extrudeGeometry args={[gearShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#3b82f6"
          wireframe={true}
          transparent={true}
          opacity={0.3}
        />
      </mesh>
    </group>
  );
};

const ThreeScene = () => {
  return (
    <div className="h-[500px] w-full relative">
      {/* Decorative HUD elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-500/30" />
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-blue-500/30" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-blue-500/30" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-500/30" />

        {/* Animated scanning line */}
        <motion.div
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-20"
        />
      </div>

      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Gear />
        </Float>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

import { motion } from "framer-motion";
export default ThreeScene;
