import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faFacebook, faBandcamp, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './styling.css';

export default function Footer() {
    return(
        <div className='footer'>
            <hr className="line" />
            <a rel="noreferrer" target='_blank' href={process.env.REACT_APP_SPOTIFY}><FontAwesomeIcon className='icon' icon={faSpotify}></FontAwesomeIcon></a>
            <a rel="noreferrer" target='_blank' href={process.env.REACT_APP_FACEBOOK}><FontAwesomeIcon className='icon' icon={faFacebook}></FontAwesomeIcon></a>
            <a rel="noreferrer" target='_blank' href={process.env.REACT_APP_INSTAGRAM}><FontAwesomeIcon className='icon' icon={faInstagram}></FontAwesomeIcon></a>
            <a rel="noreferrer" target='_blank' href={process.env.REACT_APP_BANDCAMP}><FontAwesomeIcon className='icon' icon={faBandcamp}></FontAwesomeIcon></a>
            <a rel="noreferrer" target='_blank' href={process.env.REACT_APP_TWITTER}><FontAwesomeIcon className='icon' icon={faTwitter}></FontAwesomeIcon></a>
        </div>
    )
}