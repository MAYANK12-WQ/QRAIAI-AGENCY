import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const Planet = ({ position, color, size, mousePosRef }) => {
  const meshRef = useRef();
  const initialPos = useRef(position);

  useFrame(() => {
    if (!meshRef.current || !mousePosRef.current) return;

    // Calculate distance between mouse and planet
    const dx = mousePosRef.current.x - meshRef.current.position.x;
    const dy = mousePosRef.current.y - meshRef.current.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Interactive effect radius
    const radius = 5;
    
    if (distance < radius) {
      // Move away from cursor
      const angle = Math.atan2(dy, dx);
      const repelStrength = (1 - distance / radius) * 0.1;
      
      meshRef.current.position.x = initialPos.current[0] - Math.cos(angle) * repelStrength;
      meshRef.current.position.y = initialPos.current[1] - Math.sin(angle) * repelStrength;
    } else {
      // Return to original position
      meshRef.current.position.x += (initialPos.current[0] - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (initialPos.current[1] - meshRef.current.position.y) * 0.05;
    }

    // Rotate planet
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
};

const PlanetarySystem = () => {
  const mousePosRef = useRef(new THREE.Vector3());
  const { camera } = useThree();

  const planets = [
    { color: '#FF1493', size: 1.2, position: [-8, 4, 0] },
    { color: '#00FFFF', size: 1.5, position: [8, -4, 0] },
    { color: '#FFD700', size: 1.8, position: [-4, -6, 0] },
    { color: '#9400D3', size: 1.4, position: [6, 6, 0] },
    { color: '#4B0082', size: 1.6, position: [0, 8, 0] }
  ];

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
      
      mousePosRef.current.set(mouse.x * 10, mouse.y * 10, 0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {planets.map((planet, index) => (
        <Planet
          key={index}
          {...planet}
          mousePosRef={mousePosRef}
        />
      ))}
    </>
  );
};

const InteractivePlanets = () => {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <PlanetarySystem />
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

export default InteractivePlanets;