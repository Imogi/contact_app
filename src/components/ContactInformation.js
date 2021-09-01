const ContactInformation = ({ contact }) => {
    return (
        <div className="innerbox__information">

            <h3 className="innerbox__information__header">CONTACT INFORMATION</h3>

            <div className="innerbox__information__scrollableInfo">
                <div >
                    username : {contact.username ? contact.username : "N/A"}
                </div>
                <div >
                    name : {contact.name ? contact.name : "N/A"}
                </div>

                <div >
                    email : {contact.email ? contact.email : "N/A"}
                </div>
                <div >
                    phone : {contact.phone ? contact.phone : "N/A"}
                </div>
                <div >
                    website : {contact.website ? contact.website : "N/A"}
                </div>

                <div className="innerbox__information__address">
                    <h3>Address</h3>
                    <div>
                        street : {contact.address ? contact.address.street : "N/A"}
                    </div>
                    <div>
                        suite : {contact.address ? contact.address.suite : "N/A"}
                    </div>
                    <div>
                        city : {contact.address ? contact.address.city : "N/A"}
                    </div>
                    <div>
                        zipcode : {contact.address ? contact.address.zipcode : "N/A"}
                    </div>
                </div>

                <div className="innerbox__information__company">
                    <h3>Company</h3>
                    <div>
                        name : {contact.company ? contact.company.name : "N/A"}
                    </div>
                    <div>
                        catchphrase : {contact.company ? contact.company.catchPhrase : "N/A"}
                    </div>
                    <div>
                        bs : {contact.company ? contact.company.bs : "N/A"}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ContactInformation