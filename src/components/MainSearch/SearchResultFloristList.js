

import React from 'react';
import ResultTab from './ResultTab';
import AddQuantity from '../Listing/AddQuantity';
import ContactDetail from '../../components/Listing/ContactDetail';
import AddToCart from '../Common/AddToCart';
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

    const prodid = 6
    const cart = JSON.parse(localStorage.getItem("cart"))
    let added = null
    if (cart) {
        added = cart.filter(item => item.id === prodid)
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
                        <div className="row p-0 mb-4">
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
                                < AddToCart prodid={prodid} added={added} />
                                <div className="site-link mt-2">
                                    <a href="#">View Listingg</a>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-2">
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

        </>

    )
}
export default SearchResultFloristList

