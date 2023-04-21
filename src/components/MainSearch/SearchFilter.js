import DatePicker from '../Datepicker.js'
const SearchFilter = (props) => {
    const { type } = props
    return (
        <div className='row top-section-custom'>
            <div className='col-md-10'>
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
                        <img src="/images/icons/Access_time.svg" alt="time" style={{'margin-right': 10 }} />
                            <select class="form-select country_part" aria-label="Default select example">
                                <option selected>Any time</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </span>
                    </div>
                    {/* <div className='col-lg col-sm-12 col-md-12 mt-1 below_border_style form-control'>
                        < span className='d-flex date-pick-custom'>
                            <span class="resposive-hide hide_symbol">|</span>
                            <img src="/images/icons/Access_time.svg" alt="time" style={{'margin-right': 10 }} />
                            <select class="form-select country_part" aria-label="Default select example">
                                <option selected>Anywhere</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label for="time" className="content_after">{type === 'florist' ? 'Drop off time' : 'Any time'}</label>

                        </span>
                    </div> */}
                    {type === 'venue' &&
                        <div className='col-lg col-sm-12 col-md-12 mt-1 below_border_style'>
                            <span className='d-flex'>
                                <span class="resposive-hide hide_symbol custom-space partition-symbol">|</span>
                                <img src="/images/icons/Guest.svg" alt="guest" />
                                <select class="form-select country_part" aria-label="Default select example">
                                    <option selected>Any guests</option>
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
            <div className='col-md-12 col-lg-2'>
                {/* <div class="row float-right">
                        <button type="button" class="btn btn-outline-secondary cancel_custom mr-1 col-6">Cancel</button>
                        <button type="button" class="btn btn-secondary btn-lg search_btn col-6"><img src="/images/icons/search.png" alt="search" />Search</button>
                </div> */}


                <div class="row py-1">
                    <span className='col cancel_custom text-end'>
                         <button type="button" class="btn btn-outline-secondary   ">Cancel</button>
                    </span>
                        <span className='col  text-sm-end'>
                        <button type="button" class="btn btn-secondary"><img src="/images/icons/search.png" alt="search" />Search</button>
                </span></div>
            </div>
        </div>
    )
}

export default SearchFilter