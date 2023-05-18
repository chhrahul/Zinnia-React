import * as React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

function VenderSignupThirdStep(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType, step, setStep, SetGettingVenderSignupDetails, type } = props

    const gettingVenderProps = {
        handleInputGettingVender,
        gettingVenderSignupDetails,
        SetGettingVenderSignupDetails,
        selectedSignupType,
        handleSelectSignupType,
        step,
        setStep,
        useFormik,
        type

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
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType, step, setStep, SetGettingVenderSignupDetails, useFormik, type } = props
    const formik = useFormik({
        initialValues: {
            offering: gettingVenderSignupDetails.offering,
            price: gettingVenderSignupDetails.price,
            bridalBouquets: gettingVenderSignupDetails.bridalBouquets,
            flowerGirlPetals: gettingVenderSignupDetails.flowerGirlPetals,
            bridesmaidBouquet: gettingVenderSignupDetails.bridesmaidBouquet,
            bouttonieres: gettingVenderSignupDetails.bouttonieres,
            flowerCrown: gettingVenderSignupDetails.flowerCrown,
            corsages: gettingVenderSignupDetails.corsages,
            flowersUsed: gettingVenderSignupDetails.flowersUsed,
        },
        validationSchema: Yup.object(
            {
                price: Yup.string().required('This field is required'),

            }),
        onSubmit: values => {
            const newValue = {
                'offering': values.offering,
                'price': values.price,
                'bridalBouquets': values.bridalBouquets,
                'flowerGirlPetals': values.flowerGirlPetals,
                'bridesmaidBouquet': values.bridesmaidBouquet,
                'bouttonieres': values.bouttonieres,
                'flowerCrown': values.flowerCrown,
                'corsages': values.corsages,
                'flowersUsed': values.flowersUsed,

            }
            SetGettingVenderSignupDetails({ ...gettingVenderSignupDetails, ...newValue })
            if (step >= 8) return
            setStep(step + 1)
        },

    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} id="form-data">
                {type !== 'edit' && <>
                    <p>
                        <span className="text-danger"> 2 of 4 </span> What are you selling?
                    </p>
                    <h1>
                        Tell us about your flower shop offerings
                    </h1>
                    <p>
                        Tell us about your superpower! Don’t worry you’ll be able to add photos in the next step
                    </p>
                </>}
                <div className="mb-3">
                    <label htmlFor="select-opt-type" className={formik.touched.offering && formik.errors.offering ? 'error-form-label form-label select-account' : 'form-label select-account'} >What are you offering?</label>
                    <select className={formik.touched.offering && formik.errors.offering ? 'error-input form-select mb-4 ' : 'form-select mb-4'} aria-label="Default select example" id="select-opt-type" onfocus='this.size=10;' onblur='this.size=0;'
                        onChange={formik.handleChange}
                        name="offering"
                    >
                        <option
                            value='ceremony-decor'
                            selected={formik.values.offering === 'ceremony-decor' ? true : false}
                        >Ceremony decor</option>
                        <option
                            value='bridal-party-flowers'
                            selected={formik.values.offering === 'bridal-party-flowers' ? true : false}
                        >Bridal party flowers</option>

                    </select>
                </div>
                <div className="row mb-3">
                    <p className="offering-box m-0">
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


                <div className="mb-3">
                    <label htmlFor="budget" className={formik.touched.price && formik.errors.price ? 'error-form-label form-label ' : 'form-label'}>price</label>
                    <div class="input-group">
                        <span class="input-group-text budget-icon text-muted" id="basic-addon1">$</span>
                        <input type="number" className={formik.touched.price && formik.errors.price ? 'error-input form-control ' : 'form-control'} id="budget" placeholder=''
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.price}
                            name="price"
                        />
                    </div>
                    {formik.touched.price && formik.errors.price ? (
                        <div className="text-danger form-error"><img src="/images/icons/error.svg" alt="" />{formik.errors.price}</div>
                    ) : null}


                </div>

                <div className="mb-3  ">
                    <label htmlFor="flowers" className="form-label">Flowers used</label>
                    <input type="text" className="form-control" id="flowers" aria-describedby="emailHelp" placeholder=''
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.flowersUsed}
                        name="flowersUsed"
                    />
                </div>
                <div className="row ">
                    <div className="mt-3">
                        <p className="aprtment-p"><Link>+ Add another offering</Link></p>
                    </div>
                </div>
            </form>
        </>
    )
}

