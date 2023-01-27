import { Html } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import './HorizontalView.scss'

const HorizontalView = (props:{
    zRotation:number
}) => {

    const {zRotation} = props




  return (
    <Html fullscreen>
        <div id="horizontalViewContainer">
            <div
            style={{
              transform:`rotate(${-zRotation*180/Math.PI}deg)`
            }}

            >
              <div/>
            </div>
        </div>
    </Html>
  )
}

export default HorizontalView