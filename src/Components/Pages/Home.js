import React from 'react';
import Navbar from '../Navbar';
import banar from "../../Assates/baner.jpg"
import thumb from "../../Assates/thumb.png";
import play from "../../Assates/play.png";
import info from "../../Assates/info.png";
import TitleCard from '../TitleCard';

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
            <img src={banar} alt="" className='hero_banar'/>
            <div className="hero_caption">
                <img src={thumb} alt="" className='caption_img'/>
                <p className='caption_title'>
                Stranger Things is an American science fiction drama television series created by the Duffer Brothers for Netflix
                </p>
                <div className="hero_btn">
                  <button className='btn'><img src={play} alt="" />Play</button>
                  <button className='btn btn-dr'><img src={info} alt="" /> More Info</button>
                </div>
              
                <TitleCard/>
                
               
            </div>
        </div>
        <div className="crd">
        <TitleCard titel={"Blockblaster"}/>   
        <TitleCard titel={"Only on Netflix"}/>   
        <TitleCard titel={"Up coming"}/>   
        </div>
          
    </div>
  )
}

export default Home