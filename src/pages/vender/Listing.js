
import React, { useState } from 'react';
import OfferIncludeList from '../../components/Listing/OfferIncludeList';
import { PhotographerDetail } from '../listing';
import EditListing from './EditListing';
import ResultTab from '../../components/MainSearch/ResultTab';
import EditOffer from './EditOffer';

function Listing(props) {

    const [resultType, setResultType] = React.useState('map');
    const [step, setStep] = React.useState(0)
    const [gettingVenderSignupDetails, SetGettingVenderSignupDetails] = React.useState({
        "venderType": "photographer",
        "email": "",
        "password": "",
        "confirmPassword": "",
        "check": "",
        "businessName": "Flowers & Friends",
        "website": "www.flowersandfriends.com",
        "phone": "3015932392",
        "ein": "23423325223",
        "streetAddress": "8033",
        "city": "Seattle",
        "state": "Washington",
        "zipCode": "60076",
        "distance": "5",
        "about": "Flower and Friends is a unique florist located in Monterrey’s West Town that brings the timeless beauty of roses right to your doorstep. If you value simple, classic beauty and an original design aesthetic, Flower and Friends is the ideal flower shop for you. Many flower arrangements sold today focus on fleeting trends. We concentrate on timeless elegance, and the rose typifies our traditional design values. Who needs frills — we let our flowers say it all.",
        "offering": "",
        "price": "",
        "flowersUsed": "",
        "photoOffering": "",
        "amountOfHours": "",
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
        'groomRoom': '',
        'bridalSuite': '',
        'chairs': '',
        'bridalPortraits': '',
        'firstLook': true,
        'reception': true,
        'ceremony': '',
        'photoAlbum': '',
        'highlightFilm': '',
        'rawPhotos': '',
        'onlineGallery': '',
        'sameDayPrints': '',
        'otherDelivery': true,
        'facebook': '',
        'instagram': '',
        'youtube': '',
        'tiktok': '',
        'twitter': '',
        'pinterest': '',

    })




    const handleInputGettingVender = (keyName) => (e) => {
        const { value } = e.target
        SetGettingVenderSignupDetails({ ...gettingVenderSignupDetails, [keyName]: value })
    }
    const gettingVenderProps = {
        handleInputGettingVender,
        gettingVenderSignupDetails,
        SetGettingVenderSignupDetails,
        step,
        setStep,


    }
    const includeOffering = [
        {
            'title': 'Video coverage'
        }, {
            'title': 'Photo album'
        }, {
            'title': 'Raw, unedited photos'
        }, {
            'title': 'Same day print'
        },
        {
            'title': 'Highlight film'
        }, {
            'title': 'Online gallery'
        },

    ]


    const tabs = {
        resultType,
        setResultType,
        'first': 'Offering',
        'second': 'Listing',

    }


    const handleClickSubmit = () => {
        setStep(1)
    }

    return (
        <>

            <ResultTab {...tabs} type={'vender'} />


            {step === 0 ?
                <>

                    {resultType !== 'map' ?
                        <PhotographerDetail type={'vender'} />
                        :
                        <>
                            <div className='row padding-lr-0 px-md-5 mh-100'>

                                <div className='col-md-6 pl-0 '>
                                    <h1 >Your offerings</h1>
                                    <p className='p-bottom-margin'>These are your current offerings.</p>
                                    <p className='theme-color font-14'>PHOTOGRAPHER</p>
                                    <p className='price-text p-bottom-margin'>Price</p>
                                    <p className='p-bottom-margin price-amount-box'><span className="price-amount"> $3000 for 5 hours</span></p>
                                    <p className='color-cyan  ml-5 mt-4'> INCLUDED </p>
                                    <OfferIncludeList includeOffering={includeOffering} />
                                </div>
                            </div>
                        </>
                    }
                    <div className="row next-btn-bg position-absolute- w-100 btn-grp" style={{ left: 0, bottom: 0 }}>
                        <div className="col-md-12 d-flex justify-content-end">
                            <button type="submit" className="btn btn-secondary navigate-btn" onClick={handleClickSubmit} id="next-btn">
                                Edit
                            </button>
                        </div >
                    </div >
                </>

                :
                <>
                    {resultType !== 'map' ?
                        <EditListing {...gettingVenderProps} />
                        :
                        <EditOffer {...gettingVenderProps} />

                    }
                </>
            }


        </>
    )
}
export default Listing




