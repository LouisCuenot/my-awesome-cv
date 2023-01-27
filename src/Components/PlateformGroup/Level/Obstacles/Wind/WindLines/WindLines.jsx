import { QuadraticBezierLine } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, {useRef} from 'react'
import { Vector3 } from 'three'

const WindLines = (props) => {

  const {sin, cos, PI} = Math

  const windGroupRef = useRef()

  useFrame((state)=>{
    windGroupRef.current.rotation.x = state.clock.elapsedTime*3
    windGroupRef.current.scale.x = state.clock.elapsedTime*0.5%2
    windGroupRef.current.position.x = (state.clock.elapsedTime*0.5%2) * 4 - 8
    
  })

  return (
    <group position={[-8,1.2,props.windPosition]} ref={windGroupRef} scale={[4,0.6,0.6]}>
        <QuadraticBezierLine
          start={[0,1,0]}
          mid={new Vector3(2,sin(11*PI/6),cos(11*PI/6))}
          end={[4,sin(7*PI/6),cos(7*PI/6)]}
          color={0xffffff}
          lineWidth={1}
        />   
        <QuadraticBezierLine
          start={[0,sin(7*PI/6),cos(7*PI/6)]}
          mid={new Vector3(2,1,0)}
          end={[4,sin(11*PI/6),cos(11*PI/6)]}
          color={0xffffff}
          lineWidth={1}
        />  
        <QuadraticBezierLine
          start={[0,sin(11*PI/6),cos(11*PI/6)]}
          mid={new Vector3(2,sin(7*PI/6),cos(7*PI/6))}
          end={[4,1,0]}
          color={0xffffff}
          lineWidth={1}
        />

    </group>
  )
}

export default WindLines