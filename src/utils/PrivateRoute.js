import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useUser} from './useUser'
// handle the private routes
export const PrivateRoute = props => {

  const user = useUser()
  if(!user) return <Redirect to='/login'/>

  return <Route {...props}/>
}