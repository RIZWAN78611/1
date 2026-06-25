"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, PerspectiveCamera, Environment, Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

function SpurGear({ teeth = 17, radius = 2, thickness = 0.5 }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const gearGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const toothDepth = 0.4;
    const toothWidth = (Math.PI * 2) / teeth / 2;

    for (let i = 0; i < teeth; i++) {
      const angle = (i * Math.PI * 2) / teeth;

      // Outer point
      shape.lineTo(
        Math.cos(angle - toothWidth) * (radius + toothDepth),
        Math.sin(angle - toothWidth) * (radius + toothDepth)
      );
      shape.lineTo(
        Math.cos(angle + toothWidth) * (radius + toothDepth),
        Math.sin(angle + toothWidth) * (radius + toothDepth)
      );

      // Inner point
      const nextAngle = ((i + 1) * Math.PI * 2) / teeth;
      shape.lineTo(
        Math.cos(nextAngle - toothWidth) * radius,
        Math.sin(nextAngle - toothWidth) * radius
      );
    }

    // Add center hole
    const holePath = new THREE.Path();
    holePath.absarc(0, 0, 0.6, 0, Math.PI * 2, true);
    shape.holes.push(holePath);

    return new THREE.ExtrudeGeometry(shape, {
      depth: thickness,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.05,
      bevelSegments: 5,
    });
  }, [teeth, radius, thickness]);

  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.z += 0.005;

      // Mouse interaction
      const targetRotationX = (state.mouse.y * Math.PI) / 8;
      const targetRotationY = (state.mouse.x * Math.PI) / 8;

      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX + Math.PI / 4, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={gearGeometry}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        color={hovered ? "#3b82f6" : "#64748b"}
        metalness={0.9}
        roughness={0.1}
        envMapIntensity={1}
      />
    </mesh>
  );
}

function Particles({ count = 100 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    const random = new THREE.Vector3();
    const seed = 12345;
    const pseudoRandom = (s: number) => {
      const x = Math.sin(s) * 10000;
      return x - Math.floor(x);
    };

    for (let i = 0; i < count; i++) {
      random.set(
        pseudoRandom(seed + i * 3) - 0.5,
        pseudoRandom(seed + i * 3 + 1) - 0.5,
        pseudoRandom(seed + i * 3 + 2) - 0.5
      ).multiplyScalar(15);
      p[i * 3] = random.x;
      p[i * 3 + 1] = random.y;
      p[i * 3 + 2] = random.z;
    }
    return p;
  }, [count]);

  return (
    <Points positions={points}>
      <PointMaterial size={0.05} color="#3b82f6" transparent opacity={0.4} sizeAttenuation />
    </Points>
  );
}

export default function ThreeScene() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
       setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full bg-slate-900/10 rounded-3xl animate-pulse flex items-center justify-center">
        <span className="text-slate-800 text-sm font-mono tracking-widest uppercase">Initializing Engine...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />

        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={1} />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <SpurGear />
        </Float>

        <Particles />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
