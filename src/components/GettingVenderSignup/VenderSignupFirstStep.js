import * as React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { MdTimelapse } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';


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
                    password ? field.required('This field is required').oneOf([Yup.ref('password')], 'Password not matched') : field
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
                        Passwords must have at least 6 characters and include:
                    </div>
                    <div id="password" className="form-text" >
                        <ul>
                            <li>A mix of upper and lowercase letters</li>
                            <li>A symbol ($%#)</li>
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
                <div className="mb-3">
                    <div className="form-check ustom-col-2 ">
                        <input type="checkbox" className={formik.touched.check && formik.errors.check ? 'error-input form-check-input ' : 'form-check-input'} id="exampleCheck1"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.check}
                            name="check"
                            checked={formik.values.check ? true : false}
                        />
                        <p className="form-check-label" htmlFor="exampleCheck1">I agree to the <TermAndConditionModal /></p>

                    </div>
                    {formik.touched.check && formik.errors.check ? (
                        <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.check}</div>
                    ) : null}
                </div>
            </form>
        </span>

    )
}
export default VenderSignupFirstStep

const TermAndConditionModal = () => {


    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <a href="javascript:void(0)" onClick={handleShow}>terms and conditions</a>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
            >

                <Modal.Title id="contained-modal-title-vcenter" className='text-center p-3'>
                    Terms and conditions <span onClick={handleClose} className='float-right mx-2'><RxCross1 /></span>
                </Modal.Title>

                <Modal.Body>
                    <p >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut enim ultricies, sagittis lacus in, dictum dolor. In egestas neque sed mi tempus feugiat. Ut vestibulum orci ut ante bibendum, eu elementum elit interdum. Pellentesque ultricies, ante vitae vulputate accumsan, diam risus accumsan magna, eget ullamcorper tortor nunc vitae metus. Duis ut porttitor nisi. Vivamus scelerisque arcu eget eros feugiat, vel facilisis mi faucibus. Ut porta gravida turpis eu pharetra. Vivamus quis sagittis neque, at ultricies tortor. Sed sed purus vitae velit dignissim posuere. Vestibulum ullamcorper neque volutpat, pellentesque tellus vitae, venenatis metus. Integer erat nibh, dignissim nec ultricies ac, sollicitudin vitae metus.
                    </p>
                    <p>
                        Praesent at consectetur urna. Nam et lobortis justo. Curabitur fermentum mi nec cursus maximus. Sed tempor sit amet urna et pharetra. Praesent tempor elit sed commodo maximus. Phasellus ac diam nec arcu tempus sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ligula libero, interdum non augue vel, consequat ultricies magna. Pellentesque non purus malesuada, semper arcu non, sodales dui. Fusce vitae sem eu magna fermentum aliquam nec ut orci. Curabitur vestibulum tempus arcu, viverra blandit lacus sodales quis. Nunc non faucibus orci. Praesent in efficitur nisl. Vestibulum elementum accumsan tellus eget vulputate. Donec lobortis, lectus non molestie condimentum, lorem eros tempus nulla, et maximus nibh quam non leo.
                    </p>
                    <p>
                        Quisque nibh magna, pretium id odio gravida, pellentesque porta ante. Sed suscipit consectetur euismod. Integer consectetur urna a eros facilisis, non porttitor turpis faucibus. In blandit, dui eu accumsan pharetra, augue metus posuere elit, id pellentesque nisi lorem quis quam. Nam ut lorem ut erat mattis sagittis sed lobortis ex. Cras ipsum dolor, pulvinar ut justo eget, accumsan sodales leo. Fusce eu magna nunc. Etiam viverra orci in erat finibus mollis. Sed ut ante facilisis, facilisis est non, fringilla est. Sed sed lorem eleifend, pellentesque nisl eu, venenatis sapien. Donec tincidunt ex convallis orci tincidunt, tempus imperdiet ligula interdum. Curabitur vel felis nec neque varius suscipit. Suspendisse potenti. Curabitur lobortis et arcu eget eleifend. Aliquam sed metus a nunc porttitor tempor.
                    </p>
                </Modal.Body>
                <Button onClick={handleClose} variant="outline-secondary" className='m-3 text-center mx-auto'>Close</Button>
            </Modal>
        </>
    )
}