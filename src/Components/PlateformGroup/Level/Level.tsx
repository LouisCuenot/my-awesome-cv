import React, {Suspense, useEffect, useState} from 'react'
import Easy from './Easy/Easy'
import Medium from './Medium/Medium'
import Hard from './Hard/Hard'
import CVZone from './CVZone/CVZone'
import { Plane } from '@react-three/drei'
import { useControls } from 'leva'

const Level = (props:{
    difficulty:string
    setDifficulty:(dif:string)=>void
    setBallList:(ball:number[])=>void
    setWind:(value:number)=>void
}) => {

    const {difficulty, setDifficulty, setBallList, setWind} = props

    

    const [currentCappingZoneID, setCurrentCappingZoneID] = useState<number>(1)

    useEffect(()=>{
        if(currentCappingZoneID===7){
            setDifficulty('Win')
            setBallList([])
        }
    },[currentCappingZoneID])


  return (
    <Suspense
        fallback={null}
    >
        {
            difficulty === 'Easy' ?
            <Easy/>
            :
            null
        }
        {
            difficulty === 'Medium' ?
            <Medium/>
            :
            null
        }
        {
            difficulty === 'Hard' ?
            <Hard setWind={setWind}/>
            :
            null
        }
        <Plane
            args={[4.5,8.16]}
            position={[0,0.105,0]}
            rotation={[-Math.PI*0.5,0,0]}
        >
            <meshStandardMaterial color={0xad8343}/>
        </Plane>
        <CVZone
            id={1}
            position={[-5,0.12,-2.2]}
            size={{
                width:(184*8.25/541)*(248/184),
                height:(184*8.25/541)
            }}
            currentCappingZoneID={currentCappingZoneID}
            setCurrentCappingZoneID={(id:number)=>setCurrentCappingZoneID(id)}
        />
        <CVZone
            id={2}
            position={[5,0.12,2.3]}
            size={{
                width:(206*8.25/541)*(237/206),
                height:(206*8.25/541)
            }}
            currentCappingZoneID={currentCappingZoneID}
            setCurrentCappingZoneID={(id:number)=>setCurrentCappingZoneID(id)}
        />
        <CVZone
            id={3}
            position={[0,0.12,-2.3]}
            size={{
                width:(196*8.25/541)*(197/196),
                height:(196*8.25/541)
            }}
            currentCappingZoneID={currentCappingZoneID}
            setCurrentCappingZoneID={(id:number)=>setCurrentCappingZoneID(id)}
        />
        <CVZone
            id={4}
            position={[-5,0.12,1.8]}
            size={{
                width:(259*8.25/541)*(238/259),
                height:(259*8.25/541)
            }}
            currentCappingZoneID={currentCappingZoneID}
            setCurrentCappingZoneID={(id:number)=>setCurrentCappingZoneID(id)}
        />
        <CVZone
            id={5}
            position={[5,0.12,-1.7]}
            size={{
                width:(277*8.25/541)*(251/277),
                height:(277*8.25/541)
            }}
            currentCappingZoneID={currentCappingZoneID}
            setCurrentCappingZoneID={(id:number)=>setCurrentCappingZoneID(id)}
        />
        <CVZone
            id={6}
            position={[0,0.12,1.6]}
            size={{
                width:(308*8.25/541)*(197/308),
                height:(308*8.25/541)
            }}
            currentCappingZoneID={currentCappingZoneID}
            setCurrentCappingZoneID={(id:number)=>setCurrentCappingZoneID(id)}
        />
        
    </Suspense>
  )
}

export default Level