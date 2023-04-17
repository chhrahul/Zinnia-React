
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CustomSlider from "../../components/CustomSlider";

function FloristDetail() {
    const [cart, setCart] = useState({});
    const AddQuantityBox = [
        {
            'title': 'Bridal bouquet', 'price': '300.00'
        },
        {
            'title': 'Flower crown', 'price': '150.00'
        },
        {
            'title': 'Bridesmaids bouquets', 'price': '50.00'
        },
        {
            'title': 'Flower girl petals/basket', 'price': '50.00'
        },
        {
            'title': 'Boutonnieres', 'price': '50.00'
        },
        {
            'title': 'Corsages', 'price': '50.00'
        },
    ]
    return (


        <div className="container-fluid px-md-5 listing-page mt-3" style={{ 'paddingRight': 0, 'paddingLeft': 0 }} >
            <CustomSlider type={'florist'} />
            <div className="row paddin-lr">

                <div className='row paddin-lr mt-3'>
                    <h1>Big Day Florists</h1>
                </div>



                <div className='row paddin-lr mt-3'>
                    <div className='col-md-3 pl-0'>
                        <p className='theme-color'>FLORIST</p>
                        <p className='d-flex rating-p'><p className='d-flex rating rating-p'><img src="/images/icons/star.svg" alt="" />4.8</p><p className=' rating-p color-cyan m-0 '> 100 reviews</p></p>
                        <p className='price-text p-bottom-margin'>Price</p>
                        <p className='p-bottom-margin price-amount-box'>Total<span className="price-amount"> $650</span></p>
                        <p className='p-bottom-margin'>Depends on selections</p>
                    </div>
                    <div className='col-md-3 pl-0'>
                        <p className=''><img src="/images/icons/location.svg" alt="" className='contact-icon' /> 4701 Lincoln avenue,Chicago, IL 60021</p>
                        <p className=''><img src="/images/icons/clock.svg" alt="" className='contact-icon' /> <span className='color-cyan  ml-5'> Open  .</span> Closes 10 PM</p>
                        <p className=''><img src="/images/icons/web.svg" alt="" className='contact-icon' /> <span className='color-cyan  ml-5'> Bigdayflorists.com </span> </p>
                        <p className=''><img src="/images/icons/phone.svg" alt="" className='contact-icon' /> <span className='color-cyan  ml-5'> 301-593-2392 </span> </p>
                    </div>

                    <div className='col pl-0'>
                        <p className=''><img src="/images/icons/social/instagram.svg" alt="" className='contact-icon' /> <span className='color-cyan  ml-5'> instagram.com/bigdayflorist </span> </p>
                        <p className=''><img src="/images/icons/social/facebook.svg" alt="" className='contact-icon' /> <span className='color-cyan  ml-5'> facebook.com/bigdayfloriststwitte/ </span> </p>
                        <p className=''><img src="/images/icons/social/twitter.svg" alt="" className='contact-icon' /> <span className='color-cyan  ml-5'> twitter.com/@big_day_florists </span> </p>
                        <p className=''><img src="/images/icons/social/pinterest.svg" alt="" className='contact-icon' /> <span className='color-cyan  ml-5'> pinterest.com/bigdayflorists/ </span> </p>
                        <p className=''><img src="/images/icons/social/tiktok.svg" alt="" className='contact-icon' /> <span className='color-cyan  ml-5'> tiktok.com/@bigday florists/ </span> </p>
                    </div>
                </div>

                <div className='row paddin-lr mt-3'>
                    <div className='col-md-6 pl-0'>
                        <p className='color-cyan  ml-5'> INCLUDED </p>
                        <div className='row paddin-lr'>
                            <AddQuantity AddQuantityBox={AddQuantityBox} />
                        </div>
                    </div>
                </div>
                <div className='row paddin-lr mt-5'>
                    <div className='col-md-2 pl-0'>
                        <button className='add-to-cart-btn btn'>Add to cart</button>
                    </div>
                </div>

                <div className='row paddin-lr mt-5'>
                    <div className='col-md-6 pl-0'>
                        <p>Flower and Friends is a unique florist located in Monterrey’s West Town that brings the timeless beauty of roses right to your doorstep. If you value simple, classic beauty and an original design aesthetic, Flower and Friends is the ideal flower shop for you. Many flower arrangements sold today focus on fleeting trends. We concentrate on timeless elegance, and the rose typifies our traditional design values. Who needs frills — we let our flowers say it all.

                        </p><p>No matter the occasion, a flower arrangement from Flower and Friends says volumes with one simple gesture. We ensure our flowers stay fresh by packaging and delivering them in water, so the person receiving the bouquet will be able to enjoy them for some time. We're excited to bring our beautiful arrangements to those living in Chicago and throughout Cook County. With same-day delivery, someone you care about could have a gorgeous surprise waiting for them today.</p>
                    </div>
                </div>

                <div className='row paddin-lr mt-5'>
                    <div className='col-md-7 pl-0'>
                        <img src="/images/map-rage.jpg" alt="" className='w-100' />
                    </div>
                </div>
            </div>
        </div >

    )
}
export default FloristDetail


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <div className="col-md-4 col-sm-4">

                <div className="row mt-3 paddin-lr">
                    <img
                        className="d-block p-0"
                        src="https://placehold.co/600x400"
                        alt="First slide"
                    />
                </div>

            </div>  <div className="col-md-4 col-sm-4">

                <div className="row mt-3 paddin-lr">
                    <img
                        className="d-block p-0"
                        src="https://placehold.co/600x400"
                        alt="First slide"
                    />
                </div>

            </div>  <div className="col-md-4 col-sm-4">

                <div className="row mt-3 paddin-lr">
                    <img
                        className="d-block p-0"
                        src="https://placehold.co/600x400"
                        alt="First slide"
                    />
                </div>
            </div>
        </>

    );
}


function AddQuantity(props) {
    const { AddQuantityBox } = props
    const [qty, setQty] = React.useState([])

    return (
        <>
            {
                AddQuantityBox.map((box, index) => {
                    const id = 'cartQty_' + index
                    const addQty = (e) => {
                        var location = document.getElementById(id);
                        var currentQty = location.value;
                        var qty = Number(currentQty) + 1;
                        location.value = qty;
                    }
                    const decreaseQty = (e) => {
                        var location = document.getElementById(id);
                        var currentQty = location.value;
                        if (currentQty > 0) {
                            var qty = Number(currentQty) - 1;
                            location.value = qty;
                        }
                    }
                    return (
                        <div className='col-md-6 paddin-lr '>
                            <span className='quantity-add-box'>
                                <p className='paddin-lr p-bottom-margin'><img src="/images/icons/checked-gray.svg" alt="" className='p-bottom-margin mx-1' /> {box.title} </p>
                                <p className='px-md-4'>$ {box.price} each</p>
                                <div className='row px-md-4'>
                                    <div class="input-group col">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" onClick={decreaseQty}>-</span>
                                        </div>
                                        <input type="number" class="form-control" value='0' min="1" size="1" id={id} />
                                        <div class="input-group-append">
                                            <span class="input-group-text" onClick={addQty}>+</span>
                                        </div>
                                    </div>
                                    <div class=" col-6"></div>
                                </div>
                            </span>
                        </div>
                    );
                })}
        </>
    );
}


