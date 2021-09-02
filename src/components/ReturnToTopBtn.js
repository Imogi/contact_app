import { FaChevronUp } from "react-icons/fa"

/*
    React component for Return to the top button.
*/

const ReturnToTopBtn = ({ click, scrolled }) => {

    return (
        <a className="scroll-to-top" onClick={click} style={{ display: scrolled ? 'block' : 'none' }}>
            <FaChevronUp />
        </a>
    )
}

export default ReturnToTopBtn