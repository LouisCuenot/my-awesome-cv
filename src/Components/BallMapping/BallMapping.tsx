import React from 'react'
import Ball from './Ball/Ball'

const BallMapping = (props:{
  ballList:number[],
  isJumpPossible:boolean,
  jumpValue:number
  setIsJumpPossible:()=>void
}) => {
  return (
    <>
      {
        props.ballList.map((ball)=>(
          <Ball
            key={ball}
            isJumpPossible={props.isJumpPossible}
            jumpValue={props.jumpValue}
            setIsJumpPossible={props.setIsJumpPossible}
          />
        ))
      }
    </>
  )
}

export default BallMapping