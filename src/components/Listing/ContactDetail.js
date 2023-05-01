import {
    BsClock
} from "react-icons/bs"

function ContactDetail(props) {
    const { contactFields } = props

    const FieldsIcon = ({ type }) => {
        if (type === "streetAddress") {
            return <img src="/images/icons/location.svg" alt="" className='contact-icon' />
        }
        else if (type === "timing") {
            return <BsClock size={27} className='contact-icon color-cyan' />
        }
        else if (type === "website") {
            return <img src="/images/icons/web.svg" alt="" className='contact-icon' />
        } else if (type === "phone") {
            return <img src="/images/icons/phone.svg" alt="" className='contact-icon' />
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

