import FloristIcon from "../../components/Icons/FloristIcon"
import SearchFilter from "../../components/MainSearch/SearchFilter"

function SearchResultListingFlorist() {

    return (
        <>
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
                                <img src="/images/florist-cutting.jpg" alt="wedding-girl" className='w-100' />
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12" >
                            <h1>Big Day Florists</h1>
                            <div className="row p-0">
                                <div className="col-lg-4 col-md-12 col-sm-12" >
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
                            <div class="row">
                                <p className="include-link">INCLUDED</p>
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
                                <div className="col-lg-4 col-md-12 col-sm-12" >
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
                                <div className="col-lg-4 col-md-12 col-sm-12 p-0 text-end">
                                    <button type="button" class="btn btn-outline-secondary">Add to cart</button>
                                    <div className="site-link mt-2">
                                        <a href="#">View Listing</a>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <p className="include-link">INCLUDED</p>
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
                                <div className="col-lg-4 col-md-12 col-sm-12" >
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
                            <div class="row">
                                <p className="include-link">INCLUDED</p>
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


            </div>
            {/* <div class="col-md-12 d-flex justify-content-end last-section"><p>$9,000 plus taxes + fees</p><button type="submit" class="btn btn-secondary navigate-btn" id="next-btn" form="form-data">Check out now</button></div> */}
        </>


    )
}
export default SearchResultListingFlorist
