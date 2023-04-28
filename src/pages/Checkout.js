import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DatePicker from '../components/Datepicker.js'
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';


function Checkout() {

    return (
        <div className="container-fluid px-md-5  mt-3 custom-search">

            <div className="row paddin-lr">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h1 className="mt-4">Woohoo, booking time!</h1>
                    <p>
                        All services selected are for Saturday, January 4th 2024. Double check and make sure that your selected date/time is correct.  <ChangeDateModal title={'Checkout'} />
                    </p>
                    <div className="row paddin-lr-0 checkout-box-border">
                        <div className="col-md-4 p-0">
                            <img src="/images/listing/photographer-2.jpg" alt="photo" className='w-100 h-100' />
                        </div>
                        <div className="col-md-8">
                            <div class="row">
                                <p className="checkout-heading">Best Photography</p>
                                <div class="col-6">

                                    <p className="mb-0 venue-address-custom">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 3.13 11.37 0 7.5 0ZM7.5 9.5C6.12 9.5 5 8.38 5 7C5 5.62 6.12 4.5 7.5 4.5C8.88 4.5 10 5.62 10 7C10 8.38 8.88 9.5 7.5 9.5Z" fill="#31A7AD" />
                                        </svg>CHICAGO,IL
                                    </p>
                                    <p className="mb-0 venue-address-custom text-black-50">$3,000 for 5 hours</p>
                                    <p className="mb-2 venue-address-custom text-black-50"><img src="/images/icons/star.svg" alt="star" />4.8</p>
                                </div>

                                <div className="col-6 delete-custom">
                                    <img src="/images/icons/delete.jpg" alt="delete-icon" />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="row paddin-lr-0 mt-2 checkout-box-border">
                        <div className="col-md-4 p-0">
                            <img src="/images/beach-photo.jpg" alt="beach-photo" className='w-100 h-100' />
                        </div>
                        <div className="col-md-8">
                            <div class="row">
                                <p className="checkout-heading">Lakeside Hotel</p>
                                <div class="col-6">

                                    <p className="mb-0 venue-address-custom">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 3.13 11.37 0 7.5 0ZM7.5 9.5C6.12 9.5 5 8.38 5 7C5 5.62 6.12 4.5 7.5 4.5C8.88 4.5 10 5.62 10 7C10 8.38 8.88 9.5 7.5 9.5Z" fill="#31A7AD" />
                                        </svg>CHICAGO,IL
                                    </p>
                                    <p className="mb-0 venue-address-custom text-black-50">$3,000 for 5 hours</p>
                                    <p className="mb-0 venue-address-custom text-black-50"><img src="/images/icons/star.svg" alt="star" />4.8</p>
                                </div>

                                <div className="col-6 delete-custom">
                                    <img src="/images/icons/delete.jpg" alt="delete-icon" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row mt-2 paddin-lr-0 checkout-box-border">
                        <div className="col-md-4 p-0">
                            <img src="/images/florist-cutting.jpg" alt="flower-cutting" className='w-100 h-100' />
                        </div>
                        <div className="col-md-8">
                            <div class="row">
                                <p className="checkout-heading">Florist</p>
                                <div class="col-6">

                                    <p className="mb-0 venue-address-custom">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 3.13 11.37 0 7.5 0ZM7.5 9.5C6.12 9.5 5 8.38 5 7C5 5.62 6.12 4.5 7.5 4.5C8.88 4.5 10 5.62 10 7C10 8.38 8.88 9.5 7.5 9.5Z" fill="#31A7AD" />
                                        </svg>CHICAGO,IL
                                    </p>
                                    <p className="mb-0 venue-address-custom text-black-50">$3,000 for 5 hours</p>
                                    <p className="mb-0 venue-address-custom text-black-50"><img src="/images/icons/star.svg" alt="star" />4.8</p>
                                </div>

                                <div className="col-6 delete-custom">
                                    <img src="/images/icons/delete.jpg" alt="delete-icon" />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div class="row p-0" >
                        <button type="button" class="btn btn-dark btn-lg mt-2 pay-custom">Pay with <img src="/images/icons/pay.png" alt="pay" /></button>
                    </div>
                    <div class="row p-0">
                        <button type="button" class="btn btn-warning btn-lg mt-2 pay-custom text-blue-50">Buy with <img src="/images/icons/paypal.png" alt="pay" /></button>
                    </div>
                    <div className="row">
                        <div className="col-md-6 p-0 mt-2">
                            <p class="m-0">Subtotal</p>
                        </div>
                        <div className="col-md-6 p-0 mt-1">
                            <p className="float-right m-0">$9,650.00</p>
                        </div>
                        <div className="col-md-6 p-0 mt-2">
                            <p class="m-0">Booking fee (3%)</p>
                        </div>
                        <div className="col-md-6 p-0 mt-1">
                            <p className="float-right m-0">$9,650.00</p>
                        </div>
                        <div className="col-md-6 p-0 mt-2">
                            <p class="m-0">Tax (IL tax 6.25%)</p>
                        </div>
                        <div className="col-md-6 p-0 mt-1">
                            <p className="float-right m-0">$9,650.00</p>
                        </div>
                        <div className="col-md-6 p-0 mt-2">
                            <p class="m-0">Total</p>
                        </div>
                        <div className="col-md-6 p-0 mt-1">
                            <p className="float-right m-0">$9,650.00</p>
                        </div>
                    </div>
                    <div className="row">

                        <div className="p-0">
                            <p className="p-0">
                                Or 4 payments of $2520.70 with <img src="/images/icons/afterpay.png" alt="payafter" />
                                <span class="px-2"><img src="/images/icons/Info-Outline.png" alt="icon" /></span>
                            </p>
                        </div>
                        <div className="row p-0">

                            <Button className="btn btn-secondary btn-lg mt-2 pay-custom-checkout-" href='billing-detail'>Checkout</Button>
                        </div>
                        <div class="form-check py-4">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                By booking vendors on Zinnia, I am agreeing to <TermAndConditionModal />
                            </label>
                        </div>

                    </div>
                </div>



            </div>

        </div>
    )
}
export default Checkout

