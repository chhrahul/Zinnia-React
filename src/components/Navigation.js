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
                            <Navbar.Brand href="#"><img src="images/Logo.png" alt="" className="nav-bar-img" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll" >
                                <Nav
                                    className="me-auto my-2 my-md-0"
                                    navbarScroll
                                >
                                    {userType === 'vendor' ?
                                        <>
                                            <Nav.Link href="/booking-request" onClick={() => handleClickNav('dashboard')} className={activeNav === 'dashboard' || splitLocation[1] === "booking-request" ? 'text-cyan-color' : ""}> Dashboard </Nav.Link>
                                            <Nav.Link href="/listing" onClick={() => handleClickNav('listing')} className={activeNav === 'listing' || splitLocation[1] === "listing" ? 'text-cyan-color' : ""}><span className='d-none d-lg-inline '>/</span> Listing </Nav.Link>
                                            <Nav.Link href="/calendar" onClick={() => handleClickNav('calendar')} className={activeNav === 'calendar' || splitLocation[1] === "calendar" ? 'text-cyan-color' : ""}><span className='d-none d-lg-inline '>/</span> Calendar </Nav.Link>
                                            <Nav.Link href="/invoices" onClick={() => handleClickNav('invoices')} className={activeNav === 'invoices' || splitLocation[1] === "invoices" ? 'text-cyan-color' : ""}><span className='d-none d-lg-inline '>/</span> Invoices </Nav.Link>
                                            <Nav.Link href="/messages" onClick={() => handleClickNav('messages')} className={activeNav === 'messages' || splitLocation[1] === "messages" ? 'text-cyan-color' : ""}><span className='d-none d-lg-inline '>/</span> Messages </Nav.Link>
                                        </>
                                        :
                                        <>
                                            {userType === 'gettingMarried' ?
                                                <>
                                                    <Nav.Link href="/couple-dashboard" onClick={() => handleClickNav('couple-dashboard')} className={activeNav === 'couple-dashboard' || splitLocation[1] === "couple-dashboard" ? 'text-cyan-color' : ""}> My Day </Nav.Link>
                                                    <Nav.Link href="/messages" onClick={() => handleClickNav('messages')} className={activeNav === 'messages' || splitLocation[1] === "messages" ? 'text-cyan-color' : ""}><span className='d-none d-lg-inline '>/</span> Messages </Nav.Link>
                                                </>
                                                :
                                                ''
                                            }
                                        </>
                                    }

                                    {auth !== 'auth' ?
                                        <>
                                            <CartModal {...props} />
                                            <Nav.Link href="/sign-up" className="btn btn-outline-secondary signup-item ">
                                                Sign up
                                            </Nav.Link>
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
    const cartCount = JSON.parse(localStorage.getItem("cart"))


    const handleOnclickRemove = (e, index) => {
        const cartData = JSON.parse(localStorage.getItem("cart"))
        const newVal = cartData.splice(index, 1)
        if (index !== 0) {
            localStorage.setItem("cart", JSON.stringify(newVal));
        } else {
            localStorage.setItem("cart", '[]');
            handleClose()
        }
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
                    {cartCount &&
                        cartCount.map((item, index) => {

                            return <>

                                {cartCount.length > 0 ?

                                    <div className="row paddin-lr-0 checkout-box-border mb-3">
                                        <div className="col-md-4 p-0">
                                            <img src="/images/listing/photographer-2.jpg" alt="photo" className='w-100 h-100' />
                                        </div>
                                        <div className="col-md-8">
                                            <div class="row">
                                                <p className="heading-cart">Best Photography</p>
                                                <div class="">
                                                    <p className=" venue-address-custom cart-price-text text-black">$3,000 for 5 hours</p>
                                                    <Link className="mb-0 remove-item-btn" onClick={(e) => handleOnclickRemove(e, index)} >Remove</Link>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                    :
                                    'No item added'
                                }
                            </>

                        })}


                    <Button href="/checkout-availability" variant="secondary" className='m-3 float-right ml-5'>Check out</Button>
                </Modal.Body>
            </Modal>
        </>
    )
}
