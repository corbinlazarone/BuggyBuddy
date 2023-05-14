import BottomNav from './bottomNav';
import logo from './icons/buggyBuddyLogo.png'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import {useState} from 'react'
import './css/App.css'

function App() {

  return (
    <div className='App'>
      <header className='title' style={{height: 60}}>
        <div className='buggyLogoContainer'>
          <img className='buggyPopUpLogo' src={logo} alt='fast cart logo' />
        </div>
        <div className='closeIcon'>
          <IconButton color="primary">
            <CloseIcon size='large' onClick={() => {window.close()}}/>
          </IconButton>
        </div>
      </header>
      <div className='bottomNavBar'>
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
