import { QuadraticBezierLine, Trail } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { MeshLineGeometry } from '@react-three/drei'
import { CuboidCollider } from '@react-three/rapier'
import { Ventilo } from './Ventilo/Ventilo'
import WindLines from './WindLines/WindLines'



const Wind = (props:{
    setWind:(value:number)=>void
}) => {


    const [windPosition, setWindPosition] = useState<number>(0)

    useFrame((state)=>{
        setWindPosition(Math.sin(state.clock.elapsedTime*0.3)*5)
    })
    

  return (
    <>
        <CuboidCollider  args={[8,0.5,0.5]} sensor position={[0,1.1,windPosition]} onIntersectionEnter={()=>props.setWind(1)} onIntersectionExit={()=>props.setWind(0)}/>
        <Ventilo scale={0.05} rotation-y={Math.PI*0.5} position={[-9,0.6,windPosition]}/>
        <WindLines windPosition={windPosition}/>
    </>
  )
}

export default Wind