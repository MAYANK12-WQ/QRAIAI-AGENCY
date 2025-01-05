import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Torus, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

const QuantumRings = () => {
  const ringsRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ringsRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    ringsRef.current.rotation.y = Math.cos(t * 0.2) * 0.3;
    ringsRef.current.rotation.z = Math.sin(t * 0.4) * 0.1;
  });

  return (
    <group ref={ringsRef}>
      {[0, 1, 2].map((ring, index) => (
        <Torus
          key={ring}
          args={[3 - index * 0.5, 0.15, 32, 100]}
          rotation={[Math.PI / 3 * index, Math.PI / 2, 0]}
        >
          <meshPhongMaterial
            color={index === 0 ? "#4B0082" : index === 1 ? "#9400D3" : "#FFD700"}
            emissive={index === 0 ? "#4B0082" : index === 1 ? "#9400D3" : "#FFD700"}
            emissiveIntensity={0.5}
            shininess={100}
          />
        </Torus>
      ))}
    </group>
  );
};

const QuantumCore = () => {
  const coreRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    coreRef.current.scale.x = 1 + Math.sin(t * 2) * 0.1;
    coreRef.current.scale.y = 1 + Math.cos(t * 2) * 0.1;
    coreRef.current.scale.z = 1 + Math.sin(t * 2) * 0.1;
  });

  return (
    <mesh ref={coreRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial
        color="#FFD700"
        emissive="#FFD700"
        emissiveIntensity={0.5}
        shininess={100}
      />
    </mesh>
  );
};

const QuantumLogo = () => {
  return (
    <div className="w-48 h-48">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight
          position={[-10, -10, -10]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />
        
        <Center>
          <QuantumRings />
          <QuantumCore />
        </Center>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

export default QuantumLogo;