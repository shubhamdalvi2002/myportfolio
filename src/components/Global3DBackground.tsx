import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function FloatingBlob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.1;
    meshRef.current.rotation.y = t * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5} position={[2, 0, -2]}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
          metalness={0.1}
          transparent
          opacity={0.15}
        />
      </Sphere>
    </Float>
  );
}

export default function Global3DBackground() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none bg-bg">
      <div className="noise" />
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#6366f1" intensity={1} />
        <FloatingBlob />
      </Canvas>
      
      {/* Subtle gradients */}
      <div className="accent-glow top-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent/10" />
      <div className="accent-glow bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-500/10" />
    </div>
  );
}

