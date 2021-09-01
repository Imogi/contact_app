import Contact from "./Contact"
import ContactListHeader from "./ContactListHeader"

const ContactList = ({ contacts, clickMoreInfo, onSearch }) => {
    return (
        <div className="innerbox__contacts">
            <ContactListHeader onSearch={onSearch} />

            <div className="innerbox_contactsList">
                {contacts.map((contact) => (
                    <Contact key={contact.id} contact={contact} clickMoreInfo={clickMoreInfo} />
                ))}
            </div>
        </div>
    )
}

export default ContactList