import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import './Navbar.css'

function NavBar({ShowLanModalHandler , lanBtnTitle , ShowContactModalHandler}) {
    const [colorChange, setColorchange] = React.useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    }
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <Navbar expand="lg"  data-bs-theme="dark" className={colorChange ? 'navbarContainer active' : 'navbarContainer'}>
            <div className="Container" id='navbarContainerBox'>
                <Navbar.Brand href="#home" className='NavbarBrand'>Sayman Teb</Navbar.Brand>
                <div id='navbarActionBox'>
                    <button onClick={ShowContactModalHandler}><CallIcon/></button>
                    <button onClick={ShowLanModalHandler}> <LanguageIcon/> <span>{lanBtnTitle}</span> </button>
                </div>
            </div>
        </Navbar>
    );
}
export default NavBar;