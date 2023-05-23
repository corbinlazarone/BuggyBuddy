import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider, createTheme } from '@mui/material';
import logo from './icons/buggyBuddyLogo.png'
import './css/Header.css'

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

export default function Header() {


    return (
        <ThemeProvider theme={theme}>
            <div className='header'>
                <div className='buggyLogoContainer'>
                    <img className='buggyPopUpLogo' src={logo} alt='fast cart logo' />
                </div>
                <div className='closeIcon'>
                    <IconButton size='medium' color="primary" onClick={() => { window.close() }}>
                        <CloseIcon size='large' />
                    </IconButton>
                </div>
            </div>
        </ThemeProvider>
    )
}