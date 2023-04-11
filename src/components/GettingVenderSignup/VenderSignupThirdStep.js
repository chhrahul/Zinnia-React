import * as React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function VenderSignupThirdStep(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType, step, setStep, SetGettingVenderSignupDetails } = props

    const gettingVenderProps = {
        handleInputGettingVender,
        gettingVenderSignupDetails,
        SetGettingVenderSignupDetails,
        selectedSignupType,
        handleSelectSignupType,
        step,
        setStep,
        useFormik

    }
    return (

        <span className='px-0-'>
            {gettingVenderSignupDetails.venderType === "florist" && <Florist {...gettingVenderProps} />}
            {gettingVenderSignupDetails.venderType === "venue" && <Venue {...gettingVenderProps} />}
            {gettingVenderSignupDetails.venderType === "photographer" && <Photographer {...gettingVenderProps} />}

        </span>

    )
}


function Florist(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType, step, setStep, SetGettingVenderSignupDetails, useFormik } = props
    const formik = useFormik({
        initialValues: {
            packageType: gettingVenderSignupDetails.venderType,
            dayWeek: gettingVenderSignupDetails.email,
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
            if (step >= 8) return
            setStep(step + 1)
        },

    });
    return (
        <>
            <p>
                <span className="text-danger"> 2 of 4 </span> What are you selling?!
            </p>
            <h1>
                Tell us about your flower shop offerings
            </h1>
            <p>
                Tell us about your superpower! Don’t worry you’ll be able to add photos in the next step
            </p>

            <div className="mb-3">
                <label htmlFor="select-opt-type" className="form-label select-account">How far are you willing to travel from your business address?</label>
                <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type" onfocus='this.size=10;' onblur='this.size=0;'
                    onChange={handleInputGettingVender('offering')}
                >
                    <option
                        value='ceremony-decor'
                        selected={gettingVenderSignupDetails.offering === 'ceremony-decor' ? true : false}
                    >Ceremony decor</option>
                    <option
                        value='bridal-party-flowers'
                        selected={gettingVenderSignupDetails.offering === 'bridal-party-flowers' ? true : false}
                    >Bridal party flowers</option>

                </select>
            </div>
            <div className="row mb-3">
                <p className="offering-box">
                    What’s included?
                </p>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="bridal_bouquets" />
                        <label class="form-check-label custom-label-input" htmlFor="bridal_bouquets">
                            Bridal bouquets
                        </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="petals_basket" />
                        <label class="form-check-label custom-label-input" htmlFor="petals_basket">
                            Flower girl petals / basket
                        </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="bridesmaid_bouquet" />
                        <label class="form-check-label custom-label-input" htmlFor="bridesmaid_bouquet">
                            Bridesmaid bouquet
                        </label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="bouttonieres" />
                        <label class="form-check-label custom-label-input" htmlFor="bouttonieres">
                            Bouttonieres
                        </label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="flower_crown" />
                        <label class="form-check-label custom-label-input" htmlFor="flower_crown">
                            Flower crown
                        </label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input custom-check-input" type="checkbox" value="" id="corsages" />
                        <label class="form-check-label custom-label-input" htmlFor="corsages">
                            Corsages
                        </label>
                    </div>
                </div>
            </div>

            <div className="mb-3  ">
                <label htmlFor="price" className="form-label">Price per piece</label>
                <input type="number" className="form-control" id="price" aria-describedby="emailHelp" placeholder=''
                    value={gettingVenderSignupDetails.price}
                    onChange={handleInputGettingVender('price')}
                />
            </div>

            <div className="mb-3  ">
                <label htmlFor="flowers" className="form-label">Flowers used</label>
                <input type="number" className="form-control" id="flowers" aria-describedby="emailHelp" placeholder=''
                    value={gettingVenderSignupDetails.flowersUsed}
                    onChange={handleInputGettingVender('flowersUsed')}
                />
            </div>
            <div className="row ">
                <div className="mt-3">
                    <p className="aprtment-p">+ Add another offering</p>
                </div>
            </div>
        </>
    )
}

function Venue(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails } = props
    return (
        <>
            <p>
                <span className="text-danger"> 2 of 4 </span> What are you selling?!
            </p>
            <h1>
                Tell us about your venue
            </h1>
            <p>
                Tell us about your superpower! Don’t worry you’ll be able to add photos in the next step
            </p>

            <div className="mb-3">
                <label htmlFor="select-opt-type" className="form-label select-account">Package type</label>
                <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type" onfocus='this.size=10;' onblur='this.size=0;'
                    onChange={handleInputGettingVender('package_type')}
                >
                    <option
                        value='ceremony-decor'
                        selected={gettingVenderSignupDetails.package_type === 'ceremony-only' ? true : false}
                    >Ceremony only</option>
                    <option
                        value='reception-only'
                        selected={gettingVenderSignupDetails.package_type === 'reception-only' ? true : false}
                    >Reception only</option>

                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="select-opt-type" className="form-label select-account">Day of the week</label>
                <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type" onfocus='this.size=10;' onblur='this.size=0;'
                    onChange={handleInputGettingVender('day_week')}
                >
                    <option
                        value='friday'
                        selected={gettingVenderSignupDetails.day_week === 'friday' ? true : false}
                    >Friday</option>
                    <option
                        value='saturday'
                        selected={gettingVenderSignupDetails.day_week === 'saturday' ? true : false}
                    >Saturday</option>
                    <option
                        value='sunday'
                        selected={gettingVenderSignupDetails.day_week === 'sunday' ? true : false}
                    >Sunday</option>


                </select>
            </div>
            <div className="row mb-3">
                <p className="offering-box">
                    What’s included?
                </p>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="groom-room" />
                        <label class="form-check-label custom-label-input" htmlFor="groom-room">
                            Groom Room
                        </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="bridal_suite" />
                        <label class="form-check-label custom-label-input" htmlFor="bridal_suite">
                            Bridal suite
                        </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="chairs" />
                        <label class="form-check-label custom-label-input" htmlFor="chairs">
                            Chairs
                        </label>
                    </div>
                </div>

            </div>

            <div className="mb-3  ">
                <label htmlFor="price" className="form-label">Price per piece</label>
                <input type="number" className="form-control" id="price" aria-describedby="emailHelp" placeholder=''
                    value={gettingVenderSignupDetails.price}
                    onChange={handleInputGettingVender('price')}
                />
            </div>

            <div className="mb-3  ">
                <label htmlFor="flowers" className="form-label">Flowers used</label>
                <input type="number" className="form-control" id="flowers" aria-describedby="emailHelp" placeholder=''
                    value={gettingVenderSignupDetails.flowersUsed}
                    onChange={handleInputGettingVender('flowersUsed')}
                />
            </div>
            <div className="row ">
                <div className="mt-3">
                    <p className="aprtment-p">+ Add another offering</p>
                </div>
            </div>
        </>
    )
}

