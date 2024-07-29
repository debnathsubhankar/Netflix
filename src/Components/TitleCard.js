import React from 'react'
import cardApi from './Pages/carsApi';
const TitleCard = () => {
  return (
    <div className='card_list'>
        <h2>Populer Moveis</h2>
        <div className="lists">
           {
            cardApi.map((card, ind)=>{
                    return <div className="card" key={ind}>
                    <image src={card.image} alt="image" />
                    <p>{card.name}</p>
                    </div>
            })
           }
           </div>
    </div>
  )
}

export default TitleCard