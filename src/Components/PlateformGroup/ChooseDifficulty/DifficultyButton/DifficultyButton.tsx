import React, {useState} from 'react'
import {Plane, Text, Edges} from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'

const DifficultyButton = (props:{
    difficulty:string
    id:number
    setDifficulty:(dif:string)=>void,
    resetBallList:(numb:number[])=>void
    setIsJumpPossible:()=>void
    setSavedDiff:(diff:string)=>void
}) => {

    const {id, difficulty, setDifficulty, resetBallList, setSavedDiff} = props
    const [isHovered, setIsHovered] = useState<boolean>(false)

    const {scale, position} = useSpring({
        scale:isHovered ? 1 : 0,
        position:isHovered ? 0.8 : 0
    })

  return (
    <group
        position={[(id-1)*4,-1.5,0]}
        onPointerDown={()=>{
            setDifficulty(difficulty)
            setSavedDiff(difficulty)
            resetBallList([0])
        }}
    >
        <Text color="#493423" anchorX="center" anchorY="middle" fontSize={0.5} font={'./Fonts/Montserrat.ttf'} position={[0,0,0.01]} >
            {difficulty}
        </Text>
        <Plane
            args={[2.8,1]}
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
            <boxGeometry args={[2.8,1,0.2]}/>
            <meshStandardMaterial transparent opacity={0} />
            <Edges
                color={0x493423}
            />
        </animated.mesh>
    </group>
  )
}

export default DifficultyButton