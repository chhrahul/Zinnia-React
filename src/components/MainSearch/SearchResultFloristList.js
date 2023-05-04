

import React from 'react';
import ResultTab from './ResultTab';
import AddQuantity from '../Listing/AddQuantity';
import ContactDetail from '../../components/Listing/ContactDetail';
function SearchResultFloristList(props) {
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

    const [floirstListing, setFloirstListing] = React.useState([
        { 'title': 'Bridal bouquet', 'price': '300.00', 'quantity': 0 },
        { 'title': 'Flower crown', 'price': '150.00', 'quantity': 0 },
        { 'title': 'Bridesmaids bouquets', 'price': '50.00', 'quantity': 0 },
        { 'title': 'Flower girl petals/basket', 'price': '50.00', 'quantity': 0 },
        { 'title': 'Boutonnieres', 'price': '50.00', 'quantity': 0 },
        { 'title': 'Corsages', 'price': '50.00', 'quantity': 0 },
    ])
    const increaseDecreaseQuantity = (listing, isAdd) => () => {
        const tmpLisiting = floirstListing.find((item) => item.title == listing.title)
        console.log(tmpLisiting)
        if (!tmpLisiting) return
        const { quantity } = tmpLisiting
        if (quantity === 0 && !isAdd) return
        tmpLisiting.quantity = isAdd ? quantity + 1 : quantity - 1
        setFloirstListing([...floirstListing])
    }
    const handleOnChange = (listing) => (e) => {

        const tmpLisiting = floirstListing.find((item) => item.title == listing.title)
        tmpLisiting.quantity = e.target.value
        if (tmpLisiting.quantity < 1) {
            tmpLisiting.quantity = 0
        }
        setFloirstListing([...floirstListing])
    }
    return (
        <>
            <ResultTab {...getOfferProps} />

            <div className="row">
                <div>
                    <span className="d-flex lowest_price"><img src="/images/icons/down-arrow.svg" alt="arrow" /><p>Lowest to highest price</p></span>
                </div>
            </div>
            <div className="row paddin-lr p-2 ">
                <div class="row  custom-border pt-4">
                    <div className="col-lg-3 col-md-12 col-sm-12" >
                        <div className="upper-section">
                            <img src="/images/florist-cutting.jpg" alt="wedding-girl" className='w-100' />
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12" >
                        <h1>Big Day Florists</h1>
                        <div className="row p-0">
                            <div className="col-lg-4 col-md-12 col-sm-12 p-0" >
                                <p class="card-text photo-below">Florist</p>
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
                                <div classNmae="price">
                                    <p className="price-below mb-0">PRICE</p>
                                    <p className="per-hour-price d-flex">Total <p className="text-black px-2">$650.00</p></p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 p-0" >
                                <div className="location">
                                    <ContactDetail contactFields={contactFields} size={20} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 p-0 text-end list-button-custom" >
                                <button type="button" class="btn btn-outline-secondary">Add to cart</button>
                                <div className="site-link mt-2">
                                    <a href="#">View Listing</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div className='col-md-8'>
                                <p className="include-link">INCLUDED</p>
                                <div className="include-custom">
                                    <div class="row">
                                        {
                                            floirstListing.map((listing) => (
                                                <>
                                                    <div class="col-md-6 ">
                                                        <AddQuantity increaseDecreaseQuantity={increaseDecreaseQuantity} listing={listing} handleOnChange={handleOnChange} />
                                                    </div>
                                                </>
                                            ))
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row paddin-lr p-2 ">
                <div class="row  custom-border pt-4">
                    <div className="col-lg-3 col-md-12 col-sm-12" >
                        <div className="upper-section">
                            <img src="/images/florist-cutting.jpg" alt="wedding-girl" className='w-100' />
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12" >
                        <h1>Big Day Florists</h1>
                        <div className="row p-0">
                            <div className="col-lg-4 col-md-12 col-sm-12 p-0" >
                                <p class="card-text photo-below">Florist</p>
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
                                <div classNmae="price">
                                    <p className="price-below mb-0">PRICE</p>
                                    <p className="per-hour-price d-flex">Total <p className="text-black px-2">$650.00</p></p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 p-0" >
                                <div className="location">
                                    <ContactDetail contactFields={contactFields} size={20} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 p-0 text-end list-button-custom">
                                <button type="button" class="btn btn-outline-secondary">Add to cart</button>
                                <div className="site-link mt-2">
                                    <a href="#">View Listing</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <p className="include-link font-10 text-cyan-color">INCLUDED</p>
                            <div class="col-lg-4 col-md-12 col-sm-12">
                                <div className="include-custom">
                                    <ul className="p-0">
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour-florist bouquet">Bridal bouquet <br></br> $300.00 each</p>
                                        </li>
                                        <div className='col-lg-6 paddin-lr '>
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
                                        <div className='col-lg-6 paddin-lr '>
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
                                        <div className='col-lg-6 paddin-lr '>
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
                            </div>
                            <div class="col-lg-4 col-md-12 col-sm-12">
                                <div className="include-custom">
                                    <ul className="p-0">
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour-florist bouquet">Flower crown <br></br> $150.00 each</p>
                                        </li>
                                        <div className='col-lg-6 paddin-lr '>
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
                                        <div className='col-lg-6 paddin-lr '>
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
                                        <div className='col-lg-6 paddin-lr '>
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
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row paddin-lr p-2 ">
                <div class="row  custom-border pt-4">
                    <div className="col-lg-3 col-md-12 col-sm-12" >
                        <div className="upper-section">
                            <img src="/images/florist-cutting.jpg" alt="wedding-girl" className='w-100' />
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12" >
                        <h1>Big Day Florists</h1>
                        <div className="row p-0">
                            <div className="col-lg-4 col-md-12 col-sm-12 p-0" >
                                <p class="card-text photo-below">Florist</p>
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
                                <div classNmae="price">
                                    <p className="price-below mb-0">PRICE</p>
                                    <p className="per-hour-price d-flex">Total <p className="text-black px-2">$650.00</p></p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 p-0" >
                                <div className="location">
                                    <ContactDetail contactFields={contactFields} size={20} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 p-0 text-end list-button-custom" >
                                <button type="button" class="btn btn-outline-secondary">Add to cart</button>
                                <div className="site-link mt-2">
                                    <a href="#">View Listing</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <p className="include-link font-10 text-cyan-color">INCLUDED</p>
                            <div class="col-lg-4 col-md-12 col-sm-12">
                                <div className="include-custom">
                                    <ul className="p-0">
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour-florist bouquet">Bridal bouquet <br></br> $300.00 each</p>
                                        </li>
                                        <div className='col-lg-6 paddin-lr '>
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
                                        <div className='col-lg-6 paddin-lr '>
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
                                        <div className='col-lg-6 paddin-lr '>
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
                            </div>
                            <div class="col-lg-4 col-md-12 col-sm-12">
                                <div className="include-custom">
                                    <ul className="p-0">
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour-florist bouquet">Flower crown <br></br> $150.00 each</p>
                                        </li>
                                        <div className='col-lg-6 paddin-lr '>
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
                                        <div className='col-lg-6 paddin-lr '>
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
                                        <div className='col-lg-6 paddin-lr '>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default SearchResultFloristList

