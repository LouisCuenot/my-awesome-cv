import { Html } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import './WinLoseScreen.scss'
import frame from './img/Frame.png'
import linkedin from './img/LinkedIn.svg'
import website from './img/Site.svg'
import git from './img/Github.svg'
import mail from './img/Mail.svg'
import cv from './img/CV.png'


const WinLoseScreen = (props:{
    difficulty:string,
    ballList:number[],
    setDifficulty:(dif:string)=>void
    savedDiff:string
    resetBallList:(ballList:number[])=>void
}) => {

    const {difficulty, ballList, setDifficulty, savedDiff, resetBallList} = props

    const openLink = (url:string) => {
        window.open(url)
    }

    const [isHovered,setIsHovered] = useState(false)

    useEffect(()=>{
        if((difficulty === 'Easy' || difficulty === 'Medium' || difficulty === 'Hard') && ballList.length === 4){
            setDifficulty('Lose')
            resetBallList([])
        }
    },[ballList])

    const downloadURI = (url:string) => {
      var link = document.createElement("a");
      link.setAttribute('download', 'CV_Louis_Cuenot');
      link.href = url;
      document.body.appendChild(link);
      link.click();
      link.remove();    
    }

  return (
    <>
      {
        difficulty === 'Lose' || difficulty === 'Win'  ?
          <Html
            fullscreen
          >
            <div
              className='winLoseScreen'
            >
              <div className='container'>
                <img src={frame} alt='a frame' className='frame' />
                {
                  difficulty === 'Lose' ? 
                  <>
                    <h2>You lose ...</h2>
                    <div className="mainDiv">
                      <div className="loseButtons">
                        <div className='button' onClick={()=>{
                          setDifficulty(savedDiff)
                          resetBallList([0])
                        }}>
                          <span>Retry</span>
                        </div>
                        <div className='button' style={{marginLeft:20}} onClick={()=>{
                          setDifficulty('chooseDifficulty')
                          resetBallList([])
                        }}>
                          <span>Change difficulty</span>
                        </div>
                      </div>
                      <div className="socials">
                        <img src={linkedin} alt='a Social media icon' onClick={()=>openLink('https://www.linkedin.com/in/louis-cuenot-7a7b141a2/')}/>
                        <img src={mail} alt='a Social media icon' onClick={()=>openLink('mailto:louiscuenot@icloud.com')}/>
                        <img src={git} alt='a Social media icon' onClick={()=>openLink('https://github.com/LouisCuenot')}/>
                        <img src={website} alt='a Social media icon' onClick={()=>openLink('https://www.louiscuenot.com')}/>
                      </div>
                    </div>
                    
                    <span className="cantWin" onClick={()=>downloadURI('./pdf/CV_Louis_Cuenot.pdf')}>
                      Can't deal with it ? click here to get my cv
                    </span>
                  </>
                  :
                  <>
                    <h2>You won !</h2>
                    
                    <img src={cv} alt='A CV' className='cv' onPointerEnter={()=>setIsHovered(true)} onPointerLeave={()=>setIsHovered(false)} onClick={()=>{
                      if(savedDiff === 'Easy'){
                          downloadURI('./pdf/CV_Louis_Cuenot_Easy.pdf')
                      }else if(savedDiff === 'Medium'){
                          downloadURI('./pdf/CV_Louis_Cuenot_Medium.pdf')
                      }else if(savedDiff === 'Hard'){
                        downloadURI('./pdf/CV_Louis_Cuenot_Hard.pdf')
                      }
                      }}/>

                      {
                        isHovered ?
                        <div className='isHovered'>
                          <span>Download</span>
                        </div>
                        :
                        null
                      }
                    
                      
                    
                    
                    <div id="socialswin">
                        <img src={linkedin} alt='a Social media icon' onClick={()=>openLink('https://www.linkedin.com/in/louis-cuenot-7a7b141a2/')}/>
                        <img src={mail} alt='a Social media icon' onClick={()=>openLink('mailto:louiscuenot@icloud.com')}/>
                        <img src={git} alt='a Social media icon' onClick={()=>openLink('https://github.com/LouisCuenot')}/>
                        <img src={website} alt='a Social media icon' onClick={()=>openLink('https://www.louiscuenot.com')}/>
                    </div>
                  </>
                }
              </div>
            </div>
          </Html>
        :
        null
      }
    </>
  )
}

export default WinLoseScreen