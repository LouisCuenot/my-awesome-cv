import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [test, setTest] = useState<string>('Test')  



  useEffect(()=>{
    if (
        (
          navigator.userAgent.indexOf('iPhone') != -1 || 
          navigator.userAgent.indexOf('iPad') != -1 || 
          navigator.userAgent.indexOf('Android') != -1 || 
          navigator.userAgent.indexOf('Windows Phone') != -1
        ) && window.DeviceOrientationEvent
    ) {
      
      if(window.screen.orientation){
        window.screen.orientation.lock('landscape')
        
      }else{
        setTest('Mobile')
      }
    } else {
      setTest('Ordi')
    }
  },[])

  return (
    <div className="App">
      <span>{test}</span>
    </div>
  );
}

export default App;
