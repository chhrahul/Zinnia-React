import * as React from 'react'

function VenderSignupFourthStep(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType } = props
    return (
        <div className="container text-center mb-30vh">
            <img src="images/ring.png" alt="" className="ring-image img-thumbnail my-thumbnail-ring" />
            <h2>Let’s start planning</h2>
        </div>
    )
}
export default VenderSignupFourthStep