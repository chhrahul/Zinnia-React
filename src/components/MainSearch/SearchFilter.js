

import DatePicker from '../Datepicker.js'
import { useFormik } from 'formik';


const SearchFilter = (props) => {
    const { type } = props
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
            console.log(newValue)
        },

    });

    return (
        <form onSubmit={formik.handleSubmit} id="form-data">
            <div className='row'>
                <div className='col-md-10'>
                    <div className='row px-1 border_style'>
                        <div className='col-lg  col-md-12 col-sm-12 mt-1 below_border_style'>
                            <span className='d-flex'>
                                <img src="/images/icons/location-2.svg" alt="location" />
                                <select class="form-select country_part" aria-label="Default select example"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.location}
                                    name="location"
                                >
                                    <option selected>Anywhere</option>
                                    <option value="Chicago, IL">Chicago, IL</option>
                                    <option value="Lincoln Park, Chicago, IL">Lincoln Park, Chicago, IL</option>
                                    <option value="Chicago Loop, Chicago, IL">Chicago Loop, Chicago, IL</option>
                                </select>
                            </span>
                        </div>
                        <div className='col-lg col-sm-12 col-md-12 mt-1 below_border_style'>
                            <div class="input-group my-date-picker-parent">
                                <span className='d-flex'>
                                    <span class="resposive-hide mt-3 hide_symbol">|</span>
                                    <label htmlFor="myDatePicker">
                                        <img src="/images/icons/calendar_today.svg" alt="date" style={{ 'margin-top': 20, 'margin-right': 10 }} />
                                    </label>
                                    <DatePicker formik={formik} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg col-sm-12 col-md-12 mt-1 below_border_style'>
                            < span className='d-flex'>
                                <span class="resposive-hide mt-3 hide_symbol custom-space">|</span>
                                <img src="/images/icons/Access_time.svg" alt="time" style={{ 'margin-top': 16, 'margin-right': 10 }} />
                                <label for="time" className="content_after">{type === 'florist' ? 'Drop off time' : 'Any time'}</label>

                            </span>
                        </div>
                        {type === 'venue' &&
                            <div className='col-lg col-sm-12 col-md-12 mt-1 below_border_style'>
                                <span className='d-flex'>
                                    <span class="resposive-hide mt-3 hide_symbol custom-space">|</span>
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
                                <span class="resposive-hide mt-3 hide_symbol mr-2">|</span>
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
                        <button type="submit" class="btn btn-secondary btn-lg search_btn"><img src="/images/icons/search.png" alt="search" />Search</button>
                    </span>
                </div>
            </div>
        </form>
    )
}

export default SearchFilter