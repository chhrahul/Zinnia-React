import React from "react"
import { CalendarGrid } from "../../../components/CalendarGrid"
import { ResultTab } from "../../../components/MainSearch"
import { BsCalendar, BsCalendar2, BsCalendarFill, BsCardList, BsList } from "react-icons/bs";


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
            <div className="px-md-5  mt-3 mh-100 " >
                <div className="row paddin-lr ">
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
                    <CalendarGrid />
                </div>
            </div >
        </>

    )
}
export default Calendar


