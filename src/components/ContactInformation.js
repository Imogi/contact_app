import { HiOutlineMail } from "react-icons/hi"
import { BsPhone } from "react-icons/bs";
import CopyToClipBoard from "./CopyToClipboard"

const ContactInformation = ({ contact }) => {
    return (
        <div className="innerbox__information">

            <h3 className="innerbox__information__header">CONTACT INFORMATION</h3>

            <div className="innerbox__information__scrollableInfo">
                <div className="innerbox__information__scrollableInfo__div">
                    Username : {contact.username ? contact.username : "N/A"}
                </div>
                <div className="innerbox__information__scrollableInfo__div">
                    Name : {contact.name ? contact.name : "N/A"}
                </div>

                <div className="innerbox__information__scrollableInfo__div">
                    <HiOutlineMail /> : {contact.email ? contact.email : "N/A"}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {contact.id ?
                        <span className="clipboardCopyContainer" >
                            <CopyToClipBoard contact={contact} />
                            <span className="tooltip-clipboardCopy"> Copy to clipboard </span>
                        </span>
                        : ''}
                </div>
                <div className="innerbox__information__scrollableInfo__div">
                    <BsPhone /> : {contact.phone ? contact.phone : "N/A"}
                </div>
                <div className="innerbox__information__scrollableInfo__div">
                    Website : {contact.website ? contact.website : "N/A"}
                </div>

                <div className="innerbox__information__address">
                    <h3>Address</h3>
                    <div className="innerbox__information__scrollableInfo__div">
                        Street : {contact.address ? contact.address.street : "N/A"}
                    </div>
                    <div className="innerbox__information__scrollableInfo__div">
                        Suite : {contact.address ? contact.address.suite : "N/A"}
                    </div>
                    <div className="innerbox__information__scrollableInfo__div">
                        City : {contact.address ? contact.address.city : "N/A"}
                    </div>
                    <div className="innerbox__information__scrollableInfo__div">
                        Zipcode : {contact.address ? contact.address.zipcode : "N/A"}
                    </div>
                </div>

                <div className="innerbox__information__company">
                    <h3>Company</h3>
                    <div className="innerbox__information__scrollableInfo__div">
                        Name : {contact.company ? contact.company.name : "N/A"}
                    </div>
                    <div className="innerbox__information__scrollableInfo__div">
                        Catchphrase : {contact.company ? contact.company.catchPhrase : "N/A"}
                    </div>
                    <div className="innerbox__information__scrollableInfo__div">
                        bs : {contact.company ? contact.company.bs : "N/A"}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ContactInformation