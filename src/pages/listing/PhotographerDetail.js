
import React, { useState } from 'react';
import CustomSlider from "../../components/CustomSlider";
import SocialMediaHandle from '../../components/Listing/SocialMediaHandle';
import { BsClock } from 'react-icons/bs';

function PhotographerDetail(props) {
    const { addToCart, cart, setCart } = props
    const prodid = 2
    var added = cart.filter(item => item.id === prodid)
    React.useEffect(() => {
        localStorage.setItem('items', JSON.stringify(cart));

    }, [cart]);

    const handles = [
        {
            'type': 'instagram', 'url': 'instagram.com/bigdayflorist'
        },
        {
            'type': 'facebook', 'url': 'facebook.com/bigdayfloriststwitte'
        },

        {
            'type': 'twitter', 'url': 'twitter.com/big_day_florists'
        },
        {
            'type': 'pinterest', 'url': 'pinterest.com/bigdayflorists'
        },
        {
            'type': 'tiktok', 'url': 'tiktok.com/florists'
        },
    ]

    return (
        <div className="container-fluid px-md-5 listing-page mt-3" style={{ 'paddingRight': 0, 'paddingLeft': 0 }} >
            <CustomSlider type={'photographer'} />
            <div className="row paddin-lr">
                <div className='row paddin-lr mt-3'>
                    <h1>Best Photographer</h1>
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
                        <p className='d-flex'><img src="/images/icons/location.svg" alt="" className='contact-icon' ml-5 /> <span>4701 Lincoln avenue,Chicago, IL 60021</span></p>
                        <p className='d-flex'><BsClock size={27} className='contact-icon color-cyan' /> <span><span className='color-cyan  ml-5'> Open  .</span> Closes 10 PM</span></p>
                        <p className='d-flex'><img src="/images/icons/web.svg" alt="" className='contact-icon' /> <span><span className='color-cyan  ml-5'> Bigdayflorists.com </span> </span></p>
                        <p className='d-flex'><img src="/images/icons/phone.svg" alt="" className='contact-icon' /> <span><span className='color-cyan  ml-5'> 301-593-2392 </span> </span></p>
                    </div>
                    <div className='col pl-0'>
                        <SocialMediaHandle handles={handles} />
                    </div>
                </div>
                <div className='row paddin-lr mt-3'>
                    <div className='col-md-6 pl-0'>
                        <p className='color-cyan  ml-5'> INCLUDED </p>
                        <div className='row paddin-lr'>
                            <AddQuantity title={'Video coverage'} />
                            <AddQuantity title={'Photo album'} />
                            <AddQuantity title={'Raw, unedited photos'} />
                            <AddQuantity title={'Same day print'} />
                            <AddQuantity title={'Highlight film'} />
                            <AddQuantity title={'Online gallery'} />
                        </div>
                    </div>
                </div>
                <div className='row paddin-lr mt-5'>
                    <div className='col-md-2 pl-0'>
                        {added.length > 0 ?
                            <button className='added-to-cart-btn btn' > <img src="/images/icons/selected.svg" alt="plus" />Added to cart</button>
                            :
                            <button className='add-to-cart-btn btn' onClick={() => addToCart(prodid, { 'id': 'id', 'qty': 'qty', 'name': 'name' })}>Add to cart</button>
                        }
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.5577198195256!2d-87.69167392271156!3d41.966833996289225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd21ab75c2d73%3A0xc77f3bbadef7b3a8!2s4701%20N%20Lincoln%20Ave%2C%20Chicago%2C%20IL%2060625%2C%20USA!5e0!3m2!1sen!2sin!4v1681993856968!5m2!1sen!2sin" width="100%" height="700px" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default PhotographerDetail

function AddQuantity(props) {
    const { title, priceEach } = props

    return (
        <div className='col-md-12 paddin-lr '>
            <p className='paddin-lr p-bottom-margin'><img src="/images/icons/checked-gray.svg" alt="" className='p-bottom-margin mx-1' /> {title} </p>
        </div>

    );
}
