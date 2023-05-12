
import { Collapse } from 'react-bootstrap';
import MyModal from '../components/MyModal.js'
import * as React from 'react'
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

function BillingDetail() {
    const handleOnclickRemove = (e, index) => {


        const cartData = JSON.parse(localStorage.getItem("cart"))
        console.log(cartData.length)
        localStorage.setItem("cart", JSON.stringify([
            ...cartData.slice(0, index),
            ...cartData.slice(index + 1)
        ]));
        window.location.reload(false);
    }
    const cartCount = JSON.parse(localStorage.getItem("cart"))
    let subtotal = 0

    if (cartCount) {
        cartCount.map((item, index) => {
            subtotal += item.price
        })
    }
    let bookingFee = subtotal * 3 / 100
    let tax = subtotal * 25 / 100

    return (
        <>
            <div className="container-fluid px-md-5  mt-3 custom-search">
                <div className="row paddin-lr">
                    <div className="col-lg-7 col-md-6 col-sm-12 ">
                        <h1 className="mt-4">Billing address</h1>

                        <form>
                            <div class="mb-3">
                                <label for="First-name" class="form-label">First Name</label>
                                <input type="text" class="form-control custom-payment" id="First-name" placeholder="Calli" />
                            </div>
                            <div class="mb-3">
                                <label for="Last-name" class="form-label">First Name</label>
                                <input type="text" class="form-control custom-payment" id="Last-name" placeholder="Smith" />
                            </div>
                            <div class="mb-3">
                                <label for="Address" class="form-label">Street Address</label>
                                <input type="text" class="form-control custom-payment" id="Address" placeholder="123 Kildare Dr. " />
                                <input type="text" class="form-control custom-payment mt-3" id="Address" placeholder="Address line 2 " />
                            </div>
                            <div class="mb-3">
                                <label for="City" class="form-label">City</label>
                                <input type="text" class="form-control custom-payment" id="City" placeholder="Skokie" />
                            </div>
                            <div class="row paddin-lr p-0 custom-payment">
                                <div class="col-6 p-0">
                                    <div class="mb-3">
                                        <label for="State" class="form-label">State</label>
                                        <select class="form-select custom-payment" aria-label="Default select example" name="State">
                                            <option selected>Select State</option>
                                            <option value="1">Illinois</option>
                                            <option value="2">Illinois</option>
                                            <option value="3">Illinois</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6 p-0 ">
                                    <div class="mb-3">
                                        <label for="Zipcode" class="form-label">Zipcode</label>
                                        <input type="number" class="form-control" id="Zipcode" placeholder="60076" />
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2">
                                <h4>Payment Method</h4>

                                <div class="form-check mb-2 check-custom">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label fs-6 fw-normal" for="flexRadioDefault1">
                                        Pay with Apple Pay
                                    </label>
                                </div>
                                <div class="form-check mb-2 check-custom">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label class="form-check-label fs-6 fw-normal" for="flexRadioDefault3">
                                        Pay with Paypal
                                    </label>
                                </div>
                                <div class="form-check mb-2 check-custom">
                                    <MyCollapse id={'flexRadioDefault3'} label={'Pay with afterpay'} />
                                </div>

                                <div class="form-check mb-2 check-custom">
                                    <MyCollapse id={'flexRadioDefault4'} label={'Pay with Credit/debit card'} />
                                </div>

                                <div className="row p-0 mt-4">
                                    <MyModal title={'Continue to Afterpay'} />
                                </div>

                            </div>

                        </form>

                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 ">
                        <p className="mt-4 text-black venue-address-custom">Summary of your order</p>
                        <p className="upper-text-custom">
                            All services selected are for Saturday June 4th, 2023. Double check and make sure that your selected date/time is correct.
                        </p>
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
                                                        <p className="checkout-heading">{item.name}</p>
                                                        <div class="col-6">

                                                            <p className="mb-0 venue-address-custom">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                                                    <path d="M7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 3.13 11.37 0 7.5 0ZM7.5 9.5C6.12 9.5 5 8.38 5 7C5 5.62 6.12 4.5 7.5 4.5C8.88 4.5 10 5.62 10 7C10 8.38 8.88 9.5 7.5 9.5Z" fill="#31A7AD" />
                                                                </svg>CHICAGO,IL
                                                            </p>
                                                            <p className="mb-0 venue-address-custom text-black-50">${item.price} for 5 hours</p>
                                                            <p className="mb-0 venue-address-custom text-black-50"><img src="/images/icons/star.svg" alt="star" />4.8</p>
                                                        </div>

                                                        <div className="col-6 delete-custom">
                                                            <Link onClick={(e) => handleOnclickRemove(e, index)} className='delete-icon'>
                                                                <MdDelete size="24" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    })}</>
                            :
                            'No item added'}
                        <div className="row">
                            <div className="col-md-6 p-0 mt-2">
                                <p class="m-0">Subtotal</p>
                            </div>
                            <div className="col-md-6 p-0 mt-2">
                                <p className="float-right m-0">${subtotal.toFixed(2)}</p>
                            </div>
                            <div className="col-md-6 p-0 mt-2">
                                <p class="m-0">Booking fee (3%)</p>
                            </div>
                            <div className="col-md-6 p-0 mt-2">
                                <p className="float-right m-0">${bookingFee.toFixed(2)}</p>
                            </div>
                            <div className="col-md-6 p-0 mt-2">
                                <p class="m-0">Tax (IL tax 6.25%)</p>
                            </div>
                            <div className="col-md-6 p-0 mt-2">
                                <p className="float-right m-0">${tax.toFixed(2)}</p>
                            </div>
                            <div className="col-md-6 p-0 mt-2">
                                <p class="m-0 text-black">Total</p>
                            </div>
                            <div className="col-md-6 p-0 mt-2">
                                <p className="float-right m-0 text-black">${(subtotal + bookingFee + tax).toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="p-0 mb-2 ">
                                <p className="p-0 m-0">
                                    Or 4 payments of ${((subtotal + bookingFee + tax) / 4).toFixed(2)} with <img src="/images/icons/afterpay.png" alt="payafter" />
                                    {/* <span class="px-2"><img src="/images/icons/Info-Outline.png" alt="icon" /></span> */}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default BillingDetail


function MyCollapse(props) {
    const [open, setOpen] = React.useState(false);
    const { id, label } = props

    return (
        <>
            <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id={id}
                onClick={() => setOpen(!open)}
                aria-controls={id}
                aria-expanded={open}
            />

            <label class="form-check-label fs-6 fw-normal" htmlFor={id}>
                {label}
            </label>
            {
                id === 'flexRadioDefault3' &&
                <Collapse in={open}>
                    <div id={id}>
                        <div className=" row mb-3 w-75 custom-afterpay">
                            <img src="/images/After-Pay.png" alt="after-pay" />
                        </div>

                    </div>
                </Collapse>
            }
            {
                id === 'flexRadioDefault4' &&
                <Collapse in={open}>
                    <div id={id}>
                        <div class="mb-3">
                            <label for="First-name" class="form-label">Name on Card</label>
                            <input type="text" class="form-control custom-payment-below" id="First-name" placeholder="Calli" />
                        </div>
                        <div class="mb-3">
                            <label for="Last-name" class="form-label">Card Number</label>
                            <input type="text" class="form-control custom-payment-below" id="Last-name" placeholder="1344-3543-6546-6752  12/25  962" />
                        </div>

                    </div>
                </Collapse>
            }

        </>
    );
}

