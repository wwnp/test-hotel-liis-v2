import React from 'react'
import Cookies from 'js-cookie'
import { Redirect } from "react-router-dom";
import { pageDomain } from './../config';

export const PrivateRoute = ({ children }) => {
  const tokenUser = Cookies.get('tokenUser')
  return (
    !!tokenUser
      ? children
      : <Redirect
        to={{
          pathname: `${pageDomain}login`,
        }}
      ></Redirect>
  )
}
