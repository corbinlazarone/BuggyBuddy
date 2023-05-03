import BottomNav from './bottomNav';
import logo from './icons/icons8-fast-cart-64.png'
import './css/App.css'

function App() {

  return (
    <div className="App">
      <header className="title">
        <img className="buggyPopUpLogo" src={logo} alt="fast cart logo" />
        <h2>Buggy Buddy</h2>
      </header>
      <div className='bottomNavBar'>
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
