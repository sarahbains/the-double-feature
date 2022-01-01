import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react'

function NavBar() {
    const [navOpen, setNavOpen] = useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen);
        console.log(navOpen)
    }
    return (
        <nav className="topbar-nav">
            <Hamburger className="hamburger" onToggle={showHideNav} />
            <ul className={navOpen ? 'show' : undefined}>
                <li>
                    <NavLink  to="/the-double-feature">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/the-double-feature/about">About</NavLink>
                </li>

                <li>
                    <NavLink to="/the-double-feature/favourites">Favourites</NavLink>
                </li>
            </ul>
            
        </nav>
    )
}

export default NavBar
