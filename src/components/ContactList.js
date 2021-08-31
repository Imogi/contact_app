import Contact from "./Contact"
import ContactListHeader from "./ContactListHeader"

const ContactList = ({ contacts }) => {
    return (
        <div className="innerbox__contacts">
            <ContactListHeader />

            <div className="innerbox_contactsList">
                {contacts.map((contact) => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </div>
        </div>
    )
}

export default ContactList