import { AiFillStar } from "react-icons/ai";

const Contact = ({ contact }) => {
    return (
        <div className="contact">
            <div style={{ color: 'white', fontSize: '99%' }} className="contact__usernameCircle">
                {contact.username}
            </div>
            <div className="contact__summary">
                <div className="contact__summary__name">
                    Name : {contact.name}
                </div>
            </div>
            <div className="contact__summary__favourite">
                <AiFillStar style={{ fontSize: '50px', color: 'blue', cursor: 'pointer' }} />
            </div>
            <button className="contact__summary__moreInfo">
                More Information
            </button>
        </div>
    )
}

export default Contact