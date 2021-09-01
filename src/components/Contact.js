import { AiFillStar } from "react-icons/ai";

const Contact = ({ contact, clickMoreInfo }) => {
    return (
        <div className="contact">
            <div style={{ color: 'white' }} className="contact__usernameCircle">
                {contact.username}
            </div>
            <div className="contact__summary">
                <div className="contact__summary__name">
                    Name : {contact.name}
                </div>
            </div>
            <div className="contact__favourite">
                <AiFillStar style={{ fontSize: '50px', cursor: 'pointer' }} />
            </div>
            <button className="contact__moreInfo" onClick={() => clickMoreInfo(contact)}>
                MORE INFORMATION
            </button>
        </div >
    )
}

export default Contact