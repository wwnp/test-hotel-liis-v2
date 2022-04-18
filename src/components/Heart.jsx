import React from 'react'
import { IconContext } from 'react-icons'
import { AiTwotoneHeart } from 'react-icons/ai';

export const Heart = ({ size = '16px', isFav, onClick }) => {
  const color = isFav === true ? 'red' : 'grey'
  return (
    <IconContext.Provider
      value={{ color, size }}
    >
      <span
        onClick={onClick}
      >
        <AiTwotoneHeart className={'pointer'} />
      </span>
    </IconContext.Provider>
  )
}