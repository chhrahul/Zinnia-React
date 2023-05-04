import React from 'react'
import { Button } from "react-bootstrap"
import { BsChatLeftText, BsFillInfoCircleFill, BsInfoCircle } from "react-icons/bs"
import { CalendarGrid } from "../../../components/CalendarGrid"
import { RxAvatar } from "react-icons/rx"
import { MdDeleteOutline } from "react-icons/md"
import { CancelModal } from "../../../components"


function SetAvailability() {
    const [tabType, setTabType] = React.useState('Upcoming');
    const handleClickActiveTab = (data) => {
        setTabType(data)
    }

    const getTabType = {
        tabType,
        setTabType
    }
    return (
        <>
            <div className="container-fluid px-md-5  mt-3 mh-100 booking-tab" style={{ 'paddingRight': 0, 'paddingLeft': 0 }} id="1">
                <div className="row ">
                    <div className="col-md-12">
                        <div className='row  mt-3 bordered-box border border-3'>
                            <ul class="nav nav-tabs border-0" id="myTab" role="tablist">
                                <li className={tabType === 'Upcoming' ? 'nav-item active' : 'nav-item'} class="nav-item active" role="presentation" onClick={() => handleClickActiveTab('Upcoming')}>
                                    <button class="border-0 nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Upcoming</button>
                                </li>
                                <li className={tabType === 'Pending' ? 'nav-item active' : 'nav-item'} role="presentation" onClick={() => handleClickActiveTab('Pending')}>
                                    <button class=" border-0 nav-link " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Pending</button>
                                </li>
                                <li className={tabType === 'Past' ? 'nav-item active' : 'nav-item'} role="presentation" onClick={() => handleClickActiveTab('Past')}>
                                    <button class=" border-0 nav-link " id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Past</button>
                                </li>
                                <li className={tabType === 'Date-range' ? 'nav-item active' : 'nav-item'} role="presentation" onClick={() => handleClickActiveTab('Date-range')}>
                                    <button class=" border-0 nav-link " id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Date range</button>
                                </li>
                            </ul>
                            <ResultTab {...getTabType} />
                        </div>
                    </div>
                </div>
            </div >

        </>

    )
}
export default SetAvailability

const ResultTab = (props) => {
    const { tabType, setTabType } = props

    return (
        <>
            <div class="tab-content mt-3">
                <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <p className="text-black">Friday, May 7, 2023</p>
                    <div className="row">
                        <div className="col-md-3 p-0">
                            <div className="row mb-2">
                                <div className="col-2 p-0"><RxAvatar size="30" /></div>
                                <div className="col-10">
                                    <p className="mb-md-5">10:00 am - 1:00pm</p>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-md-10">
                                    {tabType === 'Pending' &&

                                        <>
                                            <div>
                                                <button type="button" className="btn btn-secondary mb-3">
                                                    Confirm
                                                </button>

                                            </div>
                                            <div>
                                                <button type="button" className="btn btn-outline-secondary mb-3">
                                                    <BsChatLeftText />  Send a message
                                                </button>

                                            </div>
                                            <div>

                                                <CancelModal title="Cancel" type="booking" />
                                            </div>
                                        </>
                                    }

                                    {tabType === 'Upcoming' &&
                                        <>
                                            <div>
                                                <button type="button" className="btn btn-outline-secondary mb-3">
                                                    <BsChatLeftText />  Send a message
                                                </button>

                                            </div>
                                            <div>

                                                <CancelModal title="Cancel" type="booking" />
                                            </div>
                                        </>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <p className="m-0 booking-heading">
                                Calli Carter Wedding
                            </p>
                            <p className="mt-2 ">
                                <span className="booking-heading">Event type: </span>Ceremony + Reception
                            </p>
                            <hr className="hr-devider" />
                            <p className="m-0 booking-heading">
                                Email
                            </p>
                            <p className="m-0 ">
                                ccarter@gmail.com
                            </p>

                            <p className="m-0 mt-2 booking-heading">
                                Location
                            </p>
                            <p className="m-0 ">
                                Venue name
                                1234 fake street
                                Fake Town, IL
                            </p>
                        </div>
                        <p className="text-center mt-5">You’ve reached the end of the list</p>
                    </div>
                </div>
            </div>

        </>
    )
}


