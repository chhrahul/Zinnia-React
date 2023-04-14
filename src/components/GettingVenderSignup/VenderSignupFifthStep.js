import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function VenderSignupSecondStep(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType, step, setStep, SetGettingVenderSignupDetails, clickedApart,
        setClickedApart } = props
    const formik = useFormik({
        initialValues: {
            businessName: gettingVenderSignupDetails.businessName,


        },
        validationSchema: Yup.object(
            {
                facebook: Yup.string().max(255, 'Must not be greater than 255 characters'),
                instagram: Yup.string().max(255, 'Must not be greater than 255 characters'),
                youtube: Yup.string().max(255, 'Must not be greater than 255 characters'),
                tiktok: Yup.string().max(255, 'Must not be greater than 255 characters'),
                twitter: Yup.string().max(255, 'Must not be greater than 255 characters'),
                pinterest: Yup.string().max(255, 'Must not be greater than 255 characters'),

            }),
        onSubmit: values => {
            const newValue = {
                'facebook': values.facebook,
                'instagram': values.instagram,
                'youtube': values.youtube,
                'tiktok': values.tiktok,
                'twitter': values.twitter,
                'pinterest': values.pinterest,
            }
            SetGettingVenderSignupDetails({ ...gettingVenderSignupDetails, ...newValue })
            if (step >= 8) return
            setStep(step + 1)
        },
    });


    return (
        <span className='px-0-'>
            <form onSubmit={formik.handleSubmit} id="form-data">
                <p>
                    <span className="text-danger"> 4 of 4 </span> Social media handles
                </p>
                <h1>
                    Where can customers see more of your work?
                </h1>
                <p>Add where else you post your work. </p>
                <div className="">
                    <div className="mb-2">
                        <label htmlFor="budget" className={formik.touched.facebook && formik.errors.facebook ? 'error-form-label form-label ' : 'form-label'}>Facebook</label>
                        <div class="input-group social-group">
                            {/* <div class="input-group-prepend">
                               
                            </div> */}
                            <span class="input-group-text budget-icon social-icon text-muted" id="basic-addon1"><img src="/images/icons/social/facebook.svg" alt="" /></span>
                            <input type="text" className={formik.touched.facebook && formik.errors.facebook ? 'error-input form-control ' : 'form-control'} id="budget" placeholder='Facebook'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.facebook}
                                name="facebook"
                            />
                        </div>
                        {formik.touched.facebook && formik.errors.facebook ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.facebook}</div>
                        ) : null}
                    </div>
                </div>

                <div className="">
                    <div className="mb-2">
                        <label htmlFor="budget" className={formik.touched.instagram && formik.errors.instagram ? 'error-form-label form-label ' : 'form-label'}>Instagram</label>
                        <div class="input-group social-group">
                            {/* <div class="input-group-prepend">
                               
                            </div> */}
                            <span class="input-group-text budget-icon social-icon text-muted" id="basic-addon1"><img src="/images/icons/social/instagram.svg" alt="" /></span>
                            <input type="text" className={formik.touched.instagram && formik.errors.instagram ? 'error-input form-control ' : 'form-control'} id="budgett" placeholder='Instagram'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.instagram}
                                name="instagram"
                            />
                        </div>
                        {formik.touched.instagram && formik.errors.instagram ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.instagram}</div>
                        ) : null}
                    </div>
                </div>

                <div className="">
                    <div className="mb-2">
                        <label htmlFor="budget" className={formik.touched.youtube && formik.errors.youtube ? 'error-form-label form-label ' : 'form-label'}>Youtube</label>
                        <div class="input-group social-group">
                            {/* <div class="input-group-prepend">
                               
                            </div> */}
                            <span class="input-group-text budget-icon social-icon text-muted" id="basic-addon1"><img src="/images/icons/social/youtube.svg" alt="" /></span>
                            <input type="text" className={formik.touched.youtube && formik.errors.youtube ? 'error-input form-control ' : 'form-control'} id="budgett" placeholder='Youtube'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.youtube}
                                name="youtube"
                            />
                        </div>
                        {formik.touched.youtube && formik.errors.youtube ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.youtube}</div>
                        ) : null}
                    </div>
                </div>
                <div className="">
                    <div className="mb-2">
                        <label htmlFor="budget" className={formik.touched.tiktok && formik.errors.tiktok ? 'error-form-label form-label ' : 'form-label'}>Tiktok</label>
                        <div class="input-group social-group">
                            {/* <div class="input-group-prepend">
                               
                            </div> */}
                            <span class="input-group-text budget-icon social-icon text-muted" id="basic-addon1"><img src="/images/icons/social/tiktok.svg" alt="" /></span>
                            <input type="text" className={formik.touched.tiktok && formik.errors.tiktok ? 'error-input form-control ' : 'form-control'} id="budgett" placeholder='Tiktok'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.tiktok}
                                name="tiktok"
                            />
                        </div>
                        {formik.touched.tiktok && formik.errors.tiktok ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.tiktok}</div>
                        ) : null}
                    </div>
                </div>

                <div className="">
                    <div className="mb-2">
                        <label htmlFor="budget" className={formik.touched.twitter && formik.errors.twitter ? 'error-form-label form-label ' : 'form-label'}>Twitter</label>
                        <div class="input-group social-group">
                            {/* <div class="input-group-prepend">
                               
                            </div> */}
                            <span class="input-group-text budget-icon social-icon text-muted" id="basic-addon1"><img src="/images/icons/social/twitter.svg" alt="" /></span>
                            <input type="text" className={formik.touched.twitter && formik.errors.twitter ? 'error-input form-control ' : 'form-control'} id="budgett" placeholder='Twitter'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.twitter}
                                name="twitter"
                            />
                        </div>
                        {formik.touched.twitter && formik.errors.twitter ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.twitter}</div>
                        ) : null}
                    </div>
                </div>

                <div className="">
                    <div className="mb-2">
                        <label htmlFor="budget" className={formik.touched.pinterest && formik.errors.pinterest ? 'error-form-label form-label ' : 'form-label'}>Pinterest</label>
                        <div class="input-group social-group">
                            {/* <div class="input-group-prepend">
                               
                            </div> */}
                            <span class="input-group-text budget-icon social-icon text-muted" id="basic-addon1"><img src="/images/icons/social/pinterest.svg" alt="" /></span>
                            <input type="text" className={formik.touched.pinterest && formik.errors.pinterest ? 'error-input form-control ' : 'form-control'} id="budgett" placeholder='Pinterest'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.pinterest}
                                name="pinterest"
                            />
                        </div>
                        {formik.touched.pinterest && formik.errors.pinterest ? (
                            <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.pinterest}</div>
                        ) : null}
                    </div>
                </div>
            </form>
        </span>
    )
}

export default VenderSignupSecondStep

