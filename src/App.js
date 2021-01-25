import React from'react';
import './App.css';
import image from './images/imageTrain.jpg'
import ReactPlayer from 'react-player'


function App() {
  return (
<div className="App">
    
  <div className="images" style={{border:"solid 1px black", maxWidth:"450px"}}>

   <h1 className="title red">CHOOSE A TRANSPORT!</h1>

   <div className="choice"> 
        <div className="transport">
        <img className="img" src={image}  alt="imageInSrc" />
        
        </div>

        <div className='transport'>
        <img className='img ' src="../images/imageBike.jpg" alt="imageInPublic" />
        
        </div>

        <div className='transport'>
        <img className='img' src="../images/imageScooter.jpg" alt="imageInPublic" />
        
        
        </div>

        <div className='transport'>
        <img className='img' src="../images/imageCar.jpg" alt="imageInPublic" />
        
        </div>

      </div>
    </div>
     
 
    <ReactPlayer 
 className='myVideo'
 width="100%"  height="100%" playing 
 url="https://cdn.videvo.net/videvo_files/video/free/2018-03/small_watermarked/180301_22_Timelapses_01_preview.webm"/>
           
</div>
  );
}

export default App;
