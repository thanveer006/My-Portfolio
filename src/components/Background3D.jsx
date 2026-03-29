import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* eslint-disable react-hooks/purity */

const ParticleField = () => {
  const points = useRef();
  const count = 3000;
  
  // Generate random positions and soft colors for points
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorOptions = [
      new THREE.Color('#F3B026'), // lelab-yellow
      new THREE.Color('#FFFFFF'), // lelab-light
      new THREE.Color('#F3B026'), // lelab-yellow (weighted more)
      new THREE.Color('#FFFFFF'), // lelab-light (weighted more)
    ];

    for (let i = 0; i < count; i++) {
      // Create a long "road" or field spreading deep into the z-axis
      pos[i * 3] = (Math.random() - 0.5) * 40;       // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;   // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;  // z

      // Assign a random soft color
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, [count]);

  // Subtle rotation and forward movement
  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.05;
      points.current.position.z += delta * 2;
      
      // Loop points back
      if (points.current.position.z > 50) {
        points.current.position.z = -50;
      }
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-20">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <fog attach="fog" args={['#111111', 10, 50]} />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default Background3D;
