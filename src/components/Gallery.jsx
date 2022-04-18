
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import car1 from '../assets/car1.png'
import car2 from '../assets/car2.png'
import car3 from '../assets/car3.png'

const imgs = [
  car1,
  car2,
  car3,
  car2,
  car1,
  car2,
  car3,
]
const handleDragStart = (e) => e.preventDefault();

const items2 = imgs.map((value, index) => {
  const style = { width: '150px' };
  return (<img src={value} style={style} onDragStart={handleDragStart} alt={index}></img>);
});

export const Gallery = () => {
  return (
    <AliceCarousel
      autoWidth={true}
      mouseTracking
      items={items2}
      controlsStrategy="alternate"
      disableButtonsControls={true}
      disableDotsControls={true}
      infinite={true}
    />
  );
}