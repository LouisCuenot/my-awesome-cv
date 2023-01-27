import React, { useRef } from 'react'
import { shaderMaterial } from '@react-three/drei'
import cappingVertex from './vertex'
import cappingFragment from './fragment'
import * as THREE from 'three'
import { extend, ReactThreeFiber, useFrame } from '@react-three/fiber'
import { ShaderMaterial } from 'three'




const CappingMaterial = shaderMaterial(
    {
        uTime: 0,
        uLineWidth:0,
        uPercentageCapped:0
    },
    cappingVertex,
    cappingFragment,
)

extend({CappingMaterial})

const CappingShaderMaterial = (props) => {

    const {lineWidth, percentageCapped} = props

    const shaderRef = useRef()

    useFrame((state)=>{
        shaderRef.current.uTime = -state.clock.elapsedTime*0.6
    })

  return (
    <cappingMaterial transparent uTime={0} uPercentageCapped={percentageCapped} uLineWidth={lineWidth} ref={shaderRef} attach={'material'} />
  )
}

export default CappingShaderMaterial