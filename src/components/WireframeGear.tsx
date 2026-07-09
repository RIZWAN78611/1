"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Gear({ color = "#3b82f6" }: { color?: string }) {
  const meshRef = useRef<THREE.Group>(null);
  const gearRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.005;
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        state.mouse.x * 0.2,
        0.1
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        -state.mouse.y * 0.2,
        0.1
      );
    }
  });

  // Create gear shape
  const shape = new THREE.Shape();
  const innerRadius = 2.5;
  const outerRadius = 3.2;
  const teeth = 12;
  const toothWidth = 0.4;

  for (let i = 0; i < teeth; i++) {
    const angle = (i / teeth) * Math.PI * 2;
    const nextAngle = ((i + 1) / teeth) * Math.PI * 2;

    const x1 = Math.cos(angle - toothWidth) * innerRadius;
    const y1 = Math.sin(angle - toothWidth) * innerRadius;

    const x2 = Math.cos(angle - toothWidth) * outerRadius;
    const y2 = Math.sin(angle - toothWidth) * outerRadius;

    const x3 = Math.cos(angle + toothWidth) * outerRadius;
    const y3 = Math.sin(angle + toothWidth) * outerRadius;

    const x4 = Math.cos(angle + toothWidth) * innerRadius;
    const y4 = Math.sin(angle + toothWidth) * innerRadius;

    if (i === 0) shape.moveTo(x1, y1);
    shape.lineTo(x2, y2);
    shape.lineTo(x3, y3);
    shape.lineTo(x4, y4);

    // Connect to next tooth
    const midX = Math.cos(angle + (nextAngle - angle) / 2) * innerRadius;
    const midY = Math.sin(angle + (nextAngle - angle) / 2) * innerRadius;
    shape.lineTo(midX, midY);
  }

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={gearRef}>
          <extrudeGeometry
            args={[
              shape,
              { depth: 0.8, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.1 },
            ]}
          />
          <meshBasicMaterial color={color} transparent opacity={0.1} />
          <Edges color={color} threshold={15} />
        </mesh>
      </Float>
    </group>
  );
}

export default function WireframeGear() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Gear />
      </Canvas>
    </div>
  );
}
