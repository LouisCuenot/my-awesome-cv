import React, {useEffect, useRef, useState} from 'react'
import {useControls} from 'leva'
import {RigidBody, RigidBodyApi, CuboidCollider} from '@react-three/rapier'
import {useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import { MeshReflectorMaterial, Svg } from '@react-three/drei'
import Commands from './Commands/Commands'
import ChooseDifficulty from './ChooseDifficulty/ChooseDifficulty'
import Level from './Level/Level'



const PlateformGroup = (props:{
    currentInputs:{
        top:boolean,
        bottom:boolean,
        left:boolean,
        right:boolean
    },
    isTouchScreen:boolean,
    difficulty:string,
    setDifficulty:(dif:string)=>void,
    setBallList:(numb:number[])=>void,
    isJumpPossible:boolean,
    setIsJumpPossible:(jump:boolean)=>void
}) => {

    const {currentInputs, difficulty, isTouchScreen, setDifficulty, setBallList, isJumpPossible, setIsJumpPossible} = props

    const {color } = useControls({
        color:'#ffd69a'
    })

    const platformHitbox = useRef<RigidBodyApi>(null!)

    const [zRotation, setZRotation] = useState<number>(0)
    const [xRotation, setXRotation] = useState<number>(0)
    

    useFrame((state)=>{

       
       
        
        if(currentInputs.left && zRotation<Math.PI*0.1){
            setZRotation(zRotation+0.01)
        }else if (currentInputs.right && zRotation>-Math.PI*0.1){
            setZRotation(zRotation-0.01)
        }
        if(currentInputs.top && xRotation>-Math.PI*0.1){
            setXRotation(xRotation-0.01)
        }else if (currentInputs.bottom && xRotation < Math.PI*0.1){
            setXRotation(xRotation+0.01)
        }
        const eulerRotation = new THREE.Euler(xRotation, 0, zRotation)
        const quaternionRotation = new THREE.Quaternion()
        quaternionRotation.setFromEuler(eulerRotation)
        platformHitbox.current.setRotation(quaternionRotation)
        
        
    })

    useEffect(() => {
      
    
      
    }, [currentInputs.left])
    

  return (
    <group>
        <RigidBody
            type='kinematicVelocity'
            colliders={false}
            ref={platformHitbox}
        >
            <CuboidCollider args={[8,0.1,4.5]} friction={2} onContactForce={()=>{
                if(isJumpPossible === false){
                    setIsJumpPossible(true)
                }
            }}/>
            <mesh
                receiveShadow
            >
                <boxGeometry args={[16,0.2,9]}/>
                <meshMatcapMaterial color={color}/>
            </mesh>
            {
                difficulty === 'commands' ?
                    <Commands
                        difficulty={difficulty}
                        setDifficulty={setDifficulty}
                        isTouchScreen={isTouchScreen}
                        resetBallList={setBallList}
                        setIsJumpPossible={()=>setIsJumpPossible(false)}
                    />
                :
                null
            }
            {
                difficulty === 'chooseDifficulty' ?
                    <ChooseDifficulty
                        setDifficulty={setDifficulty}
                        resetBallList={setBallList}
                        setIsJumpPossible={()=>setIsJumpPossible(false)}
                    />
                :
                null
            }
            {
                difficulty === 'Easy' || difficulty === 'Medium' || difficulty === 'Hard'
                ?
                    <Level
                        difficulty={difficulty}
                    />
                :
                null
            }
            
        </RigidBody>
        
    </group>
  )
}

export default PlateformGroup