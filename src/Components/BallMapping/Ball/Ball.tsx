import React, { useEffect, useState, useRef } from 'react'
import { RigidBody, BallCollider, RigidBodyApi } from '@react-three/rapier'
import Logo from './Logo/Logo'
import { Vector3 } from 'three'
import { Text } from '@react-three/drei'
import { setMaxListeners } from 'events'



const Ball = (props:{
  isJumpPossible:boolean,
  setIsJumpPossible:()=>void
  jumpValue:number
}) => {

const [ballGravity, setBallGravity] = useState<number>(0)
const [countDown, setCountDown] = useState<string|null>('3')

const ballRef = useRef<RigidBodyApi>(null!)

useEffect(()=>{
  setTimeout(()=>{
    setCountDown('2')
  },1000)
  setTimeout(()=>{
    setCountDown('1')
  },2000)
  setTimeout(()=>{
    setCountDown('GO !')
    setBallGravity(1)
    if(ballRef.current){
      ballRef.current.applyImpulse(new Vector3(0,0.1,0),true)
    }
  },3000)
  setTimeout(()=>{
    setCountDown(null)
  },4000)
},[])


useEffect(()=>{
  if(props.isJumpPossible && ballGravity > 0){
    props.setIsJumpPossible()
    ballRef.current.applyImpulse(new Vector3(0,7,0),true)
  }
},[props.jumpValue])


  return (
    <>
        <RigidBody
          colliders={false}
          type='dynamic'
          position={[0,5,0]}
          gravityScale={ballGravity}
          ref={ballRef}

        >
          <BallCollider args={[0.6]}   />
          <mesh castShadow>
              <sphereGeometry args={[0.6,32,16]}/>
              <meshPhysicalMaterial color={'#bff0ff'} transmission={1} thickness={0.2} roughness={0} />
              <Logo/>
          </mesh>
        </RigidBody>
        {
          countDown ?
            <Text color="#ffd69a" anchorX="center" anchorY="middle" fontSize={1.6} font={'./Fonts/Durer.otf'} position={[0,7,0]} rotation={[-Math.PI*0.25,0,0]}>
              {countDown}
            </Text>
          :
          null
        }
        
    </>
  )
}

export default Ball