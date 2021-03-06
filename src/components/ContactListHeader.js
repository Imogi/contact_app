import { useEffect, useState } from "react"

/*
    React component for Contact List header.
    Contains search bar.
*/

const ContactListHeader = ({ onSearch }) => {

    const [search, setSearch] = useState("");

    const searchQuery = (event) =>
        setSearch(event.target.value)

    // Fired when onChange is called, 
    // fixes issue of lagging letter in 
    // search bar due to useState being an async fx
    useEffect(() => {
        onSearch({ search })
    }, [search])

    return (
        <div className="innerbox__contactsHeader" onChange={searchQuery}>
            <h3 style={{ fontSize: '2vmax' }}>Contact list</h3>
            <div className="searchContainer">
                <input type="text" id="searchContacts" placeholder=" "
                    value={search}></input>
                <label htmlFor="searchContacts">Search contacts</label>
            </div>

        </div >
    )
}

export default ContactListHeader