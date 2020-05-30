import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import { ALL_DOMAINS_PATH } from '../GyaanDashboard/constants/PathName';

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
            <Link to='/gyaan/log-in/'>login page</Link>
            <Link to='/gyaan/sign-up/'>login page</Link>
            <Link to='/gyaan/allDomains'>gyaan allDomains</Link>
            <Link to='/gyaan'>gyaan App</Link>
         </header>
      </div>
   )
}

export default App
