import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const WalkingManAnimation: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { camera, scene, gl } = useThree();
  const clock = new THREE.Clock();
  let mixer: THREE.AnimationMixer | null = null;

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('https://threejs.org/examples/models/gltf/SimpleSkin/SimpleSkin.gltf', (gltf) => {
      const model = gltf.scene;
      if (groupRef.current) {
        groupRef.current.add(model);
      }

      const animations = gltf.animations;
      if (animations && animations.length > 0) {
        mixer = new THREE.AnimationMixer(model);
        const walkAction = mixer.clipAction(animations[0]); // Use the first animation clip
        walkAction.play();
      } else {
        console.warn('No animations found in the model.');
      }
    }, undefined, (error) => {
      console.error('An error occurred while loading the model:', error);
    });
  }, []);

  useFrame(() => {
    if (mixer) {
      const delta = clock.getDelta();
      mixer.update(delta);
    }
  });

  return (
    <>
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
      <group ref={groupRef} />
      <mesh receiveShadow rotation-x={-Math.PI / 2} position-y={-1}>
        <planeGeometry args={[100, 100]} />
        <meshPhongMaterial color={0x000000} depthWrite={false} />
      </mesh>
      <OrbitControls />
    </>
  );
};

const WalkingMan: React.FC = () => {
  return (
    <Canvas camera={{ position: [1, 2, -3], fov: 45 }}>
      <WalkingManAnimation />
    </Canvas>
  );
};

export default WalkingMan;
