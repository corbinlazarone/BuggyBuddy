import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import Home from "./home.js"
import UserLogIn from "./userLog.js"
import { useState } from 'react'

function BottomNav() {

    const [value, setValue] = useState('user');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }


    return (
        <BottomNavigation className='container' value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="Home"
                value="home"
                className='home'
                icon={<HomeIcon size="medium" />}
            />
            <BottomNavigationAction
                label="Log In"
                value="user"
                className='user'
                icon={<PersonIcon size="medium" />}
            />
        </BottomNavigation>
    );
}
export default BottomNav;