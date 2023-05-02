import {
    BsFacebook, BsInstagram, BsTwitter, BsPinterest, BsTiktok
} from "react-icons/bs"

function SocialMediaHandle(props) {
    const { handles } = props

    const SocialMediaIcon = ({ type }) => {
        if (type === "instagram") {
            return <BsInstagram size={22} />
        }
        else if (type === "facebook") {
            return <BsFacebook size={22} />
        }
        else if (type === "twitter") {
            return <BsTwitter size={22} />
        } else if (type === "pinterest") {
            return <BsPinterest size={22} />
        } else if (type === "tiktok") {
            return <BsTiktok size={22} />
        }
    }

    const MediaList = ({ type, src }) => {
        return (
            <p className='mr-2 social-media-custom-para'>
                <SocialMediaIcon type={type} />
                <span className='color-cyan' style={{ paddingLeft: '10px' }}>
                    {src}
                </span>
            </p>
        )
    }
    return (
        <>
            {
                handles.map((handle, index) => {
                    return <MediaList type={handle.type} src={handle.url} />
                })}
        </>
    );
}

export default SocialMediaHandle

