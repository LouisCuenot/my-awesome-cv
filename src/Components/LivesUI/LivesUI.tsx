import React from 'react'
import { Html } from '@react-three/drei'
import './LivesUI.scss'
import Vie from './img/Vie.png'


const LivesUI = (props:{
    ballMapping:number[]
    difficulty:string
}) => {

    const {ballMapping, difficulty} = props

    
  return (
    <>
        {
            difficulty === 'Easy' || difficulty === 'Medium' || difficulty === 'Hard' ? 
                <Html fullscreen>
                    <div className='livesContainer'>
                        <BilleImage
                            ballMapping={ballMapping}
                            id={3}
                        />
                        <BilleImage
                            ballMapping={ballMapping}
                            id={2}
                        />
                        <BilleImage
                            ballMapping={ballMapping}
                            id={1}
                        />
                    </div>
                </Html>
            : null
        }
    </>
  )
}

const BilleImage = (props:{
    ballMapping:number[]
    id:number
}) => {
    return(
        <img src={Vie} style={{opacity:props.id - props.ballMapping.length < 0 ? 0.2 : 1}}/>
    )
}

export default LivesUI