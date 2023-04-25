
import React from 'react';
import { BsInfoCircle, BsEyeSlash, BsCalendar } from 'react-icons/bs';

function MainSearch() {

    return (
        <div className="container-fluid padding-lr-0 mh-100"  >
            <div className="row ">
                <div className="col ">

                    <div className="row  px-md-5 mt-3 ">
                        <h1 className='pl-0 col-12  padding-lr-0'>Good evening, Flowers and Friends!  </h1>
                        <p className='mb-1 mt-3 padding-lr-0'>BOOKING REQUESTS </p>
                        <div className="col-md-3 col-sm mt-3 bordered-box p-3 m-1">
                            <p >Confirmation needed by
                                1/1/2023 4PM </p>
                            <p className='text-danger'><BsInfoCircle /> <span>21 hours 31 mins left</span></p>
                            <p className='bold-p mb-0'>Calli Smith’s wedding</p>
                            <p className='bold-p font-14'>May 11th 12-9 pm </p>
                            <p className='text-muted fst-italic '>You have no bookings this day.  </p>
                            <button className="btn btn-secondary confirm-btn" >Cinfirm</button>
                            <p className='mb-0 mt-2 text-cyan-color'> Don't confirm</p>
                        </div>

                        <div className="col-md-3 col-sm mt-3 bordered-box p-3 m-1">
                            <p >Confirmation needed by
                                1/1/2023 4PM </p>
                            <p className='text-danger'><BsInfoCircle /> <span>21 hours 31 mins left</span></p>
                            <p className='bold-p mb-0'>Calli Smith’s wedding</p>
                            <p className='bold-p font-14'>May 11th 12-9 pm </p>
                            <p className='text-muted fst-italic '>You have no bookings this day.  </p>
                            <button className="btn btn-secondary confirm-btn" >Cinfirm</button>
                            <p className='mb-0 mt-2 text-cyan-color'> Don't confirm</p></div>

                        <div className="col-md-3 col-sm mt-3 bordered-box p-3 m-1">
                            <p >Confirmation needed by
                                1/1/2023 4PM </p>
                            <p className='text-danger'><BsInfoCircle /> <span>21 hours 31 mins left</span></p>
                            <p className='bold-p mb-0'>Calli Smith’s wedding</p>
                            <p className='bold-p font-14'>May 11th 12-9 pm </p>
                            <p className='text-muted fst-italic '>You have no bookings this day.  </p>
                            <button className="btn btn-secondary confirm-btn" >Cinfirm</button>
                            <p className='mb-0 mt-2 text-cyan-color'> Don't confirm</p> </div>

                        {/* if no bookings */}
                        {/* <div className="col-md-6 col-sm text-center ">
                            <BsCalendar size={40} className='mb-3 text-cyan-color' />
                            <p>No booking requests. </p>
                        </div> */}
                        {/* if no bookings */}

                        <p className='mb-3 mt-3 padding-lr-0'>Your payment information </p>
                        <div className='row row-p-0 padding-lr-0'>
                            <div className='col-6'>
                                <div className='row mb-2'>
                                    <div className='col-md-4'>
                                        <p className='bold-p mb-0'>Routing number</p>
                                    </div>

                                    <div className='col-md-4 '>
                                        <p className='bold-p mb-0'>...514</p>
                                    </div>

                                    <div className='col-md-2'>
                                        <p className='bold-p mb-0'><BsEyeSlash size="20" /></p>
                                    </div>

                                    <div className='col-md-2'>
                                        <p className='mb-0 text-cyan-color'>Update</p>
                                    </div>
                                </div>

                                <div className='row mb-2'>
                                    <div className='col-md-4'>
                                        <p className='bold-p mb-0'>Account number</p>
                                    </div>

                                    <div className='col-md-4 '>
                                        <p className='bold-p mb-0'>....385</p>
                                    </div>

                                    <div className='col-md-2'>
                                        <p className='bold-p mb-0'><BsEyeSlash size="20" /></p>
                                    </div>

                                    <div className='col-md-2'>
                                        <p className='mb-0 text-cyan-color'>Update</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default MainSearch

