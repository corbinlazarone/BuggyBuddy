import BottomNav from './bottomNav';
import logo from './icons/buggyBuddyLogo.png'
import './css/App.css'

function App() {

  return (
    <div className="App">
      <header className="title">
        <img className="buggyPopUpLogo" src={logo} alt="fast cart logo" />
      </header>
      <div className='bottomNavBar'>
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
