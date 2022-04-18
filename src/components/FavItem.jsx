import React from 'react'
import { Heart } from './Heart';
import { Star } from './Star';
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../config';
import { checkDays } from '../auxillary';
import { SET_FAV_APP } from './../redux/contants';

export const FavItem = ({ hotel }) => {
  const dispatch = useDispatch()

  const { date, days } = useSelector(store => store.homepage.request)
  const {
    hotelName,
    stars,
    priceAvg,
  } = hotel

  const s = []
  for (let i = 0; i < stars; i++) {
    s.push('gold')
  }
  const dif = 5 - s.length
  for (let i = 0; i < dif; i++) {
    s.push('grey')
  }

  return (
    <div className='d-flex justify-between align-center' style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px ' }}>
      <div className='d-flex align-center'>
        <div>
          <p className='HomePage__FavName'>{hotelName}</p>
          <p>{new Date(date).toLocaleDateString('ru-RU', options)} -- {days} {checkDays(days)}</p>
          {
            s.map((color, index) => {
              return <Star
                key={color + index + new Date().toLocaleString()}
                color={color}
              >
              </Star>
            })
          }
        </div>
      </div>
      <div className='d-flex flex-column align-end align-center'>
        <Heart
          size='24px'
          isFav={true}
          onClick={() => dispatch({ type: SET_FAV_APP, payload: hotel })}>
        </Heart>
        <p className='text-muted'>price: <span className='HomePage__price ml-1'>{parseInt(priceAvg)}p</span></p>
      </div>
    </div>
  )
}