import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { options } from '../config';
import { Gallery } from './Gallery';
import { HotelItem } from './HotelItem';
import Loader from './Loader';

export const Main = () => {
  const loading = useSelector(store => store.homepage.loading)
  const hotels = useSelector(store => store.homepage.hotels)
  const favs = useSelector(store => store.homepage.favs)
  const { date, location } = useSelector(store => store.homepage.request)

  return (
    <div>
      <div className='d-flex justify-between'>
        <div className='d-flex align-center'>
          <h3 className='Main__header'>Отели</h3>
          <IoIosArrowForward className='ml-1' size={32}></IoIosArrowForward>
          <h3 className='Main__header ml-1'>{location}</h3>
        </div>
        <h3 style={{ fontSize: '24px', fontWeight: 400, color: '#41522E' }}>{new Date(date).toLocaleDateString('ru-RU', options)}</h3>
      </div>
      <Gallery></Gallery>
      <h3>Добавлено в избранное: {favs.length} ед.</h3>
      <div>
        {
          loading
            ? <Loader></Loader>
            :
            hotels?.message
              ? <h1>Ничего не найдено</h1>
              :
              hotels.length === 0
                ? <h1>Ничего не найдено</h1>
                : (
                  hotels.map(hotel => {
                    return (
                      <HotelItem
                        key={hotel.hotelId}
                        hotel={hotel}
                      >
                      </HotelItem>
                    )
                  })
                )
        }
      </div>
    </div>
  )
}
