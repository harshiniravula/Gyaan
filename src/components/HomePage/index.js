import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import {
   GYAAN_PATH
}
from '../../GyaanDashboard/constants/PathName';

import {
   LOGIN_PATH,
   SIGN_UP_PATH
}
from '../../Authentication/constants/PathName';

function App() {
   return (
      <div className='App'>
         <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className='App-link'
               href='https://reactjs.org'
               target='_blank'
               rel='noopener noreferrer'
            >
               Learn React
            </a>
            <Link to='/page-1'>Page 1</Link>
            <Link to={LOGIN_PATH}>login page</Link>
            <Link to={SIGN_UP_PATH}>sign page</Link>
            <Link to={GYAAN_PATH}>gyaan App</Link>
         </header>
      </div>
   )
}

export default App
