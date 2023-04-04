import * as React from 'react'
import Layout from '../components/Layout'
function Signup() {

    return (
        <Layout>
            <div className="container-fluid-">
                <div className="row custom-row">
                    <div className="col-md-1 "></div>
                    <MobileImage />
                    <CreateForm />
                    <DesktopImage />
                    <div className="next-btn-bg col-md-6">
                        <button type="button" className="btn btn-secondary" disabled- id="next-btn" onClick={handleClick}>
                            Next
                        </button>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
export default Signup


function MobileImage() {
    return (
        <div className="col-md-6 right-col-img hide-image-sm">
            {/* <img className="img-thumbnail my-thumbnail" src="images/beach 2.jpg" alt='' /> */}
        </div>
    )
}

function CreateForm() {
    return (
        // <div className="col-md-1 "></div>
        <div className="col-md-5 mt-3 ">
            <div className="col-md-10 custom-10">
                <h2>
                    Create an account
                </h2>
                <p>
                    Fill out a little information and start your wedding <br />planning today.
                </p>
                <label htmlFor="select-opt" className="form-label select-account">I'm...</label>
                <select className="form-select mb-4" aria-label="Default select example" id="select-opt" onChange={handleChange} >
                    <option selected value="">Select</option>
                    <option value='0'>Getting married</option>
                    <option value="1">A vendor</option>
                </select>
                <SecondForm />
            </div>
            <div className="col-md-2 custom-2"></div>

        </div>
    )
}


function SecondForm() {

    return (
        <span className="hidden second-form " id="second-form">
            <div className="mb-3">
                <label htmlFor="fname" className="form-label">First name</label>
                <input type="text" className="form-control" id="fname" placeholder='Jane' />

            </div>
            <div className="mb-3">
                <label htmlFor="lname" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lname" placeholder='Smith' />

            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='jsmith@email.com' />

            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" aria-describedby="password" placeholder='Password' />
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

            <div className="mb-1">
                <label htmlFor="repassword" className="form-label">Re-enter your password</label>
                <input type="password" className="form-control" id="repassword" aria-describedby="password" placeholder='Re-enter your password' />


            </div>

            <div className="mb-3 form-check ustom-col-2">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <p className="form-check-label" htmlFor="exampleCheck1">I agree to the <a href="">terms and conditions</a></p>
            </div>
        </span>
    )
}

function handleClick(event) {
    event.disabled = true;
    document.getElementById('second-form').style.display = "block";
}
function handleChange(event) {
    document.getElementById('next-btn').disabled = false;
}

const DesktopImage = () => (
    <div className="col-md-6 right-col-img hide-image-pc">
        {/* <img className="img-thumbnail my-thumbnail" src="images/beach 2.jpg" alt='' /> */}
    </div>
)
