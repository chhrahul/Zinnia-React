import React from "react"
import { CalendarGrid } from "../../../components/CalendarGrid"
import { ResultTab } from "../../../components/MainSearch"
import { BsBicycle, BsCalendar, BsCalendar2, BsCalendarFill, BsCardList, BsClipboard, BsClipboardPlusFill, BsList, BsPlusLg } from "react-icons/bs";
import { MdContentCopy, MdDelete } from "react-icons/md";

function Calendar(props) {
    const [resultType, setResultType] = React.useState();
    const getOfferProps = {
        resultType,
        setResultType,
        'first': 'Availability',
        'second': 'Bookings',
    }

    return (
        <>
            <ResultTab {...getOfferProps} type="booking" />
            <div className="px-md-5  mt-3 mh-100 fc-list" >
                <div className="row paddin-lr  ">
                    <div className="row paddin-lr border mb-3 bordered-box border-2 p-2 mx-2">
                        <div className="col-6">
                            <div className="row">
                                <p className="tz-fc-label m-0 p-0"  >Time zone</p>
                                <div className="col-md-6 p-0">

                                    <select className="form-select tz-fc m-0 p-0 w-md-50 " aria-label="Default select example"
                                    >
                                        <option
                                            value="florist"
                                        >Central time - US & Canada</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="col-6 text-end">
                            <p className="p-2 m-0"><BsCalendarFill size='30' className="mr-4 icon-canlender" /> <BsCardList size='38' className=" icon-canlender" /></p>
                        </div>
                    </div>
                </div>
                <div className="row paddin-lr">
                    <div className="col-8">
                        <p className="tz-fc-label m-0 p-0"  >Your weekly hours</p>
                        <div className="row p-4 hr-row">
                            <div className="col-3  p-0">

                                <input type="checkbox" className="avialability-checkbox m-0 align-middle" />
                                <span className="pl-2 day-name align-middle"> Mon</span>

                            </div>
                            <div className="col-6  p-0 unavilable-text">
                                <span className="m-0 align-middle">Unavailable</span>
                            </div>
                            <div className="col-3  p-0 ">
                                <span className="float-md-end icons-action">
                                    <BsPlusLg size='25' color='black' className="mr-4  plus-icon" />
                                    <MdContentCopy size='30' color='black' className="mr-4  " />
                                </span>
                            </div>
                        </div>

                        <div className="row p-4 hr-row">
                            <div className="col-3  p-0">

                                <input type="checkbox" className="avialability-checkbox m-0 align-middle" />
                                <span className="pl-2 day-name align-middle"> Tue</span>

                            </div>
                            <div className="col-6  p-0 unavilable-text">
                                <span className="m-0 align-middle">Unavailable</span>
                            </div>
                            <div className="col-3  p-0 ">
                                <span className="float-md-end icons-action">
                                    <BsPlusLg size='25' color='black' className="mr-4  plus-icon" />
                                    <MdContentCopy size='30' color='black' className="mr-4  " />
                                </span>
                            </div>
                        </div>
                        <div className="row p-4 hr-row">
                            <div className="col-3  p-0">

                                <input type="checkbox" className="avialability-checkbox m-0 align-middle" />
                                <span className="pl-2 day-name align-middle"> Wed</span>

                            </div>
                            <div className="col-6  p-0 unavilable-text">
                                <span className="m-0 align-middle">Unavailable</span>
                            </div>
                            <div className="col-3  p-0 ">
                                <span className="float-md-end icons-action">
                                    <BsPlusLg size='25' color='black' className="mr-4  plus-icon" />
                                    <MdContentCopy size='30' color='black' className="mr-4  " />
                                </span>
                            </div>
                        </div>
                        <div className="row p-4 hr-row">
                            <div className="col-3  p-0">

                                <input type="checkbox" className="avialability-checkbox m-0 align-middle" />
                                <span className="pl-2 day-name align-middle"> Thu</span>

                            </div>
                            <div className="col-6  p-0 unavilable-text">
                                <div className="row">
                                    <div className="col-5 p-0">
                                        <select className="form-select " aria-label="Default select example"
                                        >
                                            <option
                                                value="florist"
                                            >11:00 am</option>
                                        </select>
                                    </div>
                                    <div className="col-5 ">
                                        <select className="form-select    " aria-label="Default select example"
                                        >
                                            <option
                                                value="florist"
                                            >10:00 pm</option>
                                        </select></div>
                                    <div className="col-2"><MdDelete size="25" className="delete-icon-fc" /></div>
                                </div>
                            </div>
                            <div className="col-3  p-0 ">
                                <span className="float-md-end icons-action">
                                    <BsPlusLg size='25' color='black' className="mr-4  plus-icon" />
                                    <MdContentCopy size='30' color='black' className="mr-4  " />
                                </span>
                            </div>
                        </div>
                        <div className="row p-4 hr-row">
                            <div className="col-3  p-0">
                                <input type="checkbox" className="avialability-checkbox m-0 align-middle" />
                                <span className="pl-2 day-name align-middle"> Fri</span>

                            </div>
                            <div className="col-6  p-0 unavilable-text">
                                <span className="m-0 align-middle">Unavailable</span>
                            </div>
                            <div className="col-3  p-0 ">
                                <span className="float-md-end icons-action">
                                    <BsPlusLg size='25' color='black' className="mr-4  plus-icon" />
                                    <MdContentCopy size='30' color='black' className="mr-4  " />
                                </span>
                            </div>
                        </div>
                        <div className="row p-4 hr-row">
                            <div className="col-3  p-0">
                                <input type="checkbox" className="avialability-checkbox m-0 align-middle" />
                                <span className="pl-2 day-name align-middle"> Sat</span>

                            </div>
                            <div className="col-6  p-0 unavilable-text">
                                <span className="m-0 align-middle">Unavailable</span>
                            </div>
                            <div className="col-3  p-0 ">
                                <span className="float-md-end icons-action">
                                    <BsPlusLg size='25' color='black' className="mr-4  plus-icon" />
                                    <MdContentCopy size='30' color='black' className="mr-4  " />
                                </span>
                            </div>
                        </div>
                        <div className="row p-4 hr-row">
                            <div className="col-3  p-0">
                                <input type="checkbox" className="avialability-checkbox m-0 align-middle" />
                                <span className="pl-2 day-name align-middle"> Sun</span>

                            </div>
                            <div className="col-6  p-0 unavilable-text">
                                <span className="m-0 align-middle">Unavailable</span>
                            </div>
                            <div className="col-3  p-0 ">
                                <span className="float-md-end icons-action">
                                    <BsPlusLg size='25' color='black' className="mr-4  plus-icon" />
                                    <MdContentCopy size='30' color='black' className="mr-4  " />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <p className="tz-fc-label "  >Add date overides</p>
                            <div className="col-md-12 ">
                                <p className="add-override">Add dates when your availability changes from your weekly hours. Use this option if you have days you have other bookings. Select the date and time your unavailable and remove it from your availability by deleting the available time. </p>

                                <button className="btn  btn-outline-secondary">Add a date overide</button>

                            </div>
                        </div>
                    </div>


                </div>
            </div >
        </>

    )
}
export default Calendar


