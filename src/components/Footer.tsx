import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faFacebook, faBandcamp, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles.scss'

const SPOTIFY_URL = "https://open.spotify.com/artist/1WrInO6UBuYHZnE9XO3NuM?si=Nh7uLxq1Tc-Ms6PGdSthYg";
const FACEBOOK_URL = "https://www.facebook.com/HisFathersVoiceLK/";
const INSTGRAM_URL = "https://www.instagram.com/hfv_lk";
const BANDCAMP_URL = "https://hisfathersvoice.bandcamp.com/";
const TWITTER_URL = "https://www.twitter.com/hfv_lk";

export const Footer: React.FC = () =>  {
  return (
    <div className='footer'>
        <a rel="noreferrer" target='_blank' href={SPOTIFY_URL}><FontAwesomeIcon className='icon' icon={faSpotify}></FontAwesomeIcon></a>
        <a rel="noreferrer" target='_blank' href={FACEBOOK_URL}><FontAwesomeIcon className='icon' icon={faFacebook}></FontAwesomeIcon></a>
        <a rel="noreferrer" target='_blank' href={INSTGRAM_URL}><FontAwesomeIcon className='icon' icon={faInstagram}></FontAwesomeIcon></a>
        <a rel="noreferrer" target='_blank' href={BANDCAMP_URL}><FontAwesomeIcon className='icon' icon={faBandcamp}></FontAwesomeIcon></a>
        <a rel="noreferrer" target='_blank' href={TWITTER_URL}><FontAwesomeIcon className='icon' icon={faTwitter}></FontAwesomeIcon></a>
    </div>
  )
}

export default Footer