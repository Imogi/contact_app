

const ContactListHeader = ({ contacts }) => {
    return (
        <div className="innerbox__contactsHeader">
            <h3>Contact list</h3>
            <label htmlFor="searchContacts">Search</label>
            <input type="text" className="searchContacts"></input>
            <button>Sort</button>
        </div>
    )
}

export default ContactListHeader