function Venue(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType, step, setStep, SetGettingVenderSignupDetails, useFormik, type } = props
    const formik = useFormik({
        initialValues: {
            package_type: gettingVenderSignupDetails.package_type,
            day_week: gettingVenderSignupDetails.day_week,
            price: gettingVenderSignupDetails.price,
            groomRoom: gettingVenderSignupDetails.groomRoom,
            bridalSuite: gettingVenderSignupDetails.bridalSuite,
            chairs: gettingVenderSignupDetails.chairs,


        },
        validationSchema: Yup.object(
            {
                package_type: Yup.string().required('This field is required'),
                day_week: Yup.string().required('This field is required'),
                price: Yup.string().required('This field is required'),

            }),
        onSubmit: values => {
            const newValue = {
                'package_type': values.package_type,
                'day_week': values.day_week,
                'price': values.price,
                'groomRoom': values.groomRoom,
                'bridalSuite': values.bridalSuite,
                'chairs': values.chairs,
            }
            SetGettingVenderSignupDetails({ ...gettingVenderSignupDetails, ...newValue })
            if (step >= 8) return
            setStep(step + 1)
        },

    });
    return (
        <>
            <form onSubmit={formik.handleSubmit} id="form-data">
                {type !== 'edit' && <>
                    <p>
                        <span className="text-danger"> 2 of 4 </span> What are you selling?!
                    </p>
                    <h1>
                        Tell us about your venue
                    </h1>
                    <p>
                        Tell us about your superpower! Don’t worry you’ll be able to add photos in the next step
                    </p>
                </>}
                <div className="mb-3">
                    <label htmlFor="select-opt-type" className="form-label select-account">Package type</label>
                    <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type" onfocus='this.size=10;' onblur='this.size=0;'
                        onChange={formik.handleChange}
                        name="package_type"
                    >
                        <option
                            value='ceremony-decor'
                            selected={formik.values.package_type === 'ceremony-only' ? true : false}
                        >Ceremony only</option>
                        <option
                            value='reception-only'
                            selected={formik.values.package_type === 'reception-only' ? true : false}
                        >Reception only</option>

                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="select-opt-type" className="form-label select-account">Day of the week</label>
                    <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type" onfocus='this.size=10;' onblur='this.size=0;'
                        onChange={formik.handleChange}
                        name="day_week"
                    >
                        <option
                            value='friday'
                            selected={formik.values.day_week === 'friday' ? true : false}
                        >Friday</option>
                        <option
                            value='saturday'
                            selected={formik.values.day_week === 'saturday' ? true : false}
                        >Saturday</option>
                        <option
                            value='sunday'
                            selected={formik.values.day_week === 'sunday' ? true : false}
                        >Sunday</option>


                    </select>
                </div>
                <div className="row mb-3">
                    <p className="offering-box m-0">
                        What’s included?
                    </p>
                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="groom-room"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.groomRoom}
                                name="groomRoom"
                                checked={formik.values.groomRoom ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="groom-room">
                                Groom Room
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="bridal_suite"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.bridalSuite}
                                name="bridalSuite"
                                checked={formik.values.bridalSuite ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="bridal_suite">
                                Bridal suite
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="chairs"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.chairs}
                                name="chairs"
                                checked={formik.values.chairs ? true : false}
                            />
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
                        <p className="aprtment-p"><Link>+ Add another offering</Link></p>
                    </div>
                </div>
            </form>
        </>
    )
}

