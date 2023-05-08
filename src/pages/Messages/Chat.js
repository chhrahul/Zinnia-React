import * as React from 'react'
import { LetterCircle } from "../../components"

function Chat() {
    const [sendMessage, setSendMessage] = React.useState()
    const [activeContact, setActiveContact] = React.useState({
        'id': '1', 'name': 'Cally Bennett', 'lastMsgTime': '7:43 pm', 'lastMessage': 'Hi. Excited to work with you.',
        'messages': [{ 'userId': '5', 'message': 'Hi. Excited to work with you.' }, { 'userId': '1', 'message': 'Me too!' }]
    })
    const contacts = [
        {
            'id': '1', 'name': 'Cally Bennett', 'lastMsgTime': '7:43 pm', 'lastMessage': 'Hi. Excited to work with you.',
            'messages': [{ 'userId': '5', 'message': 'Hi. Excited to work with you.' }, { 'userId': '1', 'message': 'Me too!' }]
        },
        {
            'id': '2', 'name': 'Jen Golbeck', 'lastMsgTime': '7:43 pm', 'lastMessage': 'Lorem ipsum dolor set. Lorem ipsum dolor set...',
            'messages': [{ 'userId': '2', 'message': 'Hi. Excited to work with you.' }, { 'userId': '1', 'message': 'Me too!' }, { 'userId': '2', 'message': 'Thanks' }]
        },
        {
            'id': '3', 'name': 'Kody Carr', 'lastMsgTime': '7:43 pm', 'lastMessage': 'Lorem ipsum dolor set. Lorem ipsum dolor set...',
            'messages': [{ 'userId': '3', 'message': 'Hi. Excited to work with you.' }, { 'userId': '1', 'message': 'Me too!' }, { 'userId': '3', 'message': 'Thanks' }]
        },
        {
            'id': '4', 'name': 'Bobby Caller', 'lastMsgTime': '7:43 pm', 'lastMessage': 'Lorem ipsum dolor set. Lorem ipsum dolor set...',
            'messages': [{ 'userId': '4', 'message': 'Hi. Excited to work with you.' }, { 'userId': '1', 'message': 'Me too!' }]
        },


    ]
    const contactProps = {
        activeContact,
        setActiveContact,
        sendMessage,
        setSendMessage
    }



    return (
        <>
            <div className="container-fluid px-md-5   chat-container p-0 m-0" id="1">
                <div className="row paddin-lr">
                    <div className="col-sm-5 mt-3 ">
                        <ChatLeft contacts={contacts} {...contactProps} />
                    </div>
                    <div className="col-sm-7  d-none d-sm-block d-md-block d-xl-block d-lg-block p-0 main-chat ">
                        <ChatRight contacts={contacts} {...contactProps} />
                    </div>
                </div>
            </div >
        </>

    )
}
export default Chat

function ChatLeft(props) {
    const { contacts, activeContact, setActiveContact } = props

    const handleClickContact = (contact) => {
        setActiveContact(contact)

    }
    return (
        <>
            {
                contacts.map((contact, index) => {
                    return <>
                        <div className={activeContact.id === contact.id ? 'row chat-contact-box active pt-2' : 'row chat-contact-box  pt-2'} onClick={() => handleClickContact(contact)}>
                            <div className="col-2 my-auto">
                                <span className="d-flex">
                                    {activeContact.id === contact.id ?
                                        <span class="primary-color pt-1">&#x2022;&nbsp;</span>
                                        :
                                        <span class="primary-color pt-1">&nbsp;&nbsp;</span>
                                    }
                                    <LetterCircle letter={contact.name.charAt(0)} />
                                </span>
                            </div>

                            <div className="col-10">
                                <p className="booking-heading m-0">{contact.name} <span className="chat-time float-right">{contact.lastMsgTime}</span></p>
                                <p >{contact.lastMessage} </p>
                            </div>
                        </div>
                    </>

                })}

        </>

    )
}


function ChatRight(props) {
    const [showMessage, setshowMessage] = React.useState()
    const { contacts, activeContact, setActiveContact, sendMessage,
        setSendMessage } = props
    const currentUserId = '1';
    const handleOnChange = (e) => {
        setSendMessage(e.target.value)
        // send data to backend

    }

    const handleOnClick = (e) => {
        setshowMessage(sendMessage)
    }
    return (
        <>
            <div className="row chat-head-bg text-center mb-5">
                <div className="col text-center my-3 avtar"><LetterCircle letter={activeContact.name && activeContact.name.charAt(0)} /></div>
                <p className="user-name">{activeContact && activeContact.name}</p>
            </div>
            <div className="mh-100 position-relative mx-md-5  main-content">
                <div className="row">
                    {
                        activeContact.messages && activeContact.messages.map((message, index) => {
                            return <>
                                {message.userId !== currentUserId ?
                                    <div className="col-md-12">
                                        <p className="message-left message-content ">
                                            <span >{message.message} </span>

                                        </p>
                                    </div>
                                    :
                                    <>
                                        <div className="col-md-12">
                                            <p className="message-right message-content float-right">
                                                <span >{message.message} </span>
                                            </p>
                                        </div>

                                    </>
                                }


                            </>
                        })
                    }

                    {showMessage &&
                        <div className="col-md-12">
                            <p className="message-right message-content float-right">
                                <span >{showMessage} </span>
                            </p>
                        </div>
                    }
                </div>
                <div className="row position-absolute send-row w-100">
                    <div className="input-group mb-3 p-md-2">
                        <input type="text" className="form-control chat-input" placeholder="Message" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleOnChange} />
                        <button className="btn btn-outline-secondary send-btn" type="button" id="button-addon2" onClick={handleOnClick}>Send</button>
                    </div>
                </div>
            </div>

        </>

    )
}


