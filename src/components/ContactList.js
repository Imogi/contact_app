import Contact from "./Contact"
import ContactListHeader from "./ContactListHeader"
import { useRef, useState } from "react"
import ReturnToTopBtn from "./ReturnToTopBtn"

/*
    React component for Contact List box.
*/

const ContactList = ({ contacts, clickMoreInfo, onSearch, clicked, toggle }) => {

    const myRef = useRef(null)

    const executeScrollToTop = () => {
        myRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const [scroll, setScroll] = useState(false)

    const scrollCheck = () => {
        if (myRef.current.scrollTop > 300) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    return (
        <div className="innerbox__contacts">
            <ContactListHeader onSearch={onSearch} onClick={clicked} toggle={toggle} />

            <div ref={myRef} className="innerbox_contactsList" onScroll={scrollCheck}>
                {contacts.map((contact) => (
                    <Contact key={contact.id}
                        contact={contact}
                        clickMoreInfo={clickMoreInfo}
                    />
                ))}
                <ReturnToTopBtn click={executeScrollToTop} scrolled={scroll} />
            </div>
        </div>
    )
}

export default ContactList