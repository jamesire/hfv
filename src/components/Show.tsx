import React from 'react';
import "../styles.scss";

interface IShowProps {
    venue: string;
    city: string;
    country: string;
    date: string;
    ticket_link: string;
}

const Show: React.FC<IShowProps> = ({ venue, city, country, date, ticket_link }) => {
  return (
    <div className='show'>
        {venue}, {city}, {country} | {date} | <a className='ticket' rel="noreferrer" target='_blank' href={ticket_link}>Tickets</a>
    </div>
  )
}

export default Show;