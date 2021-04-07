import React from 'react'
import { LogoNodejs, LogoDiscord, LogoTwitter } from 'react-ionicons'

const Footer = () => (
  <div className='footer'>
    <div className='footer-basic'>
      <footer>
        <div className='social'>
          <LogoNodejs
            color={'#00000'}
            rotate
            height='50px'
            width='50px'
            onClick={() => alert('Hi!')}
            style={{ margin: '0 0 0 1px' }}
          />
          <LogoDiscord
            color={'#00000'}
            rotate
            height='50px'
            width='50px'
            onClick={() => alert('Hi!')}
          />
          <LogoTwitter
            color={'#2ea1c4'}
            rotate
            height='50px'
            width='50px'
            onClick={() => alert('Hi!')}
          />
        </div>
        <ul className='list-inline'>
          <li className='list-inline-item'>
            <a href='#'>Home</a>
          </li>
          <li className='list-inline-item'>
            <a href='#'>Services</a>
          </li>
          <li className='list-inline-item'>
            <a href='#'>About</a>
          </li>
          <li className='list-inline-item'>
            <a href='#'>Terms</a>
          </li>
          <li className='list-inline-item'>
            <a href='#'>Privacy Policy</a>
          </li>
        </ul>
        <p className='copyright'>ZILStore © 2021</p>
      </footer>
    </div>
  </div>
)

export default Footer
