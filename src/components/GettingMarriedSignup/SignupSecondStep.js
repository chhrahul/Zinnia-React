import React from 'react'

function SignupSecondStep(props) {
    const { handleInputGettingMarried, gettingMarriedSignupDetails, selectedSignupType, handleSelectSignupType } = props
    return (
        <span className='px-0 '>
            <p>
                <span className="text-danger"> 1 of 2 </span> Tell us about your big day!
            </p>
            <h1>
                Your Wedding info
            </h1>
            <div className="row ">
                <div className="mt-3 mb-3">
                    <label htmlFor="lname" className="form-label">Wedding date</label>
                    <input type="date" className="form-control" id="lname"
                        value={gettingMarriedSignupDetails.date}
                        onChange={handleInputGettingMarried('date')}
                    />
                    <div className="form-check mt-1">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"
                            value={gettingMarriedSignupDetails.check}

                            onClick={handleInputGettingMarried('check')}
                        />
                        <p className="form-check-label" htmlFor="exampleCheck1">I don’t have a date yet</p>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-6 col-sm-6 mb-3">
                    <label htmlFor="stime" className="form-label">Start time</label>
                    <input type="time" className="form-control" id="stime"
                        value={gettingMarriedSignupDetails.stime}
                        onChange={handleInputGettingMarried('stime')}
                    />
                </div>
                <div className="col-md-6 col-sm-6 mb-3">
                    <label htmlFor="etime" className="form-label">End time</label>
                    <input type="time" className="form-control" id="etime"
                        value={gettingMarriedSignupDetails.etime}
                        onChange={handleInputGettingMarried('etime')}
                    />
                </div>
            </div>
            <div className="row ">
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Wedding Location</label>
                    <input type="text" className="form-control" id="location" placeholder='Chicago, IL'
                        value={gettingMarriedSignupDetails.location}
                        onChange={handleInputGettingMarried('location')}
                    />
                </div>
            </div>
            <div className="row ">
                <div className="mb-5">
                    <label htmlFor="budget" className="form-label">Budget</label>
                    <input type="number" className="form-control" id="budget" placeholder='$'
                        value={gettingMarriedSignupDetails.budget}
                        onChange={handleInputGettingMarried('budget')}
                    />
                </div>
            </div>
        </span>
    )
}

export default SignupSecondStep