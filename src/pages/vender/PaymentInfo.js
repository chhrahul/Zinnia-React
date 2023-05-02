import React from 'react';
import { BsInfoCircle, BsEyeSlash, BsCalendar } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function PaymentInfo() {
    const auth = localStorage.getItem("auth");
    return (
        <div className="container-fluid px-md-5  mt-3 custom-search">
            <div className="row paddin-lr upper-part-custom">
                <div className="col-lg-8 col-md-6 col-sm-12 ">
                    <p className="d-flex invoice-top-custom mb-0">
                        <p class="color-cyan" >About you</p> <p> &gt;  Payments</p>
                    </p>
                    <h5>Payment</h5>
                    <p className='mb-3 mt-3 padding-lr-0 text-uppercase font-10'>Your payment information </p>
                    <div className='row row-p-0 padding-lr-0'>
                        <div className='col-lg-8'>
                            <div className='row mb-2'>
                                <div className='col-md-4'>
                                    <p className='bold-p mb-0 fw-bold'>Routing number</p>
                                </div>

                                <div className='col-md-4 '>
                                    <p className='bold-p mb-0'>...514</p>
                                </div>

                                <div className='col-md-2'>
                                    <p className='bold-p mb-0'><BsEyeSlash size="20" color="#505267"/></p>
                                </div>

                                <div className='col-md-2'>
                                    {auth !== 'auth' ?
                                        <UpDateModal title={'Update'} />
                                        :
                                        <Button variant="btn text-cyan-color btn-lg mb-0 p-0 fs-6" href='payment-detail'>
                                            Update
                                        </Button>}
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
                                    {auth !== 'auth' ?
                                        <UpDateModal title={'Update'} />
                                        :
                                        <Button variant="btn text-cyan-color btn-lg mb-0 p-0 fs-6" href='payment-detail'>
                                            Update
                                        </Button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default PaymentInfo

const UpDateModal = (props) => {

    const { title } = props
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="btn text-cyan-color btn-lg mb-0 p-0 fs-6" onClick={handleShow}>
                {title}
            </Button>
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

