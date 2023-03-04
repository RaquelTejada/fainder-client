import './Navigation.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'

const Navigation = () => {

    const { user, logoutUser } = useContext(AuthContext)

    return (

        <Navbar className='nav' collapseOnSelect expand="lg">
            <Link to="/" className='brand-name'>
                <img className='logo-img' src="https://res.cloudinary.com/dd9l4bwjy/image/upload/v1677953309/fAInder-black_sbjtrx.png"
                    alt='attomo-logo' />
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    {
                        <Link to="/createAi" className='brand-name-admin' >
                            {user?.role === "ADMIN" && <Nav.Link as="div">Create new AI</Nav.Link>}
                        </Link>
                    }
                    <NavDropdown title="Access" className='nav-dropdown'>
                        {
                            !user
                                ?
                                <>
                                    <Link to="#signup" className='dropdown-text'>
                                        <Nav.Link as='div'>Sign Up</Nav.Link>
                                    </Link>
                                    <Link to="#login" className='dropdown-text'>
                                        <Nav.Link as='div'>Log In</Nav.Link>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to="/" className='dropdown-text-logout'>
                                        {user && <Nav.Link as='div' onClick={logoutUser}>Log Out</Nav.Link>}
                                    </Link>
                                </>
                        }
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navigation
