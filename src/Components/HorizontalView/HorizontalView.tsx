import { Html } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import './HorizontalView.scss'

const HorizontalView = (props:{
    zRotation:number
}) => {

    const {zRotation} = props

    const divRef = useRef<HTMLDivElement>(null!)

    useEffect(()=>{
      divRef.current.style.transform = `rotate(${-zRotation*180/Math.PI}deg)`
    },[zRotation])

  return (
    <Html fullscreen>
        <div id="horizontalViewContainer">
            <div
              ref={divRef}
            >
              <div/>
            </div>
        </div>
    </Html>
  )
}

export default HorizontalView