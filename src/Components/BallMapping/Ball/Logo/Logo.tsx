import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";


type GLTFResult = GLTF & {
  nodes: {
    Logo: THREE.Mesh;
  };
  materials: {};
};

const Logo = () => {

    const { nodes, materials } = useGLTF("/Models/Logo.glb") as unknown as GLTFResult;

  return (
    
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo.geometry}
        rotation={[Math.PI*0.75, Math.PI*0.5, Math.PI*0.5]}
        scale={0.18}
    >
        <meshStandardMaterial color={0X493423}/>
    </mesh>
    
  )
}

useGLTF.preload("/Models/Logo.glb");

export default Logo