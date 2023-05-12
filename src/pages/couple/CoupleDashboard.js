import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { CancelModal } from '../../components';
import { BsPencilFill } from 'react-icons/bs';


function CoupleDashboard() {

    return (
        <>
            <div className="container-fluid px-md-5  mt-3 custom-search">
                <div className="row paddin-lr upper-part-custom">
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <span className="d-flex wedding-day-custom-top"><p class="wedding-day-custom ">Wedding day <span className='wedding-date-time'>6/4/23, 3:30pm, 6 hours</span>  <BsPencilFill color='' className="edit-icon" /></p>
                        </span>
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
                                    <a href="/messages" class="btn btn-outline-secondary fs-6 fw-bold">Message Vendor</a>
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
                                    <a href="/messages" class="btn btn-outline-secondary fs-6 fw-bold">Message Vendor</a>
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
                                    <a href="/messages" class="btn btn-outline-secondary fs-6 fw-bold">Message Vendor</a>
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

