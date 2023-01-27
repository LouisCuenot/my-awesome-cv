import { Image, Line, Text, Plane, Edges, Box } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import * as THREE from 'three'
import React, { Suspense, useState, useRef, useEffect } from 'react'
import './Commands.scss'




const Commands = (props:{
    difficulty:string,
    setDifficulty:(dif:string)=>void,
    setIsJumpPossible:()=>void
    isTouchScreen:boolean,
    resetBallList:(numb:number[])=>void
}) => {


const {isTouchScreen, setDifficulty, resetBallList, setIsJumpPossible} = props

const [isHovered, setIsHovered] = useState<boolean>(false)

useEffect(()=>{
    setTimeout(()=>{
        setIsHovered(true)
        setTimeout(()=>{
            setIsHovered(false)
        },700)
    },10000)
},[])

const {scale, position} = useSpring({
    scale:isHovered ? 1 : 0,
    position:isHovered ? 0.8 : 0
})





  return (
    <group 
        position={[0,0.11,0]}
        rotation={[-Math.PI*0.5,0,0]}
    >
        <Suspense fallback={null}>
            <Text color="#493423" anchorX="center" anchorY="middle" fontSize={1.6} font={'./Fonts/Durer.otf'} position={[0,3,0]} >
                Controls
            </Text>
            <Text color="#493423" anchorX="left" anchorY="middle" fontSize={1} font={'./Fonts/Durer.otf'} position={[-7,1,0]} >
                Jump
            </Text>
            <group position={[7,1,0]}>
                <Text color="#493423" anchorX="right" anchorY="middle" fontSize={1} font={'./Fonts/Durer.otf'} position={[0,0,0]} >
                    Platform
                </Text>
                <Text color="#493423" anchorX="right" anchorY="middle" fontSize={1} font={'./Fonts/Durer.otf'} position={[0,-1,0]} >
                    controls
                </Text>
            </group>
            {
                isTouchScreen
                ?
                <group
                    position={[-0.8,0,0]}
                >
                    <Image
                        url='./img/MobileControls.png'
                        transparent
                        scale={[5.8,3]}
                    /> 
                    <Line
                        points={[[-5,0.4,0],[-4,-0.5,0],[-1.8,-0.5,0]]}
                        lineWidth={2}
                        color={0x493423}
                    />
                    <Line
                        points={[[2,-0.5,0],[3.7,-0.5,0],[4.2,0.4,0]]}
                        lineWidth={2}
                        color={0x493423}
                    />  
                </group>
                :
                <group
                    position={[-0.8,0,0]}
                >
                    <Image
                        url='./img/DesktopControls.png'
                        transparent
                        scale={[6,1.8]}
                    />     
                    <Line
                        points={[[-5,0.4,0],[-4,-0.5,0],[-2.5,-0.5,0]]}
                        lineWidth={2}
                        color={0x493423}
                    />
                    <Line
                        points={[[2.8,-0.5,0],[3.7,-0.5,0],[4.2,0.4,0]]}
                        lineWidth={2}
                        color={0x493423}
                    />
                </group>
            }
            <group
                position={[0,-3,0]}
                onPointerDown={()=>{
                    setDifficulty('chooseDifficulty')
                    setIsJumpPossible()
                    resetBallList([])
                }}
            >  
                <Text color="#493423" anchorX="center" anchorY="middle" fontSize={0.5} font={'./Fonts/Montserrat.ttf'} position={[0,0,0.01]} >
                       Click Here
                </Text>
                
                <Plane
                    args={[3.2,1]}
                    onPointerEnter={()=>setIsHovered(true)}
                    onPointerLeave={()=>setIsHovered(false)}
                >
                    <Edges
                        color={0x493423}
                    />
                    <meshStandardMaterial transparent opacity={0} />
                </Plane>
                <animated.mesh
                    scale-z={scale}
                    position-z={position}
                >
                    <boxGeometry args={[3.2,1,0.2]}/>
                    <meshStandardMaterial transparent opacity={0} />
                    <Edges
                        color={0x493423}
                    />
                </animated.mesh>
            </group>
        </Suspense>
    </group>
  )
}

export default Commands