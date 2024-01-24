import React from 'react'
import LongLogo from '../assets/logos/HFV Logo_Alt Long_Reverse.svg'
import '../styles.scss'


export const Header: React.FC = () =>  {

  const calculateLeft = () => {
    if (window.screen.width < 600)
      return window.screen.width * .025;
    return 0;      
  }

  return (
    <div className='header'>
        <img src={LongLogo} className='logo' style={{right: calculateLeft()}} alt="" />
    </div>
  )
}

export default Header