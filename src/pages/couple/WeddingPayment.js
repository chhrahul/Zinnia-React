import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function WeddingPayment() {

    return (
        <div className="container-fluid px-md-5 mt-3 custom-search">
            <div className="row paddin-lr">
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <p className="d-flex invoice-top-custom mb-0">
                        <p class="color-cyan" >Account</p> <p> > Wedding info</p>
                    </p>
                    <h5 className="text-dark">Payments</h5>
                    <p className='mb-3 mt-3 padding-lr-0 text-uppercase custom-ptext'>My Cards </p>
                    <div className="row mb-3">
                        <div className="col-md-4 p-0">
                            <img src="/images/wedding-payment.jpg" alt="wedding-payment" className="w-100" />
                        </div>
                    </div>
                    <div className="mb-3 col-lg-3">
                        <p className="mb-0 text-uppercase">Billing address</p>
                        <p>Julie C. Lee
                            1234 Fake address
                            Monterey, CA
                            95112</p>
                    </div>
                    <div className="mb-3">
                        <a href="#" className="text-cyan-color">Edit</a>
                    </div>
                    <div>
                        <CardDetailModal title={'Add a card'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WeddingPayment
const CardDetailModal = (props) => {

    const { title } = props
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="btn btn-outline-secondary" onClick={handleShow}>
                {title}
            </Button>
            <Modal size="lg" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton className='modal-custom'>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="text-center mb-2">New Payment</h5>
                    <form id="carddetailForm">
                        <div class="row">
                            <div className="col-md-6">
                                <div class="input-group mb-3">
                                    <input type="number" class="form-control border-custom" id="card-number" placeholder="Card number" />
                                    <span class="input-group-text text-muted" id="basic-addon6"><img src="/images/icons/Camera.png" alt="guest" /></span>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="input-group mb-3">
                                    <input type="date" class="form-control" id="expiry-date" placeholder="Expiry (MM/YY)" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="input-group mb-3">
                                    <input type="number" class="form-control" id="cvv" placeholder="CVV" />
                                </div>
                            </div>
                        </div>
                        <div class="row paddin-lr">
                            <p className="text-uppercase">Billing address</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" id="addressline1" placeholder="Address line 1" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" id="city" placeholder="City" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" id="addressline2" placeholder="Address line 2" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" id="state" placeholder="state" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="input-group mb-3">
                                    <input type="number" class="form-control" id="wedding-guest" placeholder="zipcode" />
                                </div>
                            </div>
                        </div>
                    </form></Modal.Body>
                <Modal.Footer className='modal-custom card-detail'>
                    <div class="row p-0">
                        <Button variant="btn btn-secondary btn-lg mt-2 pay-custom-checkout py-2 mb-4" type="submit" form="carddetailForm">
                      Save
                    </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}