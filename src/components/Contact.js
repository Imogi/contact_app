

const Contact = ({ contact, clickMoreInfo }) => {


    return (
        < div className="contact" >
            <div style={{ color: 'white' }} className="contact__usernameCircle">
                {contact.username.length > 10 ? contact.username.substring(0, 10) : contact.username}
            </div>
            <div className="contact__summary">
                <div className="contact__summary__name">
                    Name : {contact.name}
                </div>
            </div>
            <button className="contact__moreInfo" onClick={() => clickMoreInfo(contact)}>
                MORE INFORMATION
            </button>
        </div >
    )
}

export default Contact