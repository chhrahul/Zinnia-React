import React from "react"
import { CalendarGrid } from "../../../components/CalendarGrid"
import { ResultTab } from "../../../components/MainSearch"
import { BsCalendar, BsCalendar2, BsCalendarFill, BsCardList, BsList, BsListUl } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { Bookings, WeekDaysList } from "../..";
import { Link } from "react-router-dom";


function Calendar(props) {
    const [resultType, setResultType] = React.useState('map');
    const getOfferProps = {
        resultType,
        setResultType,
        'first': 'Availability',
        'second': 'Bookings',
    }

    const [viewType, setViewType] = React.useState('map');

    const getViewProps = {
        'resultType': viewType,
        'setResultType': setViewType,
        'first': <BsCalendarFill size='40' className=" icon-canlender m-2" />,
        'second': <BsListUl size='40' className=" icon-canlender m-2" />,
    }

    return (
        <>
            <ResultTab {...getOfferProps} type="booking" />

            {resultType === 'map' ?
                <div className="px-md-5  mt-3 mh-100 " >
                    <div className="row paddin-lr ">
                        <div className="col">
                            <div className="row paddin-lr border mb-3 bordered-box border-2 p-2 ">
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

                                    <p className="p-2 m-0 calendar-view">
                                        {/* <BsCalendarFill size='30' className="mr-4 icon-canlender" /> */}
                                        {/* <BsCardList size='38' className=" icon-canlender" /> */}
                                        <ResultTab {...getViewProps} type="booking" className="p-0" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row paddin-lr">
                        {viewType === 'map' ?
                            <>
                                <div className="col">
                                    <Link to="/set-availability" className="btn btn-outline-info btn-sm set-av-btn mb-2" type="button">Set Availability</Link>
                                </div>
                                <CalendarGrid />
                            </>
                            :
                            <WeekDaysList />
                        }
                    </div>
                </div >
                :
                <Bookings />
            }
        </>

    )
}
export default Calendar


