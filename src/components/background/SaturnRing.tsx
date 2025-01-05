import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const Ring = () => {
  const ringRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ringRef.current.rotation.x = Math.sin(t * 0.2) * 0.3;
    ringRef.current.rotation.y = t * 0.2;
  });

  return (
    <group ref={ringRef}>
      {/* Saturn's Rings */}
      <Torus args={[4, 0.4, 32, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <MeshDistortMaterial
          color="#FFD700"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive="#FFD700"
          emissiveIntensity={0.5}
        />
      </Torus>

      {/* Saturn's Core */}
      <Sphere args={[2, 32, 32]}>
        <MeshDistortMaterial
          color="#4B0082"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          emissive="#4B0082"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </group>
  );
};

const SaturnRing = () => {
  return (
    <div className="absolute top-20 left-20 w-96 h-96">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Ring />
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default SaturnRing;