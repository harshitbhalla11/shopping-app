import React, { useRef, useState } from 'react'
import {connect} from 'react-redux';
import { Button,Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import {  useHistory, Redirect } from 'react-router-dom'
import Footer from '../Footer'
import * as actions from '../../store/actions/actions'
import './logindesign.css'


function Login (props) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login,currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit (e) {
    e.preventDefault()

    try {

      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
      props.setAuthStatus(true)
      // window.localStorage.setItem('isAuth',true);
     if(currentUser&&currentUser.email==='harshit.bhalla.002@gmail.com')
      history.push('/adminhome')
      else   history.push('/home')
    } catch {
      setError('Failed to log in')
      setLoading(false)
    }

  }

  return (
    <>
    {props.isAuth && <Redirect to="/" />}

      <form onSubmit={handleSubmit}>
        <div className='outer'>
          <div className='inner'>
            <h3>Log in</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className='form-group'>
              <label>Email</label>
              <input
                type='email'
                name='userEmail'

                className='form-control'
                placeholder='Enter email'
                ref={emailRef}

              />
            </div>

            <div className='form-group'>
              <label>Password</label>
              <input
                type='password'
                name='userPassword'

                className='form-control'
                placeholder='Enter password'
                ref={passwordRef}

              />
            </div>

            <div className='form-group'>
              <div className='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customCheck1'
                />
                <label className='custom-control-label' htmlFor='customCheck1'>
                  Remember me
                </label>
              </div>
            </div>

            <Button
              disabled={loading}
              type='submit'
              className='btn btn-dark btn-lg btn-block'

            >
              Sign in
            </Button>
            <p className='forgot-password text-right'>
              Forgot <a href='#'>password?</a>
            </p>

          </div>
        </div>
      </form>
      <Footer />
    </>
  )
}
const mapStateToProps = state=>{
	return{
		isAuth:state.isAuth
	}
}
const mapDispatchToProps = dispatch=>{
  return {
    setAuthStatus: authStatus => dispatch(actions.setAuthStatus(authStatus))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
