
import React from 'react';
import { SocialMediaHandle, ContactDetail, OfferIncludeList } from '../../components';

function VenueDetail(props) {
    const { addToCart, cart, setCart } = props
    const prodid = 2
    var added = cart.filter(item => item.id === prodid)
    const includeOffering = [
        {
            'title': 'Ceremony'
        },
        {
            'title': 'Reception'
        }

    ]
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

    const contactFields = [
        {
            'type': 'streetAddress', 'field': '4701 Lincoln avenue,Chicago, IL 60021'
        },
        {
            'type': 'timing', 'field': 'Closes 10 PM'
        },

        {
            'type': 'website', 'field': 'Bigdayflorists.com'
        },
        {
            'type': 'phone', 'field': '301-593-2392'
        },

    ]



    return (
        <div className="container-fluid px-md-5 listing-page mt-3" style={{ 'paddingRight': 0, 'paddingLeft': 0 }} id="1">
            <div>
                <img src="/images/listing/venue.jpg" alt="" className="w-100 mx-3" />
            </div>
            <div className="row paddin-lr">

                <div className='row paddin-lr mt-3'>
                    <h1>Lakeside Hotel</h1>
                </div>
                <div className='row paddin-lr mt-3'>
                    <div className='col-md-3 pl-0'>
                        <p className='theme-color listing-custom-para'>FLORIST</p>
                        <p className='d-flex rating-p'><p className='d-flex rating rating-p'><img src="/images/icons/star.svg" alt="" />4.8</p><p className=' rating-p color-cyan m-0 text-decoration-underline'> 100 reviews</p></p>
                        <p className='price-text p-bottom-margin listing-custom-para'>Price</p>
                        <p className='p-bottom-margin price-amount-box'>Total<span className="price-amount"> $650</span></p>
                        <p className='p-bottom-margin depend-listing-custom-para'>Depends on selections</p>
                    </div>
                    <div className='col-md-3 pl-0'>
                        <ContactDetail contactFields={contactFields} />
                    </div>
                    <div className='col pl-0'>
                        <SocialMediaHandle handles={handles} />
                    </div>
                </div>
                <div className='row paddin-lr mt-3'>
                    <div className='col-md-6 pl-0'>
                        <p className='color-cyan  ml-5 listing-custom-para'> INCLUDED </p>
                        <div className='row paddin-lr'>
                            <OfferIncludeList includeOffering={includeOffering} />
                        </div>
                    </div>
                </div>
                <div className='row paddin-lr mt-5'>
                    <div className='col-md-3 pl-0'>
                        {added.length > 0 ?
                            <button className='added-to-cart-btn btn' ><img src="/images/icons/selected.svg" alt="plus" /> Added to cart</button>
                            :
                            <button className='add-to-cart-btn btn' onClick={() => addToCart(prodid, { 'id': 'id', 'qty': 'qty', 'name': 'name' })}>Add to cart</button>
                        }
                    </div>
                </div>
                <div className='row paddin-lr mt-5'>
                    <div className='col-md-6 pl-0'>
                        <p>Flower and Friends is a unique florist located in Monterrey’s West Town that brings the timeless beauty of roses right to your doorstep. If you value simple, classic beauty and an original design aesthetic, Flower and Friends is the ideal flower shop for you. Many flower arrangements sold today focus on fleeting trends. We concentrate on timeless elegance, and the rose typifies our traditional design values. Who needs frills  — we let our flowers say it all.

                        </p><p>No matter the occasion, a flower arrangement from Flower and Friends says volumes with one simple gesture. We ensure our flowers stay fresh by packaging and delivering them in water, so the person receiving the bouquet will be able to enjoy them for some time. We're excited to bring our beautiful arrangements to those living in Chicago and throughout Cook County. With same-day delivery, someone you care about could have a gorgeous surprise waiting for them today.</p>
                    </div>
                </div>
                <div className='row paddin-lr mt-5'>
                    <div className='col-md-7 pl-0'>
                        {/* <img src="/images/map-rage.jpg" alt="map" className='w-100' /> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.5577198195256!2d-87.69167392271156!3d41.966833996289225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd21ab75c2d73%3A0xc77f3bbadef7b3a8!2s4701%20N%20Lincoln%20Ave%2C%20Chicago%2C%20IL%2060625%2C%20USA!5e0!3m2!1sen!2sin!4v1681993856968!5m2!1sen!2sin" width="100%" height="700px" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default VenueDetail


