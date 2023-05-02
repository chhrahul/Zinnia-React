import {
    BsClock,BsFillGeoAltFill,BsFillTelephoneFill
} from "react-icons/bs";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
function ContactDetail(props) {
    const { contactFields, size } = props

    const FieldsIcon = ({ type }) => {
        if (type === "streetAddress") {
     
            return <IoLocationSharp size={size+10} className='contact-icon color-cyan' />
        }
        else if (type === "timing") {
            return <BsClock size={size} className='contact-icon color-cyan' />
        }
        else if (type === "website") {
            return <GiEarthAsiaOceania size={size} className='contact-icon color-cyan' />
        } else if (type === "phone") {
            return <BsFillTelephoneFill size={size} className='contact-icon color-cyan' />
        }
    }
    const Fields = ({ type, fieldVal }) => {
        return (
            <>
                {type === "timing" ? <p className='d-flex social-media-custom-para'><FieldsIcon type={type} /> <span><span className='color-cyan  ml-5 social-media-custom-para'> Open <span className="dot-custom">&bull;</span></span> Closes 10 PM</span></p> : type === "website" ? <p className='d-flex'><FieldsIcon type={type} /> <span><span className='color-cyan  ml-5 social-media-custom-para'> Bigdayflorists.com </span> </span></p> : <p className='d-flex social-media-custom-para'><FieldsIcon type={type} /> <span>{fieldVal}</span></p>}
            </>
        )
    }
    return (
        <>
            {
                contactFields.map((contactField, index) => {
                    return <Fields type={contactField.type} fieldVal={contactField.field} />
                })}
        </>
    );
}

export default ContactDetail

