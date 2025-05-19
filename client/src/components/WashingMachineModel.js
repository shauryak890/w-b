import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function WashingMachineModel(props) {
  // Note: We're using a simple 3D model representation
  // In production, you would replace this with a proper GLTF model
  const group = useRef();
  
  // We're creating a simulated washing machine model with basic geometries
  // until a real model is loaded

  // Simple animation for the 3D model
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      group.current.rotation.y = Math.sin(t / 4) / 8;
      group.current.position.y = Math.sin(t / 1.5) / 10;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* This is a placeholder for the actual 3D model */}
      {/* When the actual model is loaded, this would be replaced with its meshes */}
      <mesh
        castShadow
        receiveShadow
        position={[0, 0, 0]}
      >
        <boxGeometry args={[1, 1.5, 1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        position={[0, 0, 0.51]}
      >
        <circleGeometry args={[0.4, 32]} />
        <meshStandardMaterial color="#90cbff" />
      </mesh>
    </group>
  );
}
