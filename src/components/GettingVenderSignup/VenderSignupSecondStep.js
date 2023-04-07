import React from 'react'

function VenderSignupSecondStep(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType } = props
    return (
        <span className='px-0'>
            <p>
                <span className="text-danger"> 1 of 2 </span> Tell us about your big day!
            </p>
            <h1>
                We want to know more about you!
            </h1>
            <div className="row ">
                <div className="mb-3">
                    <label htmlFor="bussiness" className="form-label">Your business name<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="bussiness" placeholder='Flowers & Friends'
                        value={gettingVenderSignupDetails.businessName}
                        onChange={handleInputGettingVender('businessName')}
                    />
                </div>
            </div>
            <div className="row ">
                <div className="mb-3">
                    <label htmlFor="url" className="form-label">Website<span className="text-danger">*</span></label>
                    <input type="url" className="form-control" id="url" placeholder='www.example.com'
                        value={gettingVenderSignupDetails.website}
                        onChange={handleInputGettingVender('website')}
                    />
                </div>
            </div>
            <div className="row ">
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="phone" placeholder=''
                        value={gettingVenderSignupDetails.phone}
                        onChange={handleInputGettingVender('phone')}
                    />
                </div>
            </div>

            <div className="row ">
                <div className="mb-3">
                    <label htmlFor="ein" className="form-label">EIN/ SSN<span className="text-danger">*</span> </label>
                    <input type="number" className="form-control" id="ein" placeholder=''
                        value={gettingVenderSignupDetails.ein}
                        onChange={handleInputGettingVender('ein')}
                    />
                </div>
            </div>


            <div className="row ">
                <hr className="mt-3 text-cyan hr-devider" />
            </div>
            <div className="row ">
                <p className="custom-muted">
                    Address
                </p>
            </div>

            <div className="row ">
                <div className="mb-3">
                    <label htmlFor="street" className="form-label">Street Address<span className="text-danger">*</span> </label>
                    <input type="text" className="form-control" id="street" placeholder=''
                        value={gettingVenderSignupDetails.streetAddress}
                        onChange={handleInputGettingVender('streetAddress')}
                    />
                </div>
            </div>

            <div className="row ">
                <div className="mt-3">
                    <p className="aprtment-p">+ Add Apartment#, Floor, etc</p>
                </div>
            </div>

            <div className="row ">
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City<span className="text-danger">*</span> </label>
                    <input type="text" className="form-control" id="city" placeholder=''
                        value={gettingVenderSignupDetails.city}
                        onChange={handleInputGettingVender('city')}
                    />
                </div>
            </div>

            <div className="row ">
                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State<span className="text-danger">*</span> </label>
                    <input type="text" className="form-control" id="state" placeholder=''
                        value={gettingVenderSignupDetails.state}
                        onChange={handleInputGettingVender('state')}
                    />
                </div>
            </div>

            <div className="row ">
                <div className="mb-3">
                    <label htmlFor="zip" className="form-label">Zipcode<span className="text-danger">*</span> </label>
                    <input type="text" className="form-control" id="zip" placeholder=''
                        value={gettingVenderSignupDetails.zipCode}
                        onChange={handleInputGettingVender('zipCode')}
                    />
                </div>
            </div>

            <div className="row ">
                <div className="mb-3">
                    <label htmlFor="select-opt-type" className="form-label select-account">How far are you willing to travel from your business address?</label>
                    <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type" onfocus='this.size=10;' onblur='this.size=0;'
                        onChange={handleInputGettingVender('distance')}
                    >
                        <option
                            value="5"
                            selected={gettingVenderSignupDetails.distance === '5' ? true : false}
                        >5 miles</option>
                        <option
                            value='10'
                            selected={gettingVenderSignupDetails.distance === '10' ? true : false}
                        >10 miles</option>
                        <option
                            value='20'
                            selected={gettingVenderSignupDetails.distance === '20' ? true : false}
                        >20 miles</option>
                        <option
                            value='30'
                            selected={gettingVenderSignupDetails.distance === '30' ? true : false}
                        >30 miles</option>
                        <option
                            value='40'
                            selected={gettingVenderSignupDetails.distance === '40' ? true : false}>
                            40 miles</option>
                        <option
                            value='50'
                            selected={gettingVenderSignupDetails.distance === '50' ? true : false}
                        >50 miles</option>
                        <option
                            value='60'
                            selected={gettingVenderSignupDetails.distance === '60' ? true : false}
                        >60 miles</option>
                        <option
                            value='anywhere'
                            selected={gettingVenderSignupDetails.distance === 'anywhere' ? true : false}
                        >Anywhere</option>

                    </select>
                </div>
            </div>
            <div className="row ">
                <hr className=" text-cyan hr-devider" />
            </div>
            <div className="row ">
                <p className="custom-muted">
                    Tell us about your business
                </p>
            </div>

            <div className="row mb-3">
                <div className="">
                    <label htmlFor="zip" className="form-label">Information about your business<span className="text-danger">*</span> </label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" onChange={handleInputGettingVender('about')} value={gettingVenderSignupDetails.about}> </textarea>
                </div>
            </div>
        </span>
    )
}

export default VenderSignupSecondStep