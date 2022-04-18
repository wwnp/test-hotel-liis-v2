import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillStar } from 'react-icons/ai';

export const Star = ({ color = 'yellow', size = '16px' }) => {
  return (
    <IconContext.Provider
      value={{ color, size }}
    >
      <span>
        <AiFillStar />
      </span>
    </IconContext.Provider>
  )
}
