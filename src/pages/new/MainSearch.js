
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CustomSlider from "../../components/CustomSlider";

function MainSearch() {
    return (


        <div className="container-fluid px-md-5 listing-page mt-3" style={{ 'paddingRight': 0, 'paddingLeft': 0 }} >

            <div className="row paddin-lr">
                <div className='row paddin-lr mt-2'>
                    <h2 className='heading_first'>Let's plan your dream wedding</h2>
                </div>
            </div>
            <div className="row paddin-lr mt-3 hover-div">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <ul className="d-flex">
                        <li class="list_info"><img src="/images/icons/venue.svg" alt="venue" />Venue</li>
                        <li class="list_info"><img src="/images/icons/photograph.svg" alt="photograph" />Photographer</li>
                        <li class="list_info"><img src="/images/icons/bouquet.svg" alt="bouquet" />Florist</li>
                    </ul>
                </div>
            </div>
            <div className="row paddin-lr mt-4 search-div">
                <div className="col-md-10 first_column">
                    <div className="row paddin-lr ">
                        <div className="col-md-2 lower_content">
                            <img src="/images/icons/location.png" alt="location" />
                            <select class="form-select country_part" aria-label="Default select example">
                                <option selected>Anywhere</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <span class="resposive-hide">|</span>
                        </div>
                        <div className="col-md-2 lower_content">
                            <input type="date" class="form-control" data-bs-toggle="datepicker" data-bs-target="#datepicker" />
                            <label for="time">AnyDate</label>
                            <span class="resposive-hide">|</span>
                        </div>
                        <div className="col-md-2 lower_content">
                            <span><input type="time" class="form-control" data-bs-toggle="datepicker" data-bs-target="#datepicker" /></span>
                            <span><label for="time">Hours we needed</label></span>
                            <span class="resposive-hide">|</span>

                        </div>
                        <div className="col-md-2 lower_content">
                            <select class="form-select country_part" aria-label="Default select example">
                                <option selected>Any Guest</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <span class="resposive-hide">|</span>

                        </div>
                        <div className="col-md-2 lower_content">
                            <img src="/images/icons/budget.png" alt="budget" />
                            <select class="form-select country_part" aria-label="Default select example">
                                <option selected>Any Budget</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <span class="resposive-hide">|</span>

                        </div>
                    </div>


                </div>
                <div className="col-md-2">
                    <div className="col-md-2 last_part">
                        <button type="button" class="btn btn-secondary btn-lg search_btn"><img src="/images/icons/search.png" alt="search" />Search</button>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default MainSearch

