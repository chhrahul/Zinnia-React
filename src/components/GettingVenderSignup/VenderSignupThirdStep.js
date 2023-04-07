import * as React from 'react'

function VenderSignupThirdStep(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType } = props
    return (
        <span className='px-0'>
            <p>
                <span className="text-danger"> 2 of 2 </span> What are you selling?!
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
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label custom-label-input" for="defaultCheck1">
                            Bridal bouquets
                        </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label custom-label-input" for="defaultCheck1">
                            Flower girl petals / basket
                        </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label custom-label-input" for="defaultCheck1">
                            Bridesmaid bouquet
                        </label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label custom-label-input" for="defaultCheck1">
                            Bouttonieres
                        </label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label custom-label-input" for="defaultCheck1">
                            Flower crown
                        </label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div class="form-check mt-2">
                        <input class="form-check-input custom-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label custom-label-input" for="defaultCheck1">
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
        </span>

    )
}

export default VenderSignupThirdStep

