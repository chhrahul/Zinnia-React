

import React from 'react';
import SearchFilter from './SearchFilter';
import ResultTab from './ResultTab';
import ContactDetail from '../../components/Listing/ContactDetail';

function SearchResultVenueMap(props) {
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
    return (
        <>
            <ResultTab {...getOfferProps} />


            <div className="row mb-3">
                <div>
                    <span className="d-flex lowest_price"><img src="/images/icons/down-arrow.svg" alt="arrow" /><p>Lowest to highest price</p></span>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 ">
                    <div class="card card-content">
                        <div className="upper-section">
                            <img src="/images/beach-photo.jpg" alt="beach-photo" className='w-100' />
                        </div>
                        <div class="card-body card-custom">
                            <h1>Lakeside Hotel</h1>
                            <p class="card-text photo-below mb-2">Venue</p>
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
                            <div className="price mb-4">
                                <p className="price-below mb-0">PRICE</p>
                                <p className="per-hour-price">$3,000 for 5 hours</p>
                            </div>
                            <div className="include-custom">
                                <p className="include-link">INCLUDED</p>
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
                            <div className="location my-4">
                            <ContactDetail contactFields={contactFields} size={20}  />
                            </div>
                            <button type="button" class="btn btn-outline-secondary">Add to cart</button>
                            <div className="site-link mt-2">
                                <a href="#">Remove from cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.5577198195256!2d-87.69167392271156!3d41.966833996289225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd21ab75c2d73%3A0xc77f3bbadef7b3a8!2s4701%20N%20Lincoln%20Ave%2C%20Chicago%2C%20IL%2060625%2C%20USA!5e0!3m2!1sen!2sin!4v1681993856968!5m2!1sen!2sin" width="100%" height="700px" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
                </div>

            </div>


        </>

    )
}
export default SearchResultVenueMap

