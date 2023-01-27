import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Canvas } from '@react-three/fiber';
import './Fonts/Durer.otf'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   //<Canvas 
   //shadows
   //camera={{
   //  position:[0,7,10]
   //}}
   //>
   //  <App />
   //</Canvas>
   <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
