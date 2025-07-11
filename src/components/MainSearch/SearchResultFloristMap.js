

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
                        <img src="/images/florist-girl.png" alt="girl" />
                        <div class="card-body card-custom">
                            {/* <h4 class="card-title photo-head">Best Photography</h4> */}

                            <p class="card-text photo-below mt-3 mb-2">Florist</p>
                            <div className="review">
                                <ul className="d-flex p-0">
                                    <li>
                                        <img src="/images/icons/star.svg" alt="star" />
                                    </li>
                                    <li>
                                        <p className="rating">4.8</p>
                                    </li>
                                    <li className="special-link">
                                        <a href="/">100 Reviews</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="price mb-4">
                                <p className="price-below mb-0">PRICE</p>
                                <p className="per-hour-price d-flex">Total <p className="text-black px-2">$650.00</p></p>
                            </div>
                            <div className="location  my-4">
                            <ContactDetail contactFields={contactFields} size={20}  />
                            </div>
                            <div className="include-custom">
                                <p className="include-link">INCLUDED</p>
                                <ul className="p-0">
                                    <li className="d-flex">
                                        <img src="/images/icons/Tick.svg" alt="tick" />
                                        <p className="per-hour-florist bouquet">Bridal bouquet <br></br> $300.00 each</p>
                                    </li>
                                    <div className='col-lg-4 paddin-lr '>
                                        <span>
                                            <div class="input-group col mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"> - </span>
                                                </div>
                                                <input type="number" class="form-control" value='0' min="1" size="1" />
                                                <div class="input-group-append">
                                                    <span class="input-group-text"> + </span>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                    <li className="d-flex">
                                        <img src="/images/icons/Tick.svg" alt="tick" />
                                        <p className="per-hour-florist bouquet">Bridesmaids bouquets <br></br> $50.00 each</p>
                                    </li>
                                    <div className='col-lg-4 paddin-lr '>
                                        <span>
                                            <div class="input-group col mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"> - </span>
                                                </div>
                                                <input type="number" class="form-control" value='0' min="1" size="1" />
                                                <div class="input-group-append">
                                                    <span class="input-group-text"> + </span>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                    <li className="d-flex">
                                        <img src="/images/icons/Tick.svg" alt="tick" />
                                        <p className="per-hour-florist bouquet">Bridal bouquet <br></br> $50.00 each</p>
                                    </li>
                                    <div className='col-lg-4 paddin-lr '>
                                        <span>
                                            <div class="input-group col mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"> - </span>
                                                </div>
                                                <input type="number" class="form-control" value='0' min="1" size="1" />
                                                <div class="input-group-append">
                                                    <span class="input-group-text"> + </span>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                    <li className="d-flex">
                                        <img src="/images/icons/Tick.svg" alt="tick" />
                                        <p className="per-hour-florist bouquet">Bridesmaids bouquets <br></br> $50.00 each</p>
                                    </li>
                                    <div className='col-lg-4 paddin-lr '>
                                        <span>
                                            <div class="input-group col mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"> - </span>
                                                </div>
                                                <input type="number" class="form-control" value='0' min="1" size="1" />
                                                <div class="input-group-append">
                                                    <span class="input-group-text"> + </span>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                    <li className="d-flex">
                                        <img src="/images/icons/Tick.svg" alt="tick" />
                                        <p className="per-hour-florist bouquet">Flower crown <br></br> $150.00 each</p>
                                    </li>
                                    <div className='col-lg-4 paddin-lr '>
                                        <span>
                                            <div class="input-group col mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"> - </span>
                                                </div>
                                                <input type="number" class="form-control" value='0' min="1" size="1" />
                                                <div class="input-group-append">
                                                    <span class="input-group-text"> + </span>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                    <li className="d-flex">
                                        <img src="/images/icons/Tick.svg" alt="tick" />
                                        <p className="per-hour-florist bouquet">Flower girl petals/basket <br></br> $50.00 each</p>
                                    </li>
                                    <div className='col-lg-4 paddin-lr '>
                                        <span>
                                            <div class="input-group col mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"> - </span>
                                                </div>
                                                <input type="number" class="form-control" value='0' min="1" size="1" />
                                                <div class="input-group-append">
                                                    <span class="input-group-text"> + </span>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                    <li className="d-flex">
                                        <img src="/images/icons/Tick.svg" alt="tick" />
                                        <p className="per-hour-florist bouquet">Corsages <br></br> $50.00 each</p>
                                    </li>
                                    <div className='col-lg-4 paddin-lr '>
                                        <span>
                                            <div class="input-group col mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"> - </span>
                                                </div>
                                                <input type="number" class="form-control" value='0' min="1" size="1" />
                                                <div class="input-group-append">
                                                    <span class="input-group-text"> + </span>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </ul>
                            </div>
                            <div className="added-cart-btn">
                            <button type="button" class="btn btn-outline-secondary"><img src="/images/icons/Green-tick.svg" alt="phone" />Added to cart</button>
                            </div>
                            <div className="site-link mt-2">
                                <a href="/">View listing</a>
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