const ChangeDateModal = (props) => {

    const { title } = props
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Link onClick={handleShow} >Change the date.</Link>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton className='modal-custom'>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body className='mx-5'>
                    <h5>Change the date? </h5>
                    <p className="upper-text-custom">By changing the date you might lose some vendors, based on availability. We’ll do the best we can to see if all vendors are available on your new date. </p>
                    <form id="changedateForm">
                        <div class="mb-3">
                            <label for="date" class="form-label">Date</label>
                            <DatePicker />
                        </div>
                    </form></Modal.Body>
                <Modal.Footer className='modal-custom mx-5'>
                    <Button variant="btn btn-outline-secondary" type="submit" form="changedateForm">
                        Cancel
                    </Button>
                    <Button variant="secondary" type="submit" form="changedateForm">
                        Change Date
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const TermAndConditionModal = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <a href="javascript:void(0)" onClick={handleShow}>terms and services</a>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
            >

                <Modal.Title id="contained-modal-title-vcenter" className='text-center p-3'>
                    Terms and conditions <span onClick={handleClose} className='float-right mx-2'><RxCross1 /></span>
                </Modal.Title>

                <Modal.Body>
                    <p >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut enim ultricies, sagittis lacus in, dictum dolor. In egestas neque sed mi tempus feugiat. Ut vestibulum orci ut ante bibendum, eu elementum elit interdum. Pellentesque ultricies, ante vitae vulputate accumsan, diam risus accumsan magna, eget ullamcorper tortor nunc vitae metus. Duis ut porttitor nisi. Vivamus scelerisque arcu eget eros feugiat, vel facilisis mi faucibus. Ut porta gravida turpis eu pharetra. Vivamus quis sagittis neque, at ultricies tortor. Sed sed purus vitae velit dignissim posuere. Vestibulum ullamcorper neque volutpat, pellentesque tellus vitae, venenatis metus. Integer erat nibh, dignissim nec ultricies ac, sollicitudin vitae metus.
                    </p>
                    <p>
                        Praesent at consectetur urna. Nam et lobortis justo. Curabitur fermentum mi nec cursus maximus. Sed tempor sit amet urna et pharetra. Praesent tempor elit sed commodo maximus. Phasellus ac diam nec arcu tempus sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ligula libero, interdum non augue vel, consequat ultricies magna. Pellentesque non purus malesuada, semper arcu non, sodales dui. Fusce vitae sem eu magna fermentum aliquam nec ut orci. Curabitur vestibulum tempus arcu, viverra blandit lacus sodales quis. Nunc non faucibus orci. Praesent in efficitur nisl. Vestibulum elementum accumsan tellus eget vulputate. Donec lobortis, lectus non molestie condimentum, lorem eros tempus nulla, et maximus nibh quam non leo.
                    </p>
                    <p>
                        Quisque nibh magna, pretium id odio gravida, pellentesque porta ante. Sed suscipit consectetur euismod. Integer consectetur urna a eros facilisis, non porttitor turpis faucibus. In blandit, dui eu accumsan pharetra, augue metus posuere elit, id pellentesque nisi lorem quis quam. Nam ut lorem ut erat mattis sagittis sed lobortis ex. Cras ipsum dolor, pulvinar ut justo eget, accumsan sodales leo. Fusce eu magna nunc. Etiam viverra orci in erat finibus mollis. Sed ut ante facilisis, facilisis est non, fringilla est. Sed sed lorem eleifend, pellentesque nisl eu, venenatis sapien. Donec tincidunt ex convallis orci tincidunt, tempus imperdiet ligula interdum. Curabitur vel felis nec neque varius suscipit. Suspendisse potenti. Curabitur lobortis et arcu eget eleifend. Aliquam sed metus a nunc porttitor tempor.
                    </p>
                </Modal.Body>
                <Button onClick={handleClose} variant="outline-secondary" className='m-3 text-center mx-auto'>Close</Button>
            </Modal>
        </>
    )
}
