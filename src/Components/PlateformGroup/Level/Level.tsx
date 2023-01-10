import React, {Suspense, useState} from 'react'
import Easy from './Easy/Easy'
import Medium from './Medium/Medium'
import Hard from './Hard/Hard'
import CVZone from './CVZone/CVZone'
import { Plane } from '@react-three/drei'
import { useControls } from 'leva'

const Level = (props:{
    difficulty:string
}) => {

    const {difficulty}= props

    const {colors } = useControls({
        colors:'#ad8343'
    })

    const [currentCappingZoneID, setCurrentCappingZoneID] = useState<number>(1)


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
            <Hard/>
            :
            null
        }
        <Plane
            args={[4.5,8.16]}
            position={[0,0.105,0]}
            rotation={[-Math.PI*0.5,0,0]}
        >
            <meshStandardMaterial color={colors}/>
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
            position={[-5,0.12,0.8]}
            size={{
                width:(181*8.25/541)*(237/181),
                height:(181*8.25/541)
            }}
            currentCappingZoneID={currentCappingZoneID}
            setCurrentCappingZoneID={(id:number)=>setCurrentCappingZoneID(id)}
        />
        <CVZone
            id={3}
            position={[-5,0.12,3]}
            size={{
                width:(79*8.25/541)*(238/79),
                height:(79*8.25/541)
            }}
            currentCappingZoneID={currentCappingZoneID}
            setCurrentCappingZoneID={(id:number)=>setCurrentCappingZoneID(id)}
        />
        <CVZone
            id={4}
            position={[0,0.12,-2.4]}
            size={{
                width:(196*8.25/541)*(197/196),
                height:(196*8.25/541)
            }}
            currentCappingZoneID={currentCappingZoneID}
            setCurrentCappingZoneID={(id:number)=>setCurrentCappingZoneID(id)}
        />
        <CVZone
            id={5}
            position={[0,0.12,0.5]}
            size={{
                width:(177*8.25/541)*(197/177),
                height:(177*8.25/541)
            }}
            currentCappingZoneID={currentCappingZoneID}
            setCurrentCappingZoneID={(id:number)=>setCurrentCappingZoneID(id)}
        />
        <CVZone
            id={6}
            position={[0,0.12,2.9]}
            size={{
                width:(131*8.25/541)*(197/131),
                height:(131*8.25/541)
            }}
            currentCappingZoneID={currentCappingZoneID}
            setCurrentCappingZoneID={(id:number)=>setCurrentCappingZoneID(id)}
        />
        <CVZone
            id={7}
            position={[5,0.12,-1.6]}
            size={{
                width:(277*8.25/541)*(251/277),
                height:(277*8.25/541)
            }}
            currentCappingZoneID={currentCappingZoneID}
            setCurrentCappingZoneID={(id:number)=>setCurrentCappingZoneID(id)}
        />
        <CVZone
            id={8}
            position={[5,0.12,2.2]}
            size={{
                width:(206*8.25/541)*(237/206),
                height:(206*8.25/541)
            }}
            currentCappingZoneID={currentCappingZoneID}
            setCurrentCappingZoneID={(id:number)=>setCurrentCappingZoneID(id)}
        />
        
    </Suspense>
  )
}

export default Level