import { Image } from '@react-three/drei'
import React, { useEffect } from 'react'

const Easy = () => {
    
    


  return (
    <>
        <Image
            url='/img/EasyFrame.png'
            rotation={[-Math.PI*0.5,0,0]}
            position={[0,0.11,0]}
            transparent
            scale={[15.25,8.25]}
            
        />
    </>
  )
}

export default Easy