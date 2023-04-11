import * as React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function VenderSignupFirstStep(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType, step, setStep, SetGettingVenderSignupDetails } = props
    const formik = useFormik({
        initialValues: {
            venderType: gettingVenderSignupDetails.venderType,
            email: gettingVenderSignupDetails.email,
            password: gettingVenderSignupDetails.password,
            confirmPassword: gettingVenderSignupDetails.confirmPassword,
            check: gettingVenderSignupDetails.check,

        },
        validationSchema: Yup.object(
            {

                venderType: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('This field is required'),
                email: Yup.string().email('Invalid email address').required('This field is required'),
                password: Yup.string()
                    .required('This field is required').matches(

                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
                        "Please enter valid password"
                    ),
                confirmPassword: Yup.string().when('password', (password, field) =>
                    password ? field.required('This field is required').oneOf([Yup.ref('password')], 'Confirm password not matched') : field
                ),
                check: Yup.boolean().default(false).oneOf([true], 'You must accept the terms and conditions'),

            }),
        onSubmit: values => {
            const newValue = {
                'venderType': values.venderType,
                'email': values.email,
                'password': values.password,
                'confirmPassword': values.confirmPassword,
                'check': values.check,
            }
            SetGettingVenderSignupDetails({ ...gettingVenderSignupDetails, ...newValue })
            // if (selectedSignupType === 'gettingMarried') {

            // } else {
            //     if (step >= 8) return
            //     setStep(step + 1)
            // }
            if (step >= 8) return
            setStep(step + 1)

        },

    });
    return (
        <span className='second-form px-0-' id="second-form">
            <form onSubmit={formik.handleSubmit} id="form-data">
                <h1>
                    Create an account
                </h1>
                <p>
                    Fill out a little information and start your wedding <br />planning today.
                </p>
                <label htmlFor="select-opt" className="form-label select-account">I'm...</label>
                <select className="form-select mb-4" aria-label="Default select example" id="select-opt" onChange={handleSelectSignupType} >
                    <option value="" selected- disabled > Select  </option>
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
                <div className="mt-3 mb-3" id="vender-form">
                    <label htmlFor="select-opt-type" className={formik.touched.venderType && formik.errors.firvenderTypestName ? 'error-form-label form-label select-account ' : 'form-label select-account'} >Vendor type</label>
                    <select className={formik.touched.venderType && formik.errors.venderType ? 'error-input form-select mb-4 ' : 'form-select mb-4'} aria-label="Default select example" id="select-opt-type"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="venderType"
                    >
                        <option
                            value="florist"
                            selected={formik.values.venderType === 'florist' ? true : false}
                        >Florist</option>
                        <option
                            value="venue"
                            selected={formik.values.venderType === 'venue' ? true : false}
                        >Venue</option>
                        <option
                            value="photographer"
                            selected={formik.values.venderType === 'photographer' ? true : false}
                        >Photographer</option>
                    </select>
                    {formik.touched.venderType && formik.errors.venderType ? (
                        <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.venderType}</div>

                    ) : null}
                </div>
                <div className="mb-3  ">
                    <label htmlFor="exampleInputEmail1" className={formik.touched.email && formik.errors.email ? 'error-form-label form-label' : 'form-label'}>Email address</label>
                    <input type="email" className={formik.touched.email && formik.errors.email ? 'error-input form-control ' : 'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='jsmith@email.com'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        name="email"
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className="mb-3  ">
                    <label htmlFor="password" className={formik.touched.password && formik.errors.password ? 'error-form-label form-label' : 'form-label'}>Password</label>
                    <input type="password" className={formik.touched.password && formik.errors.password ? 'error-input form-control ' : 'form-control'} id="password" aria-describedby="password" placeholder='Password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        name="password"
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.password}</div>
                    ) : null}

                    {formik.touched.password && formik.values.password.length > 0 && formik.values.password.length <= 3 ? (
                        <>
                            <div className="progress custom-progress mt-2 w-50 mb-2">
                                <div className="progress-bar bg-danger " role="progressbar" style={{ 'width': '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>😓 Uh oh, that’s a weak password.</p>
                        </>
                    ) : null}

                    {formik.touched.password && !formik.errors.password && formik.values.password.length > 3 && formik.values.password.length <= 6 ? (
                        <>
                            <div className="progress custom-progress mt-2 w-50 mb-2">
                                <div className="progress-bar bg-warning " role="progressbar" style={{ 'width': '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>😐 So-so, but you can do better.</p>
                        </>
                    ) : null}
                    {formik.touched.password && !formik.errors.password && formik.values.password.length > 6 ? (
                        <>

                            <div className="progress custom-progress mt-2 w-50 mb-2">
                                <div className="progress-bar bg-success " role="progressbar" style={{ 'width': '100%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>🥳 Woohoo, that’s the ticket!</p>
                        </>
                    ) : null}


                    <div id="password" className="form-text">
                        Passwords must have at least 6
                    </div>
                    <div id="password" className="form-text" >
                        <ul>
                            <li>characters. Uppercase and lowercase</li>
                            <li>letters A symbol ($%#)</li>
                        </ul>
                    </div>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="repassword" className={formik.touched.confirmPassword && formik.errors.confirmPassword ? 'error-form-label form-label' : 'form-label'}>Re-enter your password</label>
                    <input type="password" className={formik.touched.confirmPassword && formik.errors.confirmPassword ? 'error-input form-control ' : 'form-control'} id="repassword" aria-describedby="password" placeholder='Re-enter your password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        name="confirmPassword"
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.confirmPassword}</div>
                    ) : null}
                </div>

                <div className="mb-3 form-check ustom-col-2 ">
                    <input type="checkbox" className={formik.touched.check && formik.errors.check ? 'error-input form-check-input ' : 'form-check-input'} id="exampleCheck1"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.check}
                        name="check"
                        checked={formik.values.check ? true : false}
                    />
                    <p className="form-check-label" htmlFor="exampleCheck1">I agree to the <a href="/">terms and conditions</a></p>

                </div>
                {formik.touched.check && formik.errors.check ? (
                    <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.check}</div>
                ) : null}
            </form>
        </span>

    )
}
export default VenderSignupFirstStep