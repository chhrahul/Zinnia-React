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
            package_type: gettingVenderSignupDetails.package_type,
            day_week: gettingVenderSignupDetails.day_week,
            price: gettingVenderSignupDetails.price,
            bridalBouquets: gettingVenderSignupDetails.bridalBouquets,
            flowerGirlPetals: gettingVenderSignupDetails.flowerGirlPetals,
            bridesmaidBouquet: gettingVenderSignupDetails.bridesmaidBouquet,
            bouttonieres: gettingVenderSignupDetails.bouttonieres,
            flowerCrown: gettingVenderSignupDetails.flowerCrown,
            corsages: gettingVenderSignupDetails.corsages,
        },
        validationSchema: Yup.object(
            {
                package_type: Yup.string().required('This field is required'),
                day_week: Yup.string().required('This field is required'),
                price: Yup.string().required('This field is required'),

            }),
        onSubmit: values => {
            const newValue = {
                'offering': values.offering,
                'package_type': values.package_type,
                'day_week': values.day_week,
                'price': values.price,
                'bridalBouquets': values.bridalBouquets,
                'flowerGirlPetals': values.flowerGirlPetals,
                'bridesmaidBouquet': values.bridesmaidBouquet,
                'bouttonieres': values.bouttonieres,
                'flowerCrown': values.flowerCrown,
                'corsages': values.corsages,

            }
            SetGettingVenderSignupDetails({ ...gettingVenderSignupDetails, ...newValue })
            if (step >= 8) return
            setStep(step + 1)
        },

    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} id="form-data">
                <p>
                    <span className="text-danger"> 2 of 4 </span> What are you selling?
                </p>
                <h1>
                    Tell us about your flower shop offerings
                </h1>
                <p>
                    Tell us about your superpower! Don’t worry you’ll be able to add photos in the next step
                </p>

                <div className="mb-3">
                    <label htmlFor="select-opt-type" className={formik.touched.offering && formik.errors.offering ? 'error-form-label form-label select-account' : 'form-label select-account'} >How far are you willing to travel from your business address?</label>
                    <select className={formik.touched.offering && formik.errors.offering ? 'error-input form-select mb-4 ' : 'form-select mb-4'} aria-label="Default select example" id="select-opt-type" onfocus='this.size=10;' onblur='this.size=0;'
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
                            <input class="form-check-input" type="checkbox" id="bridal_bouquets"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.bridalBouquets}
                                name="bridalBouquets"
                                checked={formik.values.bridalBouquets ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="bridal_bouquets">
                                Bridal bouquets
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="petals_basket"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.flowerGirlPetals}
                                name="flowerGirlPetals"
                                checked={formik.values.flowerGirlPetals ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="petals_basket" >
                                Flower girl petals / basket
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="bridesmaid_bouquet"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.bridesmaidBouquet}
                                name="bridesmaidBouquet"
                                checked={formik.values.bridesmaidBouquet ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="bridesmaid_bouquet">
                                Bridesmaid bouquet
                            </label>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="bouttonieres"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.bouttonieres}
                                name="bouttonieres"
                                checked={formik.values.bouttonieres ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="bouttonieres">
                                Bouttonieres
                            </label>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="flower_crown"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.flowerCrown}
                                name="flowerCrown"
                                checked={formik.values.flowerCrown ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="flower_crown">
                                Flower crown
                            </label>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input custom-check-input" type="checkbox" id="corsages"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.corsages}
                                name="corsages"
                                checked={formik.values.corsages ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="corsages">
                                Corsages
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mb-3  ">
                    <label htmlFor="price" className={formik.touched.price && formik.errors.price ? 'error-form-label form-label' : 'form-label'}>Price per piece</label>
                    <input type="number" className={formik.touched.price && formik.errors.price ? 'error-input form-control ' : 'form-control'} id="price" aria-describedby="emailHelp" placeholder=''
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                        name="price"
                    />
                    {formik.touched.price && formik.errors.price ? (
                        <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.price}</div>
                    ) : null}
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
            </form>
        </>
    )
}

function Venue(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType, step, setStep, SetGettingVenderSignupDetails, useFormik } = props
    const formik = useFormik({
        initialValues: {
            offering: gettingVenderSignupDetails.offering,
            package_type: gettingVenderSignupDetails.package_type,
            day_week: gettingVenderSignupDetails.day_week,
            price: gettingVenderSignupDetails.price,


        },
        validationSchema: Yup.object(
            {
                package_type: Yup.string().required('This field is required'),
                day_week: Yup.string().required('This field is required'),
                price: Yup.string().required('This field is required'),

            }),
        onSubmit: values => {
            const newValue = {
                'offering': values.offering,
                'package_type': values.package_type,
                'day_week': values.day_week,
                'price': values.price,



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
                <label htmlFor="price" className={formik.touched.price && formik.errors.price ? 'error-form-label form-label' : 'form-label'}>Price per piece</label>
                <input type="number" className={formik.touched.price && formik.errors.price ? 'error-input form-control ' : 'form-control'} id="price" aria-describedby="emailHelp" placeholder=''
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                    name="price"
                />
                {formik.touched.price && formik.errors.price ? (
                    <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.price}</div>
                ) : null}
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

