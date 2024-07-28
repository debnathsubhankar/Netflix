import React from 'react';
import Navbar from '../Navbar';
import banar from "../../Assates/baner2.jpg"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="hero">
            <img src={banar} alt="" className='hero_banar'/>
            <div className="hero_caption">
                <img src="" alt="" className='caption_img'/>
                <p className='caption_title'></p>
            </div>
        </div>
    </div>
  )
}

export default Home