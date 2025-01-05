import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Trail } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';

const Planet = ({ radius, orbitSpeed, rotationSpeed, color, size, distortSpeed, trailColor }) => {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame(({ clock }) => {
    // Orbit rotation
    const t = clock.getElapsedTime() * orbitSpeed;
    groupRef.current.rotation.y = t;
    
    // Self rotation
    meshRef.current.rotation.y += rotationSpeed;
    meshRef.current.rotation.x += rotationSpeed * 0.5;
  });

  return (
    <group ref={groupRef}>
      <group position={[radius, 0, 0]}>
        <Trail
          width={5}
          length={8}
          color={new THREE.Color(trailColor)}
          attenuation={(t) => t * t}
        >
          <Sphere ref={meshRef} args={[size, 32, 32]}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={0.4}
              speed={distortSpeed}
              roughness={0.2}
              metalness={0.8}
              emissive={color}
              emissiveIntensity={0.5}
            />
          </Sphere>
        </Trail>
      </group>
    </group>
  );
};

const PlanetarySystem = () => {
  const planets = [
    {
      color: '#FF1493', // Hot Pink
      size: 1.2,
      radius: 8,
      orbitSpeed: 0.5,
      rotationSpeed: 0.02,
      distortSpeed: 0.5,
      trailColor: '#FF69B4'
    },
    {
      color: '#00FFFF', // Cyan
      size: 1.5,
      radius: 12,
      orbitSpeed: 0.4,
      rotationSpeed: 0.015,
      distortSpeed: 0.6,
      trailColor: '#40E0D0'
    },
    {
      color: '#FFD700', // Gold
      size: 1.8,
      radius: 16,
      orbitSpeed: 0.3,
      rotationSpeed: 0.01,
      distortSpeed: 0.4,
      trailColor: '#FFA500'
    },
    {
      color: '#9400D3', // Purple
      size: 1.4,
      radius: 20,
      orbitSpeed: 0.25,
      rotationSpeed: 0.025,
      distortSpeed: 0.3,
      trailColor: '#8A2BE2'
    },
    {
      color: '#4B0082', // Indigo
      size: 1.6,
      radius: 24,
      orbitSpeed: 0.2,
      rotationSpeed: 0.018,
      distortSpeed: 0.7,
      trailColor: '#483D8B'
    },
    {
      color: '#7B68EE', // Medium Slate Blue
      size: 1.3,
      radius: 28,
      orbitSpeed: 0.15,
      rotationSpeed: 0.022,
      distortSpeed: 0.5,
      trailColor: '#6A5ACD'
    },
    {
      color: '#00FF7F', // Spring Green
      size: 1.7,
      radius: 32,
      orbitSpeed: 0.1,
      rotationSpeed: 0.012,
      distortSpeed: 0.6,
      trailColor: '#00FA9A'
    }
  ];

  return (
    <Canvas camera={{ position: [0, 30, 60], fov: 60 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <spotLight
        position={[-10, -10, -10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />

      {planets.map((planet, index) => (
        <Planet key={index} {...planet} />
      ))}

      <EffectComposer>
        <Bloom
          intensity={2}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
        <ChromaticAberration
          offset={[0.002, 0.002]}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default PlanetarySystem;