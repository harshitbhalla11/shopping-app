/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import Mainlogo from './Mainlogo.svg'

import { useState } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'

//  import products from './components/product';

const Nav = ({ isAuth }) => {
  const [error, setError] = useState('')
  console.log(useAuth())
  const { currentUser, logout } = useAuth()

  const history = useHistory()

  const loggedInItems = (
    <li className='nav-item'>
      <h1>welcome{currentUser && currentUser.email}</h1>
      <Button onClick={handleLogout}>
        <Link className='nav-link' to={'/signin'}>
          Logout
        </Link>
      </Button>
      {error && <Alert variant='danger'>{error}</Alert>}
    </li>
  )

  const loginItems = (
    <>
      <li className='nav-item'>
        <Link className='nav-link' to={'/signin'}>
          Sign in
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={'/signup'}>
          Sign up
        </Link>
      </li>
    </>
  )

  async function handleLogout () {
    setError('')

    try {
      this.props.isAuth = false
      await logout()
      history.push('/signin')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <Navbar className='navbar navbar-expand-lg navbar-light'>
      <div className='container'>
        <Link className='navbar-brand' to={'/'}>
          <img className='logoimg' src={Mainlogo} style={{ width: '51px' }} />
        </Link>

        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ml-auto'>
            {isAuth ? loggedInItems : loginItems}
          </ul>
        </div>
      </div>
    </Navbar>
  )
}
export default Nav
