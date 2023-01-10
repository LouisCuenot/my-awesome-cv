import { Vector3, useFrame } from '@react-three/fiber'
import { Image } from '@react-three/drei'
import React, { useEffect, useState, useRef } from 'react'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'

const CVZone = (props:{
    position:Vector3,
    id:number
    size:{
        width:number,
        height:number
    },
    currentCappingZoneID:number,
    setCurrentCappingZoneID:(id:number)=>void
}) => {

    

    const {position, id, size, currentCappingZoneID, setCurrentCappingZoneID} = props

    const [isActive, setIsActive] = useState<boolean>(false)

    const [isCapping, setIsCapping] = useState<boolean>(false)

    const [percentageCapped, setPercentageCapped] = useState<number>(0)


    useFrame(()=>{
        if(id === currentCappingZoneID){
            console.log(percentageCapped)  
        }
        if(isCapping){
            setPercentageCapped(percentageCapped+0.5)
        }

        if(percentageCapped >=100 && isActive === false){
            setIsActive(true)
            setCurrentCappingZoneID(currentCappingZoneID+1)
        }
    })

    const {scale} = useSpring({
        scale: isActive ? 1 : 0
    })

  return (
    <group
        position={position}
        rotation={[-Math.PI*0.5,0,0]}
    >
        
            <animated.group
                scale={scale}
            >
                <Image
                    url={`./img/CV${id}.png`}
                    scale={[size.width,size.height]}
                    transparent
                />
            </animated.group>
            
        
        {
            id === currentCappingZoneID ?
            <CuboidCollider
                args={[size.width*0.5,size.height*0.5,0.3]}
                position={[0,0,0.3]}
                sensor
                onIntersectionEnter={()=>setIsCapping(true)}
                onIntersectionExit={()=>setIsCapping(false)}
            />
            :
            null
        }
        
    </group>
  )
}

export default CVZone