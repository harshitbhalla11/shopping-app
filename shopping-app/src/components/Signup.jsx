import React, { useRef, useState } from 'react'

import { useAuth } from './contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

import { Alert } from 'react-bootstrap'
import Footer from './Footer'

const SignUp = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit (e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/signin')
    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='outer'>
          <div className='inner'>
            <h3>Register</h3>
            {/* {currentUser.email} */}
            {error && <Alert variant='danger'>{error}</Alert>}

            <div className='form-group'>
              <label>Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='First name'
                name='displayName'
                required
              />
            </div>
            <div className='form-group'>
              <label>Email</label>
              <input
                type='email'
                className='form-control'
                name='userEmail'
                ref={emailRef}
                required
                placeholder='Enter email'
              />
            </div>
            <div className='form-group'>
              <label>Password</label>

              <input
                className='form-control'
                type='password'
                name='userPassword'
                ref={passwordRef}
                placeholder='Enter password'
                required
              />
            </div>

            <div className='form-group'>
              <label>Confirm Password</label>
              <input
                type='password'
                className='form-control'
                name='userPassword'
                ref={passwordConfirmRef}
                placeholder='Enter password'
                required
              />
            </div>
            <button
              type='submit'
              disabled={loading}
              className='btn btn-dark btn-lg btn-block'
            >
              Register
            </button>
            <p className='forgot-password text-right'>
              Already registered <Link to='/'>Login?</Link>
            </p>
          </div>
        </div>
      </form>
      <Footer />
    </>
  )
}
export default SignUp
