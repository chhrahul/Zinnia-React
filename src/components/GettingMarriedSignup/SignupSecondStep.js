import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function SignupSecondStep(props) {
    const { handleInputGettingMarried, gettingMarriedSignupDetails, selectedSignupType, handleSelectSignupType, step, setStep, SetGettingMarriedSignupDetails } = props
    const formik = useFormik({
        initialValues: {
            stime: gettingMarriedSignupDetails.stime,
            etime: gettingMarriedSignupDetails.etime,
            date: gettingMarriedSignupDetails.date,
            location: gettingMarriedSignupDetails.location,
            budget: gettingMarriedSignupDetails.budget,

        },
        validationSchema: Yup.object(
            {

                // date: Yup.string().required('This field is required'),
                stime: Yup.string().required('This field is required'),
                etime: Yup.string().required('This field is required'),
                location: Yup.string().required('This field is required'),
                budget: Yup.string().required('This field is required'),
            }),
        onSubmit: values => {

            const newValue = {
                'date': values.date,
                'stime': values.stime,
                'etime': values.etime,
                'location': values.location,
                'budget': values.budget,

            }
            SetGettingMarriedSignupDetails({ ...gettingMarriedSignupDetails, ...newValue })

            // if (selectedSignupType === 'gettingMarried') {
            //     if (step >= 5) return
            //     setStep(step + 1)
            // } else {
            //     if (step >= 8) return
            //     setStep(step + 1)
            // }

            if (step >= 5) return
            setStep(step + 1)

        },

    });
    return (
        <span className='px-0- '>
            <form onSubmit={formik.handleSubmit} id="form-data">
                <p>
                    <span className="text-danger"> 1 of 2 </span> Tell us about your big day!
                </p>
                <h1>
                    Your Wedding info
                </h1>
                <div className="">
                    <div className="mt-3 mb-3">
                        <label htmlFor="lname" className={formik.touched.date && formik.errors.date ? 'error-form-label form-label ' : 'form-label'}>Wedding date</label>
                        <input type="date" className={formik.touched.date && formik.errors.date ? 'error-input form-control ' : 'form-control'} id="lname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.date}
                            name="date"
                            min={new Date().toISOString().split('T')[0]}
                            disabled={formik.values.askDate ? true : false}
                        />
                        {formik.touched.date && formik.errors.date ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.date}</div>
                        ) : null}
                        <div className="form-check mt-1">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.askDate}
                                name="askDate"
                                checked={formik.values.askDate ? true : false}
                            />
                            <p className="form-check-label" htmlFor="exampleCheck1">I don’t have a date yet</p>
                        </div>
                    </div>

                </div>
                <div className="row second-step">
                    <div className="col-md-6 col-sm-6 mb-3 pl-0 pr-0">
                        <label htmlFor="stime" className={formik.touched.stime && formik.errors.stime ? 'error-form-label form-label ' : 'form-label'}>Start time</label>
                        <input type="time" className={formik.touched.stime && formik.errors.stime ? 'error-input form-control ' : 'form-control'} id="stime"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.stime}
                            name="stime"
                        />
                        {formik.touched.stime && formik.errors.stime ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.stime}</div>
                        ) : null}
                    </div>
                    <div className="col-md-6 col-sm-6 mb-3 pl-0 pr-0">
                        <label htmlFor="etime" className={formik.touched.etime && formik.errors.etime ? 'error-form-label form-label ' : 'form-label'}>End time</label>
                        <input type="time" className={formik.touched.etime && formik.errors.etime ? 'error-input form-control ' : 'form-control'} id="etime"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.etime}
                            name="etime"
                        />
                        {formik.touched.stime && formik.errors.stime ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.stime}</div>
                        ) : null}
                    </div>
                </div>
                <div className="">
                    <div className="mb-3">
                        <label htmlFor="location" className={formik.touched.location && formik.errors.location ? 'error-form-label form-label ' : 'form-label'}>Wedding Location</label>
                        <input type="text" className={formik.touched.location && formik.errors.location ? 'error-input form-control ' : 'form-control'} id="location" placeholder='Chicago, IL'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.location}
                            name="location"
                        />
                        {formik.touched.location && formik.errors.location ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.location}</div>
                        ) : null}
                    </div>
                </div>
                <div className="">
                    <div className="mb-5">
                        <label htmlFor="budget" className={formik.touched.budget && formik.errors.budget ? 'error-form-label form-label ' : 'form-label'}>Budget</label>
                        <div class="input-group">
                            {/* <div class="input-group-prepend">
                               
                            </div> */}
                            <span class="input-group-text budget-icon text-muted" id="basic-addon1">$</span>
                            <input type="number" className={formik.touched.budget && formik.errors.budget ? 'error-input form-control ' : 'form-control'} id="budget" placeholder=''
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.budget}
                                name="budget"
                            />
                        </div>
                        {formik.touched.budget && formik.errors.budget ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.budget}</div>
                        ) : null}


                    </div>


                </div>
            </form>
        </span >
    )
}

export default SignupSecondStep