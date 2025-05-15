import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function VenderSignupSecondStep(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType, step, setStep, SetGettingVenderSignupDetails, clickedApart,
        setClickedApart, type } = props
    const formik = useFormik({
        initialValues: {
            businessName: gettingVenderSignupDetails.businessName,
            website: gettingVenderSignupDetails.website,
            phone: gettingVenderSignupDetails.phone,
            ein: gettingVenderSignupDetails.ein,
            streetAddress: gettingVenderSignupDetails.streetAddress,
            city: gettingVenderSignupDetails.city,
            state: gettingVenderSignupDetails.state,
            zipCode: gettingVenderSignupDetails.zipCode,
            distance: gettingVenderSignupDetails.distance,
            about: gettingVenderSignupDetails.about,
            offering: gettingVenderSignupDetails.offering,
            price: gettingVenderSignupDetails.price,
            flowersUsed: gettingVenderSignupDetails.flowersUsed,
            photo_offering: gettingVenderSignupDetails.photo_offering,
            amount_of_hours: gettingVenderSignupDetails.amount_of_hours,
            package_type: gettingVenderSignupDetails.package_type,
            day_week: gettingVenderSignupDetails.day_week,
            apartment: gettingVenderSignupDetails.apartment,

        },
        validationSchema: Yup.object(
            {


                businessName: Yup.string().required('This field is required'),
                website: Yup.string().required('This field is required').matches(
                    /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
                    "Url is not valid"
                ),
                phone: Yup.string().required('This field is required').matches(
                    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                    "Phone number is not valid"
                ).min(10, "Must be 10 characters")
                    .max(10, "Must be 10 characters"),
                ein: Yup.number().required('This field is required'),
                streetAddress: Yup.string().required('This field is required'),
                city: Yup.string().required('This field is required'),
                state: Yup.string().required('This field is required'),
                zipCode: Yup.string().required('This field is required'),
                distance: Yup.string().required('This field is required'),
                about: Yup.string().required('This field is required'),
                // offering: Yup.string().required('This field is required'),
                // price: Yup.string().required('This field is required'),
                // flowersUsed: Yup.string().required('This field is required'),
                // photo_offering: Yup.string().required('This field is required'),
                package_type: Yup.string().required('This field is required'),
                day_week: Yup.string().required('This field is required'),
                apartment: Yup.string(),


            }),
        onSubmit: values => {
            const newValue = {
                'businessName': values.businessName,
                'website': values.website,
                'phone': values.phone,
                'ein': values.ein,
                'streetAddress': values.streetAddress,
                'city': values.city,
                'state': values.state,
                'zipCode': values.zipCode,
                'distance': values.distance,
                'about': values.about,
                'offering': values.offering,
                'price': values.price,
                'flowersUsed': values.flowersUsed,
                'photo_offering': values.photo_offering,
                'amount_of_hours': values.amount_of_hours,
                'package_type': values.package_type,
                'day_week': values.day_week,
                'apartment': values.apartment,

            }
            SetGettingVenderSignupDetails({ ...gettingVenderSignupDetails, ...newValue })
            console.log(gettingVenderSignupDetails)
            if (step >= 8) return
            setStep(step + 1)

        },

    });
    const handleClickApartment = () => {
        setClickedApart('active-apartment')
    }

    return (
        <span className='px-0-'>
            <form onSubmit={formik.handleSubmit} id="form-data">
                {type !== 'edit' && <>
                    <p>
                        <span className="text-danger"> 1 of 4 </span> Tell us about your business
                    </p>
                    <h1>
                        We want to know more about you!
                    </h1>
                    <p>Add your information to get started. </p>
                </>}
                <div className="row second-step">
                    <div className="mb-3">
                        <label htmlFor="bussiness" className={formik.touched.businessName && formik.errors.businessName ? 'error-form-label form-label' : 'form-label'}>Your business name<span className="text-danger">*</span></label>
                        <input type="text" className={formik.touched.businessName && formik.errors.businessName ? 'error-input form-control ' : 'form-control'} id="bussiness" placeholder='Flowers & Friends'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.businessName}
                            name="businessName"
                        />

                        {formik.touched.businessName && formik.errors.businessName ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.businessName}</div>
                        ) : null}
                    </div>
                </div>
                <div className="">
                    <div className="mb-3">
                        <label htmlFor="url" className={formik.touched.website && formik.errors.website ? 'error-form-label form-label' : 'form-label'}>Website<span className="text-danger">*</span></label>
                        <input type="text" className={formik.touched.website && formik.errors.website ? 'error-input form-control ' : 'form-control'} id="url" placeholder='www.example.com'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.website}
                            name="website"
                        />
                        {formik.touched.website && formik.errors.website ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.website}</div>
                        ) : null}
                    </div>
                </div>
                <div className="">
                    <div className="mb-3">
                        <label htmlFor="phone" className={formik.touched.phone && formik.errors.phone ? 'error-form-label form-label' : 'form-label'}>Phone Number<span className="text-danger">*</span></label>
                        <input type="text" className={formik.touched.phone && formik.errors.phone ? 'error-input form-control ' : 'form-control'} id="phone" placeholder=''
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            name="phone"
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.phone}</div>
                        ) : null}
                    </div>
                </div>

                <div className="">
                    <div className="mb-3">
                        <label htmlFor="ein" className={formik.touched.ein && formik.errors.ein ? 'error-form-label form-label' : 'form-label'}>EIN/ SSN <span className="text-danger">*</span>  <DisabledExample /></label>
                        <input type="number" className={formik.touched.ein && formik.errors.ein ? 'error-input form-control ' : 'form-control'} id="ein" placeholder=''
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.ein}
                            name="ein"
                        />
                        {formik.touched.ein && formik.errors.ein ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.ein}</div>
                        ) : null}
                    </div>
                </div>


                <div className="">
                    <hr className="mt-3 text-cyan hr-devider" />
                </div>
                <div className=" ">
                    <p className="custom-muted">
                        Address
                    </p>
                </div>

                <div className="">
                    <div className="mb-3">
                        <label htmlFor="street" className={formik.touched.streetAddress && formik.errors.streetAddress ? 'error-form-label form-label' : 'form-label'}>Street Address<span className="text-danger">*</span> </label>
                        <input type="text" className={formik.touched.streetAddress && formik.errors.streetAddress ? 'error-input form-control ' : 'form-control'} id="street" placeholder=''
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.streetAddress}
                            name="streetAddress"
                        />
                        {formik.touched.streetAddress && formik.errors.streetAddress ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.streetAddress}</div>
                        ) : null}
                    </div>
                </div>

                <div className="">
                    {clickedApart === 'hidden' ?
                        <div className="mt-3">
                            <p className="aprtment-p" onClick={handleClickApartment}>+ Add Apartment#, Floor, etc</p>
                        </div>
                        : null
                    }
                </div>
                <Apartment formik={formik} clickedApart={clickedApart} />
                <div className="">
                    <div className="mb-3">
                        <label htmlFor="city" className={formik.touched.city && formik.errors.city ? 'error-form-label form-label' : 'form-label'}>City<span className="text-danger">*</span> </label>
                        <input type="text" className={formik.touched.city && formik.errors.city ? 'error-input form-control ' : 'form-control'} id="city" placeholder=''
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.city}
                            name="city"
                        />
                        {formik.touched.city && formik.errors.city ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.city}</div>
                        ) : null}
                    </div>
                </div>

                <div className="">
                    <div className="mb-3">
                        <label htmlFor="state" className={formik.touched.state && formik.errors.state ? 'error-form-label form-label' : 'form-label'}>State<span className="text-danger">*</span> </label>
                        <input type="text" className={formik.touched.state && formik.errors.state ? 'error-input form-control ' : 'form-control'} id="state" placeholder=''
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.state}
                            name="state"
                        />
                        {formik.touched.state && formik.errors.state ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.state}</div>
                        ) : null}
                    </div>
                </div>

                <div className="">
                    <div className="mb-3">
                        <label htmlFor="zip" className={formik.touched.zipCode && formik.errors.zipCode ? 'error-form-label form-label' : 'form-label'}>Zipcode<span className="text-danger">*</span> </label>
                        <input type="text" className={formik.touched.zipCode && formik.errors.zipCode ? 'error-input form-control ' : 'form-control'} id="zip" placeholder=''
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.zipCode}
                            name="zipCode"
                        />
                        {formik.touched.zipCode && formik.errors.zipCode ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.zipCode}</div>
                        ) : null}
                    </div>
                </div>

                <div className="">
                    <div className="mb-3">
                        <label htmlFor="select-opt-type" className={formik.touched.distance && formik.errors.distance ? 'error-form-label form-label select-account' : 'form-label select-account'} >How far are you willing to travel from your business address?</label>
                        <select className={formik.touched.distance && formik.errors.distance ? 'error-input form-select mb-4 ' : 'form-select mb-4'} aria-label="Default select example" id="select-opt-type" onfocus='this.size=10;' onblur='this.size=0;'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="distance"
                        >
                            <option
                                value="5"
                                selected={formik.values.distance === '5' ? true : false}
                            >5 miles</option>
                            <option
                                value='10'
                                selected={formik.values.distance === '10' ? true : false}
                            >10 miles</option>
                            <option
                                value='20'
                                selected={formik.values.distance === '20' ? true : false}
                            >20 miles</option>
                            <option
                                value='30'
                                selected={formik.values.distance === '30' ? true : false}
                            >30 miles</option>
                            <option
                                value='40'
                                selected={formik.values.distance === '40' ? true : false}>
                                40 miles</option>
                            <option
                                value='50'
                                selected={formik.values.distance === '50' ? true : false}
                            >50 miles</option>
                            <option
                                value='60'
                                selected={formik.values.distance === '60' ? true : false}
                            >60 miles</option>
                            <option
                                value='anywhere'
                                selected={formik.values.distance === 'anywhere' ? true : false}
                            >Anywhere</option>

                        </select>
                        {formik.touched.distance && formik.errors.distance ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.distance}</div>
                        ) : null}
                    </div>
                </div>
                <div className="">
                    <hr className=" text-cyan hr-devider" />
                </div>
                <div className="">
                    <p className="custom-muted">
                        Tell us about your business
                    </p>
                </div>

                <div className="mb-3">
                    <div className="">
                        <label htmlFor="zip" className={formik.touched.about && formik.errors.about ? 'error-form-label form-label' : 'form-label'} >Information about your business<span className="text-danger">*</span> </label>
                        <textarea className={formik.touched.about && formik.errors.about ? 'error-input form-control ' : 'form-control'} id="exampleFormControlTextarea1" rows="5"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.about}
                            name="about"> </textarea>
                    </div>
                    {formik.touched.zipCode && formik.errors.about ? (
                        <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.about}</div>
                    ) : null}
                </div>
            </form>
        </span>
    )
}

export default VenderSignupSecondStep

function DisabledExample() {
    return (
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">We need either your EIN or SSN for tax reasons. </Tooltip>} >
            <span className="d-inline-block">
                <span disabled style={{ pointerEvents: 'none' }} className="i-icon">
                    i
                </span>
            </span>
        </OverlayTrigger>
    );
}

function Apartment(props) {
    const { formik, clickedApart } = props
    return (
        <div className={`mb-3 ${clickedApart}`}>
            <label htmlFor="city" className={formik.touched.city && formik.errors.apartment ? 'error-form-label form-label' : 'form-label'}>Apartment #, Floor, etc</label>
            <input type="text" className={formik.touched.apartment && formik.errors.apartment ? 'error-input form-control ' : 'form-control'} id="apartment" placeholder=''
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.apartment}
                name="apartment"
            />
            {formik.touched.apartment && formik.errors.apartment ? (
                <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.apartment}</div>
            ) : null}
        </div>
    )
}