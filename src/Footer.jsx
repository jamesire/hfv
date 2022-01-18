import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faFacebook, faBandcamp, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './styling.css';

export default function Footer() {
    return(
        <div className='footer'>
            <hr className="line" />
            <FontAwesomeIcon className='icon' icon={faSpotify}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon' icon={faFacebook}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon' icon={faInstagram}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon' icon={faBandcamp}></FontAwesomeIcon>
            <FontAwesomeIcon className='icon' icon={faTwitter}></FontAwesomeIcon>
        </div>
    )
}