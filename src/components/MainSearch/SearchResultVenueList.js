

import React from 'react';
import ResultTab from './ResultTab';
import ContactDetail from '../../components/Listing/ContactDetail';
import AddToCart from '../Common/AddToCart';
function SearchResultVenueList(props) {
    const { activePage, setActivePage, searchType, setSearchType, resultType, setResultType } = props
    const getOfferProps = {
        activePage,
        setActivePage,
        searchType,
        setSearchType,
        resultType,
        setResultType,
        'first': 'Map',
        'second': 'Listing',
    }
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
    const prodid = 9
    const cart = JSON.parse(localStorage.getItem("cart"))
    let added = null
    if (cart) {
        added = cart.filter(item => item.id === prodid)
    }


    return (
        <>
            <ResultTab {...getOfferProps} />
            <div className="row paddin-lr">
                <div>
                    <span className="d-flex lowest_price"><img src="/images/icons/down-arrow.svg" alt="arrow" /><p>Lowest to highest price</p></span>
                </div>
            </div>
            <div className="row paddin-lr p-2 ">
                <div class="row  custom-border pt-4">
                    <div className="col-lg-3 col-md-12 col-sm-12" >
                        <div className="upper-section">
                            <img src="/images/beach-photo.jpg" alt="beach-photo" className='w-100' />
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12" >
                        <h1>Lakeside Hotel</h1>
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 p-0" >
                                <p class="card-text photo-below">Venue</p>
                                <div className="review">
                                    <ul className="d-flex p-0">
                                        <li>
                                            <img src="/images/icons/star.svg" alt="star" />
                                        </li>
                                        <li>
                                            <p className="rating">4.8</p>
                                        </li>
                                        <li className="special-link">
                                            <a href="#">100 Reviews</a>
                                        </li>
                                    </ul>
                                </div>
                                <div classNmae="price">
                                    <p className="price-below mb-0">PRICE</p>
                                    <p className="per-hour-price">$3,000 for 5 hours</p>
                                </div>
                                <div className="include-custom">
                                    <p className="include-link font-10 text-cyan-color">INCLUDED</p>
                                    <ul className="p-0">
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Ceremony</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Reception</p>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 p-0" >
                                <div className="location">
                                    <ContactDetail contactFields={contactFields} size={20} />
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 p-0 text-end list-button-custom" >
                                < AddToCart prodid={prodid} added={added} />
                                <div className="site-link mt-2">
                                    <a href="#">View Listing</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default SearchResultVenueList

