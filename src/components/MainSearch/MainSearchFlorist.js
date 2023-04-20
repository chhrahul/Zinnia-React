
import React from 'react';
import Datepicker from '../Datepicker.js';
import FloristIcon from '../Icons/FloristIcon.js';
import VenueIcon from '../Icons/VenueIcon.js';
import PhotographerIcon from '../Icons/PhotographerIcon.js';
function MainSearchFlorist(props) {
    const { activePage, setActivePage } = props
    const handleClickActivePage = (data) => {
        setActivePage(data)
    }
    return (
        <div className="container-fluid px-md-5  mt-3 img-bg custom-search" style={{ 'paddingRight': 0, 'paddingLeft': 0 }} >
            <div className="row paddin-lr">
                <div className='row paddin-lr mt-2'>
                    <h2 className='heading_first newClass'>Let's plan your dream wedding</h2>

                </div>
            </div>
            <div className="row paddin-lr hover-div mb-3">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <ul className="d-flex p-0">
                        <li class="list_info" onClick={() => handleClickActivePage('venue')}><VenueIcon />Venue</li>
                        <li class="list_info" onClick={() => handleClickActivePage('photographer')}><PhotographerIcon />Photographer</li>
                        <li class="list_info active" onClick={() => handleClickActivePage('florist')}><FloristIcon />Florist</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-10'>
                    <div className='row px-1 border_style'>
                        <div className='col-lg-3 col-md-12 col-sm-12 mt-1 below_border_style'>
                            <span className='d-flex'>
                                <img src="/images/icons/location-2.svg" alt="location" />
                                <select class="form-select country_part" aria-label="Default select example">
                                    <option selected>Anywhere</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <span class="resposive-hide mt-3 hide_symbol">|</span>
                            </span>

                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12 mt-1 below_border_style'>
                            <span className='d-flex'>
                                <img src="/images/icons/calendar_today.svg" alt="date" style={{ 'margin-top': 16, 'margin-right': 10 }} />
                                <label for="date" className="content_after">AnyDate</label>

                                <span class="resposive-hide mt-3 hide_symbol custom-space">|</span>
                            </span>

                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12 mt-1 below_border_style'>
                            < span className='d-flex'>
                                <img src="/images/icons/Access_time.svg" alt="time" style={{ 'margin-top': 16, 'margin-right': 10 }} />
                                <label for="time" className="content_after">Drop off time</label>
                                <span class="resposive-hide mt-3 hide_symbol custom-space">|</span>
                            </span>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12  mt-1 below_border_style'>
                            <span className='d-flex'>
                                <img src="/images/icons/Budget-2.svg" alt="budget" />
                                <select class="form-select country_part" aria-label="Default select example">
                                    <option selected>Any Budget</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </span>
                        </div>

                    </div>
                </div>
                <div className='col-lg-2 col-md-12 col-sm-12'>
                    <span>
                        <button type="button" class="btn btn-outline-secondary cancel_custom">Cancel</button>
                        <button type="button" class="btn btn-secondary btn-lg search_btn"><img src="/images/icons/search.png" alt="search" />Search</button>
                    </span>
                </div>
            </div>
        </div>

    )
}
export default MainSearchFlorist

