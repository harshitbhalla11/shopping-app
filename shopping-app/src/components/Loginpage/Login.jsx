import React, { useRef, useState } from 'react'

import { Button,Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import {  useHistory } from 'react-router-dom'
import Footer from '../Footer'
import './logindesign.css'

function Login () {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit (e) {
    e.preventDefault()

    try {
     
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/product')
    } catch {
      setError('Failed to log in')
    }

    setLoading(false)
  }

  return (
    <>
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
export default Login
