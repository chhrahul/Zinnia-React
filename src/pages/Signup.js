import * as React from 'react'
import { SignupFirstStep, SignupSecondStep, SignupThirdStep, SignupFourthStep } from "../components/GettingMarriedSignup";
import { VenderSignupFirstStep, VenderSignupSecondStep, VenderSignupThirdStep, VenderSignupFourthStep } from "../components/GettingVenderSignup";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Signup() {

    const formik = useFormik({
        initialValues: {
        },

        onSubmit: values => {

            if (selectedSignupType === 'gettingMarried') {
                if (step >= 5) return
                setStep(step + 1)
            } else {
                if (step >= 8) return
                setStep(step + 1)
            }
        },
    });

    const [step, setStep] = React.useState(1)
    const [clickedApart, setClickedApart] = React.useState('hidden')
    const [selectedSignupType, SetSelectedSignupType] = React.useState("")
    const [gettingMarriedSignupDetails, SetGettingMarriedSignupDetails] = React.useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": "",
        "confirmPassword": "",
        "check": "",
        "date": "",
        "askDate": false,
        "stime": "",
        "etime": "",
        "location": "",
        "budget": "",
        "term_and_conditions": '',
        "photographer": '',
        "florist": '',
        "venue": '',
    })

    const [gettingVenderSignupDetails, SetGettingVenderSignupDetails] = React.useState({
        "venderType": "florist",
        "email": "",
        "password": "",
        "confirmPassword": "",
        "check": "",
        "businessName": "",
        "website": "",
        "phone": "",
        "ein": "",
        "streetAddress": "",
        "city": "",
        "state": "",
        "zipCode": "",
        "distance": "5",
        "about": "",
        "offering": "",
        "price": "",
        "flowersUsed": "",
        "photo_offering": "",
        "amount_of_hours": "",
        "package_type": "ceremony-only",
        "day_week": "friday",
        "bridalBouquets": "",
        "flowerGirlPetals": "",
        "bridesmaidBouquet": "",
        "bouttonieres": "",
        "flowerCrown": "",
        "corsages": "",
        "term_and_conditions": '',
        "apartment": '',

    })

    const handleSelectSignupType = (e) => {
        const { value } = e.target
        SetSelectedSignupType(value)
        setStep(2)
    }

    const handleInputGettingMarried = (keyName) => (e) => {
        const { value } = e.target
        SetGettingMarriedSignupDetails({ ...gettingMarriedSignupDetails, [keyName]: value })
    }

    const handleInputGettingVender = (keyName) => (e) => {
        const { value } = e.target
        SetGettingVenderSignupDetails({ ...gettingVenderSignupDetails, [keyName]: value })
    }

    const handleClickNext = (e) => {

    }
    const handleClickBack = () => {
        if (step <= 1) return
        setStep(step - 1)
    }

    const handleClickSubmit = () => {
        setStep(step + 1)
    }

    const gettingMarriedProps = {
        handleInputGettingMarried,
        gettingMarriedSignupDetails,
        SetGettingMarriedSignupDetails,
        selectedSignupType,
        handleSelectSignupType,
        step,
        setStep
    }

    // for vender sighn-up
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

    }

    return (
        <div className="container-fluid-" >
            <div className="container-fluid" style={{ 'paddingRight': 0, 'paddingLeft': 0 }}>
                <div className='row'>
                    <div className="col-md-6 order-md-0 order-1 position-relative- p-0-">
                        <div className="container- position-absolute- h-100-">
                            <div className='row px-md-5 mt-5'>
                                {step === 1 &&
                                    <span>
                                        <form onSubmit={formik.handleSubmit} id="form-data">
                                            <h1>
                                                Create an account
                                            </h1>
                                            <p>
                                                Fill out a little information and start your wedding <br />planning today.
                                            </p>
                                            <label htmlFor="select-opt" className="form-label select-account">I'm...</label>
                                            <select className="form-select mb-4- m-b-custom" aria-label="Default select example" id="select-opt" onChange={handleSelectSignupType} >
                                                <option value="" selected disabled > Select  </option>
                                                <option
                                                    value="gettingMarried"
                                                    selected={selectedSignupType === 'gettingMarried' ? true : false}

                                                >Getting married
                                                </option>
                                                <option
                                                    value="vendor"
                                                    selected={selectedSignupType === 'vendor' ? true : false}
                                                >A vendor
                                                </option>
                                            </select>
                                        </form>

                                    </span>
                                }
                                {selectedSignupType === 'gettingMarried' ?
                                    <>

                                        {step === 2 && <SignupFirstStep {...gettingMarriedProps} />}
                                        {step === 3 && <SignupSecondStep {...gettingMarriedProps} />}
                                        {step === 4 && <SignupThirdStep  {...gettingMarriedProps} />}
                                        {step === 5 && <SignupFourthStep />}
                                    </>
                                    :
                                    <>
                                        {step === 2 && <VenderSignupFirstStep {...gettingVenderProps} />}
                                        {step === 3 && <VenderSignupSecondStep {...gettingVenderProps} />}
                                        {step === 4 && <VenderSignupThirdStep  {...gettingVenderProps} />}
                                        {step === 5 && <VenderSignupFourthStep {...gettingVenderProps} />}
                                        {step === 6 && 'test'}
                                    </>
                                }
                            </div>
                        </div>
                        {step <= 2 &&
                            <>
                                {selectedSignupType === 'gettingMarried' ?
                                    step !== 5 &&
                                    <div className="row next-btn-bg position-absolute- w-100 btn-grp" style={{ left: 0, bottom: 0 }}>
                                        <div className="col-md-12 d-flex justify-content-end">
                                            {step !== 1 && <BackButton handleClickBack={handleClickBack} />}
                                            {step === 4 ?
                                                <SubmitButton handleClickSubmit={handleClickSubmit} />
                                                :
                                                <NextButton handleClickNext={handleClickNext} selectedSignupType={selectedSignupType} />
                                            }
                                        </div>
                                    </div>
                                    :
                                    step !== 7 &&
                                    <div className="row next-btn-bg position-absolute- w-100 btn-grp" style={{ left: 0, bottom: 0 }}>
                                        <div className="col-md-12 d-flex justify-content-end">
                                            {step !== 1 && <BackButton handleClickBack={handleClickBack} />}
                                            {step === 6 ?
                                                <SubmitButton handleClickSubmit={handleClickSubmit} />
                                                :
                                                <NextButton handleClickNext={handleClickNext} selectedSignupType={selectedSignupType} />
                                            }
                                        </div>
                                    </div>
                                }
                            </>
                        }

                    </div>
                    {step <= 2 &&
                        <div className="col-md-6 order-md-1 order-0 px-0">
                            <img src='/images/beach-pc.jpg' className='w-100 h-100' alt="" />
                        </div>
                    }
                </div>
                {step > 2 &&
                    <>
                        {selectedSignupType === 'gettingMarried' ?
                            step !== 5 &&
                            <div className="row next-btn-bg position-absolute- w-100" style={{ left: 0, bottom: 0 }}>
                                <div className="col-md-12 d-flex justify-content-end">
                                    {step !== 1 && <BackButton handleClickBack={handleClickBack} />}
                                    {step === 4 ?
                                        <SubmitButton handleClickSubmit={handleClickSubmit} />
                                        :
                                        <NextButton handleClickNext={handleClickNext} selectedSignupType={selectedSignupType} />
                                    }
                                </div>
                            </div>
                            :
                            step !== 7 &&
                            <div className="row next-btn-bg position-absolute- w-100" style={{ left: 0, bottom: 0 }}>
                                <div className="col-md-12 d-flex justify-content-end">
                                    {step !== 1 && <BackButton handleClickBack={handleClickBack} />}
                                    {step === 6 ?
                                        <SubmitButton handleClickSubmit={handleClickSubmit} />
                                        :
                                        <NextButton handleClickNext={handleClickNext} selectedSignupType={selectedSignupType} />
                                    }
                                </div>
                            </div>
                        }
                    </>
                }
            </div>

        </div >
    )
}

export default Signup

function NextButton(props) {
    const { handleClickNext, selectedSignupType } = props
    return (
        <button type="submit" className="btn btn-secondary navigate-btn" disabled={selectedSignupType !== '' ? false : true} id="next-btn" form="form-data">
            Next
        </button>
    )
}

function SubmitButton({ handleClickSubmit }) {
    return (
        <button type="submit" className="btn btn-secondary navigate-btn" disabled- id="next-btn" onClick={handleClickSubmit}>
            Create my account
        </button>
    )
}

function BackButton({ handleClickBack }) {
    return (
        <button type="button" className="btn btn-light navigate-btn" disabled- id="next-btn" onClick={handleClickBack}>
            Back
        </button>
    )
}