
import React, { useState } from 'react';

import { VenderSignupFourthStep, VenderSignupSecondStep, VenderSignupThirdStep } from '../../components/GettingVenderSignup';
function EditOffer(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType, step, setStep, SetGettingVenderSignupDetails } = props
    const [files, setFiles] = React.useState([]);
    const [clickedApart, setClickedApart] = React.useState('hidden')

    const handleClickCancel = () => {
        setStep(0)
    }

    const gettingVenderProps = {
        handleInputGettingVender,
        gettingVenderSignupDetails,
        SetGettingVenderSignupDetails,
        selectedSignupType,
        handleSelectSignupType,
        step,
        setStep,
        clickedApart,
        setClickedApart,
        files,
        setFiles
    }

    return (
        <>
            <div className="container-fluid- " >
                <div className="container-fluid" style={{ 'paddingRight': 0, 'paddingLeft': 0 }}>
                    <div className='row '>
                        <div className='col-md-12 order-md-0 order-1 position-relative- p-0-' >
                            <div className=" position-absolute- h-100-">
                                <div className='row px-md-5 mt-3'>
                                    <h1>
                                        Your offerings
                                    </h1>
                                    <p>
                                        These are your current offerings.
                                    </p>
                                    <div className='col-md-6'>

                                        <VenderSignupThirdStep {...gettingVenderProps} type={'edit'} />

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row next-btn-bg position-absolute- w-100 btn-grp" style={{ left: 0, bottom: 0 }}>
                <div className="col-md-12 d-flex justify-content-end">
                    <button type="button" className="btn btn-light navigate-btn" disabled- id="next-btn" onClick={handleClickCancel}>
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-secondary navigate-btn" id="next-btn" form="form-data">
                        Save
                    </button>
                </div >
            </div >
        </>
    )
}
export default EditOffer




