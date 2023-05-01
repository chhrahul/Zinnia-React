import { Button } from "react-bootstrap"
import { BsFillInfoCircleFill, BsInfoCircle } from "react-icons/bs"
import { CalendarGrid } from "../components/CalendarGrid"


function SetAvailability() {

    return (
        <>
            <div className="container-fluid px-md-5  mt-3 mh-100" style={{ 'paddingRight': 0, 'paddingLeft': 0 }} id="1">
                <div className="row paddin-lr">

                    <div className='row paddin-lr mt-3'>
                        <div className='col-md-4 pl-0'>
                            <h1>Set your availability</h1>
                            <p>Let us know when you’re typically available to accept clients.</p>
                            <div className="mt-3 mb-3" id="vender-form">
                                <label htmlFor="select-opt-type" className="form-label"  >Time zone</label>
                                <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type"
                                >
                                    <option
                                        value="florist"
                                    >Central time - US & Canada</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='row paddin-lr mt-3'>
                        <label htmlFor="select-opt-type" className="form-label mb-0"  >Available hours</label>
                        <div className='col-md-4 pl-0'>
                            <div className="mt-3 mb-3" id="vender-form">
                                <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type"
                                >
                                    <option
                                        value="florist"
                                    >11:00 AM</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-4 pl-0'>
                            <div className="mt-3 mb-3" id="vender-form">

                                <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type"
                                >
                                    <option
                                        value="florist"
                                    >10:00 PM</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row paddin-lr mt-3'>
                        <div className='col-md-8 '>
                            <div className='row paddin-lr mt-3 text-center avialability-box'>
                                <div className='col-md col-sm-12 pl-0'>
                                    <div className="">
                                        <div className="form-check text-center p-0">
                                            <input type="checkbox" className="avialability-checkbox pl-0" />
                                        </div>

                                    </div>
                                    Sunday
                                </div>
                                <div className='col-md col-sm-12 pl-0'>
                                    <div className="">
                                        <div className="form-check text-center p-0">
                                            <input type="checkbox" className="avialability-checkbox pl-0" />
                                        </div>

                                    </div>
                                    Monday
                                </div>

                                <div className='col-md col-sm-12 pl-0'>
                                    <div className="">
                                        <div className="form-check text-center p-0">
                                            <input type="checkbox" className="avialability-checkbox pl-0" />
                                        </div>

                                    </div>
                                    Tuesday
                                </div>

                                <div className='col-md col-sm-12 pl-0'>
                                    <div className="">
                                        <div className="form-check text-center p-0">
                                            <input type="checkbox" className="avialability-checkbox pl-0" />
                                        </div>

                                    </div>
                                    Wednesday
                                </div>

                                <div className='col-md col-sm-12 pl-0'>
                                    <div className="">
                                        <div className="form-check text-center p-0">
                                            <input type="checkbox" className="avialability-checkbox pl-0" />
                                        </div>

                                    </div>
                                    Thursday
                                </div>
                                <div className='col-md col-sm-12 pl-0'>
                                    <div className="">
                                        <div className="form-check text-center p-0">
                                            <input type="checkbox" className="avialability-checkbox pl-0" />
                                        </div>

                                    </div>
                                    Friday
                                </div>
                                <div className='col-md col-sm-12 pl-0'>
                                    <div className="">
                                        <div className="form-check text-center p-0">
                                            <input type="checkbox" className="avialability-checkbox pl-0" />
                                        </div>

                                    </div>
                                    Saturday
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-2"><BsInfoCircle size="18" className="m-1" />You’ll be able to further customize your schedule later on! </p>
                </div>

            </div >

            <div className="row next-btn-bg position-absolute- w-100 btn-grp" style={{ left: 0, bottom: 0 }}>
                <div className="col-md-12 d-flex justify-content-end">

                    <Button className="btn btn-light navigate-btn" href="payment-info">Cancel
                    </Button >
                    <button type="submit" className="btn btn-secondary navigate-btn" id="next-btn" form="form-data">
                        Save
                    </button>
                </div>
            </div>
        </>

    )
}
export default SetAvailability


