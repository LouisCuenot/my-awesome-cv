import React, { Suspense } from 'react'
import { Text } from '@react-three/drei'
import DifficultyButton from './DifficultyButton/DifficultyButton'

const ChooseDifficulty = (props:{
    setDifficulty:(dif:string)=>void,
    resetBallList:(numb:number[])=>void
    setIsJumpPossible:()=>void
    setSavedDiff:(diff:string)=>void
}) => {

  const {setSavedDiff} = props
  return (
    <group
        position={[0,0.11,0]}
        rotation={[-Math.PI*0.5,0,0]}
    >
      <Suspense
        fallback={null}
      >
        <Text color="#493423" anchorX="center" anchorY="middle" fontSize={1.6} font={'./Fonts/Durer.otf'} position={[0,3,0]} >
            Choose difficulty
        </Text>
        <DifficultyButton
          id={0}
          difficulty={'Easy'}
          setDifficulty={props.setDifficulty}
          resetBallList={props.resetBallList}
          setIsJumpPossible={props.setIsJumpPossible}
          setSavedDiff={(diff:string)=>setSavedDiff(diff)}
        />
        <DifficultyButton
          id={1}
          difficulty={'Medium'}
          setDifficulty={props.setDifficulty}
          resetBallList={props.resetBallList}
          setIsJumpPossible={props.setIsJumpPossible}
          setSavedDiff={(diff:string)=>setSavedDiff(diff)}
        />
        <DifficultyButton
          id={2}
          difficulty={'Hard'}
          setDifficulty={props.setDifficulty}
          resetBallList={props.resetBallList}
          setIsJumpPossible={props.setIsJumpPossible}
          setSavedDiff={(diff:string)=>setSavedDiff(diff)}
        />
      </Suspense>
    </group>
  )
}

export default ChooseDifficulty