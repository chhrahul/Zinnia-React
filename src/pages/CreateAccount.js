import * as React from 'react'
import Layout from '../components/Layout'
function Signup() {
    return (
        <Layout>
            <div className="row  custom-row container-fluid-">
                <div className="col-md-6 right-col-img hide-image-sm">
                    {/* <img className="img-thumbnail my-thumbnail" src="images/beach 2.jpg" alt='' /> */}
                </div>
                <div className="col-md-6 mt-3 ">
                    <div className="container-custom">
                        <h2>
                            Create an account
                        </h2>
                        <p>
                            Fill out a little information and start your wedding <br />planning today.
                        </p>
                        <label for="select-opt text-dark    " class="form-label select-account">I'm...</label>
                        <select className="form-select mb-4" aria-label="Default select example" id="select-opt">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                    </div>
                    <div className="next-btn-bg">
                        <button type="button" className="btn btn-secondary " >
                            Next
                        </button>
                    </div>
                </div>
                <div className="col-md-6 right-col-img hide-image-pc">
                    {/* <img className="img-thumbnail my-thumbnail" src="images/beach 2.jpg" alt='' /> */}
                </div>



            </div>
        </Layout>
    )
}

export default Signup