import { RigidBody, CuboidCollider } from '@react-three/rapier'
import React from 'react'

const VoidArea = (props:{
    onBallFall:()=>void
}) => {
  return (
    <RigidBody
        colliders={false}
        type={'fixed'}
    >
        <CuboidCollider
            args={[30,1,30]}
            position={[0,-10,0]}
            sensor
            onIntersectionEnter={()=>props.onBallFall()}
        />
    </RigidBody>
  )
}

export default VoidArea