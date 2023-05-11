import * as React from 'react'
import { Nav, Navbar, Form, Container, NavDropdown, Modal, Button } from 'react-bootstrap/';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxAvatar, RxCross1 } from "react-icons/rx";
import CartCount from './Common/CartCount';
const Navigation = (props) => {
    const [activeNav, setActiveNav] = React.useState('')
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const handleClickNav = (name) => {
        setActiveNav(name)
    }

    const logout = () => {
        localStorage.setItem("auth", '');
        localStorage.setItem("selectedSignupType", '');
        window.location.href = '/sign-up';
    }


    const userType = localStorage.getItem("selectedSignupType")
    const auth = localStorage.getItem("auth");
    // localStorage.setItem("cart", '[]');


    return (
        < >
            <div className="container-fluid main-nav position-relative "  >
                <div className="row">
                    <Navbar expand="md">
                        <Container fluid className='mx-md-5 p-md-0 paddin-lr  position-sticky '>
                            <Navbar.Brand href="/main-search"><img src="images/Logo.png" alt="" className="nav-bar-img" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll" >
                                <Nav
                                    className="me-auto my-2 my-md-0"
                                    navbarScroll
                                >
                                    {userType === 'vendor' ?
                                        <>
                                            <Nav.Link href="/booking-request" onClick={() => handleClickNav('dashboard')} className={activeNav === 'dashboard' || splitLocation[1] === "booking-request" ? 'text-cyan-color' : ""}> Dashboard </Nav.Link>
                                            <Nav.Link className='d-none d-md-inline nav-seperator'>/</Nav.Link>
                                            <Nav.Link href="/listing" onClick={() => handleClickNav('listing')} className={activeNav === 'listing' || splitLocation[1] === "listing" ? 'text-cyan-color' : ""}> Listing </Nav.Link>
                                            <Nav.Link className='d-none d-md-inline nav-seperator'>/</Nav.Link>
                                            <Nav.Link href="/calendar" onClick={() => handleClickNav('calendar')} className={activeNav === 'calendar' || splitLocation[1] === "calendar" ? 'text-cyan-color' : ""}> Calendar </Nav.Link>
                                            <Nav.Link className='d-none d-md-inline nav-seperator'>/</Nav.Link>
                                            <Nav.Link href="/invoices" onClick={() => handleClickNav('invoices')} className={activeNav === 'invoices' || splitLocation[1] === "invoices" ? 'text-cyan-color' : ""}> Invoices </Nav.Link>
                                            <Nav.Link className='d-none d-md-inline nav-seperator'>/</Nav.Link>
                                            <Nav.Link href="/messages" onClick={() => handleClickNav('messages')} className={activeNav === 'messages' || splitLocation[1] === "messages" ? 'text-cyan-color d-flex message-nav' : " d-flex message-nav"}> Messages <span class="badge custom-badge">2</span></Nav.Link>
                                        </>
                                        :
                                        <>
                                            {userType === 'gettingMarried' ?
                                                <>
                                                    <span className='cart-couple'>
                                                        <CartModal {...props} />
                                                    </span>

                                                    <Nav.Link href="/couple-dashboard" onClick={() => handleClickNav('couple-dashboard')} className={activeNav === 'couple-dashboard' || splitLocation[1] === "couple-dashboard" ? 'text-cyan-color my-day-nav' : "my-day-nav"}> My Day </Nav.Link>
                                                    <Nav.Link className='d-none d-md-inline nav-seperator'>/</Nav.Link>
                                                    <Nav.Link href="/messages" onClick={() => handleClickNav('messages')} className={activeNav === 'messages' || splitLocation[1] === "messages" ? 'text-cyan-color d-flex message-nav' : " d-flex message-nav"} > Messages <span class="badge custom-badge">1</span> </Nav.Link>
                                                </>
                                                :
                                                ''
                                            }
                                        </>
                                    }

                                    {auth !== 'auth' ?
                                        <>
                                            {userType !== 'gettingMarried' &&
                                                <span className='cart-couple'>
                                                    <CartModal {...props} />
                                                </span>
                                            }
                                            <Link to="/sign-up" className="btn btn-outline-secondary signup-item ">
                                                Sign up
                                            </Link>
                                        </>
                                        :
                                        <>
                                            <NavDropdown title={<RxAvatar size={28} />} id="navbarScrollingDropdown" className={activeNav === 'venue' || splitLocation[1] === "venue" || splitLocation[1] === "photographer" || splitLocation[1] === "florist" ? 'text-cyan-color' : ""} >
                                                {userType === 'gettingMarried' ?
                                                    <NavDropdown.Item href="/account">
                                                        About
                                                    </NavDropdown.Item>
                                                    :
                                                    <NavDropdown.Item href="/about">
                                                        About
                                                    </NavDropdown.Item>
                                                }

                                                <NavDropdown.Divider />
                                                <NavDropdown.Item onClick={logout}>Logout
                                                </NavDropdown.Item>
                                                {/* <NavDropdown.Item href="/photographer" onClick={() => handleClickNav('photographer')} className={activeNav === 'photographer' || splitLocation[1] === "photographer" ? 'text-cyan-color' : ""}> Photographer
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/florist" onClick={() => handleClickNav('florist')} className={activeNav === 'florist' || splitLocation[1] === "florist" ? 'text-cyan-color' : ""}> Florist
                                                </NavDropdown.Item> */}
                                            </NavDropdown>
                                        </>
                                    }

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

const CartModal = (props) => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOnclickRemove = (e, index) => {


        const cartData = JSON.parse(localStorage.getItem("cart"))
        console.log(cartData.length)
        localStorage.setItem("cart", JSON.stringify([
            ...cartData.slice(0, index),
            ...cartData.slice(index + 1)
        ]));

    }
    const cartCount = JSON.parse(localStorage.getItem("cart"))
    let subtotal = 0
    if (cartCount) {
        cartCount.map((item, index) => {
            subtotal += item.price
        })
    }


    return (
        <>

            <Nav.Link onClick={handleShow} className='cartCoutBadge'>
                <CartCount {...props} />
            </Nav.Link>
            <Modal
                size="md"
                aria-labelledby=""

                show={show}
                onHide={handleClose}
                className="float-right cart-modal"
            >

                <Modal.Title id="" className='cart-modal-head p-3'>
                    Your cart <span onClick={handleClose} className='float-right mx-2 '><RxCross1 /></span>
                </Modal.Title>

                <Modal.Body className='pb-0'>
                    {cartCount && cartCount.length > 0 ?
                        <>
                            {cartCount &&
                                cartCount.map((item, index) => {
                                    return <>

                                        <div className="row paddin-lr-0 checkout-box-border mb-3">
                                            <div className="col-md-4 p-0">
                                                <img src="/images/listing/photographer-2.jpg" alt="photo" className='w-100 h-100' />
                                            </div>
                                            <div className="col-md-8">
                                                <div class="row">
                                                    <p className="heading-cart">{item.name}</p>
                                                    <div class="">
                                                        <p className=" venue-address-custom cart-price-text text-black">${item.price} for 5 hours</p>
                                                        <Link className="mb-0 remove-item-btn" onClick={(e) => handleOnclickRemove(e, index)} >Remove</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                })}</>
                        :
                        'No item added'}
                    <div className='row'>
                        <div className='col-6'>
                            <p className='subtotal-text'>Subtotal*</p>
                        </div>
                        <div className='col-6 '>
                            <p className='float-right subtotal-price'>${subtotal.toLocaleString()}.00</p>
                        </div>
                    </div>
                    <p>*Taxes and fees calculated at check out</p>
                    <Button href="/checkout-availability" variant="secondary" className='m-3 float-right ml-5'>Check out</Button>
                </Modal.Body>
            </Modal>
        </>
    )
}
