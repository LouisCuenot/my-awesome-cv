import React, { useEffect, useState, useRef, KeyboardEvent } from 'react';

import './App.css';

import { Canvas } from '@react-three/fiber';
import * as THREE from 'three'

import TScreenInputs from './Components/TScreenInputs/TScreenInputs';
import PlateformGroup from './Components/PlateformGroup/PlateformGroup';
import { Physics, Debug } from '@react-three/rapier';
import Directionnal from './Components/Directionnal';
import { OrbitControls, PerspectiveCamera, Sky } from '@react-three/drei';
import VoidArea from './Components/VoidArea/VoidArea';
import BallMapping from './Components/BallMapping/BallMapping';
import WinLoseScreen from './Components/WinLoseScreen/WinLoseScreen';
import LivesUI from './Components/LivesUI/LivesUI';
import HorizontalView from './Components/HorizontalView/HorizontalView';






function App() {

  const appDiv = useRef<HTMLDivElement>(null!)


  const [difficulty, setDifficulty] = useState<string>('commands')

  const [savedDiff, setSavedDiff] = useState<string>('')

  const [isTouchScreen, setIsTouchScreen] = useState<boolean>(false)

  const [isJumpPossible, setIsJumpPossible] = useState<boolean>(false)

  const [jumpValue, setJumpValue] = useState<number>(0)

  const [windValue, setWindValue] = useState<number>(0)

  const [zRotation, setZRotation] = useState<number>(0)

  const [pressedKeys, setPressedKeys] = useState<{
    top:boolean,
    bottom:boolean,
    left:boolean,
    right:boolean
  }>(
    {
      top:false,
      bottom:false,
      left:false,
      right:false
    }
  )





  const [currentInputs, setCurrentInputs] = useState<{
    top:boolean,
    bottom:boolean,
    left:boolean,
    right:boolean
}>(
    {
      top:false,
      bottom:false,
      left:false,
      right:false
    }
  )

  const [ballsList, setBallsList] = useState<number[]>([0])


  const handleKeyDown = (e:KeyboardEvent<HTMLDivElement>) => {
    if(e.key === 'ArrowUp'){
      setPressedKeys({
        top:true,
        bottom:pressedKeys.bottom,
        left:pressedKeys.left,
        right:pressedKeys.right
      })
    }else if(e.key === 'ArrowDown'){
      setPressedKeys({
        top:pressedKeys.top,
        bottom:true,
        left:pressedKeys.left,
        right:pressedKeys.right
      })
    }else if(e.key === 'ArrowLeft'){
      setPressedKeys({
        top:pressedKeys.top,
        bottom:pressedKeys.bottom,
        left:true,
        right:pressedKeys.right
      })
    }else if(e.key === 'ArrowRight'){
      setPressedKeys({
        top:pressedKeys.top,
        bottom:pressedKeys.bottom,
        left:pressedKeys.left,
        right:true
      })
    }
  }

  const handleKeyUp = (e:KeyboardEvent<HTMLDivElement>) => {
    if(e.key === 'ArrowUp'){
      setPressedKeys({
        top:false,
        bottom:pressedKeys.bottom,
        left:pressedKeys.left,
        right:pressedKeys.right
      })
    }else if(e.key === 'ArrowDown'){
      setPressedKeys({
        top:pressedKeys.top,
        bottom:false,
        left:pressedKeys.left,
        right:pressedKeys.right
      })
    }else if(e.key === 'ArrowLeft'){
      setPressedKeys({
        top:pressedKeys.top,
        bottom:pressedKeys.bottom,
        left:false,
        right:pressedKeys.right
      })
    }else if(e.key === 'ArrowRight'){
      setPressedKeys({
        top:pressedKeys.top,
        bottom:pressedKeys.bottom,
        left:pressedKeys.left,
        right:false
      })
    }else if(e.key === ' '){
      setJumpValue(jumpValue+1)
    }
    
  }

  useEffect(()=>{
    appDiv.current.focus()
    if(
          navigator.userAgent.indexOf('iPhone') !== -1 || 
          navigator.userAgent.indexOf('iPad') !== -1 || 
          navigator.userAgent.indexOf('Android') !== -1 || 
          navigator.userAgent.indexOf('Windows Phone') !== -1
        
    ) {
      setIsTouchScreen(true)
    } else {
      setIsTouchScreen(false)
    }
  },[])

  useEffect(()=>{
    if(pressedKeys.top === true){
      if(pressedKeys.left === true){
        setCurrentInputs(
          {
            top:pressedKeys.bottom === true ? false : true,
            bottom:false,
            left:pressedKeys.right === true ? false : true,
            right:false
          }
        )
      }else{        
        setCurrentInputs(
          {
            top:pressedKeys.bottom === true ? false : true,
            bottom:false,
            left:false,
            right:pressedKeys.right
          }
        )
      }
    }else{
      
      
      if(pressedKeys.left === true){
        setCurrentInputs(
          {
            top:false,
            bottom:pressedKeys.bottom,
            left:pressedKeys.right === true ? false : true,
            right:false
          }
        )
      }else{
        setCurrentInputs(
          {
            top:false,
            bottom:pressedKeys.bottom,
            left:false,
            right:pressedKeys.right
          }
        )
      }
    }    
  },[pressedKeys])




  

  return (
    <div className="App" tabIndex={-1} ref={appDiv} onKeyDown={handleKeyDown} onKeyUp={(e)=>handleKeyUp(e)} >
 
      <Canvas 
        id='r3fCanva'
        shadows  
        camera={{
          position:[0,10,12],
          fov:60
        }}
      >  
       
        

        <color attach='background' args={[0x493423]}/>
        <Directionnal/>
        <ambientLight args={[0xffffff,0.6]}/>
        <WinLoseScreen 
          difficulty={difficulty} 
          ballList={ballsList}
          setDifficulty={(difficulty:string)=>setDifficulty(difficulty)}
          savedDiff={savedDiff}
          resetBallList={(ballList:number[])=>setBallsList(ballList)}
        />
        <LivesUI
          ballMapping={ballsList}
          difficulty={difficulty}
        />
        <HorizontalView zRotation={zRotation}/>
        <Physics>
          
          <PlateformGroup 
            currentInputs={currentInputs} 
            difficulty={difficulty}
            isTouchScreen={isTouchScreen}
            setDifficulty={(dif:string)=>setDifficulty(dif)}
            setBallList={(numb:number[])=>setBallsList(numb)}
            ballList={ballsList}
            isJumpPossible={isJumpPossible}
            setIsJumpPossible={(jump:boolean)=>setIsJumpPossible(jump)}
            setSavedDiff={(diff:string)=>setSavedDiff(diff)}
            setWind={(value:number)=>setWindValue(value)}
            setMainZRotation={(value)=>setZRotation(value)}
          />
          <VoidArea
            onBallFall={()=>setBallsList(ballsList.concat(ballsList.length))}
          />
          <BallMapping
            ballList={ballsList}
            isJumpPossible={isJumpPossible}
            jumpValue={jumpValue}
            setIsJumpPossible={()=>setIsJumpPossible(false)}
            windValue={windValue}
          />
        </Physics>
        
      </Canvas>
      {
        isTouchScreen &&
        <TScreenInputs setInputs={(inputs)=>setCurrentInputs(inputs)} setJump={()=>setJumpValue(jumpValue+1)}  />
      }
      
    </div>
  );
}

export default App;
