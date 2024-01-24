import React from 'react'
import '../styles.scss'

interface MerchItemProps {
    name: string;
    img: string;
    link: string;
}

const MerchItem: React.FC<MerchItemProps> = ({name, img, link}) => {
  return (
    <div className='merch-item'>
        <a rel="noreferrer" target="_blank" href={link}><img src={img} /></a>
        <br />
        <p><a rel="noreferrer" target="_blank" href={link}>{name}</a></p>
    </div>
  )
}

export default MerchItem