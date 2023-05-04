import React from 'react';
import { Modal, Button } from 'react-bootstrap';


function CoupleDashboard() {

    return (
        <>
            <div className="container-fluid px-md-5  mt-3 custom-search">
                <div className="row paddin-lr upper-part-custom">
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <span className="d-flex wedding-day-custom-top"><p class="wedding-day-custom font-14">Wedding day 6/4/23, 3:30pm, 6 hours</p>
                            <img src="/images/icons/Edit.svg" alt="edit" /></span>
                        <h2>20 days to go!</h2>
                    </div>
                    <div className="row paddin-lr">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div class="card couple-card-custom">
                                <img src="/images/beach-photo.jpg" alt="beach-photo" className='w-100 h-100 px-2' />
                                <div class="card-body">
                                    <h5 class="card-title">Flowers and Friends</h5>
                                    <p className="mb-0 venue-address-custom">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 3.13 11.37 0 7.5 0ZM7.5 9.5C6.12 9.5 5 8.38 5 7C5 5.62 6.12 4.5 7.5 4.5C8.88 4.5 10 5.62 10 7C10 8.38 8.88 9.5 7.5 9.5Z" fill="#31A7AD" />
                                        </svg>CHICAGO,IL
                                    </p>
                                    <p className="mb-0 venue-address-custom text-black">$6,000.00</p>
                                    <p className="mb-0 venue-address-custom text-black"><img src="/images/icons/star.svg" alt="star" />4.8</p>
                                    <button type="button" class="btn btn-outline-secondary fs-6 fw-bold">Message Vendor</button>
                                    <div>
                                        <CancelModal title={'Cancel'} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 below-card-size">
                            <div class="card couple-card-custom">
                                <img src="/images/beach-photo.jpg" alt="beach-photo" className='w-100 h-100 px-2' />
                                <div class="card-body">
                                    <h5 class="card-title">Flowers and Friends</h5>
                                    <p className="mb-0 venue-address-custom">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 3.13 11.37 0 7.5 0ZM7.5 9.5C6.12 9.5 5 8.38 5 7C5 5.62 6.12 4.5 7.5 4.5C8.88 4.5 10 5.62 10 7C10 8.38 8.88 9.5 7.5 9.5Z" fill="#31A7AD" />
                                        </svg>CHICAGO,IL
                                    </p>
                                    <p className="mb-0 venue-address-custom text-black">$6,000.00</p>
                                    <p className="mb-0 venue-address-custom text-black"><img src="/images/icons/star.svg" alt="star" />4.8</p>
                                    <button type="button" class="btn btn-outline-secondary fs-6 fw-bold">Message Vendor</button>
                                    <div>
                                        <CancelModal title={'Cancel'} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 below-card-size">
                            <div class="card couple-card-custom">
                                <img src="/images/beach-photo.jpg" alt="beach-photo" className='w-100 h-100 px-2' />
                                <div class="card-body">
                                    <h5 class="card-title">Flowers and Friends</h5>
                                    <p className="mb-0 venue-address-custom">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 3.13 11.37 0 7.5 0ZM7.5 9.5C6.12 9.5 5 8.38 5 7C5 5.62 6.12 4.5 7.5 4.5C8.88 4.5 10 5.62 10 7C10 8.38 8.88 9.5 7.5 9.5Z" fill="#31A7AD" />
                                        </svg>CHICAGO,IL
                                    </p>
                                    <p className="mb-0 venue-address-custom text-black">$6,000.00</p>
                                    <p className="mb-0 venue-address-custom text-black"><img src="/images/icons/star.svg" alt="star" />4.8</p>
                                    <button type="button" class="btn btn-outline-secondary fs-6 fw-bold">Message Vendor</button>
                                    <div>
                                        <CancelModal title={'Cancel'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>


    )
}
export default CoupleDashboard

const CancelModal = (props) => {

    const { title } = props
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="btn text-danger p-0 cancel-danger-btn fw-bold" onClick={handleShow}>
                {title}
            </Button>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton className='modal-custom'>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body className='mx-5'>
                    <h5>Are you sure you want to cancel?</h5>
                    <p>If you cancel, because you are less than a month out you will only receive a 50% refund. </p>
                    <form id="cancelForm">
                        <div class="mb-3">
                            <label for="reason-dropdown" class="form-label">Reason for cancellation</label>
                            <select class="form-select" aria-label="Default select example" id="reason-dropdown">
                                <option selected>Other</option>
                                <option value="1">The couple canceled</option>
                                <option value="2">Had to move to a later date</option>
                                <option value="3">Other</option>
                            </select>
                        </div>
                        <div>
                            <label for="cancel-reason" class="form-label">Reason</label>
                            <input type="text" class="form-control" id="cancel-reason" placeholder="The wedding is off" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className='modal-custom mx-5 cance-modal-footer'>
                    <Button variant="btn btn-outline-secondary" type="submit" form="cancelForm">
                        Don’t cancel
                    </Button>
                    <Button variant="btn btn-danger" type="submit" form="cancelForm">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}