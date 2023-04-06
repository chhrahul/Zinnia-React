import * as React from 'react'
import Layout from '../components/Layout'
function Signup() {
    const [step, setStep] = React.useState(1)

    const RenderCurrentForm = () => {

        switch (step) {
            case 1:
                return <Page1 />;
            case 2:
                return <Page2 />;
            case 3:
                return <Page3 />;
            case 4:
                return <Page4 />;
            default:
                return <Page5 />;
        }
    }
    const handleClickNext = () => {
        if (step >= 4) return
        setStep(step + 1)
    }

    const handleClickBack = () => {
        if (step <= 1) return
        setStep(step - 1)
    }


    const handleClickSubmit = () => {
        setStep(step + 1)
    }

    return (
        <Layout>
            <div className="container-fluid-">

                {/* <div className={step != 5 && `row custom-row`}> */}
                <div className="row custom-row">
                    {step != 5 && <div className="col-md-1 "></div>}
                    {step <= 2 && <MobileImage />}
                    <RenderCurrentForm />
                    {step <= 2 && <DesktopImage />}
                    {step == 5 ? '' : step <= 2 ?
                        <div className="row next-btn-bg">
                            <div className="col-md-6">
                                {step != 1 && <BackButton handleClickBack={handleClickBack} />}
                                {step == 4 && <SubmitButton handleClickSubmit={handleClickSubmit} />}
                                {step != 4 && <NextButton handleClickNext={handleClickNext} />}
                            </div></div> : <div className="row next-btn-bg"><div className=" col-md-12">
                                {step != 1 && <BackButton handleClickBack={handleClickBack} />}
                                {step == 4 && <SubmitButton handleClickSubmit={handleClickSubmit} />}
                                {step != 4 && <NextButton handleClickNext={handleClickNext} />}
                            </div>
                        </div>
                    }
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

function SecondForm() {
    return (
        <span className="hidden- second-form " id="second-form">

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

function NextButton({ handleClickNext }) {
    return (
        <button type="button" className="btn btn-secondary navigate-btn" disabled- id="next-btn" onClick={handleClickNext}>
            Next
        </button>
    )
}

function SubmitButton({ handleClickSubmit }) {
    return (
        <button type="button" className="btn btn-secondary navigate-btn" disabled- id="next-btn" onClick={handleClickSubmit}>
            Create my account
        </button>
    )
}

function BackButton({ handleClickBack }) {
    return (
        <button type="button" className="btn btn-light navigate-btn" disabled- id="next-btn" onClick={handleClickBack}>
            Back
        </button>
    )
}


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
            <div className="mt-3 mb-3">
                <label htmlFor="select-opt" className="form-label select-account">I'm...</label>
                <select className="form-select mb-4" aria-label="Default select example" id="select-opt" onChange={handleChange} >
                    {/* <option value="2">Select</option> */}
                    <option value='0'>Getting married</option>
                    <option selected value="1">A vendor</option>
                </select>
            </div>
        </div>
        <div className="col-md-2 custom-2"></div>
    </div>
)

const Page2 = () => (
    <div className="col-md-5 mt-3 ">
        <div className="col-md-10 custom-10">
            <h2>
                Create an account
            </h2>
            <p>
                Fill out a little information and start your wedding <br />planning today.
            </p>
            <div className="mt-3 mb-3">
                <label htmlFor="select-opt" className="form-label select-account">I'm...</label>
                <select className="form-select mb-4" aria-label="Default select example" id="select-opt" onChange={handleChange} >
                    <option value='0'>Getting married</option>
                    <option selected value="1">A vendor</option>
                </select>
            </div>

            <div className="mt-3 mb-3">
                <label htmlFor="select-opt-type" className="form-label select-account">Vendor type</label>
                <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type" onChange="" >
                    <option value='0'>Florist</option>
                    <option selected value="1">Venue</option>
                    <option value="3">Photographer</option>
                </select>
            </div>
            <SecondForm />
        </div>
        <div className="col-md-2 custom-2"></div>
    </div>
)

const Page3 = () => (
    <div className="col-md-7 col-sm-12 mt-3 mb-30vh">
        <p>
            <span className="text-danger"> 1 of 2 </span> Tell us about your big day!
        </p>
        <h2>
            Your Wedding info
        </h2>
        <div className="row ">
            <div className="mt-3 mb-3">
                <label htmlFor="lname" className="form-label">Wedding date</label>
                <input type="date" className="form-control" id="lname" placeholder='Smith' />
                <div className="form-check mt-1">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <p className="form-check-label" htmlFor="exampleCheck1">I don’t have a date yet</p>
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-md-6 col-sm-6 mb-3">
                <label htmlFor="stime" className="form-label">Start time</label>
                <input type="time" className="form-control" id="stime" placeholder='Smith' />

            </div>
            <div className="col-md-6 col-sm-6 mb-3">
                <label htmlFor="etime" className="form-label">End time</label>
                <input type="time" className="form-control" id="etime" placeholder='Smith' />

            </div>
        </div>
        <div className="row ">
            <div className="mb-3">
                <label htmlFor="location" className="form-label">Wedding Location</label>
                <input type="text" className="form-control" id="location" placeholder='Chicago, IL' />
            </div>
        </div>

        <div className="row ">
            <div className="mb-3">
                <label htmlFor="budget" className="form-label">Budget</label>
                <input type="number" className="form-control" id="budget" placeholder='$' />
            </div>
        </div>

    </div>
)

const Page4 = () => (
    <div className="col-md-6 mt-3 mb-30vh">
        <p>
            <span className="text-danger"> 2 of 2 </span> What do you need for your day?
        </p>
        <h2>
            Vendors
        </h2>
        <div className="row mt-5">
            <div className="col-md-6 mb-3 p-0">
                <Photographer />
            </div>
            <div className="col-md-6 mb-3 ">
                <Florist />
            </div>
            <div className="col-md-6 mb-3 p-0">
                <Venue />
            </div>
        </div>
    </div>
)

const Page5 = () => (
    <div className="container text-center mb-30vh">
        <img src="images/ring.png" alt="" className="ring-image img-thumbnail my-thumbnail-ring" />
        <h2>Let’s start planning</h2>
    </div>
)
function Photographer() {
    const [over, setOver] = React.useState(false);
    const [isActive, setActive] = React.useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    const activeClass = isActive ? 'active-vender' : null;
    return (
        <div className={`vender-opt ${activeClass}`}
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
            onClick={toggleClass}
        >
            <img src={isActive ? 'images/icons/camera-clicked.png' : over ? 'images/icons/camera-2.png' : 'images/icons/camera-1.png'} alt='' />
            <img
                src={isActive ? 'images/icons/Vector-clicked.png' : over ? 'images/icons/Vector2.png' : 'images/icons/Vector.png'}
                alt="plus"
            />
        </div >
    )
}

function Florist() {
    const [over, setOver] = React.useState(false);
    const [isActive, setActive] = React.useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    const activeClass = isActive ? 'active-vender' : null;
    return (
        <div className={`vender-opt ${activeClass}`}
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
            onClick={toggleClass}
        >
            <img src={isActive ? 'images/icons/florist-clicked.png' : over ? 'images/icons/florist-2.png' : 'images/icons/florist-1.png'} alt='' />
            <img
                src={isActive ? 'images/icons/Vector-clicked.png' : over ? 'images/icons/Vector2.png' : 'images/icons/Vector.png'}
                alt="plus"
            />
        </div>
    )
}

function Venue() {
    const [over, setOver] = React.useState(false);
    const [isActive, setActive] = React.useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    const activeClass = isActive ? 'active-vender' : null;
    return (
        <div className={`vender-opt ${activeClass}`}
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
            onClick={toggleClass}
        >
            <img src={isActive ? 'images/icons/vanue-clicked.png' : over ? 'images/icons/vanue-2.png' : 'images/icons/vanue-1.png'} alt='' />
            <img
                src={isActive ? 'images/icons/Vector-clicked.png' : over ? 'images/icons/Vector2.png' : 'images/icons/Vector.png'}
                alt="plus"
            />
        </div>
    )
}