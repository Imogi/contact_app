import { FiCopy } from "react-icons/fi"

const CopyToClipBoard = ({ contact }) => {

    const copy = () => {
        // Copy to users clipboard
        navigator.clipboard.writeText(contact.email)
        document.querySelector('.popupModal').style.display = 'flex'
        setTimeout(() => {
            document.querySelector('.popupModal').style.display = 'none'
        }, 2500);

    }

    return (
        <a className="copyToClipBoard" onClick={copy}>
            <FiCopy />
        </a>
    )
}

export default CopyToClipBoard