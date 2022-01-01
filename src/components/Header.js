import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header-container">
            <header className="header">
                <div className="title">
                    <Link to="/"><h1 data-heading="o">The Double Feature</h1></Link>
                </div>
                <div className="nav-header">
                    <NavBar />
                </div>
            </header>
        </div>
    )
}

export default Header