function Photographer(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails } = props
    return (
        <>
            <p>
                <span className="text-danger"> 2 of 4 </span> What are you selling?!
            </p>
            <h1>
                Tell us about your photography
            </h1>
            <p>
                Tell us about your superpower! Don’t worry you’ll be able to add photos in the next step
            </p>

            <div className="mb-3">
                <label htmlFor="select-opt-type" className="form-label select-account">Photoshoot type <span className='text-danger'>*</span> </label>
                <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type" onfocus='this.size=10;' onblur='this.size=0;'
                    onChange={handleInputGettingVender('photo_offering')}
                >
                    <option
                        value='wedding-day'
                        selected={gettingVenderSignupDetails.photo_offering === 'wedding-day' ? true : false}
                    >Wedding day</option>
                    <option
                        value='engagement'
                        selected={gettingVenderSignupDetails.photo_offering === 'engagement' ? true : false}
                    >Engagement</option>
                    <option
                        value='rehearsal-dinner'
                        selected={gettingVenderSignupDetails.photo_offering === 'rehearsal-dinner' ? true : false}
                    >Rehearsal Dinner</option>
                    <option
                        value='elopement'
                        selected={gettingVenderSignupDetails.photo_offering === 'elopement' ? true : false}
                    >Elopement</option>

                </select>
            </div>
            <div className="row mb-3">
                <p className="offering-box">
                    What’s included?
                </p>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id=" bridal_portraits" />
                        <label class="form-check-label custom-label-input" htmlFor=" bridal_portraits">
                            Bridal portraits
                        </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="first_look" />
                        <label class="form-check-label custom-label-input" htmlFor="first_look">
                            First look
                        </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="ceremony" />
                        <label class="form-check-label custom-label-input" htmlFor="ceremony">
                            Ceremony
                        </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="ceception" />
                        <label class="form-check-label custom-label-input" htmlFor="ceception">
                            Reception
                        </label>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="select-opt-type" className="form-label select-account">Amount of hours <span className='text-danger'>*</span></label>
                <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type" onfocus='this.size=10;' onblur='this.size=0;'
                    onChange={handleInputGettingVender('amount_of_hours')}
                >
                    <option
                        value='2'
                        selected={gettingVenderSignupDetails.amount_of_hours === '2' ? true : false}
                    >2</option>
                    <option
                        value='4'
                        selected={gettingVenderSignupDetails.amount_of_hours === '4' ? true : false}
                    >4</option>
                    <option
                        value='6'
                        selected={gettingVenderSignupDetails.amount_of_hours === '6' ? true : false}
                    >6</option>
                    <option
                        value='8'
                        selected={gettingVenderSignupDetails.amount_of_hours === '8' ? true : false}
                    >8</option>
                    <option
                        value='10'
                        selected={gettingVenderSignupDetails.amount_of_hours === '10' ? true : false}
                    >10</option>

                </select>
            </div>
            <div className="row mb-3">
                <p className="offering-box">
                    What do you deliver?
                </p>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="photo_album" />
                        <label class="form-check-label custom-label-input" htmlFor="photo_album">
                            Photo album
                        </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="highlight_film" />
                        <label class="form-check-label custom-label-input" htmlFor="highlight_film">
                            Highlight film
                        </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="raw_photos" />
                        <label class="form-check-label custom-label-input" htmlFor="raw_photos">
                            Raw, unedited photos
                        </label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="online_gallery" />
                        <label class="form-check-label custom-label-input" htmlFor="online_gallery">
                            Online gallery
                        </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="same_day_prints" />
                        <label class="form-check-label custom-label-input" htmlFor="same_day_prints">
                            Same day prints
                        </label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="other_d" />
                        <label class="form-check-label custom-label-input" htmlFor="other_d">
                            Other
                        </label>
                    </div>
                </div>
            </div>
            <div className="mb-3  ">
                <label htmlFor="price" className="form-label">Price per piece</label>
                <input type="number" className="form-control" id="price" aria-describedby="emailHelp" placeholder='$'
                    value={gettingVenderSignupDetails.price}
                    onChange={handleInputGettingVender('price')}
                />
            </div>


            <div className="row ">
                <div className="mt-3">
                    <p className="aprtment-p">+ Add another offering</p>
                </div>
            </div>
        </>
    )
}

export default VenderSignupThirdStep

