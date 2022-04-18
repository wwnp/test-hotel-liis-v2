import React from 'react'
import { CgArrowsScrollV } from 'react-icons/cg';
import { FavItem } from './FavItem';
import { useSelector, useDispatch } from 'react-redux';
import { CARDS_PER_PAGE, FAV_ITEMS_LENGTH, RATE } from '../config';
import { PRICE } from './../config';
import { SET_MODE_RATE } from '../redux/contants';
import { SET_MODE_PRICE } from './../redux/contants';

export const Fav = () => {
  const dispatch = useDispatch()

  const favs = useSelector(store => store.homepage.favs)
  const favMode = useSelector(store => store.homepage.favMode)
  const page = useSelector(store => store.homepage.page)

  let filtered

  if (favMode === RATE) {
    filtered = favs.sort(function (a, b) {
      return a.stars - b.stars;
    });
  }

  if (favMode === PRICE) {
    filtered = favs.sort(function (a, b) {
      return a.priceAvg - b.priceAvg;
    });
  }

  filtered.reverse()

  let out = filtered
  // for (let i = 0; i < filtered.length; i++) {
  //   const fav = favs[i];
  //   if (i >= FAV_ITEMS_LENGTH) {
  //     break
  //   }
  //   out.push({
  //     ...fav
  //   })
  // }
  console.log(out)
  console.log(page)
  const indexLast = page * CARDS_PER_PAGE
  const indexFirst = indexLast - CARDS_PER_PAGE

  out = out.slice(indexFirst, indexLast)
  // setOutPosts(posts.slice(indexFirst, indexLast))

  return (
    <>
      <h2>Избранное</h2>
      <div className='d-flex align-center'>
        <button
          className={`btn d-flex align-center mr-1 btn-sm ${favMode === RATE && 'btn-active'}`}
          onClick={() => dispatch({ type: SET_MODE_RATE })}
        >
          Рейтинг <CgArrowsScrollV></CgArrowsScrollV>
        </button>
        <button
          className={`btn d-flex align-center btn-sm ${favMode === PRICE && 'btn-active'}`}
          onClick={() => dispatch({ type: SET_MODE_PRICE })}
        >
          Цена <CgArrowsScrollV></CgArrowsScrollV>
        </button>
      </div>
      <div className='HomePage__favs'>
        {
          out.map(fav => {
            return (
              <FavItem
                key={fav.hotelId}
                hotel={fav}
              >
              </FavItem>
            )
          })
        }
      </div>

    </>
  )
}
