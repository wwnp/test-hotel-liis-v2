import React from 'react'
import { FaHome } from 'react-icons/fa';
import { IconContext } from 'react-icons'

export const HomeIcon = ({ color = '#41522E', size = '32px' }) => {
  return (
    <IconContext.Provider
      value={{ color, size }}
    >
      <span>
        <FaHome />
      </span>
    </IconContext.Provider>
  )
}