"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FlamingoModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const gltf = useLoader(GLTFLoader, 'https://threejs.org/examples/models/gltf/Flamingo.glb');
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  const clock = new THREE.Clock(); // Add this line

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const onMouseMove = (event: MouseEvent) => {
    setMouse({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: - (event.clientY / window.innerHeight) * 2 + 1,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);


  useEffect(() => {
    if (gltf.animations && gltf.animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(gltf.scene);
      const flightAction = mixerRef.current.clipAction(gltf.animations[0]); // Use the first animation clip (flamingo_flyA_)
      flightAction.play();
    } else {
      console.warn('No animations found in the model.');
    }
  }, [gltf]);


  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  useFrame(() => {
    if (mixerRef.current) {
      const delta = clock.getDelta();
      mixerRef.current.update(delta);
    }

    if (groupRef.current) {
      const targetRotation = -mouse.x * Math.PI;
      groupRef.current.rotation.y += (targetRotation - groupRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} scale={[0.01, 0.01, 0.01]} />
    </group>
  );
};

const FlamingoFlight: React.FC = () => {
  return (
    <Canvas camera={{ position: [2, 0, 0], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[-3, 10, -10]}
        castShadow
        shadow-camera-top={2}
        shadow-camera-bottom={-2}
        shadow-camera-left={-2}
        shadow-camera-right={2}
        shadow-camera-near={0.1}
        shadow-camera-far={40}
      />
      <FlamingoModel />
      <mesh receiveShadow rotation-x={-Math.PI / 2} position-y={-2}>
        <planeGeometry args={[4, 4]} />
        <meshPhongMaterial color={0x0099ff} depthWrite={true} />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default FlamingoFlight;
