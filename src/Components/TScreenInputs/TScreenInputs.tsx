import React, {useEffect, useState} from 'react'
import './TScreenInputs.scss'

const TScreenInputs = (props:{
    setInputs:(inputs:{
        top:boolean,
        bottom:boolean,
        left:boolean,
        right:boolean
    })=>void
    setJump:()=>void
}) => {

    const [currentJoystickPosition, setCurrentJoystickPosition] = useState<{
        x:number,
        y:number
    }>()

    const [touchInputs, setTouchInputs] = useState<{
        top:boolean,
        bottom:boolean,
        left:boolean,
        right:boolean
    }>({
        bottom:false,
        left:false,
        right:false,
        top:false
    })

    const ScreenPressed = (e:React.TouchEvent<HTMLDivElement>) => {
        setCurrentJoystickPosition({
            x:e.changedTouches[0].clientX,
            y:e.changedTouches[0].clientY
        })
    }

    const ScreenLeaved = (e:React.TouchEvent<HTMLDivElement>) => {
        setCurrentJoystickPosition(undefined)
        setTouchInputs({
            top:false,
            bottom:false,
            left:false,
            right:false
        })
    }

    const ScreenMove = (e:React.TouchEvent<HTMLDivElement>) => {
        if(Math.abs(e.changedTouches[0].clientX-currentJoystickPosition!.x) > Math.abs(e.changedTouches[0].clientY-currentJoystickPosition!.y)){
            
            const topCondi = e.changedTouches[0].clientY-currentJoystickPosition!.y < 0 && Math.abs((e.changedTouches[0].clientX-currentJoystickPosition!.x)/(e.changedTouches[0].clientY-currentJoystickPosition!.y)) < 2
            const bottomCondi = e.changedTouches[0].clientY-currentJoystickPosition!.y > 0 && Math.abs((e.changedTouches[0].clientX-currentJoystickPosition!.x)/(e.changedTouches[0].clientY-currentJoystickPosition!.y)) < 2
            setTouchInputs({
                left:e.changedTouches[0].clientX-currentJoystickPosition!.x<0 ? true : false,
                right:e.changedTouches[0].clientX-currentJoystickPosition!.x>0 ? true : false,
                top:topCondi,
                bottom:bottomCondi
            })
        
        }else{
            const leftCondi = e.changedTouches[0].clientX-currentJoystickPosition!.x < 0 && Math.abs((e.changedTouches[0].clientY-currentJoystickPosition!.y)/(e.changedTouches[0].clientX-currentJoystickPosition!.x)) < 2
            const rightCondi = e.changedTouches[0].clientX-currentJoystickPosition!.x > 0 && Math.abs((e.changedTouches[0].clientY-currentJoystickPosition!.y)/(e.changedTouches[0].clientX-currentJoystickPosition!.x)) < 2
            setTouchInputs({
                top:e.changedTouches[0].clientY-currentJoystickPosition!.y<0 ? true : false,
                bottom:e.changedTouches[0].clientY-currentJoystickPosition!.y>0 ? true : false,
                left:leftCondi,
                right:rightCondi
            })
        }
    }

    useEffect(()=>{
       props.setInputs(touchInputs)
    },[touchInputs])

  return (
    <div id="mobileControls">
        <div id="jumpDiv" onClick={()=>props.setJump()}/>
        <div 
            id="joystickDiv"
            onTouchStart={(e)=>ScreenPressed(e)}
            onTouchEnd={(e)=>ScreenLeaved(e)}
            onTouchMove={(e)=>ScreenMove(e)}
        >
            {
                currentJoystickPosition &&
                <div 
                    id="joystickBase"
                    style={{
                        left:currentJoystickPosition.x,
                        top:currentJoystickPosition.y
                    }}
                >
                    <div 
                        id="joystickHandle"
                        className={
                            (touchInputs?.left === true ? ' left' : '')+
                            (touchInputs?.right === true ? ' right' : '')+
                            (touchInputs?.top === true ? ' top' : '')+
                            (touchInputs?.bottom === true ? ' bottom' : '')
                        }
                    />
                </div>
            }
        </div>
    </div>
  )
}

export default TScreenInputs