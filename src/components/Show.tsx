import React, { useEffect, useState } from 'react';
import { parse } from 'date-fns';
import "../styles.scss";

interface IShowProps {
    venue: string;
    city: string;
    country: string;
    date: string;
    note: string;
    ticket_link: string;
}

const Show: React.FC<IShowProps> = ({ venue, city, country, date, note, ticket_link }) => {
  const [style, setStyle] = useState<string>('none');
  
  useEffect(() => {
    if(isGigOver())
      setStyle('line-through');
  })

  const isGigOver = () => {
    const gigDate = parse(date, "dd/MM/yy", new Date())
    const currentDate = new Date();
    return gigDate < currentDate;
  }

  return (
    <div className='show' style={{textDecoration: style}} >
        {venue}, {city}, {country} | {note} | {date} | <a className='ticket' rel="noreferrer" target={isGigOver() ? '' : '_blank'} href={isGigOver() ? 'javascript:void(0);' : ticket_link}>Tickets</a>
    </div>
  )
}

export default Show;