import React from "react"
import { BsPlusLg } from "react-icons/bs";
import { MdContentCopy, MdDelete } from "react-icons/md";
import { Modal, Button } from 'react-bootstrap';
import { Datepicker } from "../../../components/index.js";

function Calendar(props) {

    return (
        <>
            <div className="col-md-8">
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
                    <div className="col-md-3  p-0">

                        <input type="checkbox" className="avialability-checkbox m-0 align-middle" />
                        <span className="pl-2 day-name align-middle"> Thu</span>

                    </div>
                    <div className="col-md-6  p-0 unavilable-text">
                        <div className="row">
                            <div className="col-md-5 ">
                                <select className="form-select  " aria-label="Default select example"
                                >
                                    <option
                                        value="florist"
                                    >11:00 am</option>
                                </select>
                            </div>
                            <div className="col-md-5  ">
                                <select className="form-select    " aria-label="Default select example"
                                >
                                    <option
                                        value="florist"
                                    >10:00 pm</option>
                                </select></div>
                            <div className="col-2"><MdDelete size="25" className="delete-icon-fc" /></div>
                        </div>
                    </div>
                    <div className="col-md-3  p-0 ">
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
            <div className="col-md-4">
                <div className="row">
                    <p className="tz-fc-label "  >Add date overides</p>
                    <div className="col-md-12 ">
                        <p className="add-override">Add dates when your availability changes from your weekly hours. Use this option if you have days you have other bookings. Select the date and time your unavailable and remove it from your availability by deleting the available time. </p>
                        <ChangeDateModal />
                    </div>
                </div>
            </div>
        </>

    )
}
export default Calendar

const ChangeDateModal = (props) => {

    const { title } = props
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <button className="btn  btn-outline-secondary" onClick={handleShow}>Add a date overide</button>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton className='modal-custom'>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body className='mx-5'>
                    <form id="changedateForm">
                        <div class="mb-3">
                            <label for="date" class="form-label">Date</label>
                            <Datepicker />
                        </div>
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
                    </form>
                </Modal.Body>
                <Modal.Footer className='modal-custom mx-5'>
                    <Button variant="btn btn-outline-secondary" type="submit" form="changedateForm">
                        Cancel
                    </Button>
                    <Button variant="secondary" type="submit" form="changedateForm">
                        Apply
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
