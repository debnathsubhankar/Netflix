import React, { useEffect, useRef } from 'react'
import cardApi from './Pages/carsApi';


const TitleCard = (props) => {

const cardScroll= useRef();

const handleScroll = (event) => {
  event.preventDefault();
  cardScroll.current.scrollLeft += event.deltaY;
};

useEffect(()=>{
cardScroll.current.addEventListener("wheel", handleScroll);
},[])

  return (
    <div className='card_list'>
        <h2>{props.titel}</h2>
        <div className="lists" ref={cardScroll}>
           {
            cardApi.map((card, ind)=>{
                    return <div className="card" key={ind} >
                    <img src={card.image} alt="image" />
                    <p>{card.name}</p>
                    </div>
            })
           }
           </div>
    </div>
  )
}

export default TitleCard