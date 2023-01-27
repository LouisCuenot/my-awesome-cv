
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Sphere: THREE.Mesh;
    Circle: THREE.Mesh;
    Sphere001: THREE.Mesh;
    Sphere002: THREE.Mesh;
  };
  materials: {
    Brown: THREE.MeshStandardMaterial;
  };
};

export function Ventilo(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Models/Ventilo.glb") as unknown as GLTFResult;

  const ventiloGroup = useRef<THREE.Mesh>(null!)

  useFrame((state)=>ventiloGroup.current.rotation.y = state.clock.elapsedTime*5)

  return (
    <group {...props} dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials.Brown}
        position={[0, 10.66, 0.09]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.72, 1.83, 1.72]}
        ref={ventiloGroup}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials.Brown}
          position={[0, -0.05, -5.39]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.66, 6.49, 0.66]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials.Brown}
          position={[4.88, -0.05, 3.08]}
          rotation={[-Math.PI / 2, 0, -2.09]}
          scale={[0.66, 6.49, 0.66]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002.geometry}
          material={materials.Brown}
          position={[-4.85, -0.05, 3.08]}
          rotation={[Math.PI / 2, 0, Math.PI / 3]}
          scale={[0.66, 6.49, 0.66]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Models/Ventilo.glb");