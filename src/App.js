import { useState, useEffect } from 'react';

import Header from './components/Header'
import ContactList from './components/ContactList'
import ContactInformation from './components/ContactInformation'

function App() {

  // state for contact list
  const [contacts, setContacts] = useState([])
  // state for filtering
  const [filterContacts, setFilterContacts] = useState([])

  // useEffect hook for contact list state change
  useEffect(() => {
    const getContacts = async () => {
      const contactsFromJsonPlaceholder = await fetchContacts()
      // set contact list state
      setContacts(contactsFromJsonPlaceholder)
      // Set filter list state
      setFilterContacts(contactsFromJsonPlaceholder)
    }
    getContacts()
  }, [])

  // Fetch contacts
  const fetchContacts = async () => {
    const call = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await call.json()
    return data
  }


  const fetchSearch = (query) => {
    console.log(query.search)
    setFilterContacts(contacts.filter(contact => Object.keys(contact).some(key => fetchFilter(contact, key, query))));
  }

  // fetchSearch filter
  const fetchFilter = (contact, key, query) => {
    // query is empty string
    if (query === "") {
      return contact
    }
    // If the value is an object
    else if (typeof contact[key] === 'object') {
      for (var attrb in contact[key]) {
        // If the value is a string
        if (typeof contact[key][attrb] === 'string') {
          if (contact[key][attrb].toLowerCase().includes(query.search.toLowerCase())) {
            return contact
          }
        }
        // If the value is a number
        else if (typeof contact[key][attrb] === 'number') {
          if (contact[key][attrb] === query.search) {
            return contact
          }
        }
      }
    }
    // If the value is a number  i.e zipcode, phone number
    else if (typeof contact[key] === 'number') {
      if (contact[key] === query.search) {
        return contact
      }
    }
    // If the value is a string
    else {
      if (contact[key].toLowerCase().includes(query.search.toLowerCase())) {
        return contact
      }
    }
  }

  // State for Contact information (right box)
  const [contactInfo, setContactInfo] = useState([])
  // onClick for more information
  const clickMoreInfo = (contact) => {
    setContactInfo(contact)
  }

  return (
    <div className="entire__container">
      <Header />
      <div className="innerbox">
        <ContactList contacts={filterContacts} clickMoreInfo={clickMoreInfo} onSearch={fetchSearch} />
        <ContactInformation contact={contactInfo} />
      </div>
    </div>
  );
}

export default App;
