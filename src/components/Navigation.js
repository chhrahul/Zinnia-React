import * as React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navigation = (props) => {
    const [activeNav, setActiveNav] = React.useState('')
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    const { cart } = props
    const handleClickNav = (name) => {
        setActiveNav(name)
    }

    return (
        < >
            <div className="container-fluid main-nav position-relative "  >
                <div className="row">
                    <Navbar expand="md">
                        <Container fluid className='mx-md-5 p-md-0 paddin-lr'>
                            <Navbar.Brand href="#"><img src="images/Logo.png" alt="" className="nav-bar-img" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll" >
                                <Nav
                                    className="me-auto my-2 my-md-0"
                                    navbarScroll
                                >
                                    <Nav.Link href="/booking-request" onClick={() => handleClickNav('dashboard')} className={activeNav === 'dashboard' || splitLocation[1] === "booking-request" ? 'text-cyan-color' : ""}> Dashboard </Nav.Link>
                                    <Nav.Link href="/listing" onClick={() => handleClickNav('listing')} className={activeNav === 'listing' || splitLocation[1] === "listing" ? 'text-cyan-color' : ""}><span className='d-none d-lg-inline '>/</span> Listing </Nav.Link>
                                    {/* <NavDropdown title={<><span className='d-none d-lg-inline '>/</span> Listing</>} id="navbarScrollingDropdown" className={activeNav === 'venue' || splitLocation[1] === "venue" || splitLocation[1] === "photographer" || splitLocation[1] === "florist" ? 'text-cyan-color' : ""}>
                                        <NavDropdown.Item href="/venue" onClick={() => handleClickNav('venue')} className={activeNav === 'venue' || splitLocation[1] === "venue" ? 'text-cyan-color' : ""}> Venue
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/photographer" onClick={() => handleClickNav('photographer')} className={activeNav === 'photographer' || splitLocation[1] === "photographer" ? 'text-cyan-color' : ""}> Photographer
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/florist" onClick={() => handleClickNav('florist')} className={activeNav === 'florist' || splitLocation[1] === "florist" ? 'text-cyan-color' : ""}> Florist
                                        </NavDropdown.Item>
                                    </NavDropdown> */}
                                    <Nav.Link href="/calender" onClick={() => handleClickNav('calender')} className={activeNav === 'calender' || splitLocation[1] === "calender" ? 'text-cyan-color' : ""}><span className='d-none d-lg-inline '>/</span> Calender </Nav.Link>
                                    <Nav.Link href="/invoices" onClick={() => handleClickNav('invoices')} className={activeNav === 'invoices' || splitLocation[1] === "invoices" ? 'text-cyan-color' : ""}><span className='d-none d-lg-inline '>/</span> Invoices </Nav.Link>
                                    <Nav.Link href="/messages" onClick={() => handleClickNav('messages')} className={activeNav === 'messages' || splitLocation[1] === "messages" ? 'text-cyan-color' : ""}><span className='d-none d-lg-inline '>/</span> Messages </Nav.Link>
                                    <Nav.Link href="/checkout-availability" className='cart-icon'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="cart-icon-fill" d="M6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM0 0V2H2L5.6 9.59L4.25 12.04C4.09 12.32 4 12.65 4 13C4 14.1 4.9 15 6 15H18V13H6.42C6.28 13 6.17 12.89 6.17 12.75L6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C19.96 3.34 20 3.17 20 3C20 2.45 19.55 2 19 2H4.21L3.27 0H0ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" fill="#505267" />
                                        </svg>
                                    </Nav.Link>
                                    <Nav.Link href="/sign-up" className="btn btn-outline-secondary signup-item ">
                                        Sign up
                                    </Nav.Link>
                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </>
    )
}

export default Navigation