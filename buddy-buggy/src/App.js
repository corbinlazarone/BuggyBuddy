import BottomNav from './bottomNav';
import './css/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Userlogin';
import UserLogIn from './Home';
import Header from './header';

export default function App() {

  return (
    <div className='App'>
      <Header />
      <BottomNav />
      <Routes>
        <Route path='/home' element={<UserLogIn />} />
        <Route path='/popup.html' element={<Home />} />
      </Routes>
    </div>
  );
}
