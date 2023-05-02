
import SearchFilter from "../../components/MainSearch/SearchFilter"

function SearchResultListingPhotographer() {

    return (
        <div className="container-fluid px-md-5  mt-3 custom-search">

            <SearchFilter type={'photographer'} />
            <div className="row mb-3">
                <div className="col-lg-12 col-md-12 col-sm-12 venue-top">
                    <ul className="d-flex p-0">
                        <li class="list_info"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                            <path d="M7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 3.13 11.37 0 7.5 0ZM7.5 9.5C6.12 9.5 5 8.38 5 7C5 5.62 6.12 4.5 7.5 4.5C8.88 4.5 10 5.62 10 7C10 8.38 8.88 9.5 7.5 9.5Z" fill="#505267" />
                        </svg><span className="map-custom">Map</span></li>
                        <li class="list_info active"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                            <path d="M0.5 6H2.5V4H0.5V6ZM0.5 10H2.5V8H0.5V10ZM0.5 2H2.5V0H0.5V2ZM4.5 6H18.5V4H4.5V6ZM4.5 10H18.5V8H4.5V10ZM4.5 0V2H18.5V0H4.5Z" fill="#505267" />
                        </svg><span className="map-custom">List View</span></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div>
                    <span className="d-flex lowest_price"><img src="/images/icons/down-arrow.svg" alt="arrow" /><p>Lowest to highest price</p></span>
                </div>
            </div>
            <div className="row paddin-lr p-2 ">
                <div class="row  custom-border pt-4">
                    <div className="col-lg-3 col-md-12 col-sm-12" >
                        <div className="upper-section">
                            <img src="/images/wedding-girl.jpg" alt="wedding-girl" className='w-100' />
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12" >
                        <h1>Best Photography</h1>
                        <div className="row p-0">
                            <div className="col-lg-4 col-md-12 col-sm-12" >
                                <p class="card-text photo-below">Photographer</p>
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
                                    <p className="price-below">PRICE</p>
                                    <p className="per-hour-price">$3,000 for 5 hours</p>
                                </div>
                                <div className="include-custom">
                                    <p className="special-link">INCLUDED</p>
                                    <ul className="p-0">
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Video coverage</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour"> Photo album</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Raw,unedited photos</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Same day prints</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Highlight film</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Online gallery</p>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12" >
                                <div className="location">
                                    <ul className="p-0">
                                        <li className="d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                                <path d="M7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 3.13 11.37 0 7.5 0ZM7.5 9.5C6.12 9.5 5 8.38 5 7C5 5.62 6.12 4.5 7.5 4.5C8.88 4.5 10 5.62 10 7C10 8.38 8.88 9.5 7.5 9.5Z" fill="#31A7AD" />
                                            </svg>
                                            <p className="venue-address">4701 Lincoln avenue, Chicago, IL 60021</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Time_access.svg" alt="time" />
                                            <span class="color-cyan  ml-5"> Open  .</span> Closes 10 PM
                                        </li>
                                        <li className="d-flex site-link">
                                            <img src="/images/icons/Internet.svg" alt="internet" />
                                            <a href="#">ChicagoLakesidehotel.com</a>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/phone.svg" alt="phone" />
                                            <p className="venue-address">301-593-2392</p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 p-0 text-end" >
                                <button type="button" class="btn btn-outline-secondary">Add to cart</button>
                                <div className="site-link mt-2">
                                    <a href="#">View Listing</a>
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
                            <img src="/images/wedding-girl.jpg" alt="wedding-girl" className='w-100' />
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12" >
                        <h1>Best Photography</h1>
                        <div className="row p-0">
                            <div className="col-lg-4 col-md-12 col-sm-12" >
                                <p class="card-text photo-below">Photographer</p>
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
                                    <p className="price-below">PRICE</p>
                                    <p className="per-hour-price">$3,000 for 5 hours</p>
                                </div>
                                <div className="include-custom">
                                    <p className="special-link">INCLUDED</p>
                                    <ul className="p-0">
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Video coverage</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour"> Photo album</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Raw,unedited photos</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Same day prints</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Highlight film</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Online gallery</p>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12" >
                                <div className="location">
                                    <ul className="p-0">
                                        <li className="d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                                <path d="M7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 3.13 11.37 0 7.5 0ZM7.5 9.5C6.12 9.5 5 8.38 5 7C5 5.62 6.12 4.5 7.5 4.5C8.88 4.5 10 5.62 10 7C10 8.38 8.88 9.5 7.5 9.5Z" fill="#31A7AD" />
                                            </svg>
                                            <p className="venue-address">4701 Lincoln avenue, Chicago, IL 60021</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Time_access.svg" alt="time" />
                                            <span class="color-cyan  ml-5"> Open  .</span> Closes 10 PM
                                        </li>
                                        <li className="d-flex site-link">
                                            <img src="/images/icons/Internet.svg" alt="internet" />
                                            <a href="#">ChicagoLakesidehotel.com</a>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/phone.svg" alt="phone" />
                                            <p className="venue-address">301-593-2392</p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 p-0 text-end" >
                                <button type="button" class="btn btn-outline-secondary">Add to cart</button>
                                <div className="site-link mt-2">
                                    <a href="#">View Listing</a>
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
                            <img src="/images/wedding-girl.jpg" alt="wedding-girl" className='w-100' />
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12" >
                        <h1>Best Photography</h1>
                        <div className="row p-0">
                            <div className="col-lg-4 col-md-12 col-sm-12" >
                                <p class="card-text photo-below">Photographer</p>
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
                                    <p className="price-below">PRICE</p>
                                    <p className="per-hour-price">$3,000 for 5 hours</p>
                                </div>
                                <div className="include-custom">
                                    <p className="special-link">INCLUDED</p>
                                    <ul className="p-0">
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Video coverage</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour"> Photo album</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Raw,unedited photos</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Same day prints</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Highlight film</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Tick.svg" alt="tick" />
                                            <p className="per-hour">Online gallery</p>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12" >
                                <div className="location">
                                    <ul className="p-0">
                                        <li className="d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                                <path d="M7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 3.13 11.37 0 7.5 0ZM7.5 9.5C6.12 9.5 5 8.38 5 7C5 5.62 6.12 4.5 7.5 4.5C8.88 4.5 10 5.62 10 7C10 8.38 8.88 9.5 7.5 9.5Z" fill="#31A7AD" />
                                            </svg>
                                            <p className="venue-address">4701 Lincoln avenue, Chicago, IL 60021</p>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/Time_access.svg" alt="time" />
                                            <span class="color-cyan  ml-5"> Open  .</span> Closes 10 PM
                                        </li>
                                        <li className="d-flex site-link">
                                            <img src="/images/icons/Internet.svg" alt="internet" />
                                            <a href="#">ChicagoLakesidehotel.com</a>
                                        </li>
                                        <li className="d-flex">
                                            <img src="/images/icons/phone.svg" alt="phone" />
                                            <p className="venue-address">301-593-2392</p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 p-0 text-end" >
                                <button type="button" class="btn btn-outline-secondary">Add to cart</button>
                                <div className="site-link mt-2">
                                    <a href="#">View Listing</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default SearchResultListingPhotographer
