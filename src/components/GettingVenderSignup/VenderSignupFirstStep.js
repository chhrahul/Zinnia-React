import * as React from 'react'

function VenderSignupFirstStep(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType } = props
    return (
        <span className='second-form px-0' id="second-form">
            <h1>
                Create an account
            </h1>
            <p>
                Fill out a little information and start your wedding <br />planning today.
            </p>
            <label htmlFor="select-opt" className="form-label select-account">I'm...</label>
            <select className="form-select mb-4" aria-label="Default select example" id="select-opt" onChange={handleSelectSignupType} >
                {console.log(selectedSignupType)}
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
                <label htmlFor="select-opt-type" className="form-label select-account">Vendor type</label>
                <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type" onChange={handleInputGettingVender('venderType')}>
                    <option
                        value="florist"
                        selected={gettingVenderSignupDetails.venderType === 'florist' ? true : false}
                    >Florist</option>
                    <option
                        value="venue"
                        selected={gettingVenderSignupDetails.venderType === 'venue' ? true : false}
                    >Venue</option>
                    <option
                        value="photographer"
                        selected={gettingVenderSignupDetails.venderType === 'photographer' ? true : false}
                    >Photographer</option>
                </select>
            </div>
            <div className="mb-3  ">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='jsmith@email.com'
                    value={gettingVenderSignupDetails.email}
                    onChange={handleInputGettingVender('email')}
                />
            </div>
            <div className="mb-3  ">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" aria-describedby="password" placeholder='Password'
                    value={gettingVenderSignupDetails.password}
                    onChange={handleInputGettingVender('password')}
                />
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
                <label htmlFor="repassword" className="form-label">Re-enter your password</label>
                <input type="password" className="form-control" id="repassword" aria-describedby="password" placeholder='Re-enter your password'
                    value={gettingVenderSignupDetails.confirmPassword}
                    onChange={handleInputGettingVender('confirmPassword')}
                />
            </div>
            <div className="mb-3 form-check ustom-col-2 ">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <p className="form-check-label" htmlFor="exampleCheck1">I agree to the <a href="/">terms and conditions</a></p>
            </div>
        </span>

    )
}
export default VenderSignupFirstStep