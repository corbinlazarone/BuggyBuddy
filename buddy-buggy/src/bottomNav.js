import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './css/bottomNav.css'

const theme = createTheme({
    palette: {
        primary: {
            main: "#9c27b0" // Purple
        },
        secondary: {
            main: "#1976d2" // Blue
        }
    }
})


export default function BottomNav() {

    const [value, setValue] = useState('user');
    const navigate = useNavigate()

    return (
        <ThemeProvider theme={theme}>
            <footer>
            <div className='bottomNavBar'>
                <BottomNavigation className='container' value={value} onChange={(event, newValue) => setValue(newValue)}>
                    <BottomNavigationAction
                        label="Home"
                        value="home"
                        className='home'
                        icon={<HomeIcon size="medium" />}
                        onClick={() => navigate("/home")}
                    />
                    <BottomNavigationAction
                        label="Log In"
                        value="user"
                        className='user'
                        icon={<PersonIcon size="medium" />}
                        onClick={() => navigate("/popup.html")}
                    />
                </BottomNavigation>
                </div>
            </footer>
        </ThemeProvider>
    );
}