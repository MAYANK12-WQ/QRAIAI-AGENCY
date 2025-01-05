import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const Sun = ({ mousePosition }) => {
  const sunRef = useRef();
  const glowRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    // Pulsating effect
    const scale = 1 + Math.sin(t) * 0.1;
    sunRef.current.scale.set(scale, scale, scale);
    
    // Rotate the sun
    sunRef.current.rotation.y += 0.005;
    
    // Interactive glow effect based on mouse position
    if (mousePosition.current) {
      const distX = mousePosition.current.x - sunRef.current.position.x;
      const distY = mousePosition.current.y - sunRef.current.position.y;
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      // Adjust glow intensity based on mouse proximity
      const glowIntensity = Math.max(1.5, 2 - distance / 10);
      glowRef.current.material.emissiveIntensity = glowIntensity;
    }
  });

  return (
    <group>
      {/* Core sun sphere */}
      <Sphere ref={sunRef} args={[2, 64, 64]}>
        <MeshDistortMaterial
          color="#FFD700"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive="#FFD700"
          emissiveIntensity={2}
        />
      </Sphere>
      
      {/* Outer glow sphere */}
      <Sphere ref={glowRef} args={[2.5, 64, 64]}>
        <MeshDistortMaterial
          color="#FFD700"
          attach="material"
          transparent
          opacity={0.3}
          distort={0.2}
          speed={1}
          roughness={1}
          metalness={0}
          emissive="#FFD700"
          emissiveIntensity={1.5}
        />
      </Sphere>
    </group>
  );
};

const GlowingSun = () => {
  const mousePosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mousePosition.current = {
      x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
      y: -((event.clientY - rect.top) / rect.height) * 2 + 1
    };
  };

  return (
    <div 
      className="absolute inset-0 z-0"
      onMouseMove={handleMouseMove}
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Sun mousePosition={mousePosition} />
        <EffectComposer>
          <Bloom
            intensity={2}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default GlowingSun;