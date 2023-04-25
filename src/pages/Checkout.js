function Checkout() {

    return (
        <div className="container-fluid px-md-5  mt-3 custom-search">
            <div className="row paddin-lr">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h1 className="mt-4">Woohoo, booking time!</h1>
                    <p>
                        All services selected are for Saturday, January 4th 2024. Double check and make sure that your selected date/time is correct.<a class="" href="#">Change the date.</a>
                    </p>
                    <div className="row paddin-lr-0 checkout-box-border">
                        <div className="col-md-4 p-0">
                            <img src="/images/listing/photographer-2.jpg" alt="photo" className='w-100' />
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
                            <img src="/images/beach-photo.jpg" alt="beach-photo" className='w-100' />
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
                            <img src="/images/florist-cutting.jpg" alt="flower-cutting" className='w-100' />
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
                            <button type="button" class="btn btn-secondary btn-lg mt-2 pay-custom-checkout">Checkout</button>
                        </div>
                        <div class="form-check py-4">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                By booking vendors on Zinnia, I am agreeing to <a class="" href="#">terms and services.</a>
                            </label>
                        </div>

                    </div>
                </div>



            </div>

        </div>
    )
}
export default Checkout
