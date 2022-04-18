import React from 'react'
import { Heart } from './Heart'
import { Star } from './Star'
import { useSelector, useDispatch } from 'react-redux';
import { options } from './../config';
import { HomeIcon } from './HomeIcon';
import { checkDays } from '../auxillary';
import { SET_FAV_APP } from './../redux/contants';

export const HotelItem = ({ hotel }) => {
  const dispatch = useDispatch()

  const { date, days } = useSelector(store => store.homepage.request)

  const {
    hotelName,
    stars,
    priceAvg,
    hotelId
  } = hotel

  const s = []
  for (let i = 0; i < stars; i++) {
    s.push('gold')
  }
  const dif = 5 - s.length
  for (let i = 0; i < dif; i++) {
    s.push('grey')
  }

  let isFav = false
  const favs = useSelector(store => store.homepage.favs)
  favs.forEach(fav => {
    if (fav.hotelId === hotelId) {
      isFav = true
    }
  })

  return (
    <div className='d-flex justify-between align-center' style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px ' }}>
      <div className='d-flex align-center'>
        <div style={{ padding: '24px' }}>
          <HomeIcon></HomeIcon>
        </div>
        <div>
          <p style={{ fontSize: '15px' }}>{hotelName}</p>
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
          isFav={isFav}
          onClick={() => dispatch({ type: SET_FAV_APP, payload: hotel })}>
        </Heart>
        <p className='text-muted'>price: <span className='HomePage__price ml-2'>{parseInt(priceAvg)}p</span></p>
      </div>
    </div>
  )
}
