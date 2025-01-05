import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Cloud } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const Nebula = () => {
  const groupRef = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.1;
    groupRef.current.rotation.x = Math.sin(t) * 0.05;
    groupRef.current.rotation.y = Math.cos(t) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Left side nebula */}
      <group position={[-10, 0, 0]}>
        <Cloud
          opacity={0.3}
          speed={0.3}
          width={10}
          depth={1.5}
          segments={20}
          color="#FF1493" // Neon Pink
        />
      </group>

      {/* Right side nebula */}
      <group position={[10, 0, 0]}>
        <Cloud
          opacity={0.2}
          speed={0.2}
          width={10}
          depth={2}
          segments={15}
          color="#00FFFF" // Cyan
        />
      </group>

      {/* Additional accent clouds */}
      <Cloud
        opacity={0.15}
        speed={0.4}
        width={20}
        depth={2.5}
        segments={18}
        color="#9400D3" // Purple
        position={[0, -5, 0]}
      />
    </group>
  );
};

const NebulaEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Nebula />
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default NebulaEffect;