import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const SphereWithLight: React.FC = () => {
  // Create a reference to the point light
  const pointLightRef = useRef<THREE.PointLight>(null);

  // Access the Three.js scene and camera
  const { scene, camera } = useThree();

  // Update the light's position based on mouse coordinates
  const updateLightPosition = (event: MouseEvent) => {
    if (pointLightRef.current) {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      const vector = new THREE.Vector3(x, y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const newPos = camera.position.clone().add(dir.multiplyScalar(distance));
      pointLightRef.current.position.copy(newPos);
    }
  };

  // Add the event listener on mount and remove it on unmount
  useEffect(() => {
    window.addEventListener('mousemove', updateLightPosition);
    return () => {
      window.removeEventListener('mousemove', updateLightPosition);
    };
  }, []);

  // Update the light's position in the render loop
  useFrame(() => {
    if (pointLightRef.current) {
      scene.add(pointLightRef.current);
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      {/* Add a ref to the point light */}
      <pointLight ref={pointLightRef} position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <OrbitControls />
    </>
  );
};

export default SphereWithLight;
