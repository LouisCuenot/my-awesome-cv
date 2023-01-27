import React from 'react'
import { Image } from '@react-three/drei'
import MovingBar from '../Obstacles/MovingBar/MovingBar'
import Wind from '../Obstacles/Wind/Wind'

const Hard = (props:{
  setWind:(value:number)=>void
}) => {
  return (
    <>
        <Image
            url='/img/HardFrame.png'
            rotation={[-Math.PI*0.5,0,0]}
            position={[0,0.11,0]}
            transparent
            scale={[15.25,8.25]}
            
        />
        <MovingBar/>
        <Wind setWind={props.setWind}/>
    </>
  )
}

export default Hard