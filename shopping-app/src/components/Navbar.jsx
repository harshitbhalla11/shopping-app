/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {connect} from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Navbar,Form } from 'react-bootstrap'
import Mainlogo from './Mainlogo.svg'
import { BiLogOutCircle } from "react-icons/bi";
import { useState } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { IoCartSharp } from "react-icons/io5";
import * as actions from '../store/actions/actions'


//  import products from './components/product';

const Nav = (props) => {
  const { isAuth } = props;
  const { totalQuantity } = props;
  
  
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()

  const history = useHistory()

  const loggedInItems = (
    <>
      <h5>welcome {currentUser && currentUser.displayName}</h5>
      <li className='nav-item'>

        <Button className= 'logoutbutton' expand="lg" variant="dark" onClick={handleLogout}><BiLogOutCircle />
          <Link to={'/signin'} />
        </Button>
        <Form.Label variant="light" onClick={ ()=>history.push('/cart')}> <IoCartSharp/>Cart<p style={{color: "red"}}>{totalQuantity}</p> </Form.Label>
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
      props.setAuthStatus(false)
      history.push('/signin')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <Navbar className='navbar navbar-light bg-light'>
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
const mapStateToProps = state=>{
	return{
		isAuth:state.isAuth,
    totalQuantity:state.totalQuantity
	}
}
const mapDispatchToProps = dispatch=>{
  return {
    setAuthStatus: authStatus => dispatch(actions.setAuthStatus(authStatus))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Nav)