import { Button } from "react-bootstrap"
import { BsFillInfoCircleFill, BsInfoCircle } from "react-icons/bs"
import { CalendarGrid } from "../components/CalendarGrid"


function Calendar() {

    return (
        <>
            <div className="container-fluid px-md-5  mt-3 mh-100" style={{ 'paddingRight': 0, 'paddingLeft': 0 }} id="1">
                <div className="row paddin-lr">
                    <CalendarGrid />
                </div>
            </div >



        </>

    )
}
export default Calendar


