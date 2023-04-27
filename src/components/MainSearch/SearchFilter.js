

import React from 'react'
import DatePicker from '../Datepicker.js'
import { useFormik } from 'formik';
import FloristIcon from '../Icons/FloristIcon.js';
import VenueIcon from '../Icons/VenueIcon.js';
import PhotographerIcon from '../Icons/PhotographerIcon.js';
import SearchResultVenueMap from './SearchResultVenueMap.js';
import SearchResultPhotographerMap from './SearchResultPhotographerMap.js';
import SearchResultFloristMap from './SearchResultFloristMap.js';
import { BsClock } from 'react-icons/bs';
import MainSearchResult from '../../pages/MainSearchResult.js';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'
import 'react-clock/dist/Clock.css'

const SearchFilter = (props) => {

    const { type } = props
    const { activePage, setActivePage, searchType, setSearchType, resultType, setResultType } = props
    const formik = useFormik({
        initialValues: {

            location: '',
            startDate: '',
        },
        onSubmit: values => {
            const newValue = {
                'location': values.location,
                'startDate': values.startDate,
            }
            setSearchType(true)
        },
    });

    const handleClickActivePage = (data) => {
        setActivePage(data)
    }

    const getOfferProps = {
        activePage,
        setActivePage,
        searchType,
        setSearchType,
        resultType,
        setResultType
    }

    return (
        <>
            <div className="row paddin-lr hover-div mb-3 mt-4">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <ul className="d-flex p-0">
                        <li className={activePage === 'venue' ? 'list_info active' : 'list_info'} onClick={() => handleClickActivePage('venue')}><VenueIcon />Venue</li>
                        <li className={activePage === 'photographer' ? 'list_info active' : 'list_info'} onClick={() => handleClickActivePage('photographer')}><PhotographerIcon />Photographer</li>
                        <li className={activePage === 'florist' ? 'list_info active' : 'list_info'} onClick={() => handleClickActivePage('florist')}><FloristIcon />Florist</li>
                    </ul>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className='row top-section-custom'>
                    <div className='col-md-11'>
                        <div className='row px-1 py-1 border_style'>
                            <div className='col-lg  col-md-12 col-sm-12  below_border_style'>
                                <span className='d-flex'>
                                    <img src="/images/icons/location-2.svg" alt="location" />
                                    <select class="form-select country_part" aria-label="Default select example">
                                        <option selected>Anywhere</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </span>
                            </div>
                            <div className='col-lg col-sm-12 col-md-12 mt-1 below_border_style'>
                                <div class="input-group my-date-picker-parent form-control">
                                    <span className='d-flex date-pick-custom'>
                                        <span class="resposive-hide hide_symbol">|</span>
                                        <DatePicker />

                                    </span>
                                </div>
                            </div>
                            <div className='col-lg  col-md-12 col-sm-12  below_border_style'>
                                <span className='d-flex'>
                                    <span class="resposive-hide hide_symbol custom-space partition-symbol">|</span>
                                    <img src="/images/icons/Access_time.svg" alt="time" style={{ 'margin-right': 10 }} />
                                    <select class="form-select country_part" aria-label="Default select example">
                                        <option selected>Any time</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </span>
                            </div>
                            {type === 'venue' &&
                                <div className='col-lg col-sm-12 col-md-12 mt-1 below_border_style'>
                                    <span className='d-flex'>
                                        <span class="resposive-hide hide_symbol custom-space partition-symbol">|</span>
                                        <img src="/images/icons/Guest.svg" alt="guest" />
                                        <select class="form-select country_part" aria-label="Default select example">
                                            <option selected>Any Budget</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </span>
                                </div>
                            }
                            <div className='col-lg  col-sm-12 col-md-12 mt-1 below_border_style'>
                                <span className='d-flex'>
                                    <span class="resposive-hide hide_symbol partition-symbol mr-2">|</span>
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
                    <div className='col-md-12 col-lg-1 p-lg-0'>
                        <div class="row  float-lg-right  h-100">
                            <span className='col cancel_custom text-end '>
                                <button type="button" class="btn btn-outline-secondary   ">Cancel</button>
                            </span>
                            <span className='col-lg-12  p-0 '>
                                <button type="submit" className="btn btn-secondary h-100 p-1 search-btn-filter"><img src="/images/icons/search.png" alt="search" />Search</button>
                            </span>
                        </div>
                    </div>
                </div>
            </form>

            <MainSearchResult {...getOfferProps} />

        </>
    )
}

export default SearchFilter