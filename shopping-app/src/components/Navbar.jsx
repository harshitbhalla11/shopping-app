/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar,Form } from 'react-bootstrap'
import Mainlogo from './Mainlogo.svg'
import { BiLogOutCircle } from "react-icons/bi";
import { useState } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { IoCartSharp } from "react-icons/io5";

//  import products from './components/product';

const Nav = ({ isAuth }) => {
  const [error, setError] = useState('')
  console.log(useAuth())
  const { currentUser, logout } = useAuth()

  const history = useHistory()

  const loggedInItems = ( 
    <>
      <h5>welcome {currentUser && currentUser.email}</h5>
      <li className='nav-item'>

        <Button classname= 'logoutbutton' expand="lg" variant="dark" onClick={handleLogout}><BiLogOutCircle />
          <Link to={'/signin'} />
        </Button>
        <Form.Label variant="light" onClick={ ()=>history.push('/cart')}> <IoCartSharp/>Cart</Form.Label>
        {error && <Alert variant='danger'>{error}</Alert>}
      </li>
    </>
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

  async function handleLogout() {
    setError('')

    try {

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
