
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BsInfoCircle, BsEyeSlash, BsCalendar } from 'react-icons/bs';

function MainSearch() {
    const auth = localStorage.getItem("auth");

    return (
        <div className="container-fluid padding-lr-0 mh-100"  >
            <div className="row ">
                <div className="col ">

                    <div className="row  px-md-5 mt-4 ">
                        <h1 className='pl-0 col-12  padding-lr-0'>Good evening, Flowers and Friends  </h1>
                        <p className='mb-1 mt-3 padding-lr-0 font-10'>BOOKING REQUESTS </p>
                        <div className="col-md-3 col-sm mt-3 bordered-box p-3 m-1">
                            <p className="font-12 m-0" >Confirmation needed by <br />
                                1/1/2023 4PM </p>
                            <p className='text-danger time-left font-12'><BsInfoCircle /> <span>21 hours 31 mins left</span></p>
                            <p className='bold-p mb-0 fs-6'>Calli Smith’s wedding</p>
                            <p className='bold-p font-14'>May 11th 12-9 pm </p>
                            <p className='text-muted fst-italic font-14'>You have no bookings this day.  </p>
                            <button className="btn btn-secondary confirm-btn" >Confirm</button>
                            <p className='mb-0 mt-2 text-cyan-color text-decoration-underline fw-bold'> Don't confirm</p>
                        </div>

                        <div className="col-md-3 col-sm mt-3 bordered-box p-3 m-1">
                            <p className="font-12 m-0" >Confirmation needed by<br />
                                1/1/2023 4PM </p>
                            <p className='text-danger time-left font-12'><BsInfoCircle /> <span>21 hours 31 mins left</span></p>
                            <p className='bold-p mb-0 fs-6'>Calli Smith’s wedding</p>
                            <p className='bold-p font-14'>May 11th 12-9 pm </p>
                            <p className='text-muted fst-italic font-14'>You have no bookings this day.  </p>
                            <button className="btn btn-secondary confirm-btn" >Confirm</button>
                            <p className='mb-0 mt-2 text-cyan-color text-decoration-underline fw-bold'> Don't confirm</p>
                        </div>

                        <div className="col-md-3 col-sm mt-3 bordered-box p-3 m-1">
                            <p className="font-12 m-0" >Confirmation needed by <br />
                                1/1/2023 4PM </p>
                            <p className='text-danger time-left font-12'><BsInfoCircle /> <span>21 hours 31 mins left</span></p>
                            <p className='bold-p mb-0 fs-6'>Calli Smith’s wedding</p>
                            <p className='bold-p font-14'>May 11th 12-9 pm </p>
                            <p className='text-muted fst-italic font-14'>You have no bookings this day.  </p>
                            <button className="btn btn-secondary confirm-btn" >Confirm</button>
                            <p className='mb-0 mt-2 text-cyan-color text-decoration-underline fw-bold'> Don't confirm</p>
                        </div>

                        {/* if no bookings */}
                        {/* <div className="col-md-6 col-sm text-center ">
                            <BsCalendar size={40} className='mb-3 text-cyan-color' />
                            <p>No booking requests. </p>
                        </div> */}
                        {/* if no bookings */}

                        <p className='padding-lr-0 font-10 text-uppercase my-payment-info'>Your payment information </p>
                        <div className='row row-p-0 padding-lr-0'>
                            <div className='col-6'>
                                <div className='row mb-2'>
                                    <div className='col-md-4'>
                                        <p className='bold-p mb-0 fw-bold'>Routing number</p>
                                    </div>

                                    <div className='col-md-4 '>
                                        <p className='bold-p mb-0'>...514</p>
                                    </div>

                                    <div className='col-md-2'>
                                        <p className='bold-p mb-0'><BsEyeSlash size="20" color="#505267" /></p>
                                    </div>

                                    <div className='col-md-2'>
                                        {
                                            auth !== 'auth' ?
                                                <UpDateModal title={'Update'} />
                                                :
                                                <a className="update-info-btn" href='payment-detail'>
                                                    Update
                                                </a>
                                        }
                                    </div>
                                </div>

                                <div className='row mb-2'>
                                    <div className='col-md-4'>
                                        <p className='bold-p mb-0 fw-bold'>Account number</p>
                                    </div>

                                    <div className='col-md-4 '>
                                        <p className='bold-p mb-0'>....385</p>
                                    </div>

                                    <div className='col-md-2'>
                                        <p className='bold-p mb-0'><BsEyeSlash size="20" color="#505267" /></p>
                                    </div>

                                    <div className='col-md-2'>
                                        {
                                            auth !== 'auth' ?
                                                <UpDateModal title={'Update'} />
                                                :
                                                <a className="update-info-btn" href='payment-detail'>
                                                    Update
                                                </a>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default MainSearch

const UpDateModal = (props) => {

    const { title } = props
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <a className="update-info-btn" onClick={handleShow}>
                {title}
            </a>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton className='modal-custom'>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body className='mx-5'>
                    <h5>Sign in to update</h5>
                    <form id="loginForm">
                        <div class="mb-3">
                            <label for="Email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Csmith@gmail.com" />
                        </div>
                        <div>
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="******" />
                        </div>
                    </form></Modal.Body>
                <Modal.Footer className='modal-custom mx-5'>
                    <Button variant="secondary" type="submit" form="loginForm">
                        Sign in
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}



