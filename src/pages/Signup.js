import * as React from 'react'
import Layout from '../components/Layout'
import { Routes, Route, redirect } from 'react-router-dom'
function Signup() {

  return (
    <Layout>
      <div className="container-fluid-">

        {/* <div className={step != 5 && `row custom-row`}> */}
        <div className="row custom-row">
          <div className="col-md-1 "></div>
          <MobileImage />
          <Page1 />
          <DesktopImage />

          <div className="row next-btn-bg">
            <div className="col-md-6">
              <NextButton />
            </div>
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
      {/* <img src="images/beach-2.jpg" alt /> */}
    </div>
  )
}



function NextButton({ handleClickNext }) {
  return (
    <button type="button" className="btn btn-secondary navigate-btn" disabled id="next-btn" >
      Next
    </button>
  )
}


const DesktopImage = () => (
  <div className="col-md-6 right-col-img hide-image-pc">
  </div>
)

const Page1 = () => (
  <div className="col-md-5 mt-3 ">
    <div className="col-md-10 custom-10">
      <h2>
        Create an account
      </h2>
      <p>
        Fill out a little information and start your wedding <br />planning today.
      </p>
      <label htmlFor="select-opt" className="form-label select-account">I'm...</label>
      <select className="form-select mb-4" aria-label="Default select example" mame="select" id="select-opt" onChange={handleChange} >
        <option selected value="DEFfdsfdsaAULT" disabled>Select</option>
        <option value='0'>Getting married</option>
        <option value="1">A vendor</option>
      </select>
    </div>
    <div className="col-md-2 custom-2"></div>
  </div>
)


function handleChange(event) {
  const val = event.target.value;
  console.log(val);
  // alert(val);
  if (val == 0) {
    return window.location.href = '/signup-couple';
  }
  else if (val == 1) {
    return window.location.href = '/signup-vender';
  }
  else {
    return window.location.href = '/';
  }
}





