import FloristIcon from "../components/Icons/FloristIcon"
import SearchFilter from "../components/MainSearch/SearchFilter"

function MainSearchResultFlorist() {

    return (
        <div className="container-fluid px-md-5   custom-search">


            <SearchFilter type={'florist'} />
            <div className="row mb-3">
                <div className="col-lg-12 col-md-12 col-sm-12 venue-top">
                    <ul className="d-flex p-0">
                        <li class="list_info active"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                            <path d="M7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 3.13 11.37 0 7.5 0ZM7.5 9.5C6.12 9.5 5 8.38 5 7C5 5.62 6.12 4.5 7.5 4.5C8.88 4.5 10 5.62 10 7C10 8.38 8.88 9.5 7.5 9.5Z" fill="#505267" />
                        </svg>Map</li>
                        <li class="list_info"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                            <path d="M0.5 6H2.5V4H0.5V6ZM0.5 10H2.5V8H0.5V10ZM0.5 2H2.5V0H0.5V2ZM4.5 6H18.5V4H4.5V6ZM4.5 10H18.5V8H4.5V10ZM4.5 0V2H18.5V0H4.5Z" fill="#505267" />
                        </svg>List View</li>
                    </ul>
                </div>
            </div>
            <div className="row mb-3">
                <div>
                    <span className="d-flex lowest_price"><img src="/images/icons/down-arrow.svg" alt="arrow" /><p>Lowest to highest price</p></span>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 ">
                    <div class="card card-content">
                        <img src="/images/florist-girl.png" alt="girl" />
                        <div class="card-body card-custom">
                            {/* <h4 class="card-title photo-head">Best Photography</h4> */}

                            <p class="card-text photo-below mt-3">Florist</p>
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
                                <p className="price-below">PRICE</p>
                                <p className="per-hour-price">Total $650.00</p>
                            </div>
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
                            <button type="button" class="btn btn-outline-secondary"><img src="/images/icons/Green-tick.svg" alt="phone" />Added to cart</button>
                            <div className="site-link mt-2">
                                <a href="#">View listing</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.5577198195256!2d-87.69167392271156!3d41.966833996289225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd21ab75c2d73%3A0xc77f3bbadef7b3a8!2s4701%20N%20Lincoln%20Ave%2C%20Chicago%2C%20IL%2060625%2C%20USA!5e0!3m2!1sen!2sin!4v1681993856968!5m2!1sen!2sin" width="100%" height="700px" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
                </div>

            </div>

        </div>
    )
}
export default MainSearchResultFlorist

