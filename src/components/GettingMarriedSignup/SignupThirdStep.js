import * as React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function SignupThirdStep(props) {

    const { handleInputGettingMarried, gettingMarriedSignupDetails, selectedSignupType, handleSelectSignupType, step, setStep, SetGettingMarriedSignupDetails } = props
    const formik = useFormik({
        initialValues: {
            photographer: gettingMarriedSignupDetails.photographer,
            florist: gettingMarriedSignupDetails.florist,
            venue: gettingMarriedSignupDetails.venue,

        },

        onSubmit: values => {
            const newValue = {
                'photographer': values.photographer,
                'florist': values.florist,
                'venue': values.venue,
            }
            SetGettingMarriedSignupDetails({ ...gettingMarriedSignupDetails, ...newValue })
            if (step >= 5) return
            setStep(step + 1)
        },

    });

    return (
        <span className='px-0-'>
            <p>
                <span className="text-danger"> 2 of 2 </span> What do you need for your day?
            </p>
            <h2>
                Vendors
            </h2>
            <div className="row mt-5">
                <div className="col-md-6 mb-3">
                    <Photographer formik={formik} />
                </div>
                <div className="col-md-6 mb-3 ">
                    <Florist formik={formik} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-3 ">
                    <Venue formik={formik} />
                </div>
            </div>
        </span>

    )
}

export default SignupThirdStep

function Photographer(props) {

    const { formik } = props
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
            <span>
                <img src={isActive ? '/images/icons/camera-clicked.png' : over ? '/images/icons/camera-2.png' : '/images/icons/camera-1.png'} alt='' className="vender-icon" />
                Photographer
            </span>
            <img
                src={isActive ? '/images/icons/Vector-clicked.png' : over ? '/images/icons/Vector2.png' : '/images/icons/Vector.png'}
                alt="plus"
            />
        </div >
    )
}

function Florist(props) {

    const { formik } = props
    const [over, setOver] = React.useState(false);
    const [isActive, setActive] = React.useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    const activeClass = isActive ? 'active-vender' : null;
    formik.values.florist = isActive ? 'active-vender' : null;
    return (
        <div className={`vender-opt ${activeClass}`}
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
            onClick={toggleClass}
        >
            <span>
                <img src={isActive ? '/images/icons/florist-clicked.png' : over ? '/images/icons/florist-2.png' : '/images/icons/florist-1.png'} alt='' className="vender-icon" />
                Florist
            </span>
            <img
                src={isActive ? '/images/icons/Vector-clicked.png' : over ? '/images/icons/Vector2.png' : '/images/icons/Vector.png'}
                alt="plus"
            />
        </div>
    )
}

function Venue(props) {
    const { formik } = props
    const [over, setOver] = React.useState(false);
    const [isActive, setActive] = React.useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    const activeClass = isActive ? 'active-vender' : null;
    formik.values.venue = isActive ? 'active-vender' : null;
    return (
        <div className={`vender-opt ${activeClass}`}
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
            onClick={toggleClass}
        >
            <sapn>
                <img src={isActive ? '/images/icons/vanue-clicked.png' : over ? '/images/icons/vanue-2.png' : '/images/icons/vanue-1.png'} alt='' className="vender-icon" />
                Venue
            </sapn>
            <img
                src={isActive ? '/images/icons/Vector-clicked.png' : over ? '/images/icons/Vector2.png' : '/images/icons/Vector.png'}
                alt="plus"
            />
        </div>
    )
}