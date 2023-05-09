

import React from 'react'
import DatePicker from '../Datepicker.js'
import { useFormik } from 'formik';
import FloristIcon from '../Icons/FloristIcon.js';
import VenueIcon from '../Icons/VenueIcon.js';
import PhotographerIcon from '../Icons/PhotographerIcon.js';
import MainSearchResult from '../../pages/MainSearchResult.js';
import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'
import 'react-clock/dist/Clock.css'
import TimeInput from 'material-ui-time-picker/lib/TimeInput.js';
import { FaSearch } from 'react-icons/fa';

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
                    <ul className="d-flex p-0 text-center main-search-filter-bar">
                        <li className={activePage === 'venue' ? 'list_info active' : 'list_info'} onClick={() => handleClickActivePage('venue')}><span className='tab-content-text'><VenueIcon />Venue</span></li>
                        <li className={activePage === 'photographer' ? 'list_info active' : 'list_info'} onClick={() => handleClickActivePage('photographer')}><span className='tab-content-text'><PhotographerIcon />Photographer</span></li>
                        <li className={activePage === 'florist' ? 'list_info active' : 'list_info'} onClick={() => handleClickActivePage('florist')}><span className='tab-content-text'><FloristIcon />Florist</span></li>
                    </ul>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className='row top-section-custom'>
                    <div className='col-md-11'>
                        <div className='row px-1 py-2 border_style main-search-row'>
                            <div className='col-lg  col-md-12 col-sm-12  below_border_style'>
                                <div className='row'>
                                    <div className='col-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
                                            <path d="M5.00001 0.333984C2.42001 0.333984 0.333344 2.42065 0.333344 5.00065C0.333344 6.16065 0.666677 7.24732 1.27334 8.22732C1.90668 9.25398 2.74001 10.134 3.38001 11.1607C3.69334 11.6607 3.92001 12.1273 4.16001 12.6673C4.33334 13.034 4.47334 13.6673 5.00001 13.6673C5.52668 13.6673 5.66668 13.034 5.83334 12.6673C6.08001 12.1273 6.30001 11.6607 6.61334 11.1607C7.25334 10.1407 8.08668 9.26065 8.72001 8.22732C9.33334 7.24732 9.66668 6.16065 9.66668 5.00065C9.66668 2.42065 7.58001 0.333984 5.00001 0.333984ZM5.00001 6.83398C4.08001 6.83398 3.33334 6.08732 3.33334 5.16732C3.33334 4.24732 4.08001 3.50065 5.00001 3.50065C5.92001 3.50065 6.66668 4.24732 6.66668 5.16732C6.66668 6.08732 5.92001 6.83398 5.00001 6.83398Z" fill="#505267" />
                                        </svg>
                                    </div>
                                    <div className='col'>
                                        <select class="form-select  p-0 country_part" aria-label="Default select example">
                                            <option selected>Anywhere</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div className='col-lg col-sm-12 col-md-12 mt-1 below_border_style outer-datepick'>

                                <div className="input-group my-date-picker-parent date-pick-custom">
                                    <span className='d-flex date-pick-custom form-select  p-md-0'>
                                        <span className="resposive-hide hide_symbol">|</span>
                                        <DatePicker />
                                    </span>
                                </div>

                            </div>
                            <div className='col-lg  col-md-12 col-sm-12  mt-1 below_border_style'>
                                <span className='d-flex form-select time-pick-custom p-md-0'>
                                    <span className="resposive-hide hide_symbol custom-space partition-symbol">|</span>
                                    <img src="/images/icons/Access_time.svg" alt="time" />
                                    <TimeInput mode='12h' theme='red' className="p-md-0 custom-time  form-select" />

                                </span>
                            </div>
                            {type === 'venue' &&
                                <div className='col-lg col-sm-12 col-md-12 mt-1 below_border_style'>
                                    <span className='d-flex'>
                                        <span class="resposive-hide hide_symbol custom-space partition-symbol">|</span>
                                        <img src="/images/icons/Guest.svg" alt="guest" />
                                        <select class="form-select  p-md-0 country_part" aria-label="Default select example">
                                            <option selected>Add guests</option>
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
                                    <select class="form-select  p-md-0 country_part" aria-label="Default select example">
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
                                <button type="button" class="btn btn-outline-secondary">Cancel</button>
                            </span>
                            <span className='col  p-0 mx-auto'>
                                <button type="submit" className="btn btn-secondary h-100 p-1 search-btn-main-custom d-flex align-items-center"><FaSearch /> Search</button>
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

