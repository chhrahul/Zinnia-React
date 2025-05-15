import * as React from 'react'

function SignupFourthStep(props) {
    const { handleInputGettingMarried, gettingMarriedSignupDetails, selectedSignupType, handleSelectSignupType } = props
    return (
        <div className="container text-center mb-30vh">
            <img src="images/ring.png" alt="" className="ring-image img-thumbnail my-thumbnail-ring" />
            <h2>Let’s start planning</h2>
        </div>
    )
}
export default SignupFourthStep