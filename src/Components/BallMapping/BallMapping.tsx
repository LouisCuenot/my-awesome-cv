import React from 'react'
import Ball from './Ball/Ball'

const BallMapping = (props:{
  ballList:number[],
  isJumpPossible:boolean,
  jumpValue:number
  setIsJumpPossible:()=>void
  windValue:number
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
            windValue={props.windValue}
          />
        ))
      }
    </>
  )
}

export default BallMapping