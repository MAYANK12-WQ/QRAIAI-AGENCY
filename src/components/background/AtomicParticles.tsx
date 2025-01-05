import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const ParticleField = () => {
  const particlesRef = useRef();
  const particleCount = 100;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 50;
      pos[i + 1] = (Math.random() - 0.5) * 50;
      pos[i + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(particleCount * 3);
    const color = new THREE.Color();
    for (let i = 0; i < particleCount * 3; i += 3) {
      color.setHSL(Math.random() * 0.2 + 0.5, 0.8, 0.5);
      cols[i] = color.r;
      cols[i + 1] = color.g;
      cols[i + 2] = color.b;
    }
    return cols;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.1;
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlesRef.current.geometry.attributes.position.array[i] += Math.sin(time + i) * 0.01;
      particlesRef.current.geometry.attributes.position.array[i + 1] += Math.cos(time + i) * 0.01;
      particlesRef.current.geometry.attributes.position.array[i + 2] += Math.sin(time + i) * 0.01;
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
};

const AtomicParticles = () => {
  return (
    <div className="absolute inset-0 bg-[#0A0014]">
      <Canvas camera={{ position: [0, 0, 50], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <ParticleField />
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

export default AtomicParticles;