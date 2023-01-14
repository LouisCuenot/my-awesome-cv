import { Vector3, useFrame, extend } from '@react-three/fiber'
import { Image,Plane,RoundedBox } from '@react-three/drei'
import React, { useEffect, useState, useRef } from 'react'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'
import CappingShaderMaterial from './CappingShaderMaterial/CappingShaderMaterial'




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

    useEffect(()=>{
        console.log(percentageCapped)
    },[percentageCapped])

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

        {
            id === currentCappingZoneID ?
            <>
                <Plane
                    args={[size.width-0.1,0.1,32,2]}
                    position-y={-size.height*0.5}
                >
                    <CappingShaderMaterial percentageCapped={(percentageCapped-0)/25} lineWidth={size.width-0.1} />
                </Plane>
                <Plane
                    args={[size.height+0.1,0.1,32,2]}
                    position-x={size.width*0.5}
                    rotation-z={Math.PI*0.5}
                >
                    <CappingShaderMaterial percentageCapped={(percentageCapped-25)/25} lineWidth={size.height+0.1} />
                </Plane>
                <Plane
                    args={[size.width-0.1,0.1,32,2]}
                    position-y={size.height*0.5}
                    rotation-z={Math.PI}
                >
                    <CappingShaderMaterial percentageCapped={(percentageCapped-50)/25} lineWidth={size.width-0.1} />
                </Plane>
                <Plane
                    args={[size.height+0.1,0.1,32,2]}
                    position-x={-size.width*0.5}
                    rotation-z={-Math.PI*0.5}
                >
                    <CappingShaderMaterial percentageCapped={(percentageCapped-75)/25} lineWidth={size.height+0.1} />
                </Plane>
            </>
            :
            null
        }
        
    </group>
  )
}

export default CVZone