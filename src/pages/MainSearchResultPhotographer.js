import FloristIcon from "../components/Icons/FloristIcon"
import SearchFilter from "../components/MainSearch/SearchFilter"


function MainSearchResultPhotographer() {

    return (
        <div className="container-fluid px-md-5  mt-3 custom-search">
            <div className="row paddin-lr hover-div mb-3">
                <div className="col-lg-12 col-md-12 col-sm-12 venue-top">
                    <ul className="d-flex p-0">
                        <li class="list_info"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 -1.02344L13.861 -0.205371L25.3393 10.7005C25.8397 11.176 25.86 11.9672 25.3844 12.4677C25.0863 12.7814 24.6642 12.9065 24.2674 12.8389V23.504V24.754H23.0174H2.9826H1.7326V23.504V12.8389C1.33578 12.9065 0.913635 12.7814 0.615542 12.4677C0.140025 11.9672 0.160256 11.176 0.66073 10.7005L12.139 -0.205371L13 -1.02344ZM13 2.42507L21.7674 10.7553V22.254H14.0428L14.0519 22.2457L19.4519 17.3123C20.0751 16.7988 20.7996 15.8598 21.1313 14.7366C21.4909 13.5192 21.3936 12.0169 20.1605 10.7388C19.4374 9.98932 18.6334 9.53164 17.772 9.3636C16.9195 9.19729 16.1201 9.33583 15.4319 9.59311C14.6169 9.89778 13.882 10.4016 13.2908 10.8759C12.8609 10.4941 12.3445 10.1209 11.7588 9.8316C10.6495 9.28372 9.21032 9.00559 7.69799 9.66878C6.19325 10.3286 5.40334 11.578 5.10386 12.7758C4.82165 13.9045 4.92973 15.1805 5.47362 16.0417L5.56762 16.1905L5.69907 16.3076L12.3748 22.254H4.2326V10.7553L13 2.42507ZM8.70201 11.9583C9.36012 11.6697 10.0079 11.7551 10.6517 12.0731C11.3203 12.4033 11.8927 12.9484 12.2276 13.3726L13.0539 14.4194L14.045 13.5272C14.7372 12.9042 15.5055 12.2346 16.3073 11.9348C16.6799 11.7955 17.0023 11.7606 17.2933 11.8173C17.5754 11.8724 17.9366 12.0344 18.3613 12.4746C18.8496 12.9807 18.8915 13.4944 18.7337 14.0286C18.5541 14.6367 18.1253 15.1714 17.8516 15.3914L17.8208 15.4162L17.7917 15.4428L13.1982 19.6394L7.53903 14.5985C7.46371 14.3809 7.39282 13.9276 7.5292 13.3822C7.6784 12.7855 8.03632 12.2502 8.70201 11.9583Z" fill="#505267" />
                        </svg>Venue</li>
                        <li class="list_info active"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                            <path d="M12.12 2L13.95 4H18V16H2V4H6.05L7.88 2H12.12ZM13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2H14.83L13 0ZM10 7C11.65 7 13 8.35 13 10C13 11.65 11.65 13 10 13C8.35 13 7 11.65 7 10C7 8.35 8.35 7 10 7ZM10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5Z" fill="#505267" />
                        </svg>Photographer</li>
                        <li class="list_info"><FloristIcon />Florist</li>
                    </ul>
                </div>
            </div>
            <SearchFilter type={'photographer'} />
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
                    <img src="/images/beach-photo.jpg" alt="beach-photo" className='w-100' />
                    <div class="card-body card-custom">
                        {/* <h4 class="card-title photo-head">Best Photography</h4> */}
                        <h1>Best Photography</h1>
                        <p class="card-text photo-below">Photographer</p>
                        <div className="review">
                            <ul className="d-flex p-0">
                                <li>
                                    <img src="/images/icons/star.svg" alt="star"/>
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
                            <p className="per-hour">$3,000 for 5 hours</p>
                        </div>
                        <div className="include-custom">
                            <p className="special-link">INCLUDED</p>
                            <ul className="p-0">
                                <li className="d-flex">
                                    <img src="/images/icons/Tick.svg" alt="tick"/>
                                    <p className="per-hour">Video coverage</p>
                                </li>
                                <li className="d-flex">
                                    <img src="/images/icons/Tick.svg" alt="tick"/>
                                    <p className="per-hour"> Photo album</p>
                                </li>
                                <li className="d-flex">
                                    <img src="/images/icons/Tick.svg" alt="tick"/>
                                    <p className="per-hour">Raw,unedited photos</p>
                                </li>
                                <li className="d-flex">
                                    <img src="/images/icons/Tick.svg" alt="tick"/>
                                    <p className="per-hour">Same day prints</p>
                                </li>
                                <li className="d-flex">
                                    <img src="/images/icons/Tick.svg" alt="tick"/>
                                    <p className="per-hour">Highlight film</p>
                                </li>
                                <li className="d-flex">
                                    <img src="/images/icons/Tick.svg" alt="tick"/>
                                    <p className="per-hour">Online gallery</p>
                                </li>

                            </ul>

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
                                    <img src="/images/icons/Time_access.svg" alt="time"/>
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
                        <button type="button" class="btn btn-outline-secondary">Add to cart</button>
                        <div className="site-link mt-2">
                            <a href="#">View listing</a>
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
export default MainSearchResultPhotographer

