import React from 'react'
import { MdOutlineExitToApp } from 'react-icons/md';
import { IconContext } from "react-icons";
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import { pageDomain } from '../config';

export const Header = () => {
  const history = useHistory()
  const singOut = () => {
    Cookies.remove('tokenUser')
    history.push(`${pageDomain}login`)
  }
  return (
    <div className='Header'>
      <h2>Simple Hotel Check</h2>
      <div className='d-flex align-center pointer' onClick={singOut} >
        <button className='btn-outline'>Выйти</button>
        <IconContext.Provider value={{ color: "#41522E", className: "global-class-name" }}>
          <MdOutlineExitToApp size={32}></MdOutlineExitToApp>
        </IconContext.Provider>
      </div>
    </div>
  )
}