function Photographer(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType, step, setStep, SetGettingVenderSignupDetails, useFormik, type } = props
    const formik = useFormik({
        initialValues: {
            photoOffering: gettingVenderSignupDetails.photoOffering,
            bridalPortraits: gettingVenderSignupDetails.bridalPortraits,
            firstLook: gettingVenderSignupDetails.firstLook,
            ceremony: gettingVenderSignupDetails.ceremony,
            reception: gettingVenderSignupDetails.reception,
            amountOfHours: gettingVenderSignupDetails.amountOfHours,
            price: gettingVenderSignupDetails.price,
            photoAlbum: gettingVenderSignupDetails.photoAlbum,
            highlightFilm: gettingVenderSignupDetails.highlightFilm,
            rawPhotos: gettingVenderSignupDetails.rawPhotos,
            onlineGallery: gettingVenderSignupDetails.onlineGallery,
            sameDayPrints: gettingVenderSignupDetails.sameDayPrints,
            otherDelivery: gettingVenderSignupDetails.otherDelivery,

        },
        validationSchema: Yup.object(
            {

                // price: Yup.string().required('This field is required'),

            }),
        onSubmit: values => {
            const newValue = {
                'photoOffering': values.photoOffering,
                'bridalPortraits': values.bridalPortraits,
                'firstLook': values.firstLook,
                'ceremony': values.ceremony,
                'reception': values.reception,
                'amountOfHours': values.amountOfHours,
                'price': values.price,
                'photoAlbum': values.photoAlbum,
                'highlightFilm': values.highlightFilm,
                'rawPhotos': values.rawPhotos,
                'onlineGallery': values.onlineGallery,
                'sameDayPrints': values.sameDayPrints,
                'otherDelivery': values.otherDelivery,

            }

            SetGettingVenderSignupDetails({ ...gettingVenderSignupDetails, ...newValue })
            console.log(gettingVenderSignupDetails)
            if (step >= 8) return
            setStep(step + 1)
        },

    });
    return (
        <>
            <form onSubmit={formik.handleSubmit} id="form-data">
                {type !== 'edit' && <>
                    <p>
                        <span className="text-danger"> 2 of 4 </span> What are you selling?!
                    </p>
                    <h1>
                        Tell us about your photography
                    </h1>
                    <p>
                        Tell us about your superpower! Don’t worry you’ll be able to add photos in the next step
                    </p>
                </>}
                <div className="mb-3">
                    <label htmlFor="select-opt-type" className="form-label select-account">Photoshoot type <span className='text-danger'>*</span> </label>
                    <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type" onfocus='this.size=10;' onblur='this.size=0;'
                        onChange={formik.handleChange}
                        name="photoOffering"
                    >
                        <option
                            value='wedding-day'
                            selected={formik.values.photoOffering === 'wedding-day' ? true : false}
                        >Wedding day</option>
                        <option
                            value='engagement'
                            selected={formik.values.photoOffering === 'engagement' ? true : false}
                        >Engagement</option>
                        <option
                            value='rehearsal-dinner'
                            selected={formik.values.photoOffering === 'rehearsal-dinner' ? true : false}
                        >Rehearsal Dinner</option>
                        <option
                            value='elopement'
                            selected={formik.values.photoOffering === 'elopement' ? true : false}
                        >Elopement</option>

                    </select>
                </div>
                <div className="row mb-3">
                    <p className="offering-box m-0">
                        What’s included?
                    </p>
                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id=" bridal_portraits"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.bridalPortraits}
                                name="bridalPortraits"
                                checked={formik.values.bridalPortraits ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor=" bridal_portraits">
                                Bridal portraits
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="first_look"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstLook}
                                name="firstLook"
                                checked={formik.values.firstLook ? true : false} />
                            <label class="form-check-label custom-label-input" htmlFor="first_look">
                                First look
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="ceremony"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.ceremony}
                                name="ceremony"
                                checked={formik.values.ceremony ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="ceremony">
                                Ceremony
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="reception"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.reception}
                                name="reception"
                                checked={formik.values.reception ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="reception">
                                Reception
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="select-opt-type" className="form-label select-account">Amount of hours <span className='text-danger'>*</span></label>
                    <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type" onfocus='this.size=10;' onblur='this.size=0;'
                        onChange={formik.handleChange}
                        name="amountOfHours"
                    >
                        <option
                            value='2'
                            selected={formik.values.amountOfHours === '2' ? true : false}
                        >2</option>
                        <option
                            value='4'
                            selected={formik.values.amountOfHours === '4' ? true : false}
                        >4</option>
                        <option
                            value='6'
                            selected={formik.values.amountOfHours === '6' ? true : false}
                        >6</option>
                        <option
                            value='8'
                            selected={formik.values.amountOfHours === '8' ? true : false}
                        >8</option>
                        <option
                            value='10'
                            selected={formik.values.amountOfHours === '10' ? true : false}
                        >10</option>
                    </select>
                </div>
                <div className="row mb-3">
                    <p className="offering-box m-0">
                        What do you deliver?
                    </p>
                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="photo_album"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.photoAlbum}
                                name="photoAlbum"
                                checked={formik.values.photoAlbum ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="photo_album">
                                Photo album
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="highlight_film"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.highlightFilm}
                                name="highlightFilm"
                                checked={formik.values.highlightFilm ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="highlight_film">
                                Highlight film
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="raw_photos"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.rawPhotos}
                                name="rawPhotos"
                                checked={formik.values.rawPhotos ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="raw_photos">
                                Raw, unedited photos
                            </label>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="online_gallery"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.onlineGallery}
                                name="onlineGallery"
                                checked={formik.values.onlineGallery ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="online_gallery">
                                Online gallery
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="same_day_prints"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.sameDayPrints}
                                name="sameDayPrints"
                                checked={formik.values.sameDayPrints ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="same_day_prints">
                                Same day prints
                            </label>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="other_d"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.otherDelivery}
                                name="otherDelivery"
                                checked={formik.values.otherDelivery ? true : false}
                            />
                            <label class="form-check-label custom-label-input" htmlFor="other_d">
                                Other
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
                        <p className="aprtment-p"><Link>+ Add another offering</Link></p>
                    </div>
                </div>
            </form>
        </>
    )
}

export default VenderSignupThirdStep

