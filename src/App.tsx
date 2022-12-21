import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [test, setTest] = useState<string>('Test')  
  const [sossur,setSossur] = useState<boolean>(false)



  useEffect(()=>{
    if (
        (
          navigator.userAgent.indexOf('iPhone') != -1 || 
          navigator.userAgent.indexOf('iPad') != -1 || 
          navigator.userAgent.indexOf('Android') != -1 || 
          navigator.userAgent.indexOf('Windows Phone') != -1
        ) && window.DeviceOrientationEvent
    ) {
      window.screen.orientation.lock('landscape')
      .then(()=>{
        setTest('CFAIS')
        setSossur(true)
      })
      .catch(()=>{
        setTest('CPASFAIS')
      })
      
    } else {
      setTest('Ordi')
    }
  },[])

  return (
    <div className={("App") + (sossur === true ? ' yeslife' : '')} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <span>{test}</span>
      
    </div>
  );
}

export default App;